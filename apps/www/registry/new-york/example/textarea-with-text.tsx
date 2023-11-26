import { Label } from "@/registry/new-york/ui/label"
import { TextArea } from "@/registry/new-york/ui/textarea"

export default function TextareaWithText() {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message-2">Your Message</Label>
      <TextArea placeholder="Type your message here." id="message-2" />
      <p className="text-sm text-muted-foreground">
        Your message will be copied to the support team.
      </p>
    </div>
  )
}
