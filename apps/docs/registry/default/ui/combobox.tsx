"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import {
  Button as AriaButton,
  Collection as AriaCollection,
  ComboBox as AriaComboBox,
  Group as AriaGroup,
  Header as AriaHeader,
  Input as AriaInput,
  InputProps as AriaInputProps,
  ListBox as AriaListBox,
  ListBoxItem as AriaListBoxItem,
  ListBoxItemProps as AriaListBoxItemProps,
  ListBoxProps as AriaListBoxProps,
  Popover as AriaPopover,
  PopoverProps as AriaPopoverProps,
  Section as AriaSection,
  Separator as AriaSeparator,
  SeparatorProps as AriaSeparatorProps,
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const Combobox = AriaComboBox

const ComboboxSection = AriaSection

const ComboboxCollection = AriaCollection

const ComboboxInput = ({ className, ...props }: AriaInputProps) => (
  <AriaGroup
    className={cn(
      "group flex h-10 items-center justify-between overflow-hidden rounded-md border border-input bg-background text-sm ring-offset-background data-[focus-within]:outline-none data-[focus-within]:ring-2 data-[focus-within]:ring-ring data-[focus-within]:ring-offset-2 group-data-[disabled]:cursor-not-allowed group-data-[disabled]:opacity-50"
    )}
  >
    <AriaInput
      className={composeRenderProps(className, (className) =>
        cn(
          "flex w-full bg-background px-3 py-2 text-sm placeholder:text-muted-foreground",
          /* Disabled */
          "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
          /* Focused */
          "data-[focused]:outline-none",
          className
        )
      )}
      {...props}
    />
    <AriaButton className="pr-3">
      <ChevronsUpDown aria-hidden="true" className="size-4 opacity-50" />
    </AriaButton>
  </AriaGroup>
)
interface ComboboxLabelProps extends React.ComponentProps<typeof AriaHeader> {
  separator?: boolean
  offset?: boolean
}

const ComboboxLabel = ({
  className,
  separator = false,
  offset = false,
  ...props
}: ComboboxLabelProps) => (
  <AriaHeader
    className={cn(
      " py-1.5 pl-8 pr-2 text-sm font-semibold",
      {
        "-mx-1 mb-1 border-b border-b-border px-3 pb-[0.625rem]": separator,
        "px-3": offset,
      },
      className
    )}
    {...props}
  />
)

const ComboboxItem = ({
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

const ComboboxSeparator = ({ className, ...props }: AriaSeparatorProps) => (
  <AriaSeparator
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
)

const ComboboxPopover = ({ className, ...props }: AriaPopoverProps) => (
  <AriaPopover
    className={composeRenderProps(className, (className) =>
      cn(
        "relative z-50 w-[--trigger-width]  overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md",
        /* Entering */
        "data-[entering]:animate-in data-[entering]:fade-in-0",
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

const ComboboxListBox = <T extends object>({
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
  ComboboxSection,
  Combobox,
  ComboboxPopover,
  ComboboxInput,
  ComboboxListBox,
  ComboboxLabel,
  ComboboxItem,
  ComboboxSeparator,
  ComboboxCollection,
}
export type { ComboboxLabelProps }
