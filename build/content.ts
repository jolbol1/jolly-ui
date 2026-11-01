import fs from "node:fs"
import path from "node:path"
import GithubSlugger from "github-slugger"
import type { Root, RootContent } from "mdast"
import { toString } from "mdast-util-to-string"
import { toc } from "mdast-util-toc"
import { remark } from "remark"
import { codeToHtml } from "shiki"
import { Project, ScriptKind, SourceFile, SyntaxKind } from "ts-morph"
import { visit } from "unist-util-visit"
import type { Plugin } from "vite"
import { parse as parseYaml } from "yaml"

import { readRegistryIndex, STYLES } from "./registry-index.ts"

const CONTENT_DIR = "src/content/docs"

const VIRTUAL_DOCS = "virtual:docs"
const VIRTUAL_SEARCH = "virtual:search-index"
const VIRTUAL_BLOCKS = "virtual:blocks"
const VIRTUAL_BLOCK_CONTAINERS = "virtual:block-containers"
const VIRTUAL_IDS = [
  VIRTUAL_DOCS,
  VIRTUAL_SEARCH,
  VIRTUAL_BLOCKS,
  VIRTUAL_BLOCK_CONTAINERS,
]

export interface TocItem {
  title: string
  url: string
  items?: TocItem[]
}

export interface DocMeta {
  /** e.g. `/docs/components/button` */
  slug: string
  /** e.g. `components/button` */
  slugAsParams: string
  /** Path to the source file relative to the project root, e.g. `/src/content/docs/index.mdx` */
  file: string
  title: string
  description: string
  published: boolean
  featured: boolean
  component: boolean
  toc: boolean
  links?: { doc?: string; api?: string }
  tableOfContents: { items?: TocItem[] }
}

export interface SearchEntry {
  id: string
  url: string
  title: string
  /** The title split into words, so "date picker" finds "DatePicker". */
  keywords: string
  heading?: string
  text: string
}

function walk(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    return entry.isDirectory()
      ? walk(full)
      : full.endsWith(".mdx")
        ? [full]
        : []
  })
}

function splitFrontmatter(raw: string) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/)
  if (!match) return { data: {} as Record<string, unknown>, body: raw }
  return {
    data: (parseYaml(match[1]) ?? {}) as Record<string, unknown>,
    body: raw.slice(match[0].length),
  }
}

// Ported from the old `src/lib/toc.ts`.
const textTypes = ["text", "emphasis", "strong", "inlineCode"]

function flattenNode(node: any) {
  const p: string[] = []
  visit(node, (node: any) => {
    if (!textTypes.includes(node.type)) return
    p.push(node.value)
  })
  return p.join(``)
}

function getItems(node: any, current: any): any {
  if (!node) {
    return {}
  }

  if (node.type === "paragraph") {
    visit(node, (item: any) => {
      if (item.type === "link") {
        current.url = item.url
        current.title = flattenNode(node)
      }

      if (item.type === "text") {
        current.title = flattenNode(node)
      }
    })

    return current
  }

  if (node.type === "list") {
    current.items = node.children.map((i: any) => getItems(i, {}))

    return current
  } else if (node.type === "listItem") {
    const heading = getItems(node.children[0], {})

    if (node.children.length > 1) {
      getItems(node.children[1], heading)
    }

    return heading
  }

  return {}
}

function buildSearchEntries(doc: DocMeta, tree: Root): SearchEntry[] {
  const slugger = new GithubSlugger()
  const keywords = doc.title.replace(/([a-z])([A-Z])/g, "$1 $2")
  const entries: SearchEntry[] = [
    {
      id: doc.slug,
      url: doc.slug,
      title: doc.title,
      keywords,
      text: doc.description,
    },
  ]
  let current: SearchEntry | null = null
  const flush = () => {
    if (current) {
      current.text = current.text.replace(/\s+/g, " ").trim().slice(0, 300)
      entries.push(current)
    }
  }

  for (const node of tree.children as RootContent[]) {
    if (node.type === "heading") {
      const heading = toString(node)
      const anchor = slugger.slug(heading)
      if (node.depth <= 3) {
        flush()
        current = {
          id: `${doc.slug}#${anchor}`,
          url: `${doc.slug}#${anchor}`,
          title: doc.title,
          keywords,
          heading,
          text: "",
        }
      }
      continue
    }
    if (
      current &&
      (node.type === "paragraph" ||
        node.type === "list" ||
        node.type === "blockquote" ||
        node.type === "table")
    ) {
      current.text += ` ${toString(node)}`
    }
  }
  flush()

  return entries
}

function loadDocs(root: string) {
  const docs: DocMeta[] = []
  const search: SearchEntry[] = []

  for (const file of walk(path.join(root, CONTENT_DIR)).sort()) {
    const { data, body } = splitFrontmatter(fs.readFileSync(file, "utf8"))
    const flattened = path
      .relative(path.join(root, CONTENT_DIR), file)
      .replace(/\.mdx$/, "")
      .split(path.sep)
      .filter(
        (segment, i, all) => !(segment === "index" && i === all.length - 1)
      )
      .join("/")

    const tree = remark().parse(body) as Root
    const doc: DocMeta = {
      slug: flattened ? `/docs/${flattened}` : "/docs",
      slugAsParams: flattened,
      file: `/${path.relative(root, file).split(path.sep).join("/")}`,
      title: String(data.title ?? ""),
      description: String(data.description ?? ""),
      published: data.published !== false,
      featured: data.featured === true,
      component: data.component === true,
      toc: data.toc !== false,
      links: data.links as DocMeta["links"],
      tableOfContents: getItems(toc(tree).map, {}),
    }

    if (!doc.published) continue
    docs.push(doc)
    search.push(...buildSearchEntries(doc, tree))
  }

  return { docs, search }
}

// Ported from the old `src/lib/blocks.ts`, which ran ts-morph and shiki on
// every request. Now it runs once at build time.
const project = new Project({ compilerOptions: {} })

function extractVariable(sourceFile: SourceFile, name: string) {
  const variable = sourceFile.getVariableDeclaration(name)
  if (!variable) {
    return null
  }

  const value = variable
    .getInitializerIfKindOrThrow(SyntaxKind.StringLiteral)
    .getLiteralValue()

  variable.remove()

  return value
}

async function loadBlocks(root: string) {
  const index = readRegistryIndex(root)
  const blocks = []

  for (const style of STYLES) {
    for (const entry of Object.values(index[style])) {
      if (entry.type !== "registry:block") continue

      const raw = entry.source
        ? fs.readFileSync(path.join(root, entry.source), "utf8")
        : ""
      const sourceFile = project.createSourceFile(
        `/__blocks__/${style}/${entry.name}.tsx`,
        raw,
        { scriptKind: ScriptKind.TSX, overwrite: true }
      )

      // Extract meta.
      const height = extractVariable(sourceFile, "iframeHeight")
      const className = extractVariable(sourceFile, "containerClassName")

      // Format the code.
      const code = sourceFile
        .getText()
        .replaceAll(`@/registry/${style}/shadcn/`, "@/components/")
        .replaceAll(`@/registry/${style}/`, "@/components/")
        .replaceAll("export default", "export")

      blocks.push({
        name: entry.name,
        style,
        registryDependencies: entry.registryDependencies,
        container: { height, className },
        code,
        highlightedCode: code
          ? await codeToHtml(code, {
              lang: "tsx",
              theme: "github-dark-default",
              transformers: [
                {
                  code(node) {
                    node.properties["data-line-numbers"] = ""
                  },
                },
              ],
            })
          : "",
      })
    }
  }

  return blocks
}

/** Every URL that should be written out as static HTML. */
export async function getPrerenderPaths(root = process.cwd()) {
  const { docs } = loadDocs(root)
  const blocks = await loadBlocks(root)
  return [
    "/",
    "/blocks",
    ...docs.map((doc) => doc.slug),
    ...blocks.map((block) => `/blocks/${block.style}/${block.name}`),
  ]
}

/**
 * Generates the build-time data modules the app imports:
 *
 * - `virtual:docs`: doc metadata + table of contents (replaces contentlayer's `allDocs`)
 * - `virtual:search-index`: the docs search index (replaces Algolia DocSearch)
 * - `virtual:blocks`: block source + highlighted code
 * - `virtual:block-containers`: just the iframe container options, for the block pages
 */
export function contentPlugin(): Plugin {
  let root = process.cwd()

  return {
    name: "jolly-content",
    enforce: "pre",
    configResolved(config) {
      root = config.root
    },
    resolveId(id) {
      if (VIRTUAL_IDS.includes(id)) return `\0${id}`
    },
    async load(id) {
      if (!id.startsWith("\0virtual:")) return
      const name = id.slice(1)

      if (name === VIRTUAL_DOCS || name === VIRTUAL_SEARCH) {
        for (const file of walk(path.join(root, CONTENT_DIR))) {
          this.addWatchFile(file)
        }
        const { docs, search } = loadDocs(root)
        return name === VIRTUAL_DOCS
          ? `export const docs = ${JSON.stringify(docs)}`
          : `export default ${JSON.stringify(search)}`
      }

      if (name === VIRTUAL_BLOCKS || name === VIRTUAL_BLOCK_CONTAINERS) {
        this.addWatchFile(path.join(root, "src/__registry__/index.tsx"))
        const blocks = await loadBlocks(root)
        if (name === VIRTUAL_BLOCKS) {
          return `export const blocks = ${JSON.stringify(blocks)}`
        }
        const containers = Object.fromEntries(
          blocks.map((block) => [
            `${block.style}/${block.name}`,
            block.container,
          ])
        )
        return `export const containers = ${JSON.stringify(containers)}`
      }
    },
    handleHotUpdate({ file, server }) {
      if (!file.startsWith(path.join(root, CONTENT_DIR))) return
      for (const id of [VIRTUAL_DOCS, VIRTUAL_SEARCH]) {
        for (const environment of Object.values(server.environments)) {
          const mod = environment.moduleGraph.getModuleById(`\0${id}`)
          if (mod) environment.moduleGraph.invalidateModule(mod)
        }
      }
    },
  }
}
