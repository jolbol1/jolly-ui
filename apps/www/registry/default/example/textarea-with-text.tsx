import { Text, TextField } from "react-aria-components"

import { Label } from "@/registry/default/ui/label"
import { TextArea } from "@/registry/default/ui/textarea"

export default function TextareaWithText() {
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
