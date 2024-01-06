import { UnderlineIcon } from "@radix-ui/react-icons"

import { Toggle } from "@/registry/new-york/ui/toggle"

export function ToggleDisabled() {
  return (
    <Toggle aria-label="Toggle italic" isDisabled>
      <UnderlineIcon className="h-4 w-4" />
    </Toggle>
  )
}
export default ToggleDisabled
