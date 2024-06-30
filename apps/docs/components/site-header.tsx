import { siteConfig } from "@/config/site"
import { Link } from "@/registry/new-york/ui/link"

import { Icons } from "./icons"
import { MainNav } from "./main-nav"
import { MobileNav } from "./mobile-nav"
import { ModeToggle } from "./mode-toggle"
import { Search } from "./search-component"
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
          <nav className="flex flex-1 items-center justify-end gap-2">
            <Search />
            <ThemeCustomizer hide={true} shrink={true} />
            <Link
              href={siteConfig.links.github}
              target="_blank"
              variant="ghost"
              size="icon"
              rel="noreferrer"
              className="hidden sm:inline-flex"
            >
              <Icons.gitHub className="size-4" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              variant="ghost"
              size="icon"
              rel="noreferrer"
              className="hidden sm:inline-flex"
            >
              <Icons.twitter className="size-3 fill-current" />
              <span className="sr-only">Twitter</span>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
