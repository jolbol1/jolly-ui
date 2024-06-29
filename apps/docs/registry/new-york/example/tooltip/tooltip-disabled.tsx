import { Pencil } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"
import { Tooltip, TooltipTrigger } from "@/registry/new-york/ui/tooltip"

export default function TooltipDisabled() {
  return (
    <TooltipTrigger isDisabled>
      <Button variant="outline" size="icon" aria-label="Edit">
        <Pencil className="h-4 w-4" />
      </Button>
      <Tooltip>Edit</Tooltip>
    </TooltipTrigger>
  )
}
