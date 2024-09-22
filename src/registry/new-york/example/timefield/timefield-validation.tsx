"use client"

import { Form } from "react-aria-components"

import { Button } from "@/registry/new-york/ui/button"
import { DateInput, TimeField } from "@/registry/new-york/ui/datefield"
import { FieldError, Label } from "@/registry/new-york/ui/field"

export default function TimeFieldValidation() {
  return (
    <Form className="flex flex-col gap-2">
      <TimeField name="time" isRequired className={"group"}>
        <Label>Meeting time</Label>
        <DateInput className={"w-fit min-w-[100px]"} />
        <FieldError />
      </TimeField>
      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </Form>
  )
}
