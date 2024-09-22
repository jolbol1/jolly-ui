"use client"

import { Form } from "react-aria-components"

import { Button } from "@/registry/new-york/ui/button"
import { Checkbox, CheckboxGroup } from "@/registry/new-york/ui/checkbox"
import { FieldError, Label } from "@/registry/new-york/ui/field"

export default function CheckboxGroupIndividualValidation() {
  return (
    <Form className="flex flex-col gap-2">
      <CheckboxGroup className="space-y-1">
        <Label>Agree to the following</Label>
        <Checkbox value="terms" isRequired>
          Terms and conditions
        </Checkbox>
        <Checkbox value="privacy" isRequired>
          Privacy policy
        </Checkbox>
        <Checkbox value="cookies" isRequired>
          Cookie policy
        </Checkbox>
        <FieldError />
      </CheckboxGroup>
      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </Form>
  )
}
