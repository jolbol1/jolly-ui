import { useArgs } from "@storybook/preview-api"
import type { Meta, StoryObj } from "@storybook/react"

import { BreadcrumbsDemo } from "../../docs/registry/default/example/breadcrumbs/breadcrumbs-demo.jsx"
import { BreadcrumbsDisabled } from "../../docs/registry/default/example/breadcrumbs/breadcrumbs-disabled.jsx"
import { BreadcrumbsDropdown } from "../../docs/registry/default/example/breadcrumbs/breadcrumbs-dropdown.jsx"
import { BreadcrumbsEllipsis } from "../../docs/registry/default/example/breadcrumbs/breadcrumbs-ellipsis.jsx"
import { BreadcrumbsItems } from "../../docs/registry/default/example/breadcrumbs/breadcrumbs-items.jsx"
import { BreadcrumbsSeparator } from "../../docs/registry/default/example/breadcrumbs/breadcrumbs-separator.jsx"
import { Breadcrumbs } from "../../docs/registry/default/ui/breadcrumbs.jsx"
import { BreadcrumbsDemo as NyBreadcrumbsDemo } from "../../docs/registry/new-york/example/breadcrumbs/breadcrumbs-demo.jsx"
import { BreadcrumbsDisabled as NyBreadcrumbsDisabled } from "../../docs/registry/new-york/example/breadcrumbs/breadcrumbs-disabled.jsx"
import { BreadcrumbsDropdown as NyBreadcrumbsDropdown } from "../../docs/registry/new-york/example/breadcrumbs/breadcrumbs-dropdown.jsx"
import { BreadcrumbsEllipsis as NyBreadcrumbsEllipsis } from "../../docs/registry/new-york/example/breadcrumbs/breadcrumbs-ellipsis.jsx"
import { BreadcrumbsItems as NyBreadcrumbsItems } from "../../docs/registry/new-york/example/breadcrumbs/breadcrumbs-items.jsx"
import { BreadcrumbsSeparator as NyBreadcrumbsSeparator } from "../../docs/registry/new-york/example/breadcrumbs/breadcrumbs-separator.jsx"
import { ThemeHandler } from "./theme-wrapper.jsx"

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  title: "Navigation/Breadcrumbs",
}

export default meta

type Story = StoryObj<typeof Breadcrumbs>

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
        Main={<BreadcrumbsDemo />}
        NewYork={<NyBreadcrumbsDemo />}
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
        Main={<BreadcrumbsItems />}
        NewYork={<NyBreadcrumbsItems />}
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
        Main={<BreadcrumbsDisabled />}
        NewYork={<NyBreadcrumbsDisabled />}
      />
    )
  },
}

export const Ellipsis: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<BreadcrumbsEllipsis />}
        NewYork={<NyBreadcrumbsEllipsis />}
      />
    )
  },
}

export const Separator: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<BreadcrumbsSeparator />}
        NewYork={<NyBreadcrumbsSeparator />}
      />
    )
  },
}

export const Dropdown: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<BreadcrumbsDropdown />}
        NewYork={<NyBreadcrumbsDropdown />}
      />
    )
  },
}
