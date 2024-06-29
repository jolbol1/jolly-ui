import { Label } from "@/registry/default/ui/field"
import { Radio, RadioGroup } from "@/registry/default/ui/radio-group"

export default function RadioGroupOrientation() {
  return (
    <RadioGroup orientation="horizontal">
      <Label>Favorite avatar</Label>
      <Radio value="wizard">Wizard</Radio>
      <Radio value="dragon">Dragon</Radio>
    </RadioGroup>
  )
}
