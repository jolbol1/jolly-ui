"use client"

import * as React from "react"
import { Check, ChevronDown } from "lucide-react"
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
  Collection as AriaCollection,
  Header as AriaHeader,
  ListBox as AriaListBox,
  ListBoxItem as AriaListBoxItem,
  ListBoxItemProps as AriaListBoxItemProps,
  ListBoxProps as AriaListBoxProps,
  Popover as AriaPopover,
  PopoverProps as AriaPopoverProps,
  Section as AriaSection,
  Select as AriaSelect,
  SelectValue as AriaSelectValue,
  SelectValueProps as AriaSelectValueProps,
  Separator as AriaSeparator,
  SeparatorProps as AriaSeparatorProps,
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const Select = AriaSelect

const SelectSection = AriaSection

const SelectCollection = AriaCollection

const SelectValue = <T extends object>({
  className,
  ...props
}: AriaSelectValueProps<T>) => (
  <AriaSelectValue
    className={composeRenderProps(className, (className) =>
      cn("data-[placeholder]:text-muted-foreground", className)
    )}
    {...props}
  />
)

const SelectTrigger = ({ className, children, ...props }: AriaButtonProps) => (
  <AriaButton
    className={composeRenderProps(className, (className) =>
      cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
        /* Disabled *
        "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
        /* Focused */
        "data-[focused]:outline-none data-[focused]:ring-2 data-[focused]:ring-ring data-[focused]:ring-offset-2",
        className
      )
    )}
    {...props}
  >
    {composeRenderProps(children, (children) => (
      <>
        {children}
        <ChevronDown aria-hidden="true" className="size-4 opacity-50" />
      </>
    ))}
  </AriaButton>
)

const SelectHeader = ({
  className,
  ...props
}: React.ComponentProps<typeof AriaHeader>) => (
  <AriaHeader
    className={cn(" py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...props}
  />
)

const SelectItem = ({
  className,
  children,
  ...props
}: AriaListBoxItemProps) => (
  <AriaListBoxItem
    className={composeRenderProps(className, (className) =>
      cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
        /* Disabled */
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        /* Focused */
        "data-[focused]:bg-accent data-[focused]:text-accent-foreground",
        className
      )
    )}
    {...props}
  >
    {composeRenderProps(children, (children, renderProps) => (
      <>
        {renderProps.isSelected && (
          <span className="absolute left-2 flex size-4 items-center justify-center">
            <Check className="size-4" />
          </span>
        )}
        {children}
      </>
    ))}
  </AriaListBoxItem>
)

const SelectSeparator = ({ className, ...props }: AriaSeparatorProps) => (
  <AriaSeparator
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
)

const SelectPopover = ({
  className,
  offset = 0,
  ...props
}: AriaPopoverProps) => (
  <AriaPopover
    offset={offset}
    className={composeRenderProps(className, (className) =>
      cn(
        "relative z-50 w-[--trigger-width]  min-w-32 overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md",
        /* Entering */
        "data-[entering]:animate-in  data-[entering]:fade-in-0 ",
        /* Exiting */
        "data-[exiting]:animate-out data-[exiting]:fade-out-0 data-[exiting]:zoom-out-95",
        /* Placement */
        "data-[placement=bottom]:translate-y-1 data-[placement=left]:-translate-x-1 data-[placement=right]:translate-x-1 data-[placement=top]:-translate-y-1 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2",
        className
      )
    )}
    {...props}
  />
)

const SelectContent = <T extends object>({
  className,
  ...props
}: AriaListBoxProps<T>) => (
  <AriaListBox
    className={composeRenderProps(className, (className) =>
      cn("p-1", className)
    )}
    {...props}
  />
)

export {
  Select,
  SelectSection,
  SelectValue,
  SelectContent,
  SelectTrigger,
  SelectHeader,
  SelectItem,
  SelectSeparator,
  SelectPopover,
  SelectCollection,
}
export type { AriaPopoverProps as SelectPopoverProps }
