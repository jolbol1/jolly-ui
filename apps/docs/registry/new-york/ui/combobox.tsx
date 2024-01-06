"use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import {
  Button,
  Collection,
  ComboBox,
  Group,
  Header,
  Input,
  InputProps,
  ListBox,
  ListBoxItem,
  ListBoxItemProps,
  ListBoxProps,
  Popover,
  PopoverProps,
  Section,
  Separator,
  SeparatorProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const Combobox = ComboBox

const ComboboxSection = Section

const ComboboxCollection = Collection

const ComboboxInput = ({ className, ...props }: InputProps) => (
  <Group
    className={cn(
      "flex h-9 w-full items-center justify-between overflow-hidden rounded-md border border-input bg-transparent  text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus-within:outline-none focus-within:ring-1 focus-within:ring-ring data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50"
    )}
  >
    <Input
      className={(values) =>
        cn(
          "flex w-full bg-background px-3 py-2 text-sm placeholder:text-muted-foreground data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 data-[focused]:outline-none",
          typeof className === "function" ? className(values) : className
        )
      }
      {...props}
    />
    <Button className="pr-3">
      <CaretSortIcon aria-hidden="true" className="h-4 w-4 opacity-50" />
    </Button>
  </Group>
)

const ComboboxPopover = ({ className, ...props }: PopoverProps) => (
  <Popover
    className={(values) =>
      cn(
        "relative z-50 w-[--trigger-width] min-w-[8rem] overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2",
        "data-[placement=bottom]:translate-y-1 data-[placement=left]:-translate-x-1 data-[placement=right]:translate-x-1 data-[placement=top]:-translate-y-1",
        typeof className === "function" ? className(values) : className
      )
    }
    {...props}
  />
)

const ComboboxListBox = <T extends object>({
  className,
  ...props
}: ListBoxProps<T>) => <ListBox className={cn("p-1", className)} {...props} />

export interface ComboboxLabelProps
  extends React.ComponentPropsWithoutRef<typeof Header> {
  separator?: boolean
}

const ComboboxLabel = ({
  className,
  separator = false,
  ...props
}: ComboboxLabelProps) => (
  <Header
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      { "-mx-1 mb-1 border-b border-b-border px-3 pb-[0.625rem]": separator },
      className
    )}
    {...props}
  />
)

const ComboboxItem = ({ className, children, ...props }: ListBoxItemProps) => (
  <ListBoxItem
    className={(values) =>
      cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none data-[disabled]:pointer-events-none data-[focused]:bg-accent data-[focused]:text-accent-foreground data-[disabled]:opacity-50",
        typeof className === "function" ? className(values) : className
      )
    }
    {...props}
  >
    {(values) => (
      <>
        {values.isSelected && (
          <span className="absolute right-2 flex h-4 w-4 items-center justify-center">
            <CheckIcon className="h-4 w-4" />
          </span>
        )}
        {typeof children === "function" ? children(values) : children}
      </>
    )}
  </ListBoxItem>
)

const ComboboxSeparator = ({ className, ...props }: SeparatorProps) => (
  <Separator className={cn("-mx-1 my-1 h-px bg-muted", className)} {...props} />
)

export {
  ComboboxSection,
  Combobox,
  ComboboxInput,
  ComboboxListBox,
  ComboboxPopover,
  ComboboxCollection,
  ComboboxLabel,
  ComboboxItem,
  ComboboxSeparator,
}
