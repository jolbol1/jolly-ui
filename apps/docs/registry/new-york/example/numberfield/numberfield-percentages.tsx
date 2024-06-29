import { FieldGroup, Label } from "@/registry/default/ui/field"
import {
  NumberField,
  NumberFieldInput,
  NumberFieldSteppers,
} from "@/registry/default/ui/numberfield"

export default function NumberFieldPercentages() {
  return (
    <NumberField
      defaultValue={0.05}
      formatOptions={{
        style: "percent",
      }}
    >
      <Label>Sales tax</Label>
      <FieldGroup>
        <NumberFieldInput />
        <NumberFieldSteppers />
      </FieldGroup>
    </NumberField>
  )
}
