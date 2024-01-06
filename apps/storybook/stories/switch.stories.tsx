import { useArgs } from "@storybook/preview-api"
import type { Meta, StoryObj } from "@storybook/react"

import { SwitchDemo } from "../../docs/registry/default/example/switch/switch-demo.jsx"
import { SwitchDisabled } from "../../docs/registry/default/example/switch/switch-disabled.jsx"
import { SwitchReadonly } from "../../docs/registry/default/example/switch/switch-readonly.jsx"
import { Switch } from "../../docs/registry/default/ui/switch.jsx"
import { SwitchDemo as NySwitchDemo } from "../../docs/registry/new-york/example/switch/switch-demo.jsx"
import { SwitchDisabled as NySwitchDisabled } from "../../docs/registry/new-york/example/switch/switch-disabled.jsx"
import { SwitchReadonly as NySwitchReadonly } from "../../docs/registry/new-york/example/switch/switch-readonly.jsx"
import { ThemeHandler } from "./theme-wrapper.jsx"

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: "Form/Switch",
}

export default meta

type Story = StoryObj<typeof Switch>

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
        Main={<SwitchDemo />}
        NewYork={<NySwitchDemo />}
      />
    )
  },
}

export const Disabled: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<SwitchDisabled />}
        NewYork={<NySwitchDisabled />}
      />
    )
  },
}
export const Readonly: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<SwitchReadonly />}
        NewYork={<NySwitchReadonly />}
      />
    )
  },
}
