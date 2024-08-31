"use client"

import { ArrowRightIcon } from "@radix-ui/react-icons"
import { TerminalIcon } from "lucide-react"
import { Link } from "react-aria-components"

import { Separator } from "@/registry/new-york/ui/separator"

export function Announcement() {
  return (
    <Link
      href="/docs/changelog"
      className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
    >
      <TerminalIcon className="mr-2 size-4 stroke-pink-500" />
      <span className="sm:hidden">shadcn cli support</span>
      <span className="hidden sm:inline">shadcn cli support</span>
      <ArrowRightIcon className="ml-1 size-4" />
    </Link>
  )
}
