import { FontBoldIcon } from "@radix-ui/react-icons"
import { useArgs } from "@storybook/preview-api"
import type { Meta, StoryObj } from "@storybook/react"
import { Bold } from "lucide-react"

import { DropZoneDemo } from "../../docs/registry/default/example/dropzone/dropzone-demo.jsx"
import { DropZoneFile } from "../../docs/registry/default/example/dropzone/dropzone-file.jsx"
import { DropZone } from "../../docs/registry/default/ui/dropzone.jsx"
import { DropZoneDemo as NyDropZoneDemo } from "../../docs/registry/new-york/example/dropzone/dropzone-demo.jsx"
import { DropZoneFile as NyDropZoneFile } from "../../docs/registry/new-york/example/dropzone/dropzone-file.jsx"
import { ThemeHandler } from "./theme-wrapper.jsx"

const meta: Meta<typeof DropZone> = {
  component: DropZone,
  title: "Drag & Drop/DropZone",
}

export default meta

type Story = StoryObj<typeof DropZone>

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
        Main={<DropZoneDemo />}
        NewYork={<NyDropZoneDemo />}
      />
    )
  },
}

export const File: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<DropZoneFile />}
        NewYork={<NyDropZoneFile />}
      />
    )
  },
}
