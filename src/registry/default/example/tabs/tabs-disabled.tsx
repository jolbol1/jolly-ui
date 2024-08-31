import { Tab, TabList, TabPanel, Tabs } from "@/registry/default/ui/tabs"

export default function TabsDisabled() {
  return (
    <Tabs isDisabled>
      <TabList aria-label="Input settings">
        <Tab id="mouse">Mouse Settings</Tab>
        <Tab id="keyboard">Keyboard Settings</Tab>
        <Tab id="gamepad">Gamepad Settings</Tab>
      </TabList>
      <TabPanel id="mouse">Mouse Settings</TabPanel>
      <TabPanel id="keyboard">Keyboard Settings</TabPanel>
      <TabPanel id="gamepad">Gamepad Settings</TabPanel>
    </Tabs>
  )
}
