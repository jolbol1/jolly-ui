"use client"

import {
  Combobox,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxListBox,
  ComboboxPopover,
  ComboboxSection,
} from "@/registry/new-york/ui/combobox"

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
            <ComboboxItem id="Apple">Apple</ComboboxItem>
            <ComboboxItem id="Banana">Banana</ComboboxItem>
            <ComboboxItem id="Orange">Orange</ComboboxItem>
            <ComboboxItem id="Honeydew">Honeydew</ComboboxItem>
            <ComboboxItem id="Grapes">Grapes</ComboboxItem>
            <ComboboxItem id="Watermelon">Watermelon</ComboboxItem>
            <ComboboxItem id="Cantaloupe">Cantaloupe</ComboboxItem>
            <ComboboxItem id="Pear">Pear</ComboboxItem>
          </ComboboxSection>
          <ComboboxSection>
            <ComboboxItem>Vegetable</ComboboxItem>
            <ComboboxItem id="Cabbage">Cabbage</ComboboxItem>
            <ComboboxItem id="Broccoli">Broccoli</ComboboxItem>
            <ComboboxItem id="Carrots">Carrots</ComboboxItem>
            <ComboboxItem id="Lettuce">Lettuce</ComboboxItem>
            <ComboboxItem id="Spinach">Spinach</ComboboxItem>
            <ComboboxItem id="Bok Choy">Bok Choy</ComboboxItem>
            <ComboboxItem id="Cauliflower">Cauliflower</ComboboxItem>
            <ComboboxItem id="Potatoes">Potatoes</ComboboxItem>
          </ComboboxSection>
        </ComboboxListBox>
      </ComboboxPopover>
    </Combobox>
  )
}
