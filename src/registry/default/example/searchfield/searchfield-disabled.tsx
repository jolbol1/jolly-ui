import { SearchIcon, XIcon } from "lucide-react"

import { FieldGroup, Label } from "@/registry/default/ui/field"
import {
  SearchField,
  SearchFieldClear,
  SearchFieldInput,
} from "@/registry/default/ui/searchfield"

export default function SearchFieldDisabled() {
  return (
    <SearchField isDisabled className="max-w-[200px]">
      <Label>Search</Label>
      <FieldGroup>
        <SearchIcon aria-hidden className="size-4 text-muted-foreground" />
        <SearchFieldInput placeholder="Search..." />
        <SearchFieldClear>
          <XIcon aria-hidden className="size-4" />
        </SearchFieldClear>
      </FieldGroup>
    </SearchField>
  )
}
