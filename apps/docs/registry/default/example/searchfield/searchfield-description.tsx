import { SearchIcon, XIcon } from "lucide-react"
import { Text } from "react-aria-components"

import { FieldGroup, Label } from "@/registry/default/ui/field"
import {
  SearchField,
  SearchFieldClear,
  SearchFieldInput,
} from "@/registry/default/ui/searchfield"

export default function SearchFieldDescription() {
  return (
    <SearchField className="min-w-[200px] group flex flex-col gap-2" isRequired>
      <Label>Search</Label>
      <FieldGroup className="min-w-[200px] w-fit">
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
