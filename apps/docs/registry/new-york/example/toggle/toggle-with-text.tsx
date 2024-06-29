import { Italic } from "lucide-react"

import { Toggle } from "@/registry/new-york/ui/toggle"

export default function ToggleWithText() {
  return (
    <Toggle aria-label="Toggle italic">
      <Italic className="mr-2 size-4" />
      Italic
    </Toggle>
  )
}
