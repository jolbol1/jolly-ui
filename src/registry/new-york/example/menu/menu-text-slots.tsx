"use client"

import { Text } from "react-aria-components"

import { Button } from "@/registry/new-york/ui/button"
import {
  Menu,
  MenuItem,
  MenuKeyboard,
  MenuPopover,
  MenuTrigger,
} from "@/registry/new-york/ui/menu"

export default function MenuTextSlots() {
  return (
    <MenuTrigger>
      <Button variant="outline">Actions</Button>
      <MenuPopover>
        <Menu>
          <MenuItem className="flex gap-2" textValue="Copy">
            <span className="flex flex-col items-start gap-1">
              <Text slot="label">Copy</Text>
              <Text
                className="text-sm text-muted-foreground"
                slot="description"
              >
                Copy the selected text
              </Text>
            </span>
            <MenuKeyboard>⌘C</MenuKeyboard>
          </MenuItem>
          <MenuItem textValue="Cut">
            <span className="flex flex-col items-start gap-1">
              <Text slot="label">Cut</Text>
              <Text
                className="text-sm text-muted-foreground"
                slot="description"
              >
                Cut the selected text
              </Text>
            </span>
            <MenuKeyboard>⌘X</MenuKeyboard>
          </MenuItem>
          <MenuItem textValue="Paste">
            <span className="flex flex-col items-start gap-1">
              <Text slot="label">Paste</Text>
              <Text
                className="text-sm text-muted-foreground"
                slot="description"
              >
                Paste the copied text
              </Text>
            </span>
            <MenuKeyboard>⌘V</MenuKeyboard>
          </MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}
