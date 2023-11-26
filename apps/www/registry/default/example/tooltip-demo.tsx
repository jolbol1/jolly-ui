import { Pencil } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import { Tooltip, TooltipTrigger } from "@/registry/default/ui/tooltip"

export default function TooltipDemo() {
  return (
    <TooltipTrigger>
      <Button variant="outline" size="icon">
        <Pencil className="h-4 w-4" />
      </Button>
      <Tooltip>Edit</Tooltip>
    </TooltipTrigger>
  )
}
