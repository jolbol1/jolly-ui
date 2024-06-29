import { Tab, TabList, TabPanel, Tabs } from "@/registry/new-york/ui/tabs"

export default function TabsVertical() {
  return (
    <Tabs orientation="vertical">
      <TabList aria-label="Chat log orientation example">
        <Tab id="1">John Doe</Tab>
        <Tab id="2">Jane Doe</Tab>
        <Tab id="3">Joe Bloggs</Tab>
      </TabList>
      <TabPanel id="1">There is no prior chat history with John Doe.</TabPanel>
      <TabPanel id="2">There is no prior chat history with Jane Doe.</TabPanel>
      <TabPanel id="3">
        There is no prior chat history with Joe Bloggs.
      </TabPanel>
    </Tabs>
  )
}
