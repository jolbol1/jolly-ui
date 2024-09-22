"use client"

import { ChevronsUpDown } from "lucide-react"
import { Form } from "react-aria-components"

import { Button } from "@/registry/default/ui/button"
import {
  Combobox,
  ComboboxInput,
  ComboboxItem,
  ComboboxListBox,
  ComboboxPopover,
} from "@/registry/default/ui/combobox"
import { FieldError, FieldGroup, Label } from "@/registry/default/ui/field"

export default function ComboboxValidation() {
  return (
    <Form className="flex flex-col gap-2">
      <Combobox name="animal" isRequired>
        <Label>Favorite Animal</Label>
        <FieldGroup className="p-0">
          <ComboboxInput />
          <Button variant="ghost" size="icon" className="mr-1 size-6 p-1">
            <ChevronsUpDown aria-hidden="true" className="size-4 opacity-50" />
          </Button>
        </FieldGroup>
        <FieldError />
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
      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </Form>
  )
}
