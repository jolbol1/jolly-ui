import { Checkbox, CheckboxGroup } from "@/registry/default/ui/checkbox"
import { Label } from "@/registry/default/ui/field"

export default function CheckboxGroupDisabledIndividual() {
  return (
    <CheckboxGroup>
      <Label>Favorite sports</Label>
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox isDisabled value="baseball">
        Baseball
      </Checkbox>
      <Checkbox value="basketball">Basketball</Checkbox>
    </CheckboxGroup>
  )
}
