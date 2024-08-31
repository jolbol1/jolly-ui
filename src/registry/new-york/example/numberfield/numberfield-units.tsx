import { FieldGroup, Label } from "@/registry/new-york/ui/field"
import {
  NumberField,
  NumberFieldInput,
  NumberFieldSteppers,
} from "@/registry/new-york/ui/numberfield"

export default function NumberFieldUnits() {
  return (
    <NumberField
      defaultValue={4}
      formatOptions={{
        style: "unit",
        unit: "inch",
        unitDisplay: "long",
      }}
    >
      <Label>Package width</Label>
      <FieldGroup>
        <NumberFieldInput />
        <NumberFieldSteppers />
      </FieldGroup>
    </NumberField>
  )
}
