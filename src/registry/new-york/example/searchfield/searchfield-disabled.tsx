import { Cross2Icon, MagnifyingGlassIcon } from "@radix-ui/react-icons"

import { FieldGroup, Label } from "@/registry/new-york/ui/field"
import {
  SearchField,
  SearchFieldClear,
  SearchFieldInput,
} from "@/registry/new-york/ui/searchfield"

export default function SearchFieldDisabled() {
  return (
    <SearchField isDisabled className="max-w-[200px]">
      <Label>Search</Label>
      <FieldGroup>
        <MagnifyingGlassIcon
          aria-hidden
          className="size-4 text-muted-foreground"
        />
        <SearchFieldInput placeholder="Search..." />
        <SearchFieldClear>
          <Cross2Icon aria-hidden className="size-4" />
        </SearchFieldClear>
      </FieldGroup>
    </SearchField>
  )
}
