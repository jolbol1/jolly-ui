import { Button } from "@/registry/new-york/ui/button"
import {
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
} from "@/registry/new-york/ui/menu"

export default function DropdownMenuDemo() {
  return (
    <MenuTrigger>
      <Button aria-label="Menu">☰</Button>
      <MenuPopover>
        <Menu onAction={alert}>
          <MenuItem id="open">Open</MenuItem>
          <MenuItem id="rename">Rename…</MenuItem>
          <MenuItem id="duplicate">Duplicate</MenuItem>
          <MenuItem id="share">Share…</MenuItem>
          <MenuItem id="delete">Delete…</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}
