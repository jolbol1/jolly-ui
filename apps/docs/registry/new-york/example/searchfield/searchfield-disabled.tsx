import { Cross2Icon, MagnifyingGlassIcon } from "@radix-ui/react-icons"

import {
  SearchField,
  SearchFieldClear,
  SearchFieldInput,
} from "@/registry/new-york/ui/searchfield"

export function SearchFieldDemo() {
  return (
    <SearchField isDisabled className="max-w-[200px]">
      <MagnifyingGlassIcon
        aria-hidden
        className="h-4 w-4 text-muted-foreground"
      />
      <SearchFieldInput />
      <SearchFieldClear>
        <Cross2Icon aria-hidden className="h-4 w-4" />
      </SearchFieldClear>
    </SearchField>
  )
}

export default SearchFieldDemo
