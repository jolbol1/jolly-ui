"use client"

import { Form } from "react-aria-components"

import { Button } from "@/registry/new-york/ui/button"
import { FieldError, Label } from "@/registry/new-york/ui/field"
import { Input, TextField } from "@/registry/new-york/ui/textfield"

export default function FormValidation() {
  return (
    <Form validationErrors={{ username: "Sorry, this username is taken." }}>
      <TextField name="username">
        <Label>Username</Label>
        <Input />
        <FieldError />
      </TextField>
    </Form>
  )
}
