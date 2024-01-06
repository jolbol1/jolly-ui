import { useArgs } from "@storybook/preview-api"
import type { Meta, StoryObj } from "@storybook/react"

import { TextareaDemo } from "../../docs/registry/default/example/textarea/textarea-demo.jsx"
import { TextareaDisabled } from "../../docs/registry/default/example/textarea/textarea-disabled.jsx"
import { TextareaWithButton } from "../../docs/registry/default/example/textarea/textarea-with-button.jsx"
import { TextareaWithLabel } from "../../docs/registry/default/example/textarea/textarea-with-label.jsx"
import { TextareaWithText } from "../../docs/registry/default/example/textarea/textarea-with-text.jsx"
import { TextArea } from "../../docs/registry/default/ui/textarea.jsx"
import { TextareaDemo as NyTextareaDemo } from "../../docs/registry/new-york/example/textarea/textarea-demo.jsx"
import { TextareaDisabled as NyTextareaDisabled } from "../../docs/registry/new-york/example/textarea/textarea-disabled.jsx"
import { TextareaWithButton as NyTextareaWithButton } from "../../docs/registry/new-york/example/textarea/textarea-with-button.jsx"
import { TextareaWithLabel as NyTextareaWithLabel } from "../../docs/registry/new-york/example/textarea/textarea-with-label.jsx"
import { TextareaWithText as NyTextareaWithText } from "../../docs/registry/new-york/example/textarea/textarea-with-text.jsx"
import { ThemeHandler } from "./theme-wrapper.jsx"

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  title: "Primitive/TextArea",
}

export default meta

type Story = StoryObj<typeof TextArea>

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
        Main={<TextareaDemo />}
        NewYork={<NyTextareaDemo />}
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
        Main={<TextareaDisabled />}
        NewYork={<NyTextareaDisabled />}
      />
    )
  },
}

export const Label: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<TextareaWithLabel />}
        NewYork={<NyTextareaWithLabel />}
      />
    )
  },
}

export const Text: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<TextareaWithText />}
        NewYork={<NyTextareaWithText />}
      />
    )
  },
}

export const WithButton: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<TextareaWithButton />}
        NewYork={<NyTextareaWithButton />}
      />
    )
  },
}
