"use client"

import {
  Combobox,
  ComboboxInput,
  ComboboxItem,
  ComboboxListBox,
  ComboboxPopover,
} from "@/registry/default/ui/combobox"

export default function ComboboxBasic() {
  return (
    <Combobox aria-label="Animals">
      <ComboboxInput className="w-[200px]" placeholder="Select an animal..." />
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
  )
}
