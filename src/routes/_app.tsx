import { createFileRoute, Outlet } from "@tanstack/react-router"

import { ArchivedBanner } from "@/components/archived-banner"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const Route = createFileRoute("/_app")({
  component: AppLayout,
})

function AppLayout() {
  return (
    <>
      <ArchivedBanner />
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  )
}
