import { Form } from "react-aria-components"

import { Button } from "@/registry/default/ui/button"
import { FieldError, Label } from "@/registry/default/ui/field"
import { Input, TextField } from "@/registry/default/ui/input"

export default function FormValidation() {
  return (
    <Form validationErrors={{ username: "Sorry, this username is taken." }}>
      <TextField className="group" name="username">
        <Label>Username</Label>
        <Input />
        <FieldError />
      </TextField>
    </Form>
  )
}
