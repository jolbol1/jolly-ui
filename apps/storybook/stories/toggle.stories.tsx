import { FontBoldIcon } from "@radix-ui/react-icons"
import { useArgs } from "@storybook/preview-api"
import type { Meta, StoryObj } from "@storybook/react"
import { Bold } from "lucide-react"

import { ToggleDemo } from "../../docs/registry/default/example/toggle/toggle-demo.jsx"
import { ToggleDisabled } from "../../docs/registry/default/example/toggle/toggle-disabled.jsx"
import { ToggleLg } from "../../docs/registry/default/example/toggle/toggle-lg.jsx"
import { ToggleOutline } from "../../docs/registry/default/example/toggle/toggle-outline.jsx"
import { ToggleSm } from "../../docs/registry/default/example/toggle/toggle-sm.jsx"
import { ToggleWithText } from "../../docs/registry/default/example/toggle/toggle-with-text.jsx"
import { Toggle } from "../../docs/registry/default/ui/toggle.jsx"
import { ToggleDemo as NyToggleDemo } from "../../docs/registry/new-york/example/toggle/toggle-demo.jsx"
import { ToggleDisabled as NyToggleDisabled } from "../../docs/registry/new-york/example/toggle/toggle-disabled.jsx"
import { ToggleLg as NyToggleLg } from "../../docs/registry/new-york/example/toggle/toggle-lg.jsx"
import { ToggleOutline as NyToggleOutline } from "../../docs/registry/new-york/example/toggle/toggle-outline.jsx"
import { ToggleSm as NyToggleSm } from "../../docs/registry/new-york/example/toggle/toggle-sm.jsx"
import { ToggleWithText as NyToggleWithText } from "../../docs/registry/new-york/example/toggle/toggle-with-text.jsx"
import { Toggle as NewYork } from "../../docs/registry/new-york/ui/toggle.jsx"
import { ThemeHandler } from "./theme-wrapper.jsx"

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: "Buttons/Toggle Button",
}

export default meta

type Story = StoryObj<typeof Toggle>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={
          <NewYork {...args}>
            <FontBoldIcon className="h-4 w-4" />
          </NewYork>
        }
        NewYork={
          <Toggle {...args}>
            <Bold className="h-4 w-4" />
          </Toggle>
        }
      />
    )
  },
  name: "Toggle",
  args: {
    isDisabled: false,
    "aria-label": "bold",
  },
}

export const Disabled: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<ToggleDisabled />}
        NewYork={<NyToggleDisabled />}
      />
    )
  },
}

export const Demo: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<ToggleDemo />}
        NewYork={<NyToggleDemo />}
      />
    )
  },
}
export const Large: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<ToggleLg />}
        NewYork={<NyToggleLg />}
      />
    )
  },
}

export const Outline: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<ToggleOutline />}
        NewYork={<NyToggleOutline />}
      />
    )
  },
}

export const Small: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<ToggleSm />}
        NewYork={<NyToggleSm />}
      />
    )
  },
}

export const WithText: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<ToggleWithText />}
        NewYork={<NyToggleWithText />}
      />
    )
  },
  argTypes: {
    variant: {
      control: false,
    },
    size: {
      control: false,
    },
  },
}
