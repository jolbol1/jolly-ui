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
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const Tabs = AriaTabs

const TabList = <T extends object>({
  className,
  ...props
}: AriaTabListProps<T>) => (
  <AriaTabList
    className={composeRenderProps(className, (className) =>
      cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
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
        "inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all",
        /* Focus Visible */
        "data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2",
        /* Focused */
        "data-[focused]:outline-none",
        /* Disabled */
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        /* Selected */
        "data-[selected]:bg-background data-[selected]:text-foreground data-[selected]:shadow-sm ",
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
