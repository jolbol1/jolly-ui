"use client"

import * as React from "react"
import { Selection } from "react-aria-components"

import { Button } from "@/registry/default/ui/button"
import {
  Menu,
  MenuHeader,
  MenuPopover,
  MenuRadioItem,
  MenuSection,
  MenuTrigger,
} from "@/registry/default/ui/menu"

export default function DropdownMenuRadioGroupDemo() {
  const [selected, setSelected] = React.useState<Selection>(new Set(["bottom"]))

  React.useEffect(() => {
    console.log("selected", selected)
  }, [selected])

  return (
    <MenuTrigger>
      <Button variant="outline">Open</Button>
      <MenuPopover placement="bottom">
        <Menu
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
          className="w-56"
        >
          <MenuSection>
            <MenuHeader separator>Panel Position</MenuHeader>
            <MenuRadioItem id="top">Top</MenuRadioItem>
            <MenuRadioItem id="bottom">Bottom</MenuRadioItem>
            <MenuRadioItem id="right">Right</MenuRadioItem>
          </MenuSection>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}
