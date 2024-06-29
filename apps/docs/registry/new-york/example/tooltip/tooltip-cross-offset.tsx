import { MoveRight, MoveUp, Pencil } from "lucide-react"

import { Button } from "@/registry/new-york/ui/button"
import { Tooltip, TooltipTrigger } from "@/registry/new-york/ui/tooltip"

export default function TooltipOffset() {
  return (
    <TooltipTrigger>
      <Button variant="outline" size="icon" aria-label="Edit">
        <MoveRight className="h-4 w-4" />
      </Button>
      <Tooltip placement="bottom" crossOffset={60}>
        This will shift over to the right.
      </Tooltip>
    </TooltipTrigger>
  )
}
