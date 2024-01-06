"use client"

import { ChevronRight } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbProps,
  Breadcrumbs,
  BreadcrumbsProps,
  Link,
  LinkProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

import { buttonVariants } from "./button"

const _Breadcrumbs = <T extends object>({
  className,
  ...props
}: BreadcrumbsProps<T>) => (
  <Breadcrumbs className={cn("flex flex-wrap", className)} {...props} />
)
interface BreadcrumbItemProps extends Omit<BreadcrumbProps, "children"> {
  linkClassName?: LinkProps["className"]
  href?: LinkProps["href"]
  linkProps?: Omit<LinkProps, "className" | "href" | "children">
  children?: LinkProps["children"]
}

const BreadcrumbItem = ({
  className,
  linkClassName,
  href,
  linkProps,
  children,
  ...props
}: BreadcrumbItemProps) => (
  <Breadcrumb className={cn("flex items-center", className)} {...props}>
    <Link
      className={(values) =>
        cn(
          buttonVariants({
            variant: "link",
            className: "data-[disabled]:opacity-100 ",
          }),
          "peer p-1 opacity-50",
          "data-[disabled]:opacity-100",
          "text-foreground",
          typeof linkClassName === "function"
            ? linkClassName(values)
            : linkClassName
        )
      }
      href={href}
      {...linkProps}
    >
      {children}
    </Link>
    <ChevronRight
      aria-hidden="true"
      className="h-4 w-4 peer-data-[current]:hidden"
    />
  </Breadcrumb>
)

export { _Breadcrumbs as Breadcrumbs, BreadcrumbItem }
