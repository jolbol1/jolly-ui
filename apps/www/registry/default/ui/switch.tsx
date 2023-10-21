"use client"

import * as React from "react"
import {
  Switch as RaSwitch,
  SwitchProps as RaSwitchProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

export interface SwitchProps extends RaSwitchProps {
  className?: string
}

const Switch = React.forwardRef<React.ElementRef<typeof RaSwitch>, SwitchProps>(
  ({ className, ...props }, ref) => (
    <RaSwitch
      className={cn(
        "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2 data-[focus-visible]:ring-offset-background data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[selected]:bg-primary bg-input",
        className
      )}
      {...props}
      ref={ref}
    >
      {({ isSelected }) => (
        <div
          className={cn(
            "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform translate-x-0",
            { "translate-x-5": isSelected }
          )}
        />
      )}
    </RaSwitch>
  )
)
Switch.displayName = "Switch"

export { Switch }
