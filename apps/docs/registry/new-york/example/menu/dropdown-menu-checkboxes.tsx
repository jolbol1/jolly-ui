"use client"

import * as React from "react"
import { Selection } from "react-aria-components"

import { Button } from "@/registry/new-york/ui/button"
import {
  Menu,
  MenuCheckboxItem,
  MenuHeader,
  MenuPopover,
  MenuSection,
  MenuTrigger,
} from "@/registry/new-york/ui/menu"

export function DropdownMenuCheckboxes() {
  const [selected, setSelected] = React.useState<Selection>(new Set(["status"]))

  return (
    <MenuTrigger>
      <Button variant="outline">Open</Button>
      <MenuPopover placement="bottom" className="min-w-[8rem]">
        <Menu
          selectionMode="multiple"
          selectedKeys={selected}
          onSelectionChange={setSelected}
          disabledKeys={["activity"]}
          className="w-56"
        >
          <MenuSection>
            <MenuHeader separator>Appearance</MenuHeader>
            <MenuCheckboxItem id="status">Status Bar</MenuCheckboxItem>
            <MenuCheckboxItem id="activity">Activity Bar</MenuCheckboxItem>
            <MenuCheckboxItem id="panel">Panel</MenuCheckboxItem>
          </MenuSection>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}
export default DropdownMenuCheckboxes
