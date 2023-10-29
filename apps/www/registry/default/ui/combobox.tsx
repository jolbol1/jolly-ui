"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import {
  Button,
  ComboBox,
  Header,
  Input,
  Item,
  ListBox,
  Popover,
  Section,
  Separator,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const Combobox = ComboBox

const ComboboxGroup = Section

const ComboboxInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentPropsWithoutRef<typeof Input>
>(({ className, children, ...props }, ref) => (
  <div
    className={cn(
      "group flex h-10  items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 group-disabled:cursor-not-allowed group-disabled:opacity-50",
      className
    )}
  >
    <Input
      className="flex w-full bg-background text-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
      ref={ref}
      {...props}
    />
    <Button>
      <ChevronsUpDown aria-hidden="true" className="h-4 w-4 opacity-50" />
    </Button>
  </div>
))
ComboboxInput.displayName = "ComboboxInput"

const ComboboxLabel = React.forwardRef<
  React.ElementRef<typeof Header>,
  React.ComponentPropsWithoutRef<typeof Header> & { separator?: boolean }
>(({ className, separator = false, ...props }, ref) => (
  <Header
    ref={ref}
    className={cn(
      " py-1.5 pl-8 pr-2 text-sm font-semibold",
      { "-mx-1 mb-1 border-b border-b-border px-3 pb-[0.625rem]": separator },
      className
    )}
    {...props}
  />
))
ComboboxLabel.displayName = "ComboboxLabel"

const ComboboxItem = React.forwardRef<
  React.ElementRef<typeof Item>,
  React.ComponentPropsWithoutRef<typeof Item>
>(({ className, children, ...props }, ref) => (
  <Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[focused]:bg-accent data-[focused]:text-accent-foreground data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    {({ isSelected }) => (
      <>
        {isSelected && (
          <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
            <Check className="h-4 w-4" />
          </span>
        )}

        {children}
      </>
    )}
  </Item>
))
ComboboxItem.displayName = "ComboboxItem"

const ComboboxSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...props }, ref) => (
  <Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
ComboboxSeparator.displayName = "ComboboxSeparator"

const ComboboxContent = React.forwardRef<
  React.ElementRef<typeof Popover>,
  React.ComponentPropsWithoutRef<typeof Popover>
>(({ className, offset = 0, children, ...props }, ref) => (
  <Popover
    offset={offset}
    ref={ref}
    className={cn(
      "relative z-50  min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[entering]:zoom-in-95 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2",
      "data-[placement=bottom]:translate-y-1 data-[placement=left]:-translate-x-1 data-[placement=right]:translate-x-1 data-[placement=top]:-translate-y-1",
      className
    )}
    {...props}
  >
    <ListBox className={cn("p-1")}>{children}</ListBox>
  </Popover>
))
ComboboxContent.displayName = "ComboboxContent"

export {
  ComboboxGroup,
  ComboBox as Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxLabel,
  ComboboxItem,
  ComboboxSeparator,
}
