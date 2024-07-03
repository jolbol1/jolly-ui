import { Label } from "@/registry/new-york/ui/field"
import { TextArea } from "@/registry/new-york/ui/textarea"
import { TextField } from "@/registry/new-york/ui/textfield"

export default function TextFieldMultiline() {
  return (
    <TextField>
      <Label>Comment</Label>
      <TextArea />
    </TextField>
  )
}
