import { SearchIcon, XIcon } from "lucide-react"

import { FieldGroup } from "@/registry/default/ui/field"
import {
  SearchField,
  SearchFieldClear,
  SearchFieldInput,
} from "@/registry/default/ui/searchfield"

export function SearchFieldDemo() {
  return (
    <SearchField className="max-w-[200px]">
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

export default SearchFieldDemo
