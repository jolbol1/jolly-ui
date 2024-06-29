import { Label } from "@/registry/new-york/ui/field"
import { Radio, RadioGroup } from "@/registry/new-york/ui/radio-group"

export default function RadioGroupDisabledIndividual() {
  return (
    <RadioGroup>
      <Label>Favorite sport</Label>
      <Radio value="soccer">Soccer</Radio>
      <Radio value="baseball" isDisabled>
        Baseball
      </Radio>
      <Radio value="basketball">Basketball</Radio>
    </RadioGroup>
  )
}
