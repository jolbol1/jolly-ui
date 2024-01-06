import { useArgs } from "@storybook/preview-api"
import type { Meta, StoryObj } from "@storybook/react"
import { FileTrigger } from "react-aria-components"

import { FileTriggerButtonDemo } from "../../docs/registry/default/example/file-trigger/file-trigger-button-demo.jsx"
import { FileTriggerButtonDemo as NyFileTriggerButtonDemo } from "../../docs/registry/new-york/example/file-trigger/file-trigger-button-demo.jsx"
import { ThemeHandler } from "./theme-wrapper.jsx"

const meta: Meta<typeof FileTrigger> = {
  component: FileTrigger,
  title: "Buttons/File Trigger",
}

export default meta

type Story = StoryObj<typeof FileTrigger>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Demo: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<FileTriggerButtonDemo />}
        NewYork={<NyFileTriggerButtonDemo />}
      />
    )
  },
}
