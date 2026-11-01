import type { Options } from "@mdx-js/rollup"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import { codeImport } from "remark-code-import"
import remarkFrontmatter from "remark-frontmatter"
import remarkGfm from "remark-gfm"
import remarkMdxFrontmatter from "remark-mdx-frontmatter"
import { visit } from "unist-util-visit"

import { rehypeComponent } from "./rehype-component.ts"

// The node shapes here are loose hast, plus the private `__*__` fields we
// thread from the raw `<pre>` through rehype-pretty-code's `<figure>` output.
type AnyNode = any

/**
 * The MDX pipeline that used to live in `contentlayer.config.js`. Docs are
 * compiled to plain ES modules at build time, so nothing is evaluated at
 * runtime (and nothing needs a server).
 */
export const mdxOptions: Options = {
  remarkPlugins: [
    remarkFrontmatter,
    [remarkMdxFrontmatter, { name: "frontmatter" }],
    remarkGfm,
    codeImport,
  ],
  rehypePlugins: [
    rehypeSlug,
    rehypeComponent,
    () => (tree) => {
      visit(tree, (node: AnyNode) => {
        if (node?.type === "element" && node?.tagName === "pre") {
          const [codeEl] = node.children
          if (codeEl.tagName !== "code") {
            return
          }

          if (codeEl.data?.meta) {
            // Extract event from meta and pass it down the tree.
            const regex = /event="([^"]*)"/
            const match = codeEl.data?.meta.match(regex)
            if (match) {
              node.__event__ = match ? match[1] : null
              codeEl.data.meta = codeEl.data.meta.replace(regex, "")
            }
          }

          node.__rawString__ = codeEl.children?.[0].value
          node.__src__ = node.properties?.__src__
          node.__style__ = node.properties?.__style__
        }
      })
    },
    [
      rehypePrettyCode,
      {
        theme: "github-dark-default",
      },
    ],
    () => (tree) => {
      visit(tree, (node: AnyNode) => {
        if (node?.type === "element" && node?.tagName === "figure") {
          if (!("data-rehype-pretty-code-figure" in node.properties)) {
            return
          }

          const preElement = node.children.at(-1)
          if (preElement.tagName !== "pre") {
            return
          }

          preElement.properties["__withMeta__"] =
            node.children.at(0).tagName === "div"
          preElement.properties["__rawString__"] = node.__rawString__

          if (node.__src__) {
            preElement.properties["__src__"] = node.__src__
          }

          if (node.__event__) {
            preElement.properties["__event__"] = node.__event__
          }

          if (node.__style__) {
            preElement.properties["__style__"] = node.__style__
          }
        }
      })
    },
    [
      rehypeAutolinkHeadings,
      {
        properties: {
          className: ["subheading-anchor"],
          ariaLabel: "Link to section",
        },
      },
    ],
  ],
}
