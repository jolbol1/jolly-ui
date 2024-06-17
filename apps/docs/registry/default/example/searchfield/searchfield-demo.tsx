import { SearchIcon, XIcon } from "lucide-react"

import {
  SearchField,
  SearchFieldClear,
  SearchFieldGroup,
  SearchFieldInput,
} from "@/registry/default/ui/searchfield"

export function SearchFieldDemo() {
  return (
    <SearchField className="max-w-[200px]">
      <SearchFieldGroup>
        <SearchIcon aria-hidden className="size-4 text-muted-foreground" />
        <SearchFieldInput placeholder="Search..." />
        <SearchFieldClear>
          <XIcon aria-hidden className="size-4" />
        </SearchFieldClear>
      </SearchFieldGroup>
    </SearchField>
  )
}

export default SearchFieldDemo
