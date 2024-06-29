import { Label } from "@/registry/new-york/ui/field"
import { TextField } from "@/registry/new-york/ui/input"
import { TextArea } from "@/registry/new-york/ui/textarea"

export default function TextFieldMultiline() {
  return (
    <TextField>
      <Label>Comment</Label>
      <TextArea />
    </TextField>
  )
}
