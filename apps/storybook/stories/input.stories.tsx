import { useArgs } from "@storybook/preview-api"
import type { Meta, StoryObj } from "@storybook/react"

import { InputDemo } from "../../docs/registry/default/example/input/input-demo.jsx"
import { InputDisabled } from "../../docs/registry/default/example/input/input-disabled.jsx"
import { InputFile } from "../../docs/registry/default/example/input/input-file.jsx"
import { Input } from "../../docs/registry/default/ui/input.jsx"
import { InputDemo as NyInputDemo } from "../../docs/registry/new-york/example/input/input-demo.jsx"
import { InputDisabled as NyInputDisabled } from "../../docs/registry/new-york/example/input/input-disabled.jsx"
import { InputFile as NyInputFile } from "../../docs/registry/new-york/example/input/input-file.jsx"
import { ThemeHandler } from "./theme-wrapper.jsx"

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Primitive/Input",
}

export default meta

type Story = StoryObj<typeof Input>

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
        Main={<InputDemo />}
        NewYork={<NyInputDemo />}
      />
    )
  },
}

export const File: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<InputFile />}
        NewYork={<NyInputFile />}
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
        Main={<InputDisabled />}
        NewYork={<NyInputDisabled />}
      />
    )
  },
}
