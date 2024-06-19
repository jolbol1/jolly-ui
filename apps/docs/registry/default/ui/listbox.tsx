import { Check } from "lucide-react"
import {
  Collection as AriaCollection,
  Header as AriaHeader,
  ListBox as AriaListBox,
  ListBoxItem as AriaListBoxItem,
  ListBoxItemProps as AriaListBoxItemProps,
  ListBoxProps as AriaListBoxProps,
  Section as AriaSection,
  SectionProps as AriaSectionProps,
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const ListBoxCollection = AriaCollection

function ListBox<T extends object>({
  className,
  ...props
}: AriaListBoxProps<T>) {
  return (
    <AriaListBox
      className={composeRenderProps(className, (className) =>
        cn(
          className,
          "group rounded-md border bg-popover p-1 text-popover-foreground shadow-md outline-none"
        )
      )}
      {...props}
    />
  )
}

const ListBoxItem = ({
  className,
  children,
  ...props
}: AriaListBoxItemProps) => (
  <AriaListBoxItem
    className={composeRenderProps(className, (className) =>
      cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
        /* Disabled */
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        /* Focused */
        "data-[focused]:bg-accent data-[focused]:text-accent-foreground",
        /* Selection */
        "data-[selection-mode]:pl-8",
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

function ListBoxSection<T extends object>(props: AriaSectionProps<T>) {
  return <AriaSection {...props} />
}

function ListBoxHeader({
  className,
  ...props
}: React.ComponentProps<typeof AriaHeader>) {
  return (
    <AriaHeader
      className={cn("px-2 py-1.5 text-sm font-semibold", className)}
      {...props}
    />
  )
}

export {
  ListBox,
  ListBoxItem,
  ListBoxCollection,
  ListBoxSection,
  ListBoxHeader,
}