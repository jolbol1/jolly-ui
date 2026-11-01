import * as React from "react"
import { Index } from "@/__registry__"
import { createFileRoute, notFound } from "@tanstack/react-router"
import { containers } from "virtual:block-containers"

import { seo } from "@/lib/seo"
import { cn } from "@/lib/utils"

// The bare block, rendered inside the iframe on /blocks.
export const Route = createFileRoute("/blocks/$style/$name")({
  loader: ({ params: { style, name } }) => {
    if (!Index[style]?.[name] || !(`${style}/${name}` in containers)) {
      throw notFound()
    }
    return { style, name }
  },
  head: ({ params }) => ({
    meta: seo({
      title: params.name,
      path: `/blocks/${params.style}/${params.name}`,
      type: "article",
    }),
  }),
  component: BlockPage,
})

function BlockPage() {
  const { style, name } = Route.useLoaderData()
  const Component = Index[style][name].component
  const container = containers[`${style}/${name}`]

  return (
    <div className={cn("themes-wrapper bg-background", container?.className)}>
      <React.Suspense>
        <Component />
      </React.Suspense>
    </div>
  )
}
