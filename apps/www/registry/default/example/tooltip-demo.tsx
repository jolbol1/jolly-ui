import { Button } from "@/registry/default/ui/button"
import { Tooltip, TooltipTrigger } from "@/registry/default/ui/tooltip"

export default function TooltipDemo() {
  return (
    <TooltipTrigger>
      <Button variant="outline">Hover</Button>
      <Tooltip>
        <p>Add to library</p>
      </Tooltip>
    </TooltipTrigger>
  )
}
