import { Checkbox, JollyCheckboxGroup } from "@/registry/new-york/ui/checkbox"

export default function CheckboxReusable() {
  return (
    <JollyCheckboxGroup
      description="Select a favorite sport"
      label="Favorite sports"
      isRequired
    >
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
      <Checkbox value="basketball">Basketball</Checkbox>
    </JollyCheckboxGroup>
  )
}
