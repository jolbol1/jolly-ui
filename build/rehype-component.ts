import fs from "node:fs"
import path from "node:path"
import { u } from "unist-builder"
import { visit } from "unist-util-visit"

import { readRegistryIndex, STYLES } from "./registry-index.ts"
import type { UnistNode, UnistTree } from "./unist.ts"

function readSource(src: string, style: string) {
  const source = fs.readFileSync(path.join(process.cwd(), src), "utf8")

  // Replace imports.
  // TODO: Use @swc/core and a visitor to replace this.
  // For now a simple regex should do.
  return source
    .replaceAll(`@/registry/${style}/`, "@/components/")
    .replaceAll("export default", "export")
}

function codeElement(source: string, properties: Record<string, unknown>) {
  return u("element", {
    tagName: "pre",
    properties,
    children: [
      u("element", {
        tagName: "code",
        properties: {
          className: ["language-tsx"],
        },
        children: [
          {
            type: "text",
            value: source,
          },
        ],
      }),
    ],
  }) as UnistNode
}

export function rehypeComponent() {
  const index = readRegistryIndex()

  return async (tree: UnistTree) => {
    visit(tree, (node: UnistNode) => {
      // src prop overrides both name and fileName.
      const srcPath = getNodeAttributeByName(node, "src")?.value as
        string | undefined

      if (node.name === "ComponentSource") {
        const name = getNodeAttributeByName(node, "name")?.value as string
        const fileName = getNodeAttributeByName(node, "fileName")?.value as
          string | undefined

        if (!name && !srcPath) {
          return
        }

        try {
          for (const style of STYLES) {
            let src: string

            if (srcPath) {
              src = srcPath
            } else {
              const component = index[style][name]
              src = fileName
                ? component.files.find((file: string) => {
                    return (
                      file.endsWith(`${fileName}.tsx`) ||
                      file.endsWith(`${fileName}.ts`)
                    )
                  }) || component.files[0]
                : component.files[0]
            }

            // Add code as children so that rehype can take over at build time.
            node.children?.push(
              codeElement(readSource(src, style), {
                __src__: src,
                __style__: style,
              })
            )
          }
        } catch (error) {
          console.error(error)
        }
      }

      if (node.name === "ComponentPreview") {
        const name = getNodeAttributeByName(node, "name")?.value as string

        if (!name) {
          return
        }

        try {
          for (const style of STYLES) {
            if (!index[style][name]) {
              console.warn(
                `[mdx] <ComponentPreview name="${name}" /> isn't in the ${style} registry`
              )
              continue
            }
            const src = index[style][name].files[0]

            // Add code as children so that rehype can take over at build time.
            node.children?.push(
              codeElement(readSource(src, style), {
                __src__: src,
              })
            )
          }
        } catch (error) {
          console.error(error)
        }
      }
    })
  }
}

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name)
}
