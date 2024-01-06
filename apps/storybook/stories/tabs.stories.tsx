import { useArgs } from "@storybook/preview-api"
import type { Meta, StoryObj } from "@storybook/react"

import { TabsDemo } from "../../docs/registry/default/example/tabs/tabs-demo.jsx"
import { Tabs } from "../../docs/registry/default/ui/tabs.jsx"
import { TabsDemo as NyTabsDemo } from "../../docs/registry/new-york/example/tabs/tabs-demo.jsx"
import { ThemeHandler } from "./theme-wrapper.jsx"

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: "Navigation/Tabs",
}

export default meta

type Story = StoryObj<typeof Tabs>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Basic: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<TabsDemo />}
        NewYork={<NyTabsDemo />}
      />
    )
  },
}
