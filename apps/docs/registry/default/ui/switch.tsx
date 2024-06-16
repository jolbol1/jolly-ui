"use client"

import * as React from "react"
import {
  Switch as AriaSwitch,
  SwitchProps as AriaSwitchProps,
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const Switch = ({ children, className, ...props }: AriaSwitchProps) => (
  <AriaSwitch
    className={composeRenderProps(className, (className) =>
      cn(
        "group inline-flex items-center gap-2 text-sm font-medium leading-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70",
        className
      )
    )}
    {...props}
  >
    {composeRenderProps(children, (children) => (
      <>
        <div className="h-[24px] w-[44px] shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-input transition-colors group-data-[selected]:bg-primary group-data-[disabled]:opacity-50 group-data-[focus-visible]:outline-none group-data-[focus-visible]:ring-2 group-data-[focus-visible]:ring-ring group-data-[focus-visible]:ring-offset-2 group-data-[focus-visible]:ring-offset-background">
          <div
            className={cn(
              "pointer-events-none block size-5 translate-x-0 rounded-full bg-background shadow-lg ring-0 transition-transform group-data-[selected]:translate-x-5"
            )}
          />
        </div>
        {children}
      </>
    ))}
  </AriaSwitch>
)

export { Switch }
