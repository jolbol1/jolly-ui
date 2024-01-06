import { useArgs } from "@storybook/preview-api"
import type { Meta, StoryObj } from "@storybook/react"

import { DropdownMenuDemo } from "../../docs/registry/default/example/menu/dropdown-menu-basic.jsx"
import { DropdownMenuCheckboxes } from "../../docs/registry/default/example/menu/dropdown-menu-checkboxes.jsx"
import { DropdownMenuFull } from "../../docs/registry/default/example/menu/dropdown-menu-demo.jsx"
import { DropdownMenuDynamic } from "../../docs/registry/default/example/menu/dropdown-menu-dynamic.jsx"
import { DropdownMenuLink } from "../../docs/registry/default/example/menu/dropdown-menu-link.jsx"
import { DropdownMenuRadio } from "../../docs/registry/default/example/menu/dropdown-menu-radio-group.jsx"
import { DropdownMenuSection } from "../../docs/registry/default/example/menu/dropdown-menu-section.jsx"
import { Menu } from "../../docs/registry/default/ui/menu.jsx"
import { DropdownMenuDemo as NyDropdownMenuDemo } from "../../docs/registry/new-york/example/menu/dropdown-menu-basic.jsx"
import { DropdownMenuCheckboxes as NyDropdownMenuCheckboxes } from "../../docs/registry/new-york/example/menu/dropdown-menu-checkboxes.jsx"
import { DropdownMenuFull as NyDropdownMenuFull } from "../../docs/registry/new-york/example/menu/dropdown-menu-demo.jsx"
import { DropdownMenuDynamic as NyDropdownMenuDynamic } from "../../docs/registry/new-york/example/menu/dropdown-menu-dynamic.jsx"
import { DropdownMenuLink as NyDropdownMenuLink } from "../../docs/registry/new-york/example/menu/dropdown-menu-link.jsx"
import { DropdownMenuRadio as NyDropdownMenuRadio } from "../../docs/registry/new-york/example/menu/dropdown-menu-radio-group.jsx"
import { DropdownMenuSection as NyDropdownMenuSection } from "../../docs/registry/new-york/example/menu/dropdown-menu-section.jsx"
import { ThemeHandler } from "./theme-wrapper.jsx"

const meta: Meta<typeof Menu> = {
  component: Menu,
  title: "Collections/Menu",
}

export default meta

type Story = StoryObj<typeof Menu>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Basic: Story = {
  render: function Render(args) {
    const [{ theme }, updateArgs] = useArgs()
    //@ts-ignore
    delete args.theme
    return (
      <ThemeHandler
        theme={theme}
        Main={<DropdownMenuDemo />}
        NewYork={<NyDropdownMenuDemo />}
      />
    )
  },
  name: "Basic",
}

export const Checkboxes: Story = {
  render: function Render(args) {
    const [{ theme }, updateArgs] = useArgs()
    //@ts-ignore
    delete args.theme
    return (
      <ThemeHandler
        theme={theme}
        Main={<DropdownMenuCheckboxes />}
        NewYork={<NyDropdownMenuCheckboxes />}
      />
    )
  },
}

export const KitchenSink: Story = {
  render: function Render(args) {
    const [{ theme }, updateArgs] = useArgs()
    //@ts-ignore
    delete args.theme
    return (
      <ThemeHandler
        theme={theme}
        Main={<DropdownMenuFull />}
        NewYork={<NyDropdownMenuFull />}
      />
    )
  },
}

export const Dynamic: Story = {
  render: function Render(args) {
    const [{ theme }, updateArgs] = useArgs()
    //@ts-ignore
    delete args.theme
    return (
      <ThemeHandler
        theme={theme}
        Main={<DropdownMenuDynamic />}
        NewYork={<NyDropdownMenuDynamic />}
      />
    )
  },
}

export const Links: Story = {
  render: function Render(args) {
    const [{ theme }, updateArgs] = useArgs()
    //@ts-ignore
    delete args.theme
    return (
      <ThemeHandler
        theme={theme}
        Main={<DropdownMenuLink />}
        NewYork={<NyDropdownMenuLink />}
      />
    )
  },
}

export const Radio: Story = {
  render: function Render(args) {
    const [{ theme }, updateArgs] = useArgs()
    //@ts-ignore
    delete args.theme
    return (
      <ThemeHandler
        theme={theme}
        Main={<DropdownMenuRadio />}
        NewYork={<NyDropdownMenuRadio />}
      />
    )
  },
}

export const Sections: Story = {
  render: function Render(args) {
    const [{ theme }, updateArgs] = useArgs()
    //@ts-ignore
    delete args.theme
    return (
      <ThemeHandler
        theme={theme}
        Main={<DropdownMenuSection />}
        NewYork={<NyDropdownMenuSection />}
      />
    )
  },
}
