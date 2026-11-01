"use client"

import { ChevronRightIcon, InfoCircledIcon } from "@radix-ui/react-icons"
import {
  Tree as AriaTree,
  TreeItem as AriaTreeItem,
  TreeItemContent as AriaTreeItemContent,
  TreeItemProps as AriaTreeItemProps,
  TreeProps as AriaTreeProps,
  Button,
  ButtonProps,
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const TreeItemContent = AriaTreeItemContent

function Tree<T extends object>({ className, ...props }: AriaTreeProps<T>) {
  return (
    <AriaTree
      className={cn(
        "flex flex-col gap-1 overflow-auto p-1 text-sm outline-hidden",
        className
      )}
      {...props}
    />
  )
}

function TreeItemExpandButton({ className, children, ...props }: ButtonProps) {
  return (
    <Button
      slot="chevron"
      className={cn("outline-hidden", className)}
      {...props}
    >
      {composeRenderProps(children, (children) => (
        <>
          <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-expanded:rotate-90" />
          {children}
        </>
      ))}
    </Button>
  )
}

function TreeItemInfoButton({ className, children, ...props }: ButtonProps) {
  return (
    <Button
      aria-label="Info"
      className={cn(
        "ml-auto flex items-center justify-center rounded-md ring-offset-background",
        /* Disabled */
        "data-disabled:pointer-events-none data-disabled:opacity-50 ",
        /* Focus Visible */
        "data-focus-visible:outline-hidden data-focus-visible:ring-2 data-focus-visible:ring-ring data-focus-visible:ring-offset-2",
        /* Resets */
        "focus-visible:outline-hidden",
        className
      )}
    >
      {composeRenderProps(children, (children) => (
        <>
          {children}
          <InfoCircledIcon className="size-4 shrink-0 text-muted-foreground" />
        </>
      ))}
    </Button>
  )
}

function TreeItem<T extends object>({
  className,
  ...props
}: AriaTreeItemProps<T>) {
  return (
    <AriaTreeItem
      className={cn(
        "group relative flex items-center gap-2 rounded-md p-1 pl-[calc((var(--tree-item-level)-1)*2.25rem)] font-medium outline-hidden ring-offset-background data-has-child-rows:pl-[calc((var(--tree-item-level)-1)*1.5rem)]",
        /* Disabled */
        "data-disabled:pointer-events-none data-disabled:opacity-50 ",
        /* Focus Visible */
        "data-focus-visible:outline-hidden data-focus-visible:ring-2 data-focus-visible:ring-ring data-focus-visible:ring-offset-2",
        /* Resets */
        "focus-visible:outline-hidden",
        className
      )}
      {...props}
    />
  )
}

export {
  Tree,
  TreeItem,
  TreeItemContent,
  TreeItemExpandButton,
  TreeItemInfoButton,
}
