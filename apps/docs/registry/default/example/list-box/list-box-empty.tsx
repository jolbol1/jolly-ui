import { ListBox } from "@/registry/default/ui/list-box"

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
