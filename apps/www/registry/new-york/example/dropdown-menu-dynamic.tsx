import React from "react"
import { Collection, type Selection } from "react-aria-components"

import { Button } from "@/registry/new-york/ui/button"
import {
  Menu,
  MenuCheckboxItem,
  MenuHeader,
  MenuPopover,
  MenuSection,
  MenuTrigger,
} from "@/registry/new-york/ui/menu"

export default function Example() {
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

  // items={openWindows}
  // selectionMode="multiple"
  // selectedKeys={selected}
  // onSelectionChange={setSelected}>
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
              <MenuHeader>{section.name}</MenuHeader>
              <Collection items={section.children}>
                {(item) => <MenuCheckboxItem>{item.name}</MenuCheckboxItem>}
              </Collection>
            </MenuSection>
          )}
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}
