"use client"

import { Collection } from "react-aria-components"

import { Tab, TabList, TabPanel, Tabs } from "@/registry/new-york/ui/tabs"

export default function TabsDisabledDynamic() {
  let tabs = [
    { id: 1, title: "Mouse settings" },
    { id: 2, title: "Keyboard settings" },
    { id: 3, title: "Gamepad settings" },
  ]

  return (
    <Tabs disabledKeys={[2]}>
      <TabList aria-label="Input settings" items={tabs}>
        {(item) => <Tab>{item.title}</Tab>}
      </TabList>
      <Collection items={tabs}>
        {(item) => <TabPanel>{item.title}</TabPanel>}
      </Collection>
    </Tabs>
  )
}
