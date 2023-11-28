import { TextField } from "react-aria-components"

import { Input } from "@/registry/new-york/ui/input"

export default function InputDisabled() {
  return (
    <TextField isDisabled aria-label="Email">
      <Input type="email" placeholder="Email..." />
    </TextField>
  )
}
