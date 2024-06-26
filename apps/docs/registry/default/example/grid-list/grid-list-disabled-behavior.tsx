import { GridList, GridListItem } from "@/registry/default/ui/grid-list"

export default function GridListDisabledBehavior() {
  return (
    <GridList
      aria-label="List with disabled rows"
      selectionMode="multiple"
      disabledBehavior="selection"
    >
      <GridListItem>Charizard</GridListItem>
      <GridListItem>Blastoise</GridListItem>
      <GridListItem isDisabled>Venusaur</GridListItem>
      <GridListItem>Pikachu</GridListItem>
    </GridList>
  )
}
