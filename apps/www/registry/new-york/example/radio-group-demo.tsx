import { Label } from "@/registry/new-york/ui/label"
import { Radio, RadioGroup } from "@/registry/new-york/ui/radio-group"

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="dog">
      <Label>Favorite pet</Label>
      <Radio value="dog">Dog</Radio>
      <Radio value="cat">Cat</Radio>
      <Radio value="dragon">Dragon</Radio>
    </RadioGroup>
  )
}
