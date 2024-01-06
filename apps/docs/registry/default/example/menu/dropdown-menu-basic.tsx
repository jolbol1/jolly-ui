import { Menu as MenuIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
} from "@/registry/default/ui/menu"

export function DropdownMenuDemo() {
  return (
    <MenuTrigger>
      <Button aria-label="Menu" size="icon">
        <MenuIcon className="h-4 w-4" />
      </Button>
      <MenuPopover>
        <Menu onAction={typeof window !== "undefined" ? alert : console.log}>
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
export default DropdownMenuDemo
