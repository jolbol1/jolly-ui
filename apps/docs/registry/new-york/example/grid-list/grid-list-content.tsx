import { GridList, GridListItem } from "@/registry/new-york/ui/grid-list"

export default function GridListContent() {
  let rows = [
    { id: 1, name: "Games" },
    { id: 2, name: "Program Files" },
    { id: 3, name: "bootmgr" },
    { id: 4, name: "log.txt" },
  ]

  return (
    <GridList
      items={rows}
      aria-label="Example dynamic collection List"
      selectionMode="multiple"
    >
      {(item) => <GridListItem>{item.name}</GridListItem>}
    </GridList>
  )
}
