import { ChevronsUpDown } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"
import {
  Combobox,
  ComboboxInput,
  ComboboxItem,
  ComboboxListBox,
  ComboboxPopover,
} from "@/registry/new-york/ui/combobox"
import { FieldGroup } from "@/registry/new-york/ui/field"
import { Label } from "@/registry/new-york/ui/label"

export default function ComboboxMenuTrigger() {
  return (
    <div className="flex gap-6 flex-col">
      <Combobox menuTrigger="input">
        <Label>Favorite Animal (Input)</Label>
        <FieldGroup className="p-0">
          <ComboboxInput />
          <Button variant="ghost" size="icon" className="h-6 w-6 p-1 mr-1">
            <ChevronsUpDown aria-hidden="true" className="h-4 w-4 opacity-50" />
          </Button>
        </FieldGroup>
        <ComboboxPopover>
          <ComboboxListBox>
            <ComboboxItem textValue="Aardvark">Aardvark</ComboboxItem>
            <ComboboxItem textValue="Cat">Cat</ComboboxItem>
            <ComboboxItem textValue="Dog">Dog</ComboboxItem>
            <ComboboxItem textValue="Kangaroo">Kangaroo</ComboboxItem>
            <ComboboxItem textValue="Panda">Panda</ComboboxItem>
            <ComboboxItem textValue="Snake">Snake</ComboboxItem>
          </ComboboxListBox>
        </ComboboxPopover>
      </Combobox>
      <Combobox menuTrigger="focus">
        <Label>Favorite Animal (Focus)</Label>
        <FieldGroup className="p-0">
          <ComboboxInput />
          <Button variant="ghost" size="icon" className="h-6 w-6 p-1 mr-1">
            <ChevronsUpDown aria-hidden="true" className="h-4 w-4 opacity-50" />
          </Button>
        </FieldGroup>
        <ComboboxPopover>
          <ComboboxListBox>
            <ComboboxItem textValue="Aardvark">Aardvark</ComboboxItem>
            <ComboboxItem textValue="Cat">Cat</ComboboxItem>
            <ComboboxItem textValue="Dog">Dog</ComboboxItem>
            <ComboboxItem textValue="Kangaroo">Kangaroo</ComboboxItem>
            <ComboboxItem textValue="Panda">Panda</ComboboxItem>
            <ComboboxItem textValue="Snake">Snake</ComboboxItem>
          </ComboboxListBox>
        </ComboboxPopover>
      </Combobox>
      <Combobox menuTrigger="manual">
        <Label>Favorite Animal (Manual)</Label>
        <FieldGroup className="p-0">
          <ComboboxInput />
          <Button variant="ghost" size="icon" className="h-6 w-6 p-1 mr-1">
            <ChevronsUpDown aria-hidden="true" className="h-4 w-4 opacity-50" />
          </Button>
        </FieldGroup>
        <ComboboxPopover>
          <ComboboxListBox>
            <ComboboxItem textValue="Aardvark">Aardvark</ComboboxItem>
            <ComboboxItem textValue="Cat">Cat</ComboboxItem>
            <ComboboxItem textValue="Dog">Dog</ComboboxItem>
            <ComboboxItem textValue="Kangaroo">Kangaroo</ComboboxItem>
            <ComboboxItem textValue="Panda">Panda</ComboboxItem>
            <ComboboxItem textValue="Snake">Snake</ComboboxItem>
          </ComboboxListBox>
        </ComboboxPopover>
      </Combobox>
    </div>
  )
}
