import { Button } from "@/registry/default/ui/button"
import { TextArea } from "@/registry/default/ui/textarea"

export default function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2">
      <TextArea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  )
}
