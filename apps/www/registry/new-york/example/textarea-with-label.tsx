import { Label } from "@/registry/new-york/ui/label"
import { TextArea } from "@/registry/new-york/ui/textarea"

export default function TextareaWithLabel() {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <TextArea placeholder="Type your message here." id="message" />
    </div>
  )
}
