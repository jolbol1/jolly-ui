import { TextField } from "react-aria-components"

import { Label } from "@/registry/new-york/ui/label"
import { TextArea } from "@/registry/new-york/ui/textarea"

export function TextfieldArea() {
  return (
    <TextField className="grid w-full gap-1.5">
      <Label>Comment</Label>
      <TextArea />
    </TextField>
  )
}
export default TextfieldArea
