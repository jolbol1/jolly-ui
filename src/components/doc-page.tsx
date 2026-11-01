import * as React from "react"
import { notFound } from "@tanstack/react-router"
import { ExternalLinkIcon } from "lucide-react"

import { getDoc, getDocComponent, loadDoc } from "@/lib/docs"
import { seo } from "@/lib/seo"
import { cn } from "@/lib/utils"
import { badgeVariants } from "@/components/badge"
import { Icons } from "@/components/icons"
import { Mdx } from "@/components/mdx-components"
import { DocsPager } from "@/components/pager"
import { DashboardTableOfContents } from "@/components/toc"
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  Breadcrumbs,
  BreadcrumbSeparator,
} from "@/registry/new-york/ui/breadcrumbs"

export async function loadDocRoute(slug: string) {
  if (!getDoc(slug)) {
    throw notFound()
  }
  // Warm the doc's chunk so client-side navigation doesn't flash a fallback.
  await loadDoc(slug)
  return { slug }
}

export function docHead(slug: string | undefined) {
  const doc = slug !== undefined ? getDoc(slug) : undefined
  if (!doc) return {}
  return {
    meta: seo({
      title: doc.title,
      description: doc.description,
      path: doc.slug,
      type: "article",
    }),
  }
}

export function DocPage({ slug }: { slug: string }) {
  const doc = getDoc(slug)!
  const Content = getDocComponent(slug)

  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <Breadcrumbs className="mb-4">
          <BreadcrumbItem>
            <BreadcrumbLink className="capitalize" href="/docs">
              Docs
            </BreadcrumbLink>
            <BreadcrumbSeparator />
          </BreadcrumbItem>
          {doc.slugAsParams
            .split("/")
            .slice(0, -1)
            .map((link) => {
              return (
                <BreadcrumbItem key={link}>
                  <BreadcrumbLink className="capitalize" href={`/docs/${link}`}>
                    {link}
                  </BreadcrumbLink>
                  <BreadcrumbSeparator />
                </BreadcrumbItem>
              )
            })}

          <BreadcrumbItem>
            <BreadcrumbPage>{doc.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </Breadcrumbs>
        <div className="space-y-2">
          <h1 className={cn("scroll-m-20 text-4xl font-bold tracking-tight")}>
            {doc.title}
          </h1>
          {doc.description && (
            <p className="text-balance text-lg text-muted-foreground">
              {doc.description}
            </p>
          )}
        </div>
        {doc.links ? (
          <div className="flex items-center space-x-2 pt-4">
            {doc.links?.doc && (
              <a
                href={doc.links.doc}
                target="_blank"
                rel="noreferrer"
                className={cn(badgeVariants({ variant: "secondary" }), "gap-1")}
              >
                <Icons.aria className="size-3" />
                Docs
                <ExternalLinkIcon className="size-3" />
              </a>
            )}
            {doc.links?.api && (
              <a
                href={doc.links.api}
                target="_blank"
                rel="noreferrer"
                className={cn(badgeVariants({ variant: "secondary" }), "gap-1")}
              >
                API Reference
                <ExternalLinkIcon className="size-3" />
              </a>
            )}
          </div>
        ) : null}
        <div className="pb-12 pt-8">
          <React.Suspense>
            <Mdx content={Content} />
          </React.Suspense>
        </div>
        <DocsPager doc={doc} />
      </div>
      {doc.toc && (
        <div className="hidden text-sm xl:block">
          <div className="sticky top-16 -mt-10 pt-4">
            <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12">
              <DashboardTableOfContents toc={doc.tableOfContents} />
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
