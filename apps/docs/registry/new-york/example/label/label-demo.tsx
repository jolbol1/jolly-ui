import { TextField } from "react-aria-components"

import { Input } from "@/registry/new-york/ui/input"

import { Label } from "../../ui/label"

export function LabelDemo() {
  return (
    <TextField>
      <Label>Email</Label>
      <Input type="email" placeholder="Email..." />
    </TextField>
  )
}
export default LabelDemo
