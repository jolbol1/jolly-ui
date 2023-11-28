"use client"

import * as React from "react"
import { type VariantProps } from "class-variance-authority"
import { ChevronRight } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbProps,
  Breadcrumbs,
  BreadcrumbsProps,
  Link,
  LinkProps,
} from "react-aria-components"

import { cn, cnv } from "@/lib/utils"

import { buttonVariants } from "./button-variants"

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
  <Breadcrumb className="flex items-center" {...props}>
    <Link
      className={(values) =>
        cnv(
          values,
          buttonVariants({
            variant: "link",
            className: "data-[disabled]:opacity-100",
          }),
          "opacity-50 peer px-1 py-1",
          "data-[disabled]:opacity-100",
          linkClassName
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