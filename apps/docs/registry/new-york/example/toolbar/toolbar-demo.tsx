"use client"

import {
  FontBoldIcon,
  FontItalicIcon,
  UnderlineIcon,
} from "@radix-ui/react-icons"
import { Group } from "react-aria-components"

import { Button } from "@/registry/new-york/ui/button"
import { Checkbox } from "@/registry/new-york/ui/checkbox"
import { Separator } from "@/registry/new-york/ui/separator"
import { Toggle } from "@/registry/new-york/ui/toggle"
import { Toolbar } from "@/registry/new-york/ui/toolbar"

export default function ToolbarDemo() {
  return (
    <Toolbar aria-label="Text formatting">
      <Group aria-label="Style" className="space-x-2">
        <Toggle className="w-10" variant="outline" aria-label="Bold">
          <FontBoldIcon className="size-4" />
        </Toggle>
        <Toggle className="w-10" variant="outline" aria-label="Italic">
          <FontItalicIcon className="size-4" />
        </Toggle>
        <Toggle className="w-10" variant="outline" aria-label="Underline">
          <UnderlineIcon className="size-4" />
        </Toggle>
      </Group>
      <Separator orientation="vertical" />
      <Group aria-label="Clipboard" className={"space-x-2"}>
        <Button variant="outline">Copy</Button>
        <Button variant="outline">Paste</Button>
        <Button variant="outline">Cut</Button>
      </Group>
      <Separator orientation="vertical" />
      <Checkbox>Night Mode</Checkbox>
    </Toolbar>
  )
}
