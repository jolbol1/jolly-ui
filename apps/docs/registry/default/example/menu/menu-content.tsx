import { Button } from "@/registry/default/ui/button"
import {
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
} from "@/registry/default/ui/menu"

export default function MenuContent() {
  let items = [
    { id: 1, name: "New" },
    { id: 2, name: "Open" },
    { id: 3, name: "Close" },
    { id: 4, name: "Save" },
    { id: 5, name: "Duplicate" },
    { id: 6, name: "Rename" },
    { id: 7, name: "Move" },
  ]

  return (
    <MenuTrigger>
      <Button variant="outline">Actions</Button>
      <MenuPopover>
        <Menu items={items}>{(item) => <MenuItem>{item.name}</MenuItem>}</Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}
