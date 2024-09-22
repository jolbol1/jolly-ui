"use client"

import { SearchIcon, XIcon } from "lucide-react"
import { Form } from "react-aria-components"

import { Button } from "@/registry/default/ui/button"
import { FieldError, FieldGroup, Label } from "@/registry/default/ui/field"
import {
  SearchField,
  SearchFieldClear,
  SearchFieldInput,
} from "@/registry/default/ui/searchfield"

export default function SearchFieldValidation() {
  return (
    <Form className="flex flex-col gap-2">
      <SearchField className="group max-w-[200px]" isRequired>
        <Label>Search</Label>
        <FieldGroup>
          <SearchIcon aria-hidden className="size-4 text-muted-foreground" />
          <SearchFieldInput placeholder="Search..." />
          <SearchFieldClear>
            <XIcon aria-hidden className="size-4" />
          </SearchFieldClear>
        </FieldGroup>
        <FieldError />
      </SearchField>
      <Button className="w-fit" type="submit">
        Submit
      </Button>
    </Form>
  )
}
