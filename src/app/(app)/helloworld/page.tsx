"use client"

import { composeRenderProps } from "react-aria-components"

import { cn } from "@/lib/utils"
import { Toggle, ToggleButtonGroup } from "@/registry/default/ui/toggle"

export default function Page() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <ToggleButtonGroup orientation="vertical">
        <Toggle>a</Toggle>
        <Toggle>World</Toggle>
        <Toggle>Hello</Toggle>
        <Toggle>World</Toggle>
      </ToggleButtonGroup>
    </div>
  )
}
