"use client"

import { PlusIcon } from "@radix-ui/react-icons"
import { Input as AriaInput } from "react-aria-components"

import { Button } from "@/registry/new-york/ui/button"
import { FieldGroup, Label } from "@/registry/new-york/ui/field"
import { TextField } from "@/registry/new-york/ui/textfield"

export default function GroupDemo() {
  return (
    <TextField>
      <Label>Email</Label>
      <FieldGroup className="p-0">
        <AriaInput className="min-w-0 flex-1 bg-background px-2 py-1.5 outline outline-0 placeholder:text-muted-foreground" />
        <Button variant="ghost" size="icon" aria-label="Add email">
          <PlusIcon className="size-4" />
        </Button>
      </FieldGroup>
    </TextField>
  )
}
