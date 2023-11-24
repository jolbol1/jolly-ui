"use client"

import * as React from "react"
import { CheckIcon, DotFilledIcon } from "@radix-ui/react-icons"
import {
  Header,
  Keyboard,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
  Section,
  Separator,
} from "react-aria-components"

import { cn, cnv } from "@/lib/utils"

const DropdownMenuTrigger = MenuTrigger

const DropdownMenuSection = Section

const DropdownMenuPopover = React.forwardRef<
  React.ElementRef<typeof Popover>,
  React.ComponentPropsWithoutRef<typeof Popover>
>(({ className, offset = 4, ...props }, ref) => (
  <Popover
    ref={ref}
    offset={offset}
    className={(values) =>
      cnv(
        values,
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2"
      )
    }
    {...props}
  />
))
DropdownMenuPopover.displayName = "DropdownMenuPopover"

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof Menu>,
  React.ComponentPropsWithoutRef<typeof Menu>
>(({ className, ...props }, ref) => (
  <Menu ref={ref} className={cn("outline-none", className)} {...props} />
))
DropdownMenuContent.displayName = "DropdownMenuContent"

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof MenuItem>,
  React.ComponentPropsWithoutRef<typeof MenuItem> & {
    inset?: boolean
  }
>(({ className, inset, ...props }, ref) => (
  <MenuItem
    ref={ref}
    className={(values) =>
      cnv(
        values,
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        className
      )
    }
    {...props}
  />
))
DropdownMenuItem.displayName = "DropdownMenuItem"

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenuItem>,
  React.ComponentPropsWithoutRef<typeof MenuItem>
>(({ className, children, ...props }, ref) => (
  <MenuItem
    ref={ref}
    className={(values) =>
      cnv(
        values,
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )
    }
    {...props}
  >
    {(values) => (
      <>
        <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
          {values.isSelected && <CheckIcon className="h-4 w-4" />}
        </span>

        {typeof children === "function" ? children(values) : children}
      </>
    )}
  </MenuItem>
))
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem"

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof MenuItem>,
  React.ComponentPropsWithoutRef<typeof MenuItem>
>(({ className, children, ...props }, ref) => (
  <MenuItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    {(values) => (
      <>
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          {values.isSelected && (
            <DotFilledIcon className="h-4 w-4 fill-current" />
          )}
        </span>
        {typeof children === "function" ? children(values) : children}
      </>
    )}
  </MenuItem>
))
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem"

const DropdownMenuHeader = React.forwardRef<
  React.ElementRef<typeof Header>,
  React.ComponentPropsWithoutRef<typeof Header> & {
    inset?: boolean
    separator?: boolean
  }
>(({ className, inset, separator = false, ...props }, ref) => (
  <Header
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      separator && "-mx-1 mb-1 border-b border-b-border px-3 pb-[0.625rem]",
      className
    )}
    {...props}
  />
))
DropdownMenuHeader.displayName = "DropdownMenuHeader"

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentPropsWithoutRef<typeof Separator>
>(({ className, ...props }, ref) => (
  <Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
))
DropdownMenuSeparator.displayName = "Separator"

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <Keyboard
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  )
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut"

export {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuHeader,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuPopover,
  DropdownMenuSection,
}
