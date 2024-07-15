import { Button } from "@/registry/new-york/ui/button"
import {
  Menu,
  MenuHeader,
  MenuItem,
  MenuPopover,
  MenuSection,
  MenuTrigger,
} from "@/registry/new-york/ui/menu"

export default function MenuSections() {
  return (
    <MenuTrigger>
      <Button variant="outline">Actions</Button>
      <MenuPopover>
        <Menu>
          <MenuSection>
            <MenuHeader>Styles</MenuHeader>
            <MenuItem>Bold</MenuItem>
            <MenuItem>Underline</MenuItem>
          </MenuSection>
          <MenuSection>
            <MenuHeader separator={false}>Align</MenuHeader>
            <MenuItem>Left</MenuItem>
            <MenuItem>Middle</MenuItem>
            <MenuItem>Right</MenuItem>
          </MenuSection>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}
