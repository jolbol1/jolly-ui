"use client"

import * as React from "react"
import {
  Tab as AriaTab,
  TabList as AriaTabList,
  TabListProps as AriaTabListProps,
  TabPanel as AriaTabPanel,
  TabPanelProps as AriaTabPanelProps,
  TabProps as AriaTabProps,
  Tabs as AriaTabs,
  TabsProps as AriaTabsProps,
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

function Tabs({ className, ...props }: AriaTabsProps) {
  return (
    <AriaTabs
      className={composeRenderProps(className, (className) =>
        cn(
          "group flex flex-col gap-2",
          /* Orientation */
          "data-[orientation=vertical]:flex-row",
          className
        )
      )}
      {...props}
    />
  )
}

const TabList = <T extends object>({
  className,
  ...props
}: AriaTabListProps<T>) => (
  <AriaTabList
    className={composeRenderProps(className, (className) =>
      cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        /* Orientation */
        "data-[orientation=vertical]:h-auto data-[orientation=vertical]:flex-col",
        className
      )
    )}
    {...props}
  />
)

const Tab = ({ className, ...props }: AriaTabProps) => (
  <AriaTab
    className={composeRenderProps(className, (className) =>
      cn(
        "inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium outline-none ring-offset-background transition-all",
        /* Focus Visible */
        "data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2",
        /* Disabled */
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        /* Selected */
        "data-[selected]:bg-background data-[selected]:text-foreground data-[selected]:shadow-sm ",
        /* Orientation */
        "group-data-[orientation=vertical]:w-full",
        className
      )
    )}
    {...props}
  />
)

const TabPanel = ({ className, ...props }: AriaTabPanelProps) => (
  <AriaTabPanel
    className={composeRenderProps(className, (className) =>
      cn(
        "mt-2 ring-offset-background",
        /* Focus Visible */
        "data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2",
        className
      )
    )}
    {...props}
  />
)

export { Tabs, TabList, TabPanel, Tab }
