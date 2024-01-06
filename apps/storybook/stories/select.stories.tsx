import { useArgs } from "@storybook/preview-api"
import type { Meta, StoryObj } from "@storybook/react"

import { SelectDemo } from "../../docs/registry/default/example/select/select-demo.jsx"
import { SelectDisabled } from "../../docs/registry/default/example/select/select-disabled.jsx"
import { SelectDynamic } from "../../docs/registry/default/example/select/select-dynamic.jsx"
import { SelectLinks } from "../../docs/registry/default/example/select/select-links.jsx"
import { SelectSections } from "../../docs/registry/default/example/select/select-sections.jsx"
import { SelectContent } from "../../docs/registry/default/ui/select.jsx"
import { SelectDemo as NySelectDemo } from "../../docs/registry/new-york/example/select/select-demo.jsx"
import { SelectDisabled as NySelectDisabled } from "../../docs/registry/new-york/example/select/select-disabled.jsx"
import { SelectDynamic as NySelectDynamic } from "../../docs/registry/new-york/example/select/select-dynamic.jsx"
import { SelectLinks as NySelectLinks } from "../../docs/registry/new-york/example/select/select-links.jsx"
import { SelectSections as NySelectSections } from "../../docs/registry/new-york/example/select/select-sections.jsx"
import { ThemeHandler } from "./theme-wrapper.jsx"

const meta: Meta<typeof SelectContent> = {
  component: SelectContent,
  title: "Pickers/Select",
}

export default meta

type Story = StoryObj<typeof SelectContent>

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
        Main={<SelectDemo />}
        NewYork={<NySelectDemo />}
      />
    )
  },
}

export const Dynamic: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<SelectDynamic />}
        NewYork={<NySelectDynamic />}
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
        Main={<SelectDisabled />}
        NewYork={<NySelectDisabled />}
      />
    )
  },
}

export const Link: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<SelectLinks />}
        NewYork={<NySelectLinks />}
      />
    )
  },
}

export const Section: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<SelectSections />}
        NewYork={<NySelectSections />}
      />
    )
  },
}
