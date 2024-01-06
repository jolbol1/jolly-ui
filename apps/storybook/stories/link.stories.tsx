import { useArgs } from "@storybook/preview-api"
import type { Meta, StoryObj } from "@storybook/react"

import { LinkDemo } from "../../docs/registry/default/example/link/link-demo.jsx"
import { LinkVariants } from "../../docs/registry/default/example/link/link-variants.jsx"
import { Link } from "../../docs/registry/default/ui/link.jsx"
import { LinkDemo as NyLinkDemo } from "../../docs/registry/new-york/example/link/link-demo.jsx"
import { LinkVariants as NyLinkVariants } from "../../docs/registry/new-york/example/link/link-variants.jsx"
import { Link as NewYork } from "../../docs/registry/new-york/ui/link.jsx"
import { ThemeHandler } from "./theme-wrapper.jsx"

const meta: Meta<typeof Link> = {
  component: Link,
  title: "Navigation/Link",
  argTypes: {
    variant: {
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      control: "radio",
    },
  },
}

export default meta

type Story = StoryObj<typeof Link>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: function Render(args) {
    const [{ theme }, updateArgs] = useArgs()
    //@ts-ignore
    delete args.theme
    return theme === "new-york" ? <NewYork {...args} /> : <Link {...args} />
  },
  name: "Link",
  args: {
    children: "Hello",
    href: "https://example.com",
    target: "_blank",
    variant: "link",
  },
}

export const Basic: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<LinkDemo />}
        NewYork={<NyLinkDemo />}
      />
    )
  },
}

export const Variants: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<LinkVariants />}
        NewYork={<NyLinkVariants />}
      />
    )
  },
}
