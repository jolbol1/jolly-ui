import { ListBox } from "@/registry/new-york/ui/list-box"

export default function ListBoxEmpty() {
  return (
    <ListBox
      className={"max-h-[200px]"}
      aria-label="Search results"
      renderEmptyState={() => "No results found."}
    >
      {[]}
    </ListBox>
  )
}
