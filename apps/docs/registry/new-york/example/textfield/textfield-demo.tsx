import { Label } from "@/registry/new-york/ui/field"
import { Input, TextField } from "@/registry/new-york/ui/input"

export default function TextFieldDemo() {
  return (
    <TextField>
      <Label>First name</Label>
      <Input />
    </TextField>
  )
}
