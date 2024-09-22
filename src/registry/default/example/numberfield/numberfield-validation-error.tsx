"use client"

import { Form } from "react-aria-components"

import { Button } from "@/registry/default/ui/button"
import { FieldError, FieldGroup, Label } from "@/registry/default/ui/field"
import {
  NumberField,
  NumberFieldInput,
  NumberFieldSteppers,
} from "@/registry/default/ui/numberfield"

export default function NumberFieldValidationError() {
  return (
    <Form className="flex flex-col gap-2">
      <NumberField className="group" name="width" isRequired>
        <Label>Width</Label>
        <FieldGroup>
          <NumberFieldInput />
          <NumberFieldSteppers />
        </FieldGroup>
        <FieldError />
      </NumberField>
      <Button type="submit" className="w-fit">
        Submit
      </Button>
    </Form>
  )
}
