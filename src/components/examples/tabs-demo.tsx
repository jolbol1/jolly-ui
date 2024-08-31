import { Card, CardDescription, CardHeader, CardTitle } from "@/components/card"
import { Tab, TabList, TabPanel, Tabs } from "@/registry/default/ui/tabs"

export function TabsDemo() {
  return (
    <Card className="p-4">
      <Tabs defaultSelectedKey="blog">
        <TabList aria-label="page selector" className="grid w-full grid-cols-2">
          <Tab id="blog">Blog</Tab>
          <Tab id="changelog">Changelog</Tab>
        </TabList>
        <TabPanel id="blog">
          <Card>
            <CardHeader>
              <CardTitle>Post 1</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </CardDescription>
            </CardHeader>
          </Card>{" "}
        </TabPanel>
        <TabPanel id="changelog">
          {" "}
          <Card>
            <CardHeader>
              <CardTitle>Changelog</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor.
              </CardDescription>
            </CardHeader>
          </Card>
        </TabPanel>
      </Tabs>
    </Card>
  )
}

export default TabsDemo
