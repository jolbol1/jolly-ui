import { Bold } from "lucide-react"

import { Toggle } from "@/registry/new-york/ui/toggle"

export default function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <Bold className="size-4" />
    </Toggle>
  )
}
