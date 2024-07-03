import { Label } from "@/registry/default/ui/field"
import { TextArea } from "@/registry/default/ui/textarea"
import { TextField } from "@/registry/default/ui/textfield"

export default function TextFieldMultiline() {
  return (
    <TextField>
      <Label>Comment</Label>
      <TextArea />
    </TextField>
  )
}
