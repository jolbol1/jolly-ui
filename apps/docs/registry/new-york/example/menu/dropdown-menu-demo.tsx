import { ChevronRightIcon } from "@radix-ui/react-icons"

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
  SubmenuTrigger,
} from "@/registry/new-york/ui/menu"

export function DropdownMenuFull() {
  return (
    <MenuTrigger>
      <Button variant="outline">Open</Button>
      <MenuPopover placement="top" className="min-w-[8rem]">
        <Menu className="w-56">
          <MenuSection>
            <MenuHeader separator>My Accounts</MenuHeader>
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
            <MenuItem>
              <span>Team</span>
            </MenuItem>
            <SubmenuTrigger>
              <MenuItem>
                <span>Invite users</span>
                <ChevronRightIcon className="ml-auto h-4 w-4" />
              </MenuItem>
              <MenuPopover className="min-w-[8rem]">
                <Menu>
                  <MenuItem>Email</MenuItem>
                  <MenuItem>Message</MenuItem>
                  <MenuSeparator />
                  <MenuItem>More...</MenuItem>
                </Menu>
              </MenuPopover>
            </SubmenuTrigger>
            <MenuItem>
              New Team
              <MenuKeyboard>⌘+T</MenuKeyboard>
            </MenuItem>
          </MenuSection>
          <MenuSeparator />
          <MenuItem>GitHub</MenuItem>
          <MenuItem>Support</MenuItem>
          <MenuItem>API</MenuItem>
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
