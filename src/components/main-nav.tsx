"use client"

import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Link } from "@/registry/new-york/ui/link"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link
        variant="link"
        href="/"
        className="flex items-center space-x-2 text-primary"
      >
        <Icons.logo className="size-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center  text-sm font-medium">
        <Link
          variant="link"
          href="/docs"
          className={cn(
            "px-2",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Documentation
        </Link>
        <Link
          href="/docs/components"
          variant="link"
          className={cn(
            "px-2",
            pathname?.startsWith("/docs/components")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Components
        </Link>
        <Link
          variant="link"
          href="/blocks"
          className={cn(
            "px-2",
            pathname === "/blocks" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Blocks
        </Link>
        <Link
          variant="link"
          href={siteConfig.links.github}
          className="px-2 text-foreground/60"
        >
          GitHub
        </Link>
      </nav>
    </div>
  )
}
