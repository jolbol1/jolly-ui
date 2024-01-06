import { FontBoldIcon } from "@radix-ui/react-icons"
import { useArgs } from "@storybook/preview-api"
import type { Meta, StoryObj } from "@storybook/react"
import { Bold } from "lucide-react"

import { RadioGroupDemo } from "../../docs/registry/default/example/radio/radio-group-demo.jsx"
import { RadioGroupHorizontal } from "../../docs/registry/default/example/radio/radio-group-orientation.jsx"
import { Radio } from "../../docs/registry/default/ui/radio-group.jsx"
import { RadioGroupDemo as NyRadioGroupDemo } from "../../docs/registry/new-york/example/radio/radio-group-demo.jsx"
import { RadioGroupHorizontal as NyRadioGroupHorizontal } from "../../docs/registry/new-york/example/radio/radio-group-orientation.jsx"
import { ThemeHandler } from "./theme-wrapper.jsx"

const meta: Meta<typeof Radio> = {
  component: Radio,
  title: "Form/Radio",
}

export default meta

type Story = StoryObj<typeof Radio>

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
        Main={<RadioGroupDemo />}
        NewYork={<NyRadioGroupDemo />}
      />
    )
  },
}

export const Horizontal: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<RadioGroupHorizontal />}
        NewYork={<NyRadioGroupHorizontal />}
      />
    )
  },
}
