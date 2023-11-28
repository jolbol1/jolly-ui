import { Button } from "@/registry/new-york/ui/button"
import {
  Menu,
  MenuHeader,
  MenuItem,
  MenuPopover,
  MenuSection,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/new-york/ui/menu"

export default function DropdownMenuDemo() {
  return (
    <MenuTrigger>
      <Button variant="outline">Open</Button>
      <MenuPopover>
        <Menu>
          <MenuSection>
            <MenuHeader separator>Styles</MenuHeader>
            <MenuItem>Bold</MenuItem>
            <MenuItem>Underline</MenuItem>
          </MenuSection>
          <MenuSeparator />
          <MenuSection>
            <MenuHeader separator>Align</MenuHeader>
            <MenuItem>Left</MenuItem>
            <MenuItem>Middle</MenuItem>
            <MenuItem>Right</MenuItem>
          </MenuSection>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}
