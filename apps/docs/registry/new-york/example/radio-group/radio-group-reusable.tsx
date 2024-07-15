import { JollyRadioGroup, Radio } from "@/registry/new-york/ui/radio-group"

export default function RadioGroupReusable() {
  return (
    <JollyRadioGroup
      label="Favorite sport"
      description="Select a favorite sport"
      isRequired
    >
      <Radio value="soccer">Soccer</Radio>
      <Radio value="baseball">Baseball</Radio>
      <Radio value="basketball">Basketball</Radio>
    </JollyRadioGroup>
  )
}
