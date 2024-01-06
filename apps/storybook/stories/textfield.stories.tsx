import { useArgs } from "@storybook/preview-api"
import type { Meta, StoryObj } from "@storybook/react"
import { TextField } from "react-aria-components"

import { TextfieldDemo } from "../../docs/registry/default/example/textfield/textfield-demo.jsx"
import { TextfieldDesc } from "../../docs/registry/default/example/textfield/textfield-desc.jsx"
import { TextfieldArea } from "../../docs/registry/default/example/textfield/textfield-textarea.jsx"
import { TextfieldDemo as NyTextfieldDemo } from "../../docs/registry/new-york/example/textfield/textfield-demo.jsx"
import { TextfieldDesc as NyTextfieldDesc } from "../../docs/registry/new-york/example/textfield/textfield-desc.jsx"
import { TextfieldArea as NyTextfieldArea } from "../../docs/registry/new-york/example/textfield/textfield-textarea.jsx"
import { ThemeHandler } from "./theme-wrapper.jsx"

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: "Form/TextField",
}

export default meta

type Story = StoryObj<typeof TextField>

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
        Main={<TextfieldDemo />}
        NewYork={<NyTextfieldDemo />}
      />
    )
  },
}

export const TextArea: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<TextfieldArea />}
        NewYork={<NyTextfieldArea />}
      />
    )
  },
}

export const Description: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<TextfieldDesc />}
        NewYork={<NyTextfieldDesc />}
      />
    )
  },
}
