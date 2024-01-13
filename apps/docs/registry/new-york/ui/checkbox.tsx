"use client"

import { CheckIcon, MinusIcon } from "@radix-ui/react-icons"
import {
  Checkbox,
  CheckboxGroup,
  type CheckboxProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"
import { labelVariants } from "@/registry/new-york/ui/label"

const _CheckboxGroup = CheckboxGroup

const _Checkbox = ({ className, children, ...props }: CheckboxProps) => (
  <Checkbox
    className={(values) =>
      cn(
        "group flex items-center gap-x-2 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 ",
        labelVariants,
        typeof className === "function" ? className(values) : className
      )
    }
    {...props}
  >
    {(values) => (
      <>
        <div className="flex h-4 w-4 shrink-0 rounded-sm border border-primary shadow group-data-[indeterminate]:bg-primary group-data-[selected]:bg-primary group-data-[indeterminate]:text-primary-foreground group-data-[selected]:text-primary-foreground group-data-[focus-visible]:outline-none group-data-[focus-visible]:ring-1 group-data-[focus-visible]:ring-ring">
          {values.isIndeterminate ? (
            <MinusIcon className="h-[0.875rem] w-[0.875rem]" />
          ) : values.isSelected ? (
            <CheckIcon className="h-4 w-4" />
          ) : null}
        </div>
        {typeof children === "function" ? children(values) : children}
      </>
    )}
  </Checkbox>
)

export { _Checkbox as Checkbox, _CheckboxGroup as CheckboxGroup }
