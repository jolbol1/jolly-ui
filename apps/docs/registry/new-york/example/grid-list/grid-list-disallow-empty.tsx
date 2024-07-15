import { GridList, GridListItem } from "@/registry/new-york/ui/grid-list"

export default function GridListDisallowEmptySelection() {
  return (
    <GridList
      aria-label="Favorite pokemon"
      selectionMode="multiple"
      defaultSelectedKeys={[1]}
      disallowEmptySelection
    >
      <GridListItem id={1}>Charizard</GridListItem>
      <GridListItem id={2}>Blastoise</GridListItem>
      <GridListItem id={3}>Venusaur</GridListItem>
      <GridListItem id={4}>Pikachu</GridListItem>
    </GridList>
  )
}
