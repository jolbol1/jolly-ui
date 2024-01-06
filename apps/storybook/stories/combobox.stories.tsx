import { useArgs } from "@storybook/preview-api"
import type { Meta, StoryObj } from "@storybook/react"

import { ComboboxBasic } from "../../docs/registry/default/example/combobox/combobox-basic.jsx"
import { ComboboxDemo } from "../../docs/registry/default/example/combobox/combobox-demo.jsx"
import { ComboboxDynamicDemo } from "../../docs/registry/default/example/combobox/combobox-dynamic.jsx"
import { ComboboxLinkDemo } from "../../docs/registry/default/example/combobox/combobox-link.jsx"
import { ComboboxSectionDemo } from "../../docs/registry/default/example/combobox/combobox-section.jsx"
import { ComboboxPopover } from "../../docs/registry/default/ui/combobox.jsx"
import { ComboboxBasic as NyComboboxBasic } from "../../docs/registry/new-york/example/combobox/combobox-basic.jsx"
import { ComboboxDemo as NyComboboxDemo } from "../../docs/registry/new-york/example/combobox/combobox-demo.jsx"
import { ComboboxDynamicDemo as NyComboboxDynamicDemo } from "../../docs/registry/new-york/example/combobox/combobox-dynamic.jsx"
import { ComboboxLinkDemo as NyComboboxLinkDemo } from "../../docs/registry/new-york/example/combobox/combobox-link.jsx"
import { ComboboxSectionDemo as NyComboboxSectionDemo } from "../../docs/registry/new-york/example/combobox/combobox-section.jsx"
import { ThemeHandler } from "./theme-wrapper.jsx"

const meta: Meta<typeof ComboboxPopover> = {
  component: ComboboxPopover,
  title: "Pickers/Combobox",
}

export default meta

type Story = StoryObj<typeof ComboboxPopover>

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
        Main={<ComboboxBasic />}
        NewYork={<NyComboboxBasic />}
      />
    )
  },
}

export const Demo: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<ComboboxDemo />}
        NewYork={<NyComboboxDemo />}
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
        Main={<ComboboxDynamicDemo />}
        NewYork={<NyComboboxDynamicDemo />}
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
        Main={<ComboboxLinkDemo />}
        NewYork={<NyComboboxLinkDemo />}
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
        Main={<ComboboxSectionDemo />}
        NewYork={<NyComboboxSectionDemo />}
      />
    )
  },
}
