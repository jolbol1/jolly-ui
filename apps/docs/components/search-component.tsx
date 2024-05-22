"use client"

import React, { useCallback, useRef, useState } from "react"
import { DocSearchModal, useDocSearchKeyboardEvents } from "@docsearch/react"
import { SearchIcon } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "./button"

export function Search() {
  const searchButtonRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const onOpen = useCallback(() => {
    setIsOpen(true)
  }, [setIsOpen])

  const onClose = useCallback(() => {
    setIsOpen(false)
  }, [setIsOpen])

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    searchButtonRef,
  })

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-8 w-full justify-start rounded-[0.5rem] bg-background pl-2 text-sm font-normal text-muted-foreground shadow-none lg:w-fit lg:pr-12"
        )}
        onPress={() => setIsOpen(true)}
        ref={searchButtonRef}
      >
        <SearchIcon className="h-w mr-2 w-4" />
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      {isOpen ? (
        <DocSearchModal
          initialScrollY={window.scrollY}
          appId="W733X7ZW2B"
          indexName="jollyui"
          apiKey="c1960e1f500fcb2442eb7e93e8db2593"
          onClose={onClose}
        />
      ) : null}
    </>
  )
}
