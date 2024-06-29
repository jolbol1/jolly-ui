import { Label } from "@/registry/default/ui/field"
import { Radio, RadioGroup } from "@/registry/default/ui/radio-group"

export default function RadioGroupDisabled() {
  return (
    <RadioGroup isDisabled>
      <Label>Favorite sport</Label>
      <Radio value="soccer">Soccer</Radio>
      <Radio value="baseball">Baseball</Radio>
      <Radio value="basketball">Basketball</Radio>
    </RadioGroup>
  )
}
