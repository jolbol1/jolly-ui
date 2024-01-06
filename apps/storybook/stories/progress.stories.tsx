import { useArgs } from "@storybook/preview-api"
import type { Meta, StoryObj } from "@storybook/react"

import { ProgressDemo } from "../../docs/registry/default/example/progress/progress-demo.jsx"
import { ProgressValue } from "../../docs/registry/default/example/progress/progress-value.jsx"
import { Progress } from "../../docs/registry/default/ui/progress.jsx"
import { ProgressDemo as NyProgressDemo } from "../../docs/registry/new-york/example/progress/progress-demo.jsx"
import { ProgressValue as NyProgressValue } from "../../docs/registry/new-york/example/progress/progress-value.jsx"
import { ThemeHandler } from "./theme-wrapper.jsx"

const meta: Meta<typeof Progress> = {
  component: Progress,
  title: "Status/Progress",
}

export default meta

type Story = StoryObj<typeof Progress>

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
          Main={<ProgressDemo />}
          NewYork={<NyProgressDemo />}
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
          Main={<ProgressValue />}
          NewYork={<NyProgressValue />}
        />
      </div>
    )
  },
}
