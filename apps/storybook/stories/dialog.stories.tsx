import { useArgs } from "@storybook/preview-api"
import type { Meta, StoryObj } from "@storybook/react"

import { DialogAlertDemo } from "../../docs/registry/default/example/dialog/dialog-alert-demo.jsx"
import { DialogCloseButton } from "../../docs/registry/default/example/dialog/dialog-close-button.jsx"
import { DialogDemo } from "../../docs/registry/default/example/dialog/dialog-demo.jsx"
import { DialogSheet } from "../../docs/registry/default/example/dialog/dialog-sheet.jsx"
import { DialogContent } from "../../docs/registry/default/ui/dialog.jsx"
import { DialogAlertDemo as NyDialogAlertDemo } from "../../docs/registry/new-york/example/dialog/dialog-alert-demo.jsx"
import { DialogCloseButton as NyDialogCloseButton } from "../../docs/registry/new-york/example/dialog/dialog-close-button.jsx"
import { DialogDemo as NyDialogDemo } from "../../docs/registry/new-york/example/dialog/dialog-demo.jsx"
import { DialogSheet as NyDialogSheet } from "../../docs/registry/new-york/example/dialog/dialog-sheet.jsx"
import { ThemeHandler } from "./theme-wrapper.jsx"

const meta: Meta<typeof DialogContent> = {
  component: DialogContent,
  title: "Overlays/Dialog",
}

export default meta

type Story = StoryObj<typeof DialogContent>

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
        Main={<DialogDemo />}
        NewYork={<NyDialogDemo />}
      />
    )
  },
}

export const Alert: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<DialogAlertDemo />}
        NewYork={<NyDialogAlertDemo />}
      />
    )
  },
}

export const CustomClose: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<DialogCloseButton />}
        NewYork={<NyDialogCloseButton />}
      />
    )
  },
}

export const Sheet: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<DialogSheet />}
        NewYork={<NyDialogSheet />}
      />
    )
  },
}
