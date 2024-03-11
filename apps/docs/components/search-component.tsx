"use client"

import { useState } from "react"
import { DocSearchModal } from "@docsearch/react"
import { SearchIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/default/ui/button"

export function Search() {
  const [open, setOpen] = useState(false)
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
