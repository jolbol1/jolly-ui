import { Label } from "@/registry/default/ui/field"
import { Radio, RadioGroup } from "@/registry/default/ui/radio-group"

export default function RadioGroupReadonly() {
  return (
    <RadioGroup defaultValue="wizard" isReadOnly>
      <Label>Favorite avatar</Label>

      <Radio value="wizard">Wizard</Radio>
      <Radio value="dragon">Dragon</Radio>
    </RadioGroup>
  )
}
