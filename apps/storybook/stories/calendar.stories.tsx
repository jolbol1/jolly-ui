import { FontBoldIcon } from "@radix-ui/react-icons"
import { useArgs } from "@storybook/preview-api"
import type { Meta, StoryObj } from "@storybook/react"
import { Bold } from "lucide-react"

import { CalendarDemo } from "../../docs/registry/default/example/calendar/calendar-demo.jsx"
import { Calendar } from "../../docs/registry/default/ui/calendar.jsx"
import { CalendarDemo as NyCalendarDemo } from "../../docs/registry/new-york/example/calendar/calendar-demo.jsx"
import { ThemeHandler } from "./theme-wrapper.jsx"

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  title: "Date & Time /Calendar",
}

export default meta

type Story = StoryObj<typeof Calendar>

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
        Main={<CalendarDemo />}
        NewYork={<NyCalendarDemo />}
      />
    )
  },
}
