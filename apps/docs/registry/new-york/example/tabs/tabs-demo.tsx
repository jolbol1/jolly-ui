import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card"
import { Button } from "@/registry/new-york/ui/button"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"
import { Tab, TabList, TabPanel, Tabs } from "@/registry/new-york/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultSelectedKey="account" className="w-[400px]">
      <TabList
        aria-label="account selector"
        className="grid w-full grid-cols-2"
      >
        <Tab id="account">Account</Tab>
        <Tab id="password">Password</Tab>
      </TabList>
      <TabPanel id="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>{" "}
      </TabPanel>
      <TabPanel id="password">
        {" "}
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabPanel>
    </Tabs>
  )
}
export default TabsDemo
