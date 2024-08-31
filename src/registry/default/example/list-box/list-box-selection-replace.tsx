import { ListBox, ListBoxItem } from "@/registry/default/ui/list-box"

export default function ListBoxSelectionReplace() {
  return (
    <ListBox
      className={"max-h-[200px]"}
      aria-label="Sandwich contents"
      selectionMode="multiple"
      selectionBehavior="replace"
    >
      <ListBoxItem id="lettuce">Lettuce</ListBoxItem>
      <ListBoxItem id="tomato">Tomato</ListBoxItem>
      <ListBoxItem id="cheese">Cheese</ListBoxItem>
      <ListBoxItem id="tuna">Tuna Salad</ListBoxItem>
      <ListBoxItem id="egg">Egg Salad</ListBoxItem>
      <ListBoxItem id="ham">Ham</ListBoxItem>
    </ListBox>
  )
}
