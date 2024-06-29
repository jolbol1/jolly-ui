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

export default function ComboboxLinks() {
  return (
    <Combobox>
      <Label>Tech company websites</Label>
      <FieldGroup className="p-0">
        <ComboboxInput />
        <Button variant="ghost" size="icon" className="h-6 w-6 p-1 mr-1">
          <ChevronsUpDown aria-hidden="true" className="h-4 w-4 opacity-50" />
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
