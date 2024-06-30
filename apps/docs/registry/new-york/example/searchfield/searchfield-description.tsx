import { SearchIcon, XIcon } from "lucide-react"
import { Text } from "react-aria-components"

import { FieldGroup, Label } from "@/registry/new-york/ui/field"
import {
  SearchField,
  SearchFieldClear,
  SearchFieldInput,
} from "@/registry/new-york/ui/searchfield"

export default function SearchFieldDescription() {
  return (
    <SearchField className="group flex min-w-[200px] flex-col gap-2" isRequired>
      <Label>Search</Label>
      <FieldGroup className="w-fit min-w-[200px]">
        <SearchIcon aria-hidden className="size-4 text-muted-foreground" />
        <SearchFieldInput placeholder="Search..." />
        <SearchFieldClear>
          <XIcon aria-hidden className="size-4" />
        </SearchFieldClear>
      </FieldGroup>
      <Text className="text-sm text-muted-foreground" slot="description">
        Enter an email for us to contact you about your order.
      </Text>
    </SearchField>
  )
}
