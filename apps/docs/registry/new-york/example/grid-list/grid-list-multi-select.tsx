import { GridList, GridListItem } from "@/registry/default/ui/grid-list"

export default function GridListItemMultiSelection() {
  return (
    <GridList
      aria-label="Favorite pokemon"
      selectionMode="multiple"
      defaultSelectedKeys={[1, 3]}
    >
      <GridListItem id={1}>Charizard</GridListItem>
      <GridListItem id={2}>Blastoise</GridListItem>
      <GridListItem id={3}>Venusaur</GridListItem>
      <GridListItem id={4}>Pikachu</GridListItem>
    </GridList>
  )
}
