import { TextField } from "react-aria-components"

import { Input } from "@/registry/new-york/ui/input"

export default function InputDemo() {
  return (
    <TextField aria-label="Email">
      <Input type="email" placeholder="Email..." />
    </TextField>
  )
}
