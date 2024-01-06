import { Label } from "@/registry/default/ui/label"
import { Radio, RadioGroup } from "@/registry/default/ui/radio-group"

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="dog">
      <Label>Favorite pet</Label>
      <Radio value="dog">Dog</Radio>
      <Radio value="cat">Cat</Radio>
      <Radio value="dragon">Dragon</Radio>
    </RadioGroup>
  )
}

export default RadioGroupDemo
