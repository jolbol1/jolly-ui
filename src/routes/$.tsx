import { createFileRoute } from "@tanstack/react-router"

import { seo } from "@/lib/seo"
import { NotFound } from "@/components/not-found"

// Catch-all. Prerendered at `/404` to `404.html`, which Cloudflare serves for
// unknown paths; since it matches any URL, it hydrates cleanly wherever it's served.
export const Route = createFileRoute("/$")({
  head: () => ({ meta: seo({ title: "Page not found" }) }),
  component: NotFound,
})
