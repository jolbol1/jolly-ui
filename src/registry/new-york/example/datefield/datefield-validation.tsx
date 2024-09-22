"use client"

import { Form } from "react-aria-components"

import { Button } from "@/registry/new-york/ui/button"
import { DateField, DateInput } from "@/registry/new-york/ui/datefield"
import { FieldError, Label } from "@/registry/new-york/ui/field"

export default function DateFieldValidation() {
  return (
    <Form>
      <DateField isRequired className={"min-w-[150px] space-y-1"}>
        <Label>Appointment date</Label>
        <DateInput />
        <FieldError />
      </DateField>
      <Button className="mt-1" type="submit">
        Submit
      </Button>
    </Form>
  )
}
