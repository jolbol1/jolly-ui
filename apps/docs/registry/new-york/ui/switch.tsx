"use client"

import * as React from "react"
import { Switch, SwitchProps } from "react-aria-components"

import { cn, cnv } from "@/lib/utils"

const _Switch = ({ className, children, ...props }: SwitchProps) => (
  <Switch
    className={(values) =>
      cnv(
        values,
        "group inline-flex items-center gap-2 text-sm font-medium leading-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70",
        className
      )
    }
    {...props}
  >
    {(values) => (
      <>
        <div className="h-[20px] w-[36px] shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-input shadow-sm transition-colors group-data-[selected]:bg-primary group-data-[disabled]:opacity-50 group-data-[focus-visible]:outline-none group-data-[focus-visible]:ring-2 group-data-[focus-visible]:ring-ring group-data-[focus-visible]:ring-offset-2 group-data-[focus-visible]:ring-offset-background">
          <div
            className={cn(
              "pointer-events-none block h-4 w-4 translate-x-0 rounded-full bg-background shadow-lg ring-0 transition-transform group-data-[selected]:translate-x-4"
            )}
          />
        </div>
        {typeof children === "function" ? children(values) : children}
      </>
    )}
  </Switch>
)

export { _Switch as Switch }
