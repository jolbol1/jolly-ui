"use client"

import { Input as AriaInput } from "react-aria-components"

import { FieldGroup, Label } from "@/registry/default/ui/field"

export default function GroupLabel() {
  return (
    <div className="flex flex-col gap-2">
      <Label id="label-id">Serial number</Label>
      <FieldGroup aria-labelledby="label-id" className="w-[200px]">
        <AriaInput
          className="min-w-0 flex-1 bg-background px-2 py-1.5 outline outline-0 placeholder:text-muted-foreground"
          size={3}
          aria-label="First 3 digits"
          placeholder="000"
        />
        -
        <AriaInput
          className="min-w-0 flex-1 bg-background px-2 py-1.5 outline outline-0 placeholder:text-muted-foreground"
          size={2}
          aria-label="Middle 2 digits"
          placeholder="00"
        />
        -
        <AriaInput
          className="min-w-0 flex-1 bg-background px-2 py-1.5 outline outline-0 placeholder:text-muted-foreground"
          size={4}
          aria-label="Last 4 digits"
          placeholder="0000"
        />
      </FieldGroup>
    </div>
  )
}
