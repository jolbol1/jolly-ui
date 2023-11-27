"use client"

import { Checkbox, CheckboxGroup } from "@/registry/default/ui/checkbox"
import { Label } from "@/registry/default/ui/label"

export default function CheckboxDemo() {
  return (
    <CheckboxGroup defaultValue={["baseball"]} className="flex flex-col gap-2">
      <Label>Favorite Sports</Label>
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
      <Checkbox value="basketball">Basketball</Checkbox>
    </CheckboxGroup>
  )
}
