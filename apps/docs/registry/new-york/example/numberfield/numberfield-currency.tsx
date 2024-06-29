import { FieldGroup, Label } from "@/registry/new-york/ui/field"
import {
  NumberField,
  NumberFieldInput,
  NumberFieldSteppers,
} from "@/registry/new-york/ui/numberfield"

export default function NumberFieldCurrency() {
  return (
    <NumberField
      defaultValue={45}
      formatOptions={{
        style: "currency",
        currency: "EUR",
        currencyDisplay: "code",
        currencySign: "accounting",
      }}
    >
      <Label>Transaction amount</Label>
      <FieldGroup>
        <NumberFieldInput />
        <NumberFieldSteppers />
      </FieldGroup>
    </NumberField>
  )
}
