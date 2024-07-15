import { MoveUp, Pencil } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import { Tooltip, TooltipTrigger } from "@/registry/default/ui/tooltip"

export default function TooltipOffset() {
  return (
    <TooltipTrigger>
      <Button variant="outline" size="icon" aria-label="Edit">
        <MoveUp className="size-4" />
      </Button>
      <Tooltip placement="top" offset={50}>
        This will shift up.
      </Tooltip>
    </TooltipTrigger>
  )
}
