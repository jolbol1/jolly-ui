import { useArgs } from "@storybook/preview-api"
import type { Meta, StoryObj } from "@storybook/react"

import { ButtonDemo } from "../../docs/registry/default/example/button/button-demo.jsx"
import { ButtonDestructive } from "../../docs/registry/default/example/button/button-destructive.jsx"
import { ButtonGhost } from "../../docs/registry/default/example/button/button-ghost.jsx"
import { ButtonIcon } from "../../docs/registry/default/example/button/button-icon.jsx"
import { ButtonLink } from "../../docs/registry/default/example/button/button-link.jsx"
import { ButtonLoading } from "../../docs/registry/default/example/button/button-loading.jsx"
import { ButtonOutline } from "../../docs/registry/default/example/button/button-outline.jsx"
import { ButtonPress } from "../../docs/registry/default/example/button/button-press.jsx"
import { ButtonSecondary } from "../../docs/registry/default/example/button/button-secondary.jsx"
import { ButtonWithIcon } from "../../docs/registry/default/example/button/button-with-icon.jsx"
import { Button } from "../../docs/registry/default/ui/button.jsx"
import { ButtonDemo as NyButtonDemo } from "../../docs/registry/new-york/example/button/button-demo.jsx"
import { ButtonDestructive as NyButtonDestructive } from "../../docs/registry/new-york/example/button/button-destructive.jsx"
import { ButtonGhost as NyButtonGhost } from "../../docs/registry/new-york/example/button/button-ghost.jsx"
import { ButtonIcon as NyButtonIcon } from "../../docs/registry/new-york/example/button/button-icon.jsx"
import { ButtonLink as NyButtonLink } from "../../docs/registry/new-york/example/button/button-link.jsx"
import { ButtonLoading as NyButtonLoading } from "../../docs/registry/new-york/example/button/button-loading.jsx"
import { ButtonOutline as NyButtonOutline } from "../../docs/registry/new-york/example/button/button-outline.jsx"
import { ButtonPress as NyButtonPress } from "../../docs/registry/new-york/example/button/button-press.jsx"
import { ButtonSecondary as NyButtonSecondary } from "../../docs/registry/new-york/example/button/button-secondary.jsx"
import { ButtonWithIcon as NyButtonWithIcon } from "../../docs/registry/new-york/example/button/button-with-icon.jsx"
import { Button as NewYork } from "../../docs/registry/new-york/ui/button.jsx"
import { ThemeHandler } from "./theme-wrapper.jsx"

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Buttons/Button",
}

export default meta

type Story = StoryObj<typeof Button>

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
    return theme === "new-york" ? <NewYork {...args} /> : <Button {...args} />
  },
  name: "Button",
  args: {
    children: "Hello",
    type: "button",
  },
}

export const Basic: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<ButtonDemo />}
        NewYork={<NyButtonDemo />}
      />
    )
  },
}

export const Destructive: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<ButtonDestructive />}
        NewYork={<NyButtonDestructive />}
      />
    )
  },
}

export const Ghost: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<ButtonGhost />}
        NewYork={<NyButtonGhost />}
      />
    )
  },
}

export const Icon: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<ButtonIcon />}
        NewYork={<NyButtonIcon />}
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
        Main={<ButtonLink />}
        NewYork={<ButtonLink />}
      />
    )
  },
}
export const Loading: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<ButtonLoading />}
        NewYork={<NyButtonLoading />}
      />
    )
  },
}

export const Outline: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<ButtonOutline />}
        NewYork={<NyButtonOutline />}
      />
    )
  },
}

export const Press: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<ButtonPress />}
        NewYork={<NyButtonPress />}
      />
    )
  },
}

export const Secondary: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<ButtonSecondary />}
        NewYork={<NyButtonSecondary />}
      />
    )
  },
}

export const WithIcon: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<ButtonWithIcon />}
        NewYork={<NyButtonWithIcon />}
      />
    )
  },
}
