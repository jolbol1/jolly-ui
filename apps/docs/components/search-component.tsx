"use client"

import { useEffect, useState } from "react"
import { DocSearchModal } from "@docsearch/react"
import { SearchIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/default/ui/button"

export function Search() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (
        (e.target instanceof HTMLElement && e.target.isContentEditable) ||
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.target instanceof HTMLSelectElement
      ) {
        return
      }
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-8 w-full justify-start rounded-[0.5rem] bg-background pl-2 text-sm font-normal text-muted-foreground shadow-none lg:w-fit lg:pr-12"
        )}
        onPress={() => setOpen(true)}
      >
        <SearchIcon className="h-w mr-2 w-4" />
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      {open ? (
        <DocSearchModal
          initialScrollY={window.scrollY}
          appId="W733X7ZW2B"
          indexName="jollyui"
          apiKey="c1960e1f500fcb2442eb7e93e8db2593"
          onClose={() => setOpen(false)}
        />
      ) : null}
    </>
  )
}
