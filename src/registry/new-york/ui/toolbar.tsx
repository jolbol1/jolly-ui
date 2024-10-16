"use client"

import React from "react"
import {
  Toolbar as AriaToolbar,
  composeRenderProps,
  ToolbarProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

export function Toolbar(props: ToolbarProps) {
  return (
    <AriaToolbar
      {...props}
      className={composeRenderProps(props.className, (className) =>
        cn(
          "flex gap-2",
          /* Orientation */
          "data-[orientation=vertical]:flex-col",
          className
        )
      )}
    />
  )
}
