import { FontItalicIcon } from "@radix-ui/react-icons"

import { Toggle } from "@/registry/new-york/ui/toggle"

export function ToggleLg() {
  return (
    <Toggle size="lg" aria-label="Toggle italic">
      <FontItalicIcon className="h-4 w-4" />
    </Toggle>
  )
}
export default ToggleLg
