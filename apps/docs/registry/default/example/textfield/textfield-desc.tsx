import { Text, TextField } from "react-aria-components"

import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"

export function TextfieldDesc() {
  return (
    <TextField className="grid w-full max-w-sm items-center gap-1.5">
      <Label>Email</Label>
      <Input />
      <Text slot="description" className="text-sm text-muted-foreground">
        Enter an email for us to contact you about your order.
      </Text>
    </TextField>
  )
}
export default TextfieldDesc
