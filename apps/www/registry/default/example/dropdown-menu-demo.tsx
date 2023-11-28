import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Plus,
  Settings,
  User,
  Users,
} from "lucide-react"

import { Button } from "@/registry/default/ui/button"
import {
  Menu,
  MenuHeader,
  MenuItem,
  MenuKeyboard,
  MenuPopover,
  MenuSection,
  MenuSeparator,
  MenuTrigger,
} from "@/registry/default/ui/menu"

export default function DropdownMenuDemo() {
  return (
    <MenuTrigger>
      <Button variant="outline">Open</Button>
      <MenuPopover placement="top">
        <Menu className="w-56">
          <MenuSection>
            <MenuHeader separator>My Accounts</MenuHeader>
            <MenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <MenuKeyboard>⇧⌘P</MenuKeyboard>
            </MenuItem>
            <MenuItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <MenuKeyboard>⌘B</MenuKeyboard>
            </MenuItem>
            <MenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <MenuKeyboard>⌘S</MenuKeyboard>
            </MenuItem>
            <MenuItem>
              <Keyboard className="mr-2 h-4 w-4" />
              <span>Keyboard shortcuts</span>
              <MenuKeyboard>⌘K</MenuKeyboard>
            </MenuItem>
          </MenuSection>
          <MenuSeparator />
          <MenuSection>
            <MenuItem>
              <Users className="mr-2 h-4 w-4" />
              <span>Team</span>
            </MenuItem>
            <MenuItem>
              <Plus className="mr-2 h-4 w-4" />
              <span>New Team</span>
              <MenuKeyboard>⌘+T</MenuKeyboard>
            </MenuItem>
          </MenuSection>
          <MenuSeparator />
          <MenuItem>
            <Github className="mr-2 h-4 w-4" />
            <span>GitHub</span>
          </MenuItem>
          <MenuItem>
            <LifeBuoy className="mr-2 h-4 w-4" />
            <span>Support</span>
          </MenuItem>
          <MenuItem>
            <Cloud className="mr-2 h-4 w-4" />
            <span>API</span>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
            <MenuKeyboard>⇧⌘Q</MenuKeyboard>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}
