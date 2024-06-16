"use client"

import { Circle } from "lucide-react"
import {
  Radio as AriaRadio,
  RadioGroup as AriaRadioGroup,
  RadioGroupProps as AriaRadioGroupProps,
  RadioProps as AriaRadioProps,
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

import { labelVariants } from "./label"

const RadioGroup = ({
  className,
  orientation = "vertical",
  ...props
}: AriaRadioGroupProps) => {
  return (
    <AriaRadioGroup
      className={composeRenderProps(className, (className) =>
        cn(
          {
            "grid gap-2": orientation === "vertical",
            "flex items-center gap-2": orientation === "horizontal",
          },
          className
        )
      )}
      {...props}
    />
  )
}

export interface RadioProps extends AriaRadioProps {
  showRadio?: boolean
}

const Radio = ({
  className,
  children,
  showRadio = true,
  ...props
}: RadioProps) => {
  return (
    <AriaRadio
      className={composeRenderProps(className, (className) =>
        cn(
          "group flex items-center gap-x-2",
          /* Focused */
          "data-[focused]:outline-none",
          labelVariants,
          className
        )
      )}
      {...props}
    >
      {composeRenderProps(children, (children, renderProps) => (
        <>
          {showRadio && (
            <span className="flex aspect-square size-4 items-center justify-center rounded-full border border-primary text-primary ring-offset-background group-data-[disabled]:opacity-50 group-data-[focus-visible]:ring-2 group-data-[focus-visible]:ring-ring group-data-[focus-visible]:ring-offset-2">
              {renderProps.isSelected && (
                <Circle className="size-2.5 fill-current text-current" />
              )}
            </span>
          )}
          {children}
        </>
      ))}
    </AriaRadio>
  )
}

export { RadioGroup, Radio }
