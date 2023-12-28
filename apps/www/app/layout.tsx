import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import {
  fontInter,
  fontJakarta,
  fontOutfit,
  fontRaleway,
  fontSans,
} from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Analytics } from "@/components/analytics"
import { ThemeProvider } from "@/components/providers"
import {
  Toaster as DefaultToaster,
  Toaster as NewYorkToaster,
} from "@/components/radix/toaster"
import { RouterProvider } from "@/components/router-provider"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "react-aria-components",
    "shadcn-ui",
  ],
  authors: [
    { name: "jolbol1", url: "https://jamesshopland.com" },
    {
      name: "shadcn",
      url: "https://shadcn.com",
    },
  ],
  creator: "jolbol1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@shadcn",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html
        lang="en"
        suppressHydrationWarning
        className={cn(
          fontSans.variable,
          fontInter.variable,
          fontJakarta.variable,
          fontRaleway.variable,
          fontOutfit.variable
        )}
        style={
          {
            "--font-sans": `var(--font-outfit)`,
          } as React.CSSProperties
        }
      >
        <head>
          <meta
            name="google-site-verification"
            content="Y7LqA4IIyNd1jMq8m40_o_3nSId9NALI4PlHxQ-9sOk"
          />
        </head>
        <body
          className={cn("min-h-screen bg-background font-sans antialiased")}
        >
          <RouterProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="relative flex min-h-screen flex-col">
                <SiteHeader />
                <div className="flex-1">{children}</div>
                <SiteFooter />
              </div>
              <TailwindIndicator />
            </ThemeProvider>
            <Analytics />
            <NewYorkToaster />
            <DefaultToaster />
          </RouterProvider>
        </body>
      </html>
    </>
  )
}
