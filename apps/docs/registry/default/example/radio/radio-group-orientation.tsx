import { Label } from "@/registry/default/ui/label"
import { Radio, RadioGroup } from "@/registry/default/ui/radio-group"

export function RadioGroupHorizontal() {
  return (
    <RadioGroup defaultValue="dog" orientation="horizontal">
      <Label>Favorite avatar</Label>
      <Radio value="wizard">Wizard</Radio>
      <Radio value="dragon">Dragon</Radio>
    </RadioGroup>
  )
}

export default RadioGroupHorizontal
