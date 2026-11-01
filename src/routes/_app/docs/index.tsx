import { createFileRoute } from "@tanstack/react-router"

import { docHead, DocPage, loadDocRoute } from "@/components/doc-page"

export const Route = createFileRoute("/_app/docs/")({
  loader: () => loadDocRoute(""),
  head: ({ loaderData }) => docHead(loaderData?.slug),
  component: () => <DocPage slug={Route.useLoaderData().slug} />,
})
