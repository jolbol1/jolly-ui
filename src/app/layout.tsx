import { siteConfig } from "@/config/site"

import "./globals.css"
import "../styles/mdx.css"

import type { Metadata } from "next"

import {
  fontInter,
  fontJakarta,
  fontOutfit,
  fontRaleway,
  fontSans,
} from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Analytics } from "@/components/analytics"
import { AriaProvider } from "@/components/aria-provider"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"

import "@docsearch/css"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "shadcn-aria",
    "React",
    "Tailwind CSS",
    "Server Components",
    "React Aria Components",
  ],
  authors: [
    {
      name: "jolbol1",
      url: "https://jamesshopland.com",
    },
  ],
  creator: "jolbol1",
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
    creator: "@jollyshopland",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
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
          "--font-sans": `var(--font-geist-sans)`,
        } as React.CSSProperties
      }
    >
      <body
        className={cn(
          fontSans.variable,
          "min-h-screen bg-background font-sans antialiased"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AriaProvider>
            <div className="relative flex min-h-screen flex-col bg-background">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
            </div>
          </AriaProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
