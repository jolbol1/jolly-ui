import { JollySearchField } from "@/registry/default/ui/searchfield"

export default function SearchfieldReusable() {
  return (
    <JollySearchField
      label="Search"
      isRequired
      description="Search for a component"
    />
  )
}
