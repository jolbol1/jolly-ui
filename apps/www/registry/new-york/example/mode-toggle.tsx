"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/registry/new-york/ui/button"
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPopover,
  DropdownMenuTrigger,
} from "@/registry/new-york/ui/dropdown-menu"

export default function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenuTrigger>
      <Button variant="outline" size="icon">
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <DropdownMenuPopover placement="bottom end">
        <DropdownMenuContent onAction={(key) => setTheme(key as string)}>
          <DropdownMenuItem id="light">Light</DropdownMenuItem>
          <DropdownMenuItem id="dark">Dark</DropdownMenuItem>
          <DropdownMenuItem id="system">System</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPopover>
    </DropdownMenuTrigger>
  )
}
