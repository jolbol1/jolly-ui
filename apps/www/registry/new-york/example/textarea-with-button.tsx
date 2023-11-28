import { TextField } from "react-aria-components"

import { Button } from "@/registry/new-york/ui/button"
import { TextArea } from "@/registry/new-york/ui/textarea"

export default function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2">
      <TextField className="grid w-full gap-2">
        <TextArea placeholder="Type your message here." />
      </TextField>
      <Button>Send message</Button>
    </div>
  )
}
