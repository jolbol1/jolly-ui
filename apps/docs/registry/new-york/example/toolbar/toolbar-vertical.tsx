"use client"

import {
  CursorArrowIcon,
  MagicWandIcon,
  MoveIcon,
  Pencil1Icon,
  Pencil2Icon,
} from "@radix-ui/react-icons"
import { Group } from "react-aria-components"

import { Button } from "@/registry/new-york/ui/button"
import { Separator } from "@/registry/new-york/ui/separator"
import { Toolbar } from "@/registry/new-york/ui/toolbar"

export default function ToolbarVerticalDemo() {
  return (
    <Toolbar aria-label="Tools" orientation="vertical">
      <Group aria-label="Select" className="flex flex-col gap-2">
        <Button variant="outline" size="icon" aria-label="Move">
          <MoveIcon className="size-4" />
        </Button>
        <Button variant="outline" size="icon" aria-label="Rectangle">
          <CursorArrowIcon className="size-4" />
        </Button>
        <Button variant="outline" size="icon" aria-label="Polygon">
          <MagicWandIcon className="size-4" />
        </Button>
      </Group>
      <Separator orientation="horizontal" />
      <Group aria-label="Draw" className={"flex flex-col gap-2"}>
        <Button variant="outline" size="icon" aria-label="Brush">
          <Pencil2Icon className="size-4" />
        </Button>
        <Button variant="outline" size="icon" aria-label="Pencil">
          <Pencil1Icon className="size-4" />
        </Button>
      </Group>
    </Toolbar>
  )
}
