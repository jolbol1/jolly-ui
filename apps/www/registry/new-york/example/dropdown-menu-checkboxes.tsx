"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { Selection } from "react-aria-components"

import { Button } from "@/registry/new-york/ui/button"
import {
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/new-york/ui/dropdown-menu"

export default function DropdownMenuCheckboxes() {
  const [selected, setSelected] = React.useState<Selection>(
    new Set(["activity"])
  )

  return (
    <DropdownMenuTrigger>
      <Button variant="outline">Open</Button>
      <DropdownMenuContent
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
        className="w-56"
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel separator>Appearance</DropdownMenuLabel>
          <DropdownMenuCheckboxItem id="status">
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem id="activity">
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem id="panel">Panel</DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenuTrigger>
  )
}
