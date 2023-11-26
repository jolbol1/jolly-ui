"use client"

import { Checkbox } from "@/registry/new-york/ui/checkbox"

export default function CheckboxDemo() {
  return (
    <Checkbox isSelected isReadOnly id="terms">
      Accept terms and conditions
    </Checkbox>
  )
}
