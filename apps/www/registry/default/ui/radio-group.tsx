"use client"

import * as React from "react"
import { Circle } from "lucide-react"
import { RadioGroup as RaRadioGroup, Radio } from "react-aria-components"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RaRadioGroup>,
  React.ComponentPropsWithoutRef<typeof RaRadioGroup>
>(({ className, ...props }, ref) => {
  return (
    <RaRadioGroup
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = "RadioGroup"

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof Radio>,
  React.ComponentPropsWithoutRef<typeof Radio> & { showRadio?: boolean }
>(({ className, children, showRadio = true, ...props }, ref) => {
  return (
    <Radio
      ref={ref}
      className={cn(
        "flex items-center text-sm font-medium leading-none text-primary ring-offset-background  focus:outline-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2",
        className
      )}
      {...props}
    >
      {({ isSelected }) => (
        <>
          {showRadio && (
            <span className="mr-3 flex aspect-square h-4 w-4 items-center justify-center rounded-full border border-primary">
              {isSelected && (
                <Circle className="h-2.5 w-2.5 fill-current text-current" />
              )}
            </span>
          )}
          {children}
        </>
      )}
    </Radio>
  )
})
RadioGroupItem.displayName = "Radio"

export { RadioGroup, RadioGroupItem }
