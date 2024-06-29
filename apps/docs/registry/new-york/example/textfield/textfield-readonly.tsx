import { Label } from "@/registry/new-york/ui/field"
import { Input, TextField } from "@/registry/new-york/ui/input"

export default function TextFieldReadonly() {
  return (
    <TextField isReadOnly defaultValue="abc@adobe.com">
      <Label>Email</Label>
      <Input />
    </TextField>
  )
}
