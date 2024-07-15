import { ListBox, ListBoxItem } from "@/registry/default/ui/list-box"

export default function ListBoxDemo() {
  return (
    <ListBox
      aria-label="Favorite animal"
      selectionMode="single"
      selectedKeys={["cat"]}
    >
      <ListBoxItem>Aardvark</ListBoxItem>
      <ListBoxItem id="cat">Cat</ListBoxItem>
      <ListBoxItem>Dog</ListBoxItem>
      <ListBoxItem>Kangaroo</ListBoxItem>
      <ListBoxItem>Panda</ListBoxItem>
      <ListBoxItem>Snake</ListBoxItem>
    </ListBox>
  )
}
