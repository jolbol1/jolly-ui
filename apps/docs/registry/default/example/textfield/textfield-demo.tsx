import { TextField } from "react-aria-components"

import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"

export function TextfieldDemo() {
  return (
    <TextField className="grid w-full max-w-sm items-center gap-1.5">
      <Label>First name</Label>
      <Input />
    </TextField>
  )
}
export default TextfieldDemo
