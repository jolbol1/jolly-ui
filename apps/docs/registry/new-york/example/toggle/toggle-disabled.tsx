import { Underline } from "lucide-react"

import { Toggle } from "@/registry/new-york/ui/toggle"

export default function ToggleDisabled() {
  return (
    <Toggle aria-label="Toggle italic" isDisabled>
      <Underline className="size-4" />
    </Toggle>
  )
}
