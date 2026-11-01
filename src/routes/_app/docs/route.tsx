import { createFileRoute, Outlet } from "@tanstack/react-router"

import { docsConfig } from "@/config/docs"
import { DocsSidebarNav } from "@/components/sidebar-nav"

export const Route = createFileRoute("/_app/docs")({
  component: DocsLayout,
})

function DocsLayout() {
  return (
    <div className="border-b">
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto md:sticky md:block">
          <DocsSidebarNav items={docsConfig.sidebarNav} />
        </aside>
        <Outlet />
      </div>
    </div>
  )
}
