"use client"

import { useEffect, useState } from "react"

import { useThemeStore } from "@/lib/use-theme-store"
import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"
import { Style, styles } from "@/registry/styles"

export function StyleSwitcher({ className }: { className?: string }) {
  const currentStyle = useThemeStore((state) => state.style)
  const updateStyle = useThemeStore((state) => state.setStyle)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return !mounted ? null : (
    <Select
      defaultSelectedKey={currentStyle}
      onSelectionChange={(key) => updateStyle(key as Style["name"])}
    >
      <SelectTrigger
        className={cn(
          "h-7 w-[145px] text-xs [&_svg]:h-4 [&_svg]:w-4",
          className
        )}
      >
        <span className="text-muted-foreground">Style: </span>
        <SelectValue placeholder="Select style" />
      </SelectTrigger>
      <SelectPopover>
        <SelectContent>
          {styles.map((style) => (
            <SelectItem key={style.name} id={style.name} className="text-xs">
              {style.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectPopover>
    </Select>
  )
}
