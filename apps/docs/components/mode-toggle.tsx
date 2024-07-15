"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import {
  syncBorderRadius,
  syncFontFamily,
  syncGrayColor,
  syncThemeColor,
} from "@/lib/use-theme-generator"
import { useThemeStore } from "@/lib/use-theme-store"
import { Button } from "@/registry/new-york/ui/button"
import {
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
} from "@/registry/new-york/ui/menu"

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const currentGrayColor = useThemeStore((state) => state.grayColor)
  const currentAccentColor = useThemeStore((state) => state.accentColor)
  const currentFontFamily = useThemeStore((state) => state.fontFamily)
  const currentBorderRadius = useThemeStore((state) => state.borderRadius)

  React.useEffect(() => {
    syncGrayColor(currentGrayColor, resolvedTheme)
  }, [currentGrayColor, resolvedTheme])

  React.useEffect(() => {
    syncThemeColor(currentAccentColor, resolvedTheme)
  }, [currentAccentColor, resolvedTheme])

  React.useEffect(() => {
    syncFontFamily(currentFontFamily)
  }, [currentFontFamily])

  React.useEffect(() => {
    syncBorderRadius(currentBorderRadius)
  }, [currentBorderRadius])

  return (
    <MenuTrigger>
      <Button variant="ghost" className="w-9 px-0">
        <SunIcon className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
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
