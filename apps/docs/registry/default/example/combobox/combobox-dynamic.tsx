"use client"

import {
  Combobox,
  ComboboxCollection,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxListBox,
  ComboboxPopover,
  ComboboxSection,
} from "@/registry/default/ui/combobox"

type ComboboxOptions = { name: string; children: { name: string }[] }[]

let options: ComboboxOptions = [
  {
    name: "Fruit",
    children: [
      { name: "Apple" },
      { name: "Banana" },
      { name: "Orange" },
      { name: "Honeydew" },
      { name: "Grapes" },
      { name: "Watermelon" },
      { name: "Cantaloupe" },
      { name: "Pear" },
    ],
  },
  {
    name: "Vegetable",
    children: [
      { name: "Cabbage" },
      { name: "Broccoli" },
      { name: "Carrots" },
      { name: "Lettuce" },
      { name: "Spinach" },
      { name: "Bok Choy" },
      { name: "Cauliflower" },
      { name: "Potatoes" },
    ],
  },
]

export function ComboboxDynamicDemo() {
  return (
    <Combobox aria-label="food" defaultItems={options}>
      <ComboboxInput
        className="w-[200px]"
        placeholder="Select a fruit or vegetable..."
      />
      <ComboboxPopover>
        <ComboboxListBox<ComboboxOptions[0]>>
          {(section) => (
            <ComboboxSection id={section.name}>
              <ComboboxLabel separator>{section.name}</ComboboxLabel>
              <ComboboxCollection items={section.children}>
                {(item) => (
                  <ComboboxItem id={item.name} textValue={item.name}>
                    {item.name}
                  </ComboboxItem>
                )}
              </ComboboxCollection>
            </ComboboxSection>
          )}
        </ComboboxListBox>
      </ComboboxPopover>
    </Combobox>
  )
}
export default ComboboxDynamicDemo
