import { createFileRoute, redirect } from "@tanstack/react-router"

import { docHead, DocPage, loadDocRoute } from "@/components/doc-page"

export const Route = createFileRoute("/_app/docs/$")({
  beforeLoad: ({ params }) => {
    if (params._splat === "components") {
      throw redirect({ href: "/docs/components/breadcrumbs" })
    }
  },
  loader: ({ params }) => loadDocRoute(params._splat ?? ""),
  head: ({ loaderData }) => docHead(loaderData?.slug),
  component: () => <DocPage slug={Route.useLoaderData().slug} />,
})
