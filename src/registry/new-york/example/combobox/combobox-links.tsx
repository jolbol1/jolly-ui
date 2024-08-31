import { CaretSortIcon } from "@radix-ui/react-icons"

import { Button } from "@/registry/new-york/ui/button"
import {
  Combobox,
  ComboboxInput,
  ComboboxItem,
  ComboboxListBox,
  ComboboxPopover,
} from "@/registry/new-york/ui/combobox"
import { FieldGroup, Label } from "@/registry/new-york/ui/field"

export default function ComboboxLinks() {
  return (
    <Combobox>
      <Label>Tech company websites</Label>
      <FieldGroup className="p-0">
        <ComboboxInput />
        <Button variant="ghost" size="icon" className="mr-1 size-6 p-1">
          <CaretSortIcon aria-hidden="true" className="size-4 opacity-50" />
        </Button>
      </FieldGroup>
      <ComboboxPopover>
        <ComboboxListBox>
          <ComboboxItem href="https://adobe.com/" target="_blank">
            Adobe
          </ComboboxItem>
          <ComboboxItem href="https://apple.com/" target="_blank">
            Apple
          </ComboboxItem>
          <ComboboxItem href="https://google.com/" target="_blank">
            Google
          </ComboboxItem>
          <ComboboxItem href="https://microsoft.com/" target="_blank">
            Microsoft
          </ComboboxItem>
        </ComboboxListBox>
      </ComboboxPopover>
    </Combobox>
  )
}
