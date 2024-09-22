"use client"

import { Form } from "react-aria-components"

import { Button } from "@/registry/new-york/ui/button"
import { FieldError, Label } from "@/registry/new-york/ui/field"
import { Input, TextField } from "@/registry/new-york/ui/textfield"

export default function FormDemo() {
  return (
    <Form className="flex flex-col gap-2">
      <TextField name="email" type="email" isRequired>
        <Label>Email</Label>
        <Input />
        <FieldError />
      </TextField>
      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </Form>
  )
}
