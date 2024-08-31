import { Label } from "@/registry/new-york/ui/field"
import { Input, TextField } from "@/registry/new-york/ui/textfield"

export default function TextFieldDisabled() {
  return (
    <TextField isDisabled>
      <Label>Email</Label>
      <Input />
    </TextField>
  )
}
