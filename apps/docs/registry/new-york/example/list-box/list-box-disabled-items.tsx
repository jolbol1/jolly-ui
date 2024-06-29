import { ListBox, ListBoxItem } from "@/registry/new-york/ui/list-box"

export default function ListBoxDisabledItems() {
  return (
    <ListBox
      className={"max-h-[200px]"}
      aria-label="Choose sandwich contents with disabled items"
      selectionMode="multiple"
    >
      <ListBoxItem>Lettuce</ListBoxItem>
      <ListBoxItem>Tomato</ListBoxItem>
      <ListBoxItem>Cheese</ListBoxItem>
      <ListBoxItem isDisabled>Tuna Salad</ListBoxItem>
      <ListBoxItem>Egg Salad</ListBoxItem>
      <ListBoxItem>Ham</ListBoxItem>
    </ListBox>
  )
}
