"use client"

import * as React from "react"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"

import { Button } from "@/registry/new-york/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/new-york/ui/command"
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

const labels = [
  "feature",
  "bug",
  "enhancement",
  "documentation",
  "design",
  "question",
  "maintenance",
]

export default function ComboboxDropdownMenu() {
  const [label, setLabel] = React.useState("feature")
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center">
      <p className="text-sm font-medium leading-none">
        <span className="mr-2 rounded-lg bg-primary px-2 py-1 text-xs text-primary-foreground">
          {label}
        </span>
        <span className="text-muted-foreground">Create a new project</span>
      </p>
      <MenuTrigger isOpen={open} onOpenChange={setOpen}>
        <Button variant="ghost" size="sm">
          <DotsHorizontalIcon />
        </Button>
        <MenuPopover placement="bottom end">
          <Menu className="w-[200px]">
            <MenuHeader>Actions</MenuHeader>
            <MenuSection>
              <MenuItem>Assign to...</MenuItem>
              <MenuItem>Set due date...</MenuItem>
              <MenuSeparator />
              <MenuSeparator />
              <MenuItem className="text-red-600">
                Delete
                <MenuKeyboard>⌘⌫</MenuKeyboard>
              </MenuItem>
            </MenuSection>
          </Menu>
        </MenuPopover>
      </MenuTrigger>
    </div>
  )
}
