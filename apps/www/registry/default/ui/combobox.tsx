"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import {
  Button,
  Collection,
  ComboBox,
  Group,
  Header,
  Input,
  Item,
  ListBox,
  Popover,
  Section,
  Separator,
} from "react-aria-components"

import { cn, cnv } from "@/lib/utils"

const Combobox = ComboBox

const ComboboxSection = Section

const ComboboxCollection = Collection

const ComboboxInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentPropsWithoutRef<typeof Input>
>(({ className, ...props }, ref) => (
  <Group
    className={cn(
      "group flex h-10 items-center  justify-between overflow-hidden rounded-md border border-input bg-background text-sm ring-offset-background data-[focus-within]:outline-none data-[focus-within]:ring-2 data-[focus-within]:ring-ring data-[focus-within]:ring-offset-2 group-data-[disabled]:cursor-not-allowed group-data-[disabled]:opacity-50"
    )}
  >
    <Input
      className={(values) =>
        cnv(
          values,
          "flex w-full px-3 py-2 bg-background text-sm placeholder:text-muted-foreground data-[focused]:outline-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
          className
        )
      }
      ref={ref}
      {...props}
    />
    <Button className="pr-3">
      <ChevronsUpDown aria-hidden="true" className="h-4 w-4 opacity-50" />
    </Button>
  </Group>
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
    className={(values) =>
      cnv(
        values,
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[focused]:bg-accent data-[focused]:text-accent-foreground data-[disabled]:opacity-50",
        className
      )
    }
    {...props}
  >
    {(values) => (
      <>
        {values.isSelected && (
          <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
            <Check className="h-4 w-4" />
          </span>
        )}

        {typeof children === "function" ? children(values) : children}
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

const ComboboxPopover = React.forwardRef<
  React.ElementRef<typeof Popover>,
  React.ComponentPropsWithoutRef<typeof Popover>
>(({ className, ...props }, ref) => (
  <Popover
    ref={ref}
    className={(values) =>
      cnv(
        values,
        "relative z-50 w-[--trigger-width]  overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2",
        "data-[placement=bottom]:translate-y-1 data-[placement=left]:-translate-x-1 data-[placement=right]:translate-x-1 data-[placement=top]:-translate-y-1",
        className
      )
    }
    {...props}
  />
))
ComboboxPopover.displayName = "ComboboxPopover"

const ComboboxListBox = React.forwardRef<
  React.ElementRef<typeof ListBox>,
  React.ComponentPropsWithoutRef<typeof ListBox>
>(({ className, ...props }, ref) => (
  <ListBox ref={ref} className={(values) => cnv(values, "p-1")} {...props} />
))
ComboboxListBox.displayName = "ComboboxListBox"

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
