import { useArgs } from "@storybook/preview-api"
import type { Meta, StoryObj } from "@storybook/react"

import {
  TooltipDemo as NyTooltipDemo,
  TooltipDemo,
} from "../../docs/registry/default/example/tooltip/tooltip-demo.jsx"
import {
  TooltipPosition as NyTooltipPosition,
  TooltipPosition,
} from "../../docs/registry/default/example/tooltip/tooltip-position.jsx"
import { Tooltip } from "../../docs/registry/default/ui/tooltip.jsx"
import { ThemeHandler } from "./theme-wrapper.jsx"

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: "Overlays/Tooltip",
}

export default meta

type Story = StoryObj<typeof Tooltip>

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
        Main={<TooltipDemo />}
        NewYork={<NyTooltipDemo />}
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
        Main={<TooltipPosition />}
        NewYork={<NyTooltipPosition />}
      />
    )
  },
}
