import { Button } from "@/registry/default/ui/button"
import { Tooltip, TooltipTrigger } from "@/registry/default/ui/tooltip"

export default function TooltipPosition() {
  return (
    <div className="flex gap-4">
      <TooltipTrigger>
        <Button variant="outline">Left</Button>
        <Tooltip placement="start">
          <p>Add to library</p>
        </Tooltip>
      </TooltipTrigger>
      <TooltipTrigger>
        <Button variant="outline">Up</Button>
        <Tooltip placement="top">
          <p>Add to library</p>
        </Tooltip>
      </TooltipTrigger>
      <TooltipTrigger>
        <Button variant="outline">Down</Button>
        <Tooltip placement="bottom">
          <p>Add to library</p>
        </Tooltip>
      </TooltipTrigger>
      <TooltipTrigger>
        <Button variant="outline">Right</Button>
        <Tooltip placement="end">
          <p>Add to library</p>
        </Tooltip>
      </TooltipTrigger>
    </div>
  )
}
