import { Button } from "@/registry/new-york/ui/button"
import {
  Menu,
  MenuHeader,
  MenuItem,
  MenuKeyboard,
  MenuPopover,
  MenuSection,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/new-york/ui/menu"

export function DropdownMenuFull() {
  return (
    <MenuTrigger>
      <Button variant="outline">Open</Button>
      <MenuPopover placement="top">
        <Menu disabledKeys={["api"]} className="w-56">
          <MenuSection>
            <MenuHeader separator>My Account</MenuHeader>
            <MenuItem>
              Profile
              <MenuKeyboard>⇧⌘P</MenuKeyboard>
            </MenuItem>
            <MenuItem>
              Billing
              <MenuKeyboard>⌘B</MenuKeyboard>
            </MenuItem>
            <MenuItem>
              Settings
              <MenuKeyboard>⌘S</MenuKeyboard>
            </MenuItem>
            <MenuItem>
              Keyboard shortcuts
              <MenuKeyboard>⌘K</MenuKeyboard>
            </MenuItem>
          </MenuSection>
          <MenuSeparator />
          <MenuSection>
            <MenuItem>Team</MenuItem>
            <MenuItem>
              New Team
              <MenuKeyboard>⌘+T</MenuKeyboard>
            </MenuItem>
          </MenuSection>
          <MenuSeparator />
          <MenuItem>GitHub</MenuItem>
          <MenuItem>Support</MenuItem>
          <MenuItem id="api">API</MenuItem>
          <MenuSeparator />
          <MenuItem>
            Log out
            <MenuKeyboard>⇧⌘Q</MenuKeyboard>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}
export default DropdownMenuFull
