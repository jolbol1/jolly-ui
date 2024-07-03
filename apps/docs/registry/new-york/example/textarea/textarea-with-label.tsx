import { TextField } from "react-aria-components"

import { Label } from "@/registry/new-york/ui/field"
import { TextArea } from "@/registry/new-york/ui/textarea"

export function TextareaWithLabel() {
  return (
    <TextField className="grid w-full gap-1.5">
      <Label>Your message</Label>
      <TextArea placeholder="Type your message here." />
    </TextField>
  )
}
export default TextareaWithLabel
