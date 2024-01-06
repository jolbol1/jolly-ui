import { siteConfig } from "@/config/site"
import { Link } from "@/registry/new-york/ui/link"

import { Icons } from "./icons"
import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile-nav"
import { ModeToggle } from "./mode-toggle"
import { ThemeCustomizer } from "./theme-customizer"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center  justify-end space-x-2">
          {/* <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div> */}
          <nav className="flex items-center gap-2">
            <ThemeCustomizer hide={true} shrink={true} />
            <Link
              href={siteConfig.links.github}
              target="_blank"
              variant="ghost"
              size="icon"
              rel="noreferrer"
            >
              <Icons.gitHub className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              variant="ghost"
              size="icon"
              rel="noreferrer"
            >
              <Icons.twitter className="h-3 w-3 fill-current" />
              <span className="sr-only">Twitter</span>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
