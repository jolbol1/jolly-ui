import { SearchIcon, XIcon } from "lucide-react"

import {
  SearchField,
  SearchFieldClear,
  SearchFieldInput,
} from "@/registry/default/ui/searchfield"

export function SearchFieldDemo() {
  return (
    <SearchField isDisabled className="max-w-[200px]">
      <SearchIcon aria-hidden className="h-4 w-4 text-muted-foreground" />
      <SearchFieldInput />
      <SearchFieldClear>
        <XIcon aria-hidden className="h-4 w-4" />
      </SearchFieldClear>
    </SearchField>
  )
}

export default SearchFieldDemo
