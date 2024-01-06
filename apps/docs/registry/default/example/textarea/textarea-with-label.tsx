import { TextField } from "react-aria-components"

import { Label } from "@/registry/default/ui/label"
import { TextArea } from "@/registry/default/ui/textarea"

export function TextareaWithLabel() {
  return (
    <TextField className="grid w-full gap-1.5">
      <Label>Your message</Label>
      <TextArea placeholder="Type your message here." />
    </TextField>
  )
}
export default TextareaWithLabel
