import { JollyNumberField } from "@/registry/new-york/ui/numberfield"

export default function NumberfieldReusable() {
  return (
    <JollyNumberField
      label="Cookies"
      isRequired
      description="Please enter a number"
    />
  )
}
