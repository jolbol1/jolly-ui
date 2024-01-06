import { useArgs } from "@storybook/preview-api"
import type { Meta, StoryObj } from "@storybook/react"

import { BreadcrumbsDemo } from "../../docs/registry/default/example/breadcrumbs/breadcrumbs-demo.jsx"
import { BreadcrumbsItems } from "../../docs/registry/default/example/breadcrumbs/breadcrumbs-items.jsx"
import { Breadcrumbs } from "../../docs/registry/default/ui/breadcrumbs.jsx"
import { BreadcrumbsDemo as NyBreadcrumbsDemo } from "../../docs/registry/new-york/example/breadcrumbs/breadcrumbs-demo.jsx"
import { BreadcrumbsItems as NyBreadcrumbsItems } from "../../docs/registry/new-york/example/breadcrumbs/breadcrumbs-items.jsx"
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
