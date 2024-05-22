import { ChevronRight, Menu as MenuIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
  SubmenuTrigger,
} from "@/registry/default/ui/menu"

let items = [
  { id: "cut", name: "Cut" },
  { id: "copy", name: "Copy" },
  { id: "delete", name: "Delete" },
  {
    id: "share",
    name: "Share",
    children: [
      { id: "sms", name: "SMS" },
      { id: "twitter", name: "Twitter" },
      {
        id: "email",
        name: "Email",
        children: [
          { id: "work", name: "Work" },
          { id: "personal", name: "Personal" },
        ],
      },
    ],
  },
]

export function DropdownMenuSubDynamic() {
  return (
    <MenuTrigger>
      <Button aria-label="Menu" size="icon">
        <MenuIcon className="h-4 w-4" />
      </Button>
      <MenuPopover className="min-w-[8rem]">
        <Menu
          items={items}
          onAction={typeof window !== "undefined" ? alert : console.log}
        >
          {function renderSubmenu(item) {
            if (item.children) {
              return (
                <SubmenuTrigger>
                  <MenuItem key={item.name}>
                    {item.name} <ChevronRight className="ml-auto h-4 w-4" />
                  </MenuItem>
                  <MenuPopover className="min-w-[8rem]">
                    <Menu items={item.children}>
                      {(item) => renderSubmenu(item)}
                    </Menu>
                  </MenuPopover>
                </SubmenuTrigger>
              )
            } else {
              return <MenuItem key={item.name}>{item.name}</MenuItem>
            }
          }}
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}
export default DropdownMenuSubDynamic
