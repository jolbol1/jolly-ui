import { useArgs } from "@storybook/preview-api"
import type { Meta, StoryObj } from "@storybook/react"

import { PopoverDemo } from "../../docs/registry/default/example/popover/popover-demo.jsx"
import { PopoverPosition } from "../../docs/registry/default/example/popover/popover-position.jsx"
import { Popover } from "../../docs/registry/default/ui/popover.jsx"
import { PopoverDemo as NyPopoverDemo } from "../../docs/registry/new-york/example/popover/popover-demo.jsx"
import { PopoverPosition as NyPopoverPosition } from "../../docs/registry/new-york/example/popover/popover-position.jsx"
import { ThemeHandler } from "./theme-wrapper.jsx"

const meta: Meta<typeof Popover> = {
  component: Popover,
  title: "Overlays/Popover",
}

export default meta

type Story = StoryObj<typeof Popover>

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
        Main={<PopoverDemo />}
        NewYork={<NyPopoverDemo />}
      />
    )
  },
}

export const Position: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<PopoverPosition />}
        NewYork={<NyPopoverPosition />}
      />
    )
  },
}
