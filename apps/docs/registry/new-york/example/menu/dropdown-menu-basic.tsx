import { Button } from "@/registry/new-york/ui/button"
import {
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
} from "@/registry/new-york/ui/menu"

export function DropdownMenuDemo() {
  return (
    <MenuTrigger>
      <Button aria-label="Menu">☰</Button>
      <MenuPopover className="min-w-[8rem]">
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
