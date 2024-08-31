import { FieldGroup, Label } from "@/registry/new-york/ui/field"
import {
  NumberField,
  NumberFieldInput,
  NumberFieldSteppers,
} from "@/registry/new-york/ui/numberfield"

export default function NumberFieldFormatting() {
  return (
    <NumberField
      defaultValue={0}
      formatOptions={{
        signDisplay: "exceptZero",
        minimumFractionDigits: 1,
        maximumFractionDigits: 2,
      }}
    >
      <Label>Adjust exposure</Label>
      <FieldGroup>
        <NumberFieldInput />
        <NumberFieldSteppers />
      </FieldGroup>
    </NumberField>
  )
}
