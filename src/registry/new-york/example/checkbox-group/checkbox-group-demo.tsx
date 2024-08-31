import { Checkbox, CheckboxGroup } from "@/registry/new-york/ui/checkbox"
import { Label } from "@/registry/new-york/ui/field"

export default function CheckboxGroupDemo() {
  return (
    <CheckboxGroup>
      <Label>Favorite sports</Label>
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
      <Checkbox value="basketball">Basketball</Checkbox>
    </CheckboxGroup>
  )
}
