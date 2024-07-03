import { TextField } from "react-aria-components"

import { Input } from "@/registry/new-york/ui/textfield"

export function InputDisabled() {
  return (
    <TextField isDisabled aria-label="Email">
      <Input type="email" placeholder="Email..." />
    </TextField>
  )
}
export default InputDisabled
