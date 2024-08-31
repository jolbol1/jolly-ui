"use client"

import * as React from "react"

import { useThemeStore } from "@/lib/use-theme-store"
import { Style } from "@/registry/styles"

interface StyleWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  styleName?: Style["name"]
}

export function StyleWrapper({ styleName, children }: StyleWrapperProps) {
  const currentStyle = useThemeStore((state) => state.style)

  if (!styleName || currentStyle === styleName) {
    return <>{children}</>
  }

  return null
}
