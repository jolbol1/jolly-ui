import { FieldGroup, Label } from "@/registry/new-york/ui/field"
import {
  NumberField,
  NumberFieldInput,
  NumberFieldSteppers,
} from "@/registry/new-york/ui/numberfield"

export default function NumberFieldDemo() {
  return (
    <NumberField defaultValue={1024} minValue={0}>
      <Label>Width</Label>
      <FieldGroup>
        <NumberFieldInput />
        <NumberFieldSteppers />
      </FieldGroup>
    </NumberField>
  )
}
