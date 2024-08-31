import { ArrowUpIcon } from "@radix-ui/react-icons"

import { Button } from "@/registry/new-york/ui/button"
import { Tooltip, TooltipTrigger } from "@/registry/new-york/ui/tooltip"

export default function TooltipOffset() {
  return (
    <TooltipTrigger>
      <Button variant="outline" size="icon" aria-label="Edit">
        <ArrowUpIcon className="size-4" />
      </Button>
      <Tooltip placement="top" offset={50}>
        This will shift up.
      </Tooltip>
    </TooltipTrigger>
  )
}
