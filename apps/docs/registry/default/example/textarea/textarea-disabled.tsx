import { TextField } from "react-aria-components"

import { TextArea } from "@/registry/default/ui/textarea"

export function TextareaDisabled() {
  return (
    <TextField className="w-full" isDisabled aria-label="comment">
      <TextArea placeholder="Type your message here." />
    </TextField>
  )
}
export default TextareaDisabled
