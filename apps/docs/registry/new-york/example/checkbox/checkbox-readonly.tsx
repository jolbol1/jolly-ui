"use client"

import { Checkbox } from "@/registry/new-york/ui/checkbox"

export function CheckboxReadonly() {
  return (
    <Checkbox isSelected isReadOnly id="terms">
      Accept terms and conditions
    </Checkbox>
  )
}
export default CheckboxReadonly
