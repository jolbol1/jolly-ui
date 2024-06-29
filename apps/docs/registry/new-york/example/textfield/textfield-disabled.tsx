import { Label } from "@/registry/default/ui/field"
import { Input, TextField } from "@/registry/default/ui/input"

export default function TextFieldDisabled() {
  return (
    <TextField isDisabled>
      <Label>Email</Label>
      <Input />
    </TextField>
  )
}
