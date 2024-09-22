"use client"

import { useEffect, useState } from "react"

import { useThemeStore } from "@/lib/use-theme-store"
import { cn } from "@/lib/utils"
import {
  Select,
  SelectItem,
  SelectListBox,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"
import { Style, styles } from "@/registry/styles"

export function StyleSwitcher({
  className,
  isDisabled,
}: {
  className?: string
  isDisabled?: boolean
}) {
  const currentStyle = useThemeStore((state) => state.style)
  const updateStyle = useThemeStore((state) => state.setStyle)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return !mounted ? null : (
    <Select
      aria-label="Select Style"
      isDisabled={isDisabled}
      placeholder="Select style"
      defaultSelectedKey={currentStyle}
      onSelectionChange={(key) => updateStyle(key as Style["name"])}
    >
      <SelectTrigger
        className={cn("h-7 w-[145px] text-xs [&_svg]:size-4", className)}
      >
        <span className="text-muted-foreground">Style: </span>
        <SelectValue />
      </SelectTrigger>
      <SelectPopover>
        <SelectListBox>
          {styles.map((style) => (
            <SelectItem
              textValue={style.name}
              key={style.name}
              id={style.name}
              className="text-xs"
            >
              {style.label}
            </SelectItem>
          ))}
        </SelectListBox>
      </SelectPopover>
    </Select>
  )
}
