"use client"

import { ChevronRight, MoreHorizontal } from "lucide-react"
import {
  Breadcrumb as AriaBreadcrumb,
  BreadcrumbProps as AriaBreadcrumbProps,
  Breadcrumbs as AriaBreadcrumbs,
  BreadcrumbsProps as AriaBreadcrumbsProps,
  Link as AriaLink,
  LinkProps as AriaLinkProps,
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const Breadcrumbs = <T extends object>({
  className,
  ...props
}: AriaBreadcrumbsProps<T>) => (
  <AriaBreadcrumbs
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    )}
    {...props}
  />
)

const BreadcrumbItem = ({ className, ...props }: AriaBreadcrumbProps) => (
  <AriaBreadcrumb
    className={cn("inline-flex items-center gap-1.5 sm:gap-2.5", className)}
    {...props}
  />
)

const BreadcrumbLink = ({ className, ...props }: AriaLinkProps) => (
  <AriaLink
    className={composeRenderProps(className, (className) =>
      cn(
        "transition-colors",
        /* Hover */
        "data-[hovered]:text-foreground",
        /* Disabled */
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        /* Current */
        "data-[current]:pointer-events-auto data-[current]:opacity-100",
        className
      )
    )}
    {...props}
  />
)

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5", className)}
    {...props}
  >
    {children || <ChevronRight />}
  </span>
)

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex size-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="size-4" />
    <span className="sr-only">More</span>
  </span>
)

interface BreadcrumbPageProps extends Omit<AriaLinkProps, "href"> {}

const BreadcrumbPage = ({ className, ...props }: BreadcrumbPageProps) => (
  <AriaLink
    className={composeRenderProps(className, (className) =>
      cn("font-normal text-foreground", className)
    )}
    {...props}
  />
)

export {
  Breadcrumbs,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
