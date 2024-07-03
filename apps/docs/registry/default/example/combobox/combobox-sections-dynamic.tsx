import { ChevronsUpDown } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  Combobox,
  ComboboxCollection,
  ComboboxHeader,
  ComboboxInput,
  ComboboxItem,
  ComboboxListBox,
  ComboboxPopover,
  ComboboxSection,
} from "@/registry/default/ui/combobox"
import { FieldGroup, Label } from "@/registry/default/ui/field"

export default function ComboboxSectionsDynamic() {
  let options = [
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
  return (
    <Combobox defaultItems={options}>
      <Label>Preferred fruit or vegetable</Label>
      <FieldGroup className="p-0">
        <ComboboxInput />
        <Button variant="ghost" size="icon" className="mr-1 size-6 p-1">
          <ChevronsUpDown aria-hidden="true" className="size-4 opacity-50" />
        </Button>
      </FieldGroup>
      <ComboboxPopover>
        <ComboboxListBox<(typeof options)[number]>>
          {(section) => (
            <ComboboxSection id={section.name}>
              <ComboboxHeader>{section.name}</ComboboxHeader>
              <ComboboxCollection items={section.children}>
                {(item) => (
                  <ComboboxItem id={item.name}>{item.name}</ComboboxItem>
                )}
              </ComboboxCollection>
            </ComboboxSection>
          )}
        </ComboboxListBox>
      </ComboboxPopover>
    </Combobox>
  )
}
