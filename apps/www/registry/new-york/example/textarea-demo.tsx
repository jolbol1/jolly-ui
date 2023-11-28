import { TextField } from "react-aria-components"

import { TextArea } from "@/registry/new-york/ui/textarea"

export default function TextareaDemo() {
  return (
    <TextField aria-label="comment" className="w-full">
      <TextArea placeholder="Type your message here." />
    </TextField>
  )
}
