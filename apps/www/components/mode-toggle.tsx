"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/registry/new-york/ui/button"
import {
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
} from "@/registry/new-york/ui/menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <MenuTrigger>
      <Button variant="ghost" className="w-9 px-0">
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <MenuPopover placement="bottom end">
        <Menu
          onAction={(key) => {
            setTheme(key as string)
          }}
        >
          <MenuItem id="light">Light</MenuItem>
          <MenuItem id="dark">Dark</MenuItem>
          <MenuItem id="system">System</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}
