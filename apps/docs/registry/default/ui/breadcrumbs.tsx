"use client"

import { ChevronRight, MoreHorizontal } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbProps,
  Breadcrumbs,
  BreadcrumbsProps,
  Link,
  LinkProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const _Breadcrumbs = <T extends object>({
  className,
  ...props
}: BreadcrumbsProps<T>) => (
  <Breadcrumbs
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    )}
    {...props}
  />
)

const BreadcrumbItem = ({ className, ...props }: BreadcrumbProps) => (
  <Breadcrumb
    className={cn("inline-flex items-center gap-1.5 sm:gap-2.5", className)}
    {...props}
  />
)

const BreadcrumbLink = ({ className, ...props }: LinkProps) => (
  <Link
    className={cn(
      "transition-colors hover:text-foreground data-[disabled]:pointer-events-none data-[current]:pointer-events-auto data-[current]:opacity-100 data-[disabled]:opacity-50",
      className
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
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)

interface BreadcrumbPageProps extends Omit<LinkProps, "href"> {}

const BreadcrumbPage = ({ className, ...props }: BreadcrumbPageProps) => (
  <Link className={cn("font-normal text-foreground", className)} {...props} />
)

export {
  _Breadcrumbs as Breadcrumbs,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}
