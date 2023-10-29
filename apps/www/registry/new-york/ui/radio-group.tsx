"use client"

import * as React from "react"
import { CheckIcon } from "@radix-ui/react-icons"
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
>(({ className, showRadio = true, children, ...props }, ref) => {
  return (
    <Radio
      ref={ref}
      className={cn(
        "flex items-center text-sm font-medium leading-none text-primary shadow focus:outline-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[focus-visible]:ring-1 data-[focus-visible]:ring-ring",
        className
      )}
      {...props}
    >
      {({ isSelected }) => (
        <>
          {showRadio && (
            <span className="mr-3 flex aspect-square h-4 w-4 items-center justify-center rounded-full border border-primary">
              {isSelected && <CheckIcon className="h-3.5 w-3.5 fill-primary" />}
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
