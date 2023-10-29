"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import {
  Button,
  Header,
  Item,
  Label,
  ListBox,
  Popover,
  Select as RaSelect,
  SelectValue as RaSelectValue,
  Section,
  Separator,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const Select = RaSelect

const SelectGroup = Section

const SelectValue = RaSelectValue

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentPropsWithoutRef<typeof Button>
>(({ className, children, ...props }, ref) => (
  <Button
    ref={ref}
    className={cn(
      "flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    <>
      {children}
      <CaretSortIcon className="h-4 w-4 opacity-50" />
    </>
  </Button>
))
SelectTrigger.displayName = "SelectTrigger"

const SelectContent = React.forwardRef<
  React.ElementRef<typeof Popover>,
  React.ComponentPropsWithoutRef<typeof Popover>
>(({ className, children, offset = 0, ...props }, ref) => (
  <Popover
    ref={ref}
    className={cn(
      "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[entering]:zoom-in-95 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2",
      "data-[placement=bottom]:translate-y-1 data-[placement=left]:-translate-x-1 data-[placement=right]:translate-x-1 data-[placement=top]:-translate-y-1",
      className
    )}
    offset={offset}
    {...props}
  >
    <ListBox className={cn("p-1")}>{children}</ListBox>
  </Popover>
))
SelectContent.displayName = "SelectContent"

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof Header>,
  React.ComponentPropsWithoutRef<typeof Header>
>(({ className, ...props }, ref) => (
  <Header
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", className)}
    {...props}
  />
))
SelectLabel.displayName = "SelectLabel"

const SelectItem = React.forwardRef<
  React.ElementRef<typeof Item>,
  React.ComponentPropsWithoutRef<typeof Item>
>(({ className, children, ...props }, ref) => (
  <Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    {({ isSelected }) => (
      <>
        {isSelected && (
          <span className="absolute right-2 flex h-4 w-4 items-center justify-center">
            <CheckIcon className="h-4 w-4" />
          </span>
        )}
        {children}
      </>
    )}
  </Item>
))
SelectItem.displayName = "SelectItem"

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...props }, ref) => (
  <Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
SelectSeparator.displayName = "Separator"

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
}
