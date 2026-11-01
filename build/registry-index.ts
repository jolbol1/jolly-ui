import fs from "node:fs"
import path from "node:path"

export const STYLES = ["default", "new-york"] as const
export type StyleName = (typeof STYLES)[number]

export interface RegistryIndexEntry {
  name: string
  type: string
  registryDependencies: string[]
  files: string[]
  source: string
}

/**
 * Reads the file metadata out of the generated `src/__registry__/index.tsx`.
 *
 * The index itself can't be imported at build time (it lazily imports every
 * component through the `@/` alias), so we parse the parts we need instead.
 */
export function readRegistryIndex(
  root = process.cwd()
): Record<StyleName, Record<string, RegistryIndexEntry>> {
  const text = fs.readFileSync(
    path.join(root, "src/__registry__/index.tsx"),
    "utf8"
  )

  const index = {} as Record<StyleName, Record<string, RegistryIndexEntry>>
  const entryRegex =
    /\n {4}"[^"]+": \{\n {6}name: "([^"]+)",\n {6}type: "([^"]+)",\n {6}registryDependencies: (undefined|\[[^\]]*\]),\n {6}files: \[([^\]]*)\],[\s\S]*?\n {6}source: "([^"]*)",/g

  for (const style of STYLES) {
    const start = text.indexOf(`"${style}": {`)
    const nextStarts = STYLES.filter((s) => s !== style)
      .map((s) => text.indexOf(`"${s}": {`))
      .filter((i) => i > start)
    const end = nextStarts.length ? Math.min(...nextStarts) : text.length
    const section = text.slice(start, end)

    index[style] = {}
    for (const match of section.matchAll(entryRegex)) {
      const [, name, type, deps, files, source] = match
      index[style][name] = {
        name,
        type,
        registryDependencies: deps === "undefined" ? [] : JSON.parse(deps),
        files: JSON.parse(`[${files}]`),
        source,
      }
    }
  }

  return index
}
