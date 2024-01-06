"use client"

import { Checkbox } from "@/registry/new-york/ui/checkbox"

export function CheckboxWithText() {
  return (
    <Checkbox id="terms1" className="items-start">
      <div className="grid gap-1.5 leading-none">
        Accept terms and conditions
        <p className="text-sm text-muted-foreground">
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </Checkbox>
  )
}
export default CheckboxWithText
