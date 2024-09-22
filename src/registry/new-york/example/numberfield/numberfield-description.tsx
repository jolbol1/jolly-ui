"use client"

import { Text } from "react-aria-components"

import { FieldGroup, Label } from "@/registry/new-york/ui/field"
import {
  NumberField,
  NumberFieldInput,
  NumberFieldSteppers,
} from "@/registry/new-york/ui/numberfield"

export default function NumberFieldDescription() {
  return (
    <NumberField className="group" name="width" isRequired>
      <Label>Width</Label>
      <FieldGroup>
        <NumberFieldInput />
        <NumberFieldSteppers />
      </FieldGroup>
      <Text className="text-sm text-muted-foreground" slot="description">
        Enter a width in centimeters.
      </Text>
    </NumberField>
  )
}
