import { Button } from "@/registry/default/ui/button"
import {
  Menu,
  MenuItem,
  MenuPopover,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/default/ui/menu"

export default function MenuSeparators() {
  return (
    <MenuTrigger>
      <Button variant="outline">Actions</Button>
      <MenuPopover>
        <Menu>
          <MenuItem>New…</MenuItem>
          <MenuItem>Open…</MenuItem>
          <MenuSeparator />
          <MenuItem>Save</MenuItem>
          <MenuItem>Save as…</MenuItem>
          <MenuItem>Rename…</MenuItem>
          <MenuSeparator />
          <MenuItem>Page setup…</MenuItem>
          <MenuItem>Print…</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}
