"use client"

import { ChevronsUpDown } from "lucide-react"
import { Text } from "react-aria-components"

import { Button } from "@/registry/default/ui/button"
import {
  Combobox,
  ComboboxInput,
  ComboboxItem,
  ComboboxListBox,
  ComboboxPopover,
} from "@/registry/default/ui/combobox"
import { FieldGroup, Label } from "@/registry/default/ui/field"

export default function ComboboxDescription() {
  return (
    <Combobox name="animal" isRequired>
      <Label>Favorite Animal</Label>
      <FieldGroup className="p-0">
        <ComboboxInput />
        <Button variant="ghost" size="icon" className="mr-1 size-6 p-1">
          <ChevronsUpDown aria-hidden="true" className="size-4 opacity-50" />
        </Button>
      </FieldGroup>
      <Text className="text-sm text-muted-foreground" slot="description">
        Please select an animal.
      </Text>
      <ComboboxPopover>
        <ComboboxListBox>
          <ComboboxItem id="red panda">Red Panda</ComboboxItem>
          <ComboboxItem id="cat">Cat</ComboboxItem>
          <ComboboxItem id="dog">Dog</ComboboxItem>
          <ComboboxItem id="aardvark">Aardvark</ComboboxItem>
          <ComboboxItem id="kangaroo">Kangaroo</ComboboxItem>
          <ComboboxItem id="snake">Snake</ComboboxItem>
        </ComboboxListBox>
      </ComboboxPopover>
    </Combobox>
  )
}
