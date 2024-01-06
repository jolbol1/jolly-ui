"use client"

import { ChevronRightIcon } from "@radix-ui/react-icons"
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
  <Breadcrumbs className={cn("flex flex-wrap ", className)} {...props} />
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
}: BreadcrumbItemProps) => {
  return (
    <Breadcrumb className={cn("flex items-center", className)} {...props}>
      <Link
        className={(values) =>
          cn(
            buttonVariants({
              variant: "link",
              className: "data-[disabled]:opacity-100",
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
      <ChevronRightIcon
        aria-hidden="true"
        className="h-4 w-4 peer-data-[current]:hidden"
      />
    </Breadcrumb>
  )
}

export { _Breadcrumbs as Breadcrumbs, BreadcrumbItem }
