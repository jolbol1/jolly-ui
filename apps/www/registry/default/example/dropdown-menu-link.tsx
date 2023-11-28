import { Button } from "@/registry/default/ui/button"
import {
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
} from "@/registry/default/ui/menu"

export default function DropdownMenuDemo() {
  return (
    <MenuTrigger>
      <Button variant="outline" aria-label="Links">
        Links
      </Button>
      <MenuPopover>
        <Menu>
          <MenuItem href="../../../docs/components/button">Button</MenuItem>
          <MenuItem href="../../../docs/components/label">Label</MenuItem>
          <MenuItem href="../../../docs/components/input">Input</MenuItem>
          <MenuItem href="../../../docs/components/textarea">TextArea</MenuItem>
          <MenuItem href="../../../docs/components/textfield">
            TextField
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}
