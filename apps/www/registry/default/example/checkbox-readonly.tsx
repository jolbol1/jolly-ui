"use client"

import { Checkbox } from "@/registry/default/ui/checkbox"

export default function CheckboxDemo() {
  return (
    <Checkbox isSelected isReadOnly id="terms">
      Accept terms and conditions
    </Checkbox>
  )
}
