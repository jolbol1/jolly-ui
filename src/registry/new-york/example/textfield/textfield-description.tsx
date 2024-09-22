"use client"

import { Text } from "react-aria-components"

import { Label } from "@/registry/new-york/ui/field"
import { Input, TextField } from "@/registry/new-york/ui/textfield"

export default function TextFieldDescription() {
  return (
    <TextField>
      <Label>Email</Label>
      <Input className="w-fit" />
      <Text className="text-sm text-muted-foreground" slot="description">
        Enter an email for us to contact you about your order.
      </Text>
    </TextField>
  )
}
