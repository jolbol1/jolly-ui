"use client"

import { Text } from "react-aria-components"

import { Checkbox, CheckboxGroup } from "@/registry/default/ui/checkbox"
import { Label } from "@/registry/default/ui/field"

export default function CheckboxGroupDescription() {
  return (
    <CheckboxGroup>
      <Label>Pets</Label>
      <Checkbox value="dogs">Dogs</Checkbox>
      <Checkbox value="cats">Cats</Checkbox>
      <Checkbox value="dragons">Dragons</Checkbox>
      <Text className="text-sm text-muted-foreground" slot="description">
        Select your pets.
      </Text>
    </CheckboxGroup>
  )
}
