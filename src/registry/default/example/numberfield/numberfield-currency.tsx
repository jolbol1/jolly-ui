import { FieldGroup, Label } from "@/registry/default/ui/field"
import {
  NumberField,
  NumberFieldInput,
  NumberFieldSteppers,
} from "@/registry/default/ui/numberfield"

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
