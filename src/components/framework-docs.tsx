import * as React from "react"

import { getDoc, getDocComponent } from "@/lib/docs"

import { Mdx } from "./mdx-components"

interface FrameworkDocsProps extends React.HTMLAttributes<HTMLDivElement> {
  data: string
}

export function FrameworkDocs({ data }: FrameworkDocsProps) {
  const slug = `installation/${data}`

  if (!getDoc(slug)) {
    return null
  }

  return (
    <React.Suspense>
      <Mdx content={getDocComponent(slug)} />
    </React.Suspense>
  )
}
