import { Text, TextField } from "react-aria-components"

import { Label } from "@/registry/new-york/ui/field"
import { TextArea } from "@/registry/new-york/ui/textarea"

export function TextareaWithText() {
  return (
    <TextField className="grid w-full gap-1.5">
      <Label>Your Message</Label>
      <TextArea placeholder="Type your message here." />
      <Text slot="description" className="text-sm text-muted-foreground">
        Your message will be copied to the support team.
      </Text>
    </TextField>
  )
}
export default TextareaWithText
