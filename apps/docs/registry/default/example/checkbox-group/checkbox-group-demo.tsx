import { Checkbox, CheckboxGroup } from "@/registry/default/ui/checkbox"
import { Label } from "@/registry/default/ui/field"

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
