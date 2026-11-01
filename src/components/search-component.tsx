import * as React from "react"
import { useRouter } from "@tanstack/react-router"
import { FileTextIcon, HashIcon, SearchIcon } from "lucide-react"
import type MiniSearch from "minisearch"
import {
  Autocomplete,
  Dialog,
  Input,
  ListBox,
  ListBoxItem,
  Modal,
  ModalOverlay,
  SearchField,
} from "react-aria-components"

import { cn } from "@/lib/utils"

import type { SearchEntry } from "../../build/content"
import { Button } from "./button"

let searchPromise: Promise<{
  index: MiniSearch<SearchEntry>
  pages: SearchEntry[]
}> | null = null

/**
 * The index is generated from the MDX at build time (see `build/content.ts`)
 * and only downloaded the first time search is opened.
 */
function loadSearch() {
  searchPromise ??= Promise.all([
    import("minisearch"),
    import("virtual:search-index"),
  ]).then(([{ default: MiniSearch }, { default: entries }]) => {
    const index = new MiniSearch<SearchEntry>({
      fields: ["title", "keywords", "heading", "text"],
      storeFields: ["url", "title", "heading", "text"],
      searchOptions: {
        boost: { title: 3, keywords: 3, heading: 2 },
        // Rank the page itself above its sections.
        boostDocument: (_id, _term, stored) => (stored?.heading ? 1 : 1.5),
        prefix: true,
        fuzzy: 0.2,
        combineWith: "AND",
      },
    })
    index.addAll(entries)
    return { index, pages: entries.filter((entry) => !entry.heading) }
  })
  return searchPromise
}

export function Search() {
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement
      const isTyping =
        target.isContentEditable ||
        ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)

      if (
        (event.key === "k" && (event.metaKey || event.ctrlKey)) ||
        (event.key === "/" && !isTyping)
      ) {
        event.preventDefault()
        setIsOpen((open) => !open)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-8 w-full justify-start rounded-[0.5rem] bg-background pl-2 text-sm font-normal text-muted-foreground shadow-none lg:w-fit lg:pr-12"
        )}
        onPress={() => setIsOpen(true)}
        onHoverStart={() => void loadSearch()}
      >
        <SearchIcon className="mr-2 size-4" />
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded-sm border bg-muted px-1.5 font-mono text-[10px] font-medium sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <ModalOverlay
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        isDismissable
        className="fixed inset-0 z-50 bg-black/80 data-entering:animate-in data-entering:fade-in-0 data-exiting:animate-out data-exiting:fade-out-0"
      >
        <Modal className="fixed left-1/2 top-[12vh] z-50 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 overflow-hidden rounded-lg border bg-background shadow-lg data-entering:animate-in data-entering:fade-in-0 data-entering:zoom-in-95">
          <Dialog aria-label="Search documentation" className="outline-hidden">
            {({ close }) => <SearchPanel onClose={close} />}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </>
  )
}

function SearchPanel({ onClose }: { onClose: () => void }) {
  const router = useRouter()
  const [query, setQuery] = React.useState("")
  const [search, setSearch] = React.useState<Awaited<
    ReturnType<typeof loadSearch>
  > | null>(null)

  React.useEffect(() => {
    loadSearch().then(setSearch)
  }, [])

  const results = React.useMemo(() => {
    if (!search) return []
    if (!query.trim()) return search.pages
    // Prefer results matching every word, then fall back to any word.
    let hits = search.index.search(query)
    if (!hits.length) hits = search.index.search(query, { combineWith: "OR" })
    return hits.slice(0, 20) as unknown as SearchEntry[]
  }, [search, query])

  return (
    <Autocomplete inputValue={query} onInputChange={setQuery}>
      <SearchField
        aria-label="Search documentation"
        autoFocus
        className="flex items-center gap-2 border-b px-3"
      >
        <SearchIcon className="size-4 shrink-0 text-muted-foreground" />
        <Input
          placeholder="Search documentation..."
          className="h-12 w-full bg-transparent text-sm outline-hidden placeholder:text-muted-foreground [&::-webkit-search-cancel-button]:hidden"
        />
        <kbd className="pointer-events-none hidden h-5 select-none items-center rounded-sm border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground sm:flex">
          Esc
        </kbd>
      </SearchField>
      <ListBox
        aria-label="Search results"
        items={results}
        onAction={(url) => {
          onClose()
          router.navigate({ href: String(url) })
        }}
        className="max-h-[60vh] overflow-y-auto p-2 outline-hidden"
        renderEmptyState={() => (
          <p className="py-10 text-center text-sm text-muted-foreground">
            {search ? `No results for "${query}"` : "Loading..."}
          </p>
        )}
      >
        {(entry) => (
          <ListBoxItem
            id={entry.url}
            textValue={entry.heading ?? entry.title}
            className="flex cursor-default items-start gap-3 rounded-md px-3 py-2 text-sm outline-hidden data-focused:bg-accent data-focused:text-accent-foreground"
          >
            {entry.heading ? (
              <HashIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            ) : (
              <FileTextIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            )}
            <div className="min-w-0">
              <div className="font-medium">{entry.heading ?? entry.title}</div>
              <div className="truncate text-xs text-muted-foreground">
                {entry.heading ? `${entry.title} · ${entry.text}` : entry.text}
              </div>
            </div>
          </ListBoxItem>
        )}
      </ListBox>
    </Autocomplete>
  )
}
