import { Check } from "lucide-react"
import {
  ListBox as AriaListBox,
  ListBoxItem as AriaListBoxItem,
  ListBoxItemProps as AriaListBoxItemProps,
  ListBoxProps as AriaListBoxProps,
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

function ListBox<T extends object>({
  className,
  ...props
}: AriaListBoxProps<T>) {
  return (
    <AriaListBox
      className={composeRenderProps(className, (className) =>
        cn(
          className,
          "rounded-md border bg-popover p-1 text-popover-foreground shadow-md outline-none"
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

export { ListBox, ListBoxItem }
