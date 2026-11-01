import { ArchiveIcon, ArrowRightIcon } from "lucide-react"
import { Link } from "react-aria-components"

import { siteConfig } from "@/config/site"

export function ArchivedBanner() {
  return (
    <div
      role="region"
      aria-label="Project status"
      className="border-b bg-primary text-primary-foreground"
    >
      <div className="container flex flex-col items-center justify-center gap-x-2 gap-y-1 py-2.5 text-center text-sm sm:flex-row">
        <p className="flex items-center gap-2 font-medium">
          <ArchiveIcon className="size-4 shrink-0" aria-hidden />
          This project is archived.
        </p>
        <p className="text-primary-foreground/80">
          shadcn/ui now officially supports React Aria Components.{" "}
          <Link
            href={siteConfig.links.shadcnReactAria}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-medium text-primary-foreground underline underline-offset-4 outline-hidden data-focus-visible:ring-2 data-focus-visible:ring-ring"
          >
            Use shadcn/ui instead
            <ArrowRightIcon className="size-3.5" aria-hidden />
          </Link>
        </p>
      </div>
    </div>
  )
}
