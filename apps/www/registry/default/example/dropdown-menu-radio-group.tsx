"use client"

import * as React from "react"
import { Selection } from "react-aria-components"

import { Button } from "@/registry/default/ui/button"
import {
  DropdownMenuContent,
  DropdownMenuHeader,
  DropdownMenuPopover,
  DropdownMenuRadioItem,
  DropdownMenuSection,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"

export default function DropdownMenuRadioGroupDemo() {
  const [selected, setSelected] = React.useState<Selection>(new Set(["bottom"]))

  React.useEffect(() => {
    console.log("selected", selected)
  }, [selected])

  return (
    <DropdownMenuTrigger>
      <Button variant="outline">Open</Button>
      <DropdownMenuPopover placement="bottom">
        <DropdownMenuContent
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
          className="w-56"
        >
          <DropdownMenuSection>
            <DropdownMenuHeader separator>Panel Position</DropdownMenuHeader>
            <DropdownMenuRadioItem id="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem id="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem id="right">Right</DropdownMenuRadioItem>
          </DropdownMenuSection>
        </DropdownMenuContent>
      </DropdownMenuPopover>
    </DropdownMenuTrigger>
  )
}
