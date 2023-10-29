"use client"

import * as React from "react"
import { type SelectTriggerProps } from "@radix-ui/react-select"

import { cn } from "@/lib/utils"
import { useConfig } from "@/hooks/use-config"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"
import { Style, styles } from "@/registry/styles"

export function StyleSwitcher({ className }: SelectTriggerProps) {
  const [config, setConfig] = useConfig()

  return (
    <Select
      defaultSelectedKey={config.style}
      onSelectionChange={(key) =>
        setConfig({
          ...config,
          style: key as Style["name"],
        })
      }
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
      <SelectContent>
        {styles.map((style) => (
          <SelectItem key={style.name} id={style.name} className="text-xs">
            {style.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
