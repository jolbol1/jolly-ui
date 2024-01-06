"use client"

import { CheckIcon } from "@radix-ui/react-icons"
import {
  Radio,
  RadioGroup,
  RadioGroupProps,
  RadioProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"
import { labelVariants } from "@/registry/new-york/ui/label"

const _RadioGroup = ({
  className,
  orientation = "vertical",
  ...props
}: RadioGroupProps) => {
  return (
    <RadioGroup
      className={(values) =>
        cn(
          {
            "grid gap-2": orientation === "vertical",
            "flex items-center gap-2": orientation === "horizontal",
          },
          typeof className === "function" ? className(values) : className
        )
      }
      {...props}
    />
  )
}

export interface _RadioProps extends RadioProps {
  showRadio?: boolean
}

const _Radio = ({
  className,
  showRadio = true,
  children,
  ...props
}: _RadioProps) => {
  return (
    <Radio
      className={(values) =>
        cn(
          "group flex items-center gap-x-2 data-[focused]:outline-none ",
          labelVariants,
          typeof className === "function" ? className(values) : className
        )
      }
      {...props}
    >
      {(values) => (
        <>
          {showRadio && (
            <span className="flex aspect-square h-4 w-4 items-center justify-center rounded-full border  border-primary text-primary shadow data-[disabled]:opacity-50 group-data-[focus-visible]:ring-1 group-data-[focus-visible]:ring-ring">
              {values.isSelected && (
                <CheckIcon className="h-3.5 w-3.5 fill-primary" />
              )}
            </span>
          )}
          {typeof children === "function" ? children(values) : children}
        </>
      )}
    </Radio>
  )
}

export { _RadioGroup as RadioGroup, _Radio as Radio }
