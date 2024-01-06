import { FontBoldIcon } from "@radix-ui/react-icons"
import { useArgs } from "@storybook/preview-api"
import type { Meta, StoryObj } from "@storybook/react"
import { Bold } from "lucide-react"

import { CheckboxDemo } from "../../docs/registry/default/example/checkbox/checkbox-demo.jsx"
import { CheckboxDisabled } from "../../docs/registry/default/example/checkbox/checkbox-disabled.jsx"
import { CheckboxGroupDemo } from "../../docs/registry/default/example/checkbox/checkbox-group-demo.jsx"
import { CheckboxIntermediate } from "../../docs/registry/default/example/checkbox/checkbox-indeterminate.jsx"
import { CheckboxReadonly } from "../../docs/registry/default/example/checkbox/checkbox-readonly.jsx"
import { CheckboxWithText } from "../../docs/registry/default/example/checkbox/checkbox-with-text.jsx"
import { Checkbox } from "../../docs/registry/default/ui/checkbox.jsx"
import { CheckboxDemo as NyCheckboxDemo } from "../../docs/registry/new-york/example/checkbox/checkbox-demo.jsx"
import { CheckboxDisabled as NyCheckboxDisabled } from "../../docs/registry/new-york/example/checkbox/checkbox-disabled.jsx"
import { CheckboxGroupDemo as NyCheckboxGroupDemo } from "../../docs/registry/new-york/example/checkbox/checkbox-group-demo.jsx"
import { CheckboxIntermediate as NyCheckboxIntermediate } from "../../docs/registry/new-york/example/checkbox/checkbox-indeterminate.jsx"
import { CheckboxReadonly as NyCheckboxReadonly } from "../../docs/registry/new-york/example/checkbox/checkbox-readonly.jsx"
import { CheckboxWithText as NyCheckboxWithText } from "../../docs/registry/new-york/example/checkbox/checkbox-with-text.jsx"
import { ThemeHandler } from "./theme-wrapper.jsx"

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "Form/Checkbox",
}

export default meta

type Story = StoryObj<typeof Checkbox>

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
        Main={<CheckboxDemo />}
        NewYork={<NyCheckboxDemo />}
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
        Main={<CheckboxDisabled />}
        NewYork={<NyCheckboxDisabled />}
      />
    )
  },
}

export const Intermediate: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<CheckboxIntermediate />}
        NewYork={<NyCheckboxIntermediate />}
      />
    )
  },
}

export const Readonly: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<CheckboxReadonly />}
        NewYork={<NyCheckboxReadonly />}
      />
    )
  },
}

export const WithText: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<CheckboxWithText />}
        NewYork={<NyCheckboxWithText />}
      />
    )
  },
}

export const Group: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<CheckboxGroupDemo />}
        NewYork={<NyCheckboxGroupDemo />}
      />
    )
  },
}
