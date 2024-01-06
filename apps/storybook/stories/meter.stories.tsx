import { useArgs } from "@storybook/preview-api"
import type { Meta, StoryObj } from "@storybook/react"

import { MeterDemo } from "../../docs/registry/default/example/meter/meter-demo.jsx"
import { MeterValueDemo } from "../../docs/registry/default/example/meter/meter-value.jsx"
import { Meter } from "../../docs/registry/default/ui/meter.jsx"
import { MeterDemo as NyMeterDemo } from "../../docs/registry/new-york/example/meter/meter-demo.jsx"
import { MeterValueDemo as NyMeterValueDemo } from "../../docs/registry/new-york/example/meter/meter-value.jsx"
import { ThemeHandler } from "./theme-wrapper.jsx"

const meta: Meta<typeof Meter> = {
  component: Meter,
  title: "Status/Meter",
}

export default meta

type Story = StoryObj<typeof Meter>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Basic: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <div className="w-[600px] flex justify-center">
        <ThemeHandler
          theme={theme}
          Main={<MeterDemo />}
          NewYork={<NyMeterDemo />}
        />
      </div>
    )
  },
}

export const Value: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <div className="w-[600px] flex justify-center">
        <ThemeHandler
          theme={theme}
          Main={<MeterValueDemo />}
          NewYork={<NyMeterValueDemo />}
        />
      </div>
    )
  },
}
