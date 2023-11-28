import { TextField } from "react-aria-components"

import { TextArea } from "@/registry/new-york/ui/textarea"

export default function TextareaDisabled() {
  return (
    <TextField className="w-full" isDisabled aria-label="comment">
      <TextArea placeholder="Type your message here." />
    </TextField>
  )
}
