import { ArchivedBanner } from "@/components/archived-banner"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Link } from "@/registry/new-york/ui/link"

/**
 * Rendered both by the `/404` route (prerendered to `404.html`) and as the
 * router's not-found component, so the static page hydrates cleanly at any URL.
 */
export function NotFound() {
  return (
    <>
      <ArchivedBanner />
      <SiteHeader />
      <main className="container flex flex-1 flex-col items-center justify-center gap-4 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Page not found</h1>
        <p className="text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="flex gap-2">
          <Link variant="outline" href="/">
            Home
          </Link>
          <Link variant="outline" href="/docs">
            Documentation
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
