import React from "react"
import type { Selection } from "react-aria-components"

import { Button } from "@/registry/default/ui/button"
import {
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
} from "@/registry/default/ui/menu"

export default function MenuSelectionMultiple() {
  let [selected, setSelected] = React.useState<Selection>(
    new Set(["sidebar", "console"])
  )

  return (
    <MenuTrigger>
      <Button variant="outline">View</Button>
      <MenuPopover>
        <Menu
          selectionMode="multiple"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          <MenuItem id="sidebar">Sidebar</MenuItem>
          <MenuItem id="searchbar">Searchbar</MenuItem>
          <MenuItem id="tools">Tools</MenuItem>
          <MenuItem id="console">Console</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}
