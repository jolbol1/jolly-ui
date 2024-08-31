import { Label } from "@/registry/new-york/ui/field"
import { Radio, RadioGroup } from "@/registry/new-york/ui/radio-group"

export default function RadioGroupOrientation() {
  return (
    <RadioGroup orientation="horizontal">
      <Label>Favorite avatar</Label>
      <Radio value="wizard">Wizard</Radio>
      <Radio value="dragon">Dragon</Radio>
    </RadioGroup>
  )
}
