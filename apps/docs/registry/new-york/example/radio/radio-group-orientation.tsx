import { Label } from "@/registry/new-york/ui/label"
import { Radio, RadioGroup } from "@/registry/new-york/ui/radio-group"

export function RadioGroupHorizontal() {
  return (
    <RadioGroup defaultValue="dog" orientation="horizontal">
      <Label>Favorite pet</Label>
      <Radio value="dog">Dog</Radio>
      <Radio value="cat">Cat</Radio>
      <Radio value="dragon">Dragon</Radio>
    </RadioGroup>
  )
}
export default RadioGroupHorizontal
