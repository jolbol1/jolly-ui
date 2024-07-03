import { Tab, TabList, TabPanel, Tabs } from "@/registry/default/ui/tabs"
import { Input } from "@/registry/default/ui/textfield"

export default function TabsFocus() {
  return (
    <Tabs>
      <TabList aria-label="Notes app">
        <Tab id="1">Jane Doe</Tab>
        <Tab id="2">John Doe</Tab>
        <Tab id="3">Joe Bloggs</Tab>
      </TabList>
      <TabPanel id="1">
        <label>
          Leave a note for Jane: <Input type="text" />
        </label>
      </TabPanel>
      <TabPanel id="2">Senatus Populusque Romanus.</TabPanel>
      <TabPanel id="3">Alea jacta est.</TabPanel>
    </Tabs>
  )
}
