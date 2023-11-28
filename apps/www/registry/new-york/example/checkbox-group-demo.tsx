"use client"

import { Checkbox, CheckboxGroup } from "@/registry/new-york/ui/checkbox"
import { Label } from "@/registry/new-york/ui/label"

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
