import { Italic } from "lucide-react"

import { Toggle } from "@/registry/default/ui/toggle"

export function ToggleOutline() {
  return (
    <Toggle variant="outline" aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </Toggle>
  )
}
export default ToggleOutline
