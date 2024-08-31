import { GridList } from "@/registry/default/ui/grid-list"

export default function GridListEmptyState() {
  return (
    <GridList
      aria-label="Search results"
      renderEmptyState={() => "No results found."}
    >
      {[]}
    </GridList>
  )
}
