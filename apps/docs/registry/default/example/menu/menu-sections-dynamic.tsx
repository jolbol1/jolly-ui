import React from "react"
import { Selection } from "react-aria-components"

import { Button } from "@/registry/default/ui/button"
import {
  Menu,
  MenuCollection,
  MenuHeader,
  MenuItem,
  MenuPopover,
  MenuSection,
  MenuTrigger,
} from "@/registry/default/ui/menu"

export default function MenuSectionsDynamic() {
  let [selected, setSelected] = React.useState<Selection>(new Set([1, 3]))
  let openWindows = [
    {
      name: "Left Panel",
      id: "left",
      children: [{ id: 1, name: "Final Copy (1)" }],
    },
    {
      name: "Right Panel",
      id: "right",
      children: [
        { id: 2, name: "index.ts" },
        { id: 3, name: "package.json" },
        { id: 4, name: "license.txt" },
      ],
    },
  ]

  return (
    <MenuTrigger>
      <Button variant="outline">Window</Button>
      <MenuPopover>
        <Menu
          items={openWindows}
          selectionMode="multiple"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          {(section) => (
            <MenuSection>
              <MenuHeader separator={false}>{section.name}</MenuHeader>
              <MenuCollection items={section.children}>
                {(item) => <MenuItem>{item.name}</MenuItem>}
              </MenuCollection>
            </MenuSection>
          )}
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}
