"use client"

import React, { useContext } from "react"
import { ChevronDownIcon } from "lucide-react"
import {
  UNSTABLE_Disclosure as AriaDisclosure,
  UNSTABLE_DisclosureGroup as AriaDisclosureGroup,
  DisclosureGroupProps as AriaDisclosureGroupProps,
  UNSTABLE_DisclosurePanel as AriaDisclosurePanel,
  DisclosurePanelProps as AriaDisclosurePanelProps,
  DisclosureProps as AriaDisclosureProps,
  Button,
  ButtonProps,
  DisclosureGroupStateContext,
  Heading,
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

export interface DisclosureProps extends AriaDisclosureProps {
  children: React.ReactNode
}

export function Disclosure({ children, className, ...props }: DisclosureProps) {
  let isInGroup = useContext(DisclosureGroupStateContext) !== null
  return (
    <AriaDisclosure
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
        cn(
          "group min-w-64",
          isInGroup && "border-0 border-b last:border-b-0",
          className
        )
      )}
    >
      {children}
    </AriaDisclosure>
  )
}

export interface DisclosureHeaderProps {
  children: React.ReactNode
  className?: ButtonProps["className"]
}

export function DisclosureHeader({
  children,
  className,
}: DisclosureHeaderProps) {
  return (
    <Heading className="flex">
      <Button
        slot="trigger"
        className={composeRenderProps(className, (className) => {
          return cn(
            "group rounded-md ring-offset-background transition-colors flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline",
            "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            "data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2",
            "outline-none",
            className
          )
        })}
      >
        {children}
        <ChevronDownIcon
          aria-hidden
          className={cn(
            "h-4 w-4 shrink-0 transition-transform duration-200",
            "group-data-[expanded]:transform group-data-[expanded]:rotate-180",
            "group-data-[disabled]:opacity-50"
          )}
        />
      </Button>
    </Heading>
  )
}

export interface DisclosurePanelProps extends AriaDisclosurePanelProps {
  children: React.ReactNode
}

export function DisclosurePanel({
  children,
  className,
  ...props
}: DisclosurePanelProps) {
  return (
    <AriaDisclosurePanel
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
        cn("overflow-hidden text-sm transition-all")
      )}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </AriaDisclosurePanel>
  )
}

export interface DisclosureGroupProps extends AriaDisclosureGroupProps {
  children: React.ReactNode
}

export function DisclosureGroup({
  children,
  className,
  ...props
}: DisclosureGroupProps) {
  return (
    <AriaDisclosureGroup
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
        cn("", className)
      )}
    >
      {children}
    </AriaDisclosureGroup>
  )
}

export default function Page() {
  return (
    <div className="preview mx-auto flex min-h-[350px] w-[350px] justify-center p-10 items-center gap-8">
      <Disclosure>
        <DisclosureHeader>Files</DisclosureHeader>
        <DisclosurePanel>Files content</DisclosurePanel>
      </Disclosure>

      <DisclosureGroup>
        <Disclosure>
          <DisclosureHeader>Files</DisclosureHeader>
          <DisclosurePanel>Files content</DisclosurePanel>
        </Disclosure>
        <Disclosure>
          <DisclosureHeader>Images</DisclosureHeader>
          <DisclosurePanel>Images content</DisclosurePanel>
        </Disclosure>
        <Disclosure>
          <DisclosureHeader>Documents</DisclosureHeader>
          <DisclosurePanel>Documents content</DisclosurePanel>
        </Disclosure>
      </DisclosureGroup>
    </div>
  )
}
