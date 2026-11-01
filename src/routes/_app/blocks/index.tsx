import { createFileRoute } from "@tanstack/react-router"

import { seo } from "@/lib/seo"
import { Announcement } from "@/components/announcement"
import { BlockPreview } from "@/components/block-preview"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Link } from "@/registry/new-york/ui/link"

export const Route = createFileRoute("/_app/blocks/")({
  loader: async () => {
    const { blocks } = await import("virtual:blocks")
    return {
      blocks: blocks.filter(
        (block) =>
          !block.name.startsWith("chart-") &&
          !block.name.startsWith("sidebar-01") &&
          !block.name.startsWith("login-01")
      ),
    }
  },
  head: () => ({
    meta: seo({
      title: "Building Blocks.",
      description:
        "Beautifully designed. Copy and paste into your apps. Open Source.",
      path: "/blocks",
    }),
  }),
  component: BlocksPage,
})

function BlocksPage() {
  const { blocks } = Route.useLoaderData()
  const names = [...new Set(blocks.map((block) => block.name))]

  return (
    <div className="container relative">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Building Blocks for the Web</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed. Copy and paste into your apps. Open Source.
        </PageHeaderDescription>
        <PageActions>
          <Link variant="default" size="sm" href="#blocks">
            Browse Blocks
          </Link>
        </PageActions>
      </PageHeader>
      <section id="blocks" className="scroll-mt-24">
        <div className="gap-3 md:flex md:flex-row-reverse md:items-start">
          <div className="grid flex-1 gap-24 lg:gap-48">
            {names.map((name) =>
              blocks
                .filter((block) => block.name === name)
                .map((block) => (
                  <BlockPreview
                    key={`${block.style}-${block.name}`}
                    block={block}
                  />
                ))
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
