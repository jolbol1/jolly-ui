import { ListBox, ListBoxItem } from "@/registry/new-york/ui/list-box"

export default function ListBoxDemo() {
  return (
    <ListBox aria-label="Favorite animal" selectionMode="single">
      <ListBoxItem>Aardvark</ListBoxItem>
      <ListBoxItem>Cat</ListBoxItem>
      <ListBoxItem>Dog</ListBoxItem>
      <ListBoxItem>Kangaroo</ListBoxItem>
      <ListBoxItem>Panda</ListBoxItem>
      <ListBoxItem>Snake</ListBoxItem>
    </ListBox>
  )
}
