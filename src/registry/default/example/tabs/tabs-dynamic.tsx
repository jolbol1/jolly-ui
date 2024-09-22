"use client"

import React from "react"
import { Collection } from "react-aria-components"

import { Button } from "@/registry/default/ui/button"
import { Tab, TabList, TabPanel, Tabs } from "@/registry/default/ui/tabs"

export default function TabsDynamic() {
  let [tabs, setTabs] = React.useState([
    { id: 1, title: "Tab 1", content: "Tab body 1" },
    { id: 2, title: "Tab 2", content: "Tab body 2" },
    { id: 3, title: "Tab 3", content: "Tab body 3" },
  ])

  let addTab = () => {
    setTabs((tabs) => [
      ...tabs,
      {
        id: tabs.length + 1,
        title: `Tab ${tabs.length + 1}`,
        content: `Tab body ${tabs.length + 1}`,
      },
    ])
  }

  let removeTab = () => {
    if (tabs.length > 1) {
      setTabs((tabs) => tabs.slice(0, -1))
    }
  }

  return (
    <Tabs>
      <div className="flex justify-between gap-3">
        <TabList aria-label="Dynamic tabs" items={tabs} style={{ flex: 1 }}>
          {(item) => <Tab>{item.title}</Tab>}
        </TabList>
        <div className="flex gap-3">
          <Button variant="outline" onPress={addTab}>
            Add tab
          </Button>
          <Button variant="outline" onPress={removeTab}>
            Remove tab
          </Button>
        </div>
      </div>
      <Collection items={tabs}>
        {(item) => <TabPanel>{item.content}</TabPanel>}
      </Collection>
    </Tabs>
  )
}
