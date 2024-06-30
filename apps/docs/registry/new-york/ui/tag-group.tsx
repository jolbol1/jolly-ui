import { cva } from "class-variance-authority"
import { XIcon } from "lucide-react"
import {
  Button as AriaButton,
  Tag as AriaTag,
  TagGroup as AriaTagGroup,
  TagList as AriaTagList,
  TagListProps as AriaTagListProps,
  TagProps as AriaTagProps,
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const TagGroup = AriaTagGroup

function TagList<T extends object>({
  className,
  ...props
}: AriaTagListProps<T>) {
  return (
    <AriaTagList
      className={composeRenderProps(className, (className) =>
        cn(
          "flex flex-wrap gap-2",
          /* Empty */
          "data-[empty]:text-sm data-[empty]:text-muted-foreground",
          className
        )
      )}
      {...props}
    />
  )
}

const badgeVariants = cva(
  [
    "inline-flex items-center gap-2 rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors",
    /* Focus */
    "data-[focused]:outline-none data-[focused]:ring-1 data-[focused]:ring-ring ",
    /* Disabled */
    "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
  ],
  {
    variants: {
      variant: {
        default: [
          "border-transparent bg-primary text-primary-foreground shadow",
          /* Hover */
          "data-[hovered]:bg-primary/80",
        ],
        secondary: [
          "border-transparent bg-secondary text-secondary-foreground",
          /* Hover */
          "data-[hovered]:bg-secondary/80",
        ],
        destructive: [
          "border-transparent bg-destructive text-destructive-foreground shadow",
          /* Hover */
          "data-[hovered]:bg-destructive/80",
        ],
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Tag({ children, className, ...props }: AriaTagProps) {
  let textValue = typeof children === "string" ? children : undefined
  return (
    <AriaTag
      textValue={textValue}
      className={composeRenderProps(className, (className, renderProps) =>
        cn(
          badgeVariants({
            variant:
              renderProps.selectionMode === "none" || renderProps.isSelected
                ? "default"
                : "secondary",
          }),
          renderProps.allowsRemoving && "pr-1",
          className
        )
      )}
      {...props}
    >
      {composeRenderProps(children, (children, renderProps) => (
        <>
          {children}
          {renderProps.allowsRemoving && (
            <AriaButton
              slot="remove"
              className={cn(
                "rounded-sm opacity-70 ring-offset-background transition-opacity",
                /* Hover */
                "data-[hovered]:opacity-100",
                /* Resets */
                "focus-visible:outline-none",
                className
              )}
            >
              <XIcon aria-hidden className="size-3" />
            </AriaButton>
          )}
        </>
      ))}
    </AriaTag>
  )
}

export { TagGroup, TagList, Tag, badgeVariants }
