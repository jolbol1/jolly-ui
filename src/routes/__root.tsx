import * as React from "react"
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router"
import { ThemeProvider } from "next-themes"

import { seo } from "@/lib/seo"
import { useThemeStore } from "@/lib/use-theme-store"
import { AriaProvider } from "@/components/aria-provider"
import { NotFound } from "@/components/not-found"
import appCss from "@/styles/globals.css?url"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "keywords",
        content:
          "shadcn-aria, React, Tailwind CSS, React Aria Components, shadcn/ui",
      },
      { name: "author", content: "jolbol1" },
      ...seo({}),
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "shortcut icon", href: "/favicon-16x16.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
})

function RootComponent() {
  // The theme store is persisted to localStorage. Rehydrate after mount so the
  // first client render matches the prerendered HTML.
  React.useEffect(() => {
    useThemeStore.persist.rehydrate()
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AriaProvider>
            <div className="relative flex min-h-screen flex-col bg-background">
              <Outlet />
            </div>
          </AriaProvider>
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}
