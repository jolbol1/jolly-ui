"use client"

import {
  Combobox,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxListBox,
  ComboboxPopover,
  ComboboxSection,
} from "@/registry/default/ui/combobox"

export default function ComboboxSectionDemo() {
  return (
    <Combobox aria-label="food">
      <ComboboxInput
        className="w-[200px]"
        placeholder="Select a fruit or vegetable..."
      />
      <ComboboxPopover>
        <ComboboxListBox>
          <ComboboxSection>
            <ComboboxLabel separator>Fruit</ComboboxLabel>
            <ComboboxItem textValue="Apple">Apple</ComboboxItem>
            <ComboboxItem textValue="Banana">Banana</ComboboxItem>
            <ComboboxItem textValue="Orange">Orange</ComboboxItem>
            <ComboboxItem textValue="Honeydew">Honeydew</ComboboxItem>
            <ComboboxItem textValue="Grapes">Grapes</ComboboxItem>
            <ComboboxItem textValue="Watermelon">Watermelon</ComboboxItem>
            <ComboboxItem textValue="Cantaloupe">Cantaloupe</ComboboxItem>
            <ComboboxItem textValue="Pear">Pear</ComboboxItem>
          </ComboboxSection>
          <ComboboxSection>
            <ComboboxLabel offset>Vegetable</ComboboxLabel>
            <ComboboxItem textValue="Cabbage">Cabbage</ComboboxItem>
            <ComboboxItem textValue="Broccoli">Broccoli</ComboboxItem>
            <ComboboxItem textValue="Carrots">Carrots</ComboboxItem>
            <ComboboxItem textValue="Lettuce">Lettuce</ComboboxItem>
            <ComboboxItem textValue="Spinach">Spinach</ComboboxItem>
            <ComboboxItem textValue="Bok Choy">Bok Choy</ComboboxItem>
            <ComboboxItem textValue="Cauliflower">Cauliflower</ComboboxItem>
            <ComboboxItem textValue="Potatoes">Potatoes</ComboboxItem>
          </ComboboxSection>
        </ComboboxListBox>
      </ComboboxPopover>
    </Combobox>
  )
}
