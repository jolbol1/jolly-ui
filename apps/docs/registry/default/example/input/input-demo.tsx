import { TextField } from "react-aria-components"

import { Input } from "@/registry/default/ui/input"

export function InputDemo() {
  return (
    <TextField aria-label="Email">
      <Input type="email" placeholder="Email..." />
    </TextField>
  )
}
export default InputDemo
