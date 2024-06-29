import { Label } from "@/registry/default/ui/field"
import { Input, TextField } from "@/registry/default/ui/input"

export default function TextFieldDemo() {
  return (
    <TextField>
      <Label>First name</Label>
      <Input />
    </TextField>
  )
}
