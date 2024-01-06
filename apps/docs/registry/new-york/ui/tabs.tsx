"use client"

import * as React from "react"
import {
  Tab as _Tab,
  TabList as _TabList,
  TabPanel as _TabPanel,
  Tabs as _Tabs,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const Tabs = _Tabs

const TabList = React.forwardRef<
  React.ElementRef<typeof _TabList>,
  React.ComponentPropsWithoutRef<typeof _TabList>
>(({ className, ...props }, ref) => (
  <_TabList
    ref={ref}
    className={cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabList.displayName = "TabList"

const Tab = React.forwardRef<
  React.ElementRef<typeof _Tab>,
  React.ComponentPropsWithoutRef<typeof _Tab>
>(({ className, ...props }, ref) => (
  <_Tab
    ref={ref}
    className={cn(
      "inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus:outline-none data-[disabled]:pointer-events-none data-[selected]:bg-background data-[selected]:text-foreground data-[disabled]:opacity-50 data-[selected]:shadow data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2",
      className
    )}
    {...props}
  />
))
Tab.displayName = "Tab"

const TabPanel = React.forwardRef<
  React.ElementRef<typeof _TabPanel>,
  React.ComponentPropsWithoutRef<typeof _TabPanel>
>(({ className, ...props }, ref) => (
  <_TabPanel
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabPanel.displayName = "TabPanel"

export { Tabs, TabList, Tab, TabPanel }
