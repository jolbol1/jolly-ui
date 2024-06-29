import { Label } from "@/registry/new-york/ui/field"
import { Radio, RadioGroup } from "@/registry/new-york/ui/radio-group"

export default function RadioGroupDemo() {
  return (
    <RadioGroup>
      <Label>Favorite pet</Label>
      <Radio value="dogs">Dog</Radio>
      <Radio value="cats">Cat</Radio>
      <Radio value="dragon">Dragon</Radio>
    </RadioGroup>
  )
}
