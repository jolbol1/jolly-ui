"use client"

import * as React from "react"
import { Check, Circle } from "lucide-react"
import {
  Header as AriaHeader,
  Keyboard as AriaKeyboard,
  Menu as AriaMenu,
  MenuItem as AriaMenuItem,
  MenuItemProps as AriaMenuItemProps,
  MenuProps as AriaMenuProps,
  MenuTrigger as AriaMenuTrigger,
  Popover as AriaPopover,
  PopoverProps as AriaPopoverProps,
  Section as AriaSection,
  Separator as AriaSeparator,
  SeparatorProps as AriaSeparatorProps,
  SubmenuTrigger as AriaSubmenuTrigger,
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const MenuTrigger = AriaMenuTrigger

const SubmenuTrigger = AriaSubmenuTrigger

const MenuSection = AriaSection

const MenuPopover = ({ className, offset = 4, ...props }: AriaPopoverProps) => (
  <AriaPopover
    offset={offset}
    className={composeRenderProps(className, (className) =>
      cn(
        "z-50 rounded-md bg-popover text-popover-foreground shadow-md",
        /* Entering */
        "data-[entering]:animate-in  data-[entering]:fade-in-0 ",
        /* Exiting */
        "data-[exiting]:animate-out data-[exiting]:fade-out-0 data-[exiting]:zoom-out-95",
        /* Placement */
        "data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2",
        className
      )
    )}
    {...props}
  />
)

const Menu = <T extends object>({ className, ...props }: AriaMenuProps<T>) => (
  <AriaMenu
    className={cn(
      "max-h-[inherit] overflow-auto rounded-md border p-1 outline outline-0 [clip-path:inset(0_0_0_0_round_calc(var(--radius)-2px))]",
      className
    )}
    {...props}
  />
)

interface MenuItemProps extends AriaMenuItemProps {
  inset?: boolean
}

const MenuItem = ({ className, inset, ...props }: MenuItemProps) => (
  <AriaMenuItem
    className={composeRenderProps(className, (className) =>
      cn(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
        /* Disabled */
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        /* Focused */
        "data-[focused]:bg-accent data-[focused]:text-accent-foreground ",
        inset && "pl-8",
        className
      )
    )}
    {...props}
  />
)

interface MenuHeaderProps extends React.ComponentProps<typeof AriaHeader> {
  inset?: boolean
  separator?: boolean
}

const MenuHeader = ({
  className,
  inset,
  separator = false,
  ...props
}: MenuHeaderProps) => (
  <AriaHeader
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      separator && "-mx-1 mb-1 border-b border-b-border px-3 pb-2.5",
      className
    )}
    {...props}
  />
)

const MenuSeparator = ({ className, ...props }: AriaSeparatorProps) => (
  <AriaSeparator
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
)

const MenuKeyboard = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <AriaKeyboard
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  )
}

const MenuCheckboxItem = ({ className, children, ...props }: MenuItemProps) => (
  <AriaMenuItem
    className={composeRenderProps(className, (className) =>
      cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors",
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
        <span className="absolute left-2 flex size-4 items-center justify-center">
          {renderProps.isSelected && <Check className="size-4" />}
        </span>

        {children}
      </>
    ))}
  </AriaMenuItem>
)

const MenuRadioItem = ({ className, children, ...props }: MenuItemProps) => (
  <AriaMenuItem
    className={composeRenderProps(className, (className) =>
      cn(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors",
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
        <span className="absolute left-2 flex size-3.5 items-center justify-center">
          {renderProps.isSelected && <Circle className="size-2 fill-current" />}
        </span>
        {children}
      </>
    ))}
  </AriaMenuItem>
)

export {
  MenuTrigger,
  Menu,
  MenuPopover,
  MenuItem,
  MenuHeader,
  MenuSeparator,
  MenuKeyboard,
  MenuCheckboxItem,
  MenuRadioItem,
  MenuSection,
  SubmenuTrigger,
}
export type { MenuItemProps, MenuHeaderProps }
