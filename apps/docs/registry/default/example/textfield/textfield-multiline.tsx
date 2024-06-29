import { Label } from "@/registry/default/ui/field"
import { TextField } from "@/registry/default/ui/input"
import { TextArea } from "@/registry/default/ui/textarea"

export default function TextFieldMultiline() {
  return (
    <TextField>
      <Label>Comment</Label>
      <TextArea />
    </TextField>
  )
}
