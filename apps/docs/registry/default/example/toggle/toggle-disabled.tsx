import { Underline } from "lucide-react"

import { Toggle } from "@/registry/default/ui/toggle"

export function ToggleDisabled() {
  return (
    <Toggle aria-label="Toggle italic" isDisabled>
      <Underline className="h-4 w-4" />
    </Toggle>
  )
}
export default ToggleDisabled
