import { Button } from "@/registry/new-york/ui/button"
import {
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
} from "@/registry/new-york/ui/menu"

export default function MenuDisabledKeys() {
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
        <Menu disabledKeys={[4, 6]} items={items}>
          {(item) => <MenuItem>{item.name}</MenuItem>}
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}
