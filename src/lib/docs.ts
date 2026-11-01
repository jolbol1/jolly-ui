import * as React from "react"
import { docs } from "virtual:docs"

export type { DocMeta as Doc } from "../../build/content"

export const allDocs = docs

type MdxModule = typeof import("*.mdx")

// Each doc is its own chunk, only loaded when that page is visited.
const modules = import.meta.glob<MdxModule>("/src/content/docs/**/*.mdx")

export function getDoc(slugAsParams: string) {
  return allDocs.find((doc) => doc.slugAsParams === slugAsParams)
}

export function loadDoc(slugAsParams: string) {
  const doc = getDoc(slugAsParams)
  return doc ? modules[doc.file]() : undefined
}

const lazyCache = new Map<
  string,
  React.LazyExoticComponent<MdxModule["default"]>
>()

/**
 * A lazily loaded MDX component for a doc. On the server React waits for it
 * before finishing the prerendered HTML; on the client it hydrates once the
 * chunk arrives.
 */
export function getDocComponent(slugAsParams: string) {
  let Component = lazyCache.get(slugAsParams)
  if (!Component) {
    Component = React.lazy(async () => {
      const mod = await loadDoc(slugAsParams)
      if (!mod) throw new Error(`Doc not found: ${slugAsParams}`)
      return mod
    })
    lazyCache.set(slugAsParams, Component)
  }
  return Component
}
