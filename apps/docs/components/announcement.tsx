"use client"

import { ArrowRightIcon } from "@radix-ui/react-icons"
import { Link } from "react-aria-components"

import { Separator } from "@/registry/new-york/ui/separator"

export function Announcement() {
  return (
    <Link
      href="/docs/changelog"
      className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
    >
      🎉 <Separator className="mx-2 h-4" orientation="vertical" />
      <span className="sm:hidden">New Components!</span>
      <span className="hidden sm:inline">
        Color Pickers, Submenu, and more!
      </span>
      <ArrowRightIcon className="ml-1 size-4" />
    </Link>
  )
}
