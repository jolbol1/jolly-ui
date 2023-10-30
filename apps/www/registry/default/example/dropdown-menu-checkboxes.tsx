"use client"

import * as React from "react"
import { type Selection } from "react-aria-components"

import { Button } from "@/registry/default/ui/button"
import {
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuHeader,
  DropdownMenuPopover,
  DropdownMenuSection,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"

export default function DropdownMenuCheckboxes() {
  const [selected, setSelected] = React.useState<Selection>(new Set(["status"]))

  return (
    <DropdownMenuTrigger>
      <Button variant="outline">Open</Button>
      <DropdownMenuPopover placement="bottom">
        <DropdownMenuContent
          selectionMode="multiple"
          selectedKeys={selected}
          onSelectionChange={setSelected}
          className="w-56"
          disabledKeys={["activity"]}
        >
          <DropdownMenuSection>
            <DropdownMenuHeader separator>Appearance</DropdownMenuHeader>
            <DropdownMenuCheckboxItem id="status">
              Status Bar
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem id="activity">
              Activity Bar
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem id="panel">
              Panel
            </DropdownMenuCheckboxItem>
          </DropdownMenuSection>
        </DropdownMenuContent>
      </DropdownMenuPopover>
    </DropdownMenuTrigger>
  )
}
