import { Text } from "react-aria-components"

import { Label } from "@/registry/default/ui/field"
import { Radio, RadioGroup } from "@/registry/default/ui/radio-group"

export default function RadioGroupDescription() {
  return (
    <RadioGroup>
      <Label>Favorite avatar</Label>
      <Radio value="wizard">Wizard</Radio>
      <Radio value="dragon">Dragon</Radio>
      <Text className="text-sm text-muted-foreground" slot="description">
        Please select an avatar.
      </Text>
    </RadioGroup>
  )
}
