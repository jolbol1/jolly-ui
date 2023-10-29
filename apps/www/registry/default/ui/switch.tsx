"use client"

import * as React from "react"
import {
  Switch as RaSwitch,
  SwitchProps as RaSwitchProps,
} from "react-aria-components"

import { cn, cnv } from "@/lib/utils"

export interface SwitchProps extends RaSwitchProps {
  className?: string
}

const Switch = React.forwardRef<React.ElementRef<typeof RaSwitch>, SwitchProps>(
  ({ children, className, ...props }, ref) => (
    <RaSwitch
      className={(values) =>
        cnv(
          values,
          "group inline-flex items-center gap-2 text-sm font-medium leading-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70",
          className
        )
      }
      {...props}
      ref={ref}
    >
      {(values) => (
        <>
          <div className="h-[24px] w-[44px] shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-input transition-colors group-data-[selected]:bg-primary group-data-[disabled]:opacity-50 group-data-[focus-visible]:outline-none group-data-[focus-visible]:ring-2 group-data-[focus-visible]:ring-ring group-data-[focus-visible]:ring-offset-2 group-data-[focus-visible]:ring-offset-background">
            <div
              className={cn(
                "pointer-events-none block h-5 w-5 translate-x-0 rounded-full bg-background shadow-lg ring-0 transition-transform group-data-[selected]:translate-x-5"
              )}
            />
          </div>
          {typeof children === "function" ? children(values) : children}
        </>
      )}
    </RaSwitch>
  )
)
Switch.displayName = "Switch"

export { Switch }
