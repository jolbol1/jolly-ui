import { Pencil } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import { Tooltip, TooltipTrigger } from "@/registry/default/ui/tooltip"

export default function TooltipDisabled() {
  return (
    <TooltipTrigger isDisabled>
      <Button variant="outline" size="icon" aria-label="Edit">
        <Pencil className="size-4" />
      </Button>
      <Tooltip>Edit</Tooltip>
    </TooltipTrigger>
  )
}
