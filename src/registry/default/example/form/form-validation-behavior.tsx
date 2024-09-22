"use client"

import { Form } from "react-aria-components"

import { Button } from "@/registry/default/ui/button"
import { FieldError, Label } from "@/registry/default/ui/field"
import { Input, TextField } from "@/registry/default/ui/textfield"

export default function FormValidationBehavior() {
  return (
    <Form validationBehavior="aria" className="flex flex-col gap-2">
      <TextField
        name="username"
        defaultValue="admin"
        isRequired
        validate={(value) => (value === "admin" ? "Nice try." : null)}
      >
        <Label>Username</Label>
        <Input />
        <FieldError />
      </TextField>
      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </Form>
  )
}
