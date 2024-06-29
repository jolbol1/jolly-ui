"use client"

import { Button } from "@/registry/default/ui/button"
import { DialogTrigger } from "@/registry/default/ui/dialog"
import { Popover, PopoverDialog } from "@/registry/default/ui/popover"
import { Switch } from "@/registry/default/ui/switch"
import { Tooltip, TooltipTrigger } from "@/registry/default/ui/tooltip"

export default function Page() {
  return (
    <div className="flex h-screen w-full flex-wrap items-center justify-center gap-6">
      <TooltipDemo />
    </div>
  )
}

function TooltipDemo() {
  return (
    <TooltipTrigger>
      <Button variant="outline" size="icon">
        ✏️
      </Button>
      <Tooltip>Edit</Tooltip>
    </TooltipTrigger>
  )
}
