import { GripHorizontal } from "lucide-react"
import {
  Button as AriaButton,
  GridList as AriaGridList,
  GridListItem as AriaGridListItem,
  GridListItemProps as AriaGridListItemProps,
  GridListProps as AriaGridListProps,
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"
import { Checkbox } from "@/registry/default/ui/checkbox"

export function GridList<T extends object>({
  children,
  ...props
}: AriaGridListProps<T>) {
  return (
    <AriaGridList
      {...props}
      className={composeRenderProps(props.className, (className) =>
        cn(
          "group space-y-1 rounded-md border bg-popover p-1 text-popover-foreground shadow-md outline-none",
          className
        )
      )}
    >
      {children}
    </AriaGridList>
  )
}

export function GridListItem({
  children,
  className,
  ...props
}: AriaGridListItemProps) {
  let textValue = typeof children === "string" ? children : undefined
  return (
    <AriaGridListItem
      textValue={textValue}
      className={composeRenderProps(className, (className) =>
        cn(
          "relative flex w-full cursor-default select-none items-center gap-3 rounded-sm px-2 py-1.5 text-sm outline-none",
          /* Disabled */
          "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          /* Focus Visible */
          "data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2 data-[focus-visible]:ring-offset-background",
          /* Hovered */
          "data-[hovered]:bg-accent data-[hovered]:text-accent-foreground",
          /* Selected */
          "data-[selected]:bg-accent data-[selected]:text-accent-foreground",
          className
        )
      )}
      {...props}
    >
      {composeRenderProps(children, (children, renderProps) => (
        <>
          {/* Add elements for drag and drop and selection. */}
          {renderProps.allowsDragging && (
            <AriaButton slot="drag">
              <GripHorizontal className="size-4" />
            </AriaButton>
          )}
          {renderProps.selectionMode === "multiple" &&
            renderProps.selectionBehavior === "toggle" && (
              <Checkbox slot="selection" />
            )}
          {children}
        </>
      ))}
    </AriaGridListItem>
  )
}
