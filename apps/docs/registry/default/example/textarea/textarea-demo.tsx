import { TextField } from "react-aria-components"

import { TextArea } from "@/registry/default/ui/textarea"

export function TextareaDemo() {
  return (
    <TextField aria-label="comment" className="w-full">
      <TextArea placeholder="Type your message here." />
    </TextField>
  )
}

export default TextareaDemo
