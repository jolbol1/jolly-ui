import {
  ListBox,
  ListBoxHeader,
  ListBoxItem,
  ListBoxSection,
} from "@/registry/new-york/ui/list-box"

export default function ListBoxSections() {
  return (
    <ListBox
      className="max-h-[200px]"
      aria-label="Sandwich contents"
      selectionMode="multiple"
    >
      <ListBoxSection>
        <ListBoxHeader>Veggies</ListBoxHeader>
        <ListBoxItem id="lettuce">Lettuce</ListBoxItem>
        <ListBoxItem id="tomato">Tomato</ListBoxItem>
        <ListBoxItem id="onion">Onion</ListBoxItem>
      </ListBoxSection>
      <ListBoxSection>
        <ListBoxHeader>Protein</ListBoxHeader>
        <ListBoxItem id="ham">Ham</ListBoxItem>
        <ListBoxItem id="tuna">Tuna</ListBoxItem>
        <ListBoxItem id="tofu">Tofu</ListBoxItem>
      </ListBoxSection>
      <ListBoxSection>
        <ListBoxHeader>Condiments</ListBoxHeader>
        <ListBoxItem id="mayo">Mayonaise</ListBoxItem>
        <ListBoxItem id="mustard">Mustard</ListBoxItem>
        <ListBoxItem id="ranch">Ranch</ListBoxItem>
      </ListBoxSection>
    </ListBox>
  )
}
