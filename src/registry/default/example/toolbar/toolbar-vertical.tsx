"use client"

import { Brush, LassoSelect, MousePointer2, Move, Pencil } from "lucide-react"
import { Group } from "react-aria-components"

import { Button } from "@/registry/default/ui/button"
import { Separator } from "@/registry/default/ui/separator"
import { Toolbar } from "@/registry/default/ui/toolbar"

export default function ToolbarVerticalDemo() {
  return (
    <Toolbar aria-label="Tools" orientation="vertical">
      <Group aria-label="Select" className="flex flex-col gap-2">
        <Button variant="outline" size="icon" aria-label="Move">
          <Move className="size-4" />
        </Button>
        <Button variant="outline" size="icon" aria-label="Rectangle">
          <MousePointer2 className="size-4" />
        </Button>
        <Button variant="outline" size="icon" aria-label="Polygon">
          <LassoSelect className="size-4" />
        </Button>
      </Group>
      <Separator orientation="horizontal" />
      <Group aria-label="Draw" className={"flex flex-col gap-2"}>
        <Button variant="outline" size="icon" aria-label="Brush">
          <Brush className="size-4" />
        </Button>
        <Button variant="outline" size="icon" aria-label="Pencil">
          <Pencil className="size-4" />
        </Button>
      </Group>
    </Toolbar>
  )
}
