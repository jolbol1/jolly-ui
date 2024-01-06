import { useArgs } from "@storybook/preview-api"
import type { Meta, StoryObj } from "@storybook/react"

import { LabelDemo } from "../../docs/registry/default/example/label/label-demo.jsx"
import { Label } from "../../docs/registry/default/ui/label.jsx"
import { LabelDemo as NyLabelDemo } from "../../docs/registry/new-york/example/label/label-demo.jsx"
import { ThemeHandler } from "./theme-wrapper.jsx"

const meta: Meta<typeof Label> = {
  component: Label,
  title: "Primitive/Label",
}

export default meta

type Story = StoryObj<typeof Label>

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
        Main={<LabelDemo />}
        NewYork={<NyLabelDemo />}
      />
    )
  },
}
