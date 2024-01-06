import { Link } from "react-aria-components"

import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Modified by{" "}
          <Link
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            jolbol1
          </Link>
          . Template by{" "}
          <Link
            href={"https://twitter.com/shadcn"}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            shadcn
          </Link>
          . Source code{" "}
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}
