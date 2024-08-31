import { Button } from "@/registry/default/ui/button"
import {
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
} from "@/registry/default/ui/menu"

export default function MenuDemo() {
  return (
    <MenuTrigger>
      <Button aria-label="Menu" size="icon" variant="outline">
        ☰
      </Button>
      <MenuPopover>
        <Menu>
          <MenuItem onAction={() => alert("open")}>Open</MenuItem>
          <MenuItem onAction={() => alert("rename")}>Rename…</MenuItem>
          <MenuItem onAction={() => alert("duplicate")}>Duplicate</MenuItem>
          <MenuItem onAction={() => alert("share")}>Share…</MenuItem>
          <MenuItem onAction={() => alert("delete")}>Delete…</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}
