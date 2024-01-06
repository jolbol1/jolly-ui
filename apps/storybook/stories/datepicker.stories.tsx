import { FontBoldIcon } from "@radix-ui/react-icons"
import { useArgs } from "@storybook/preview-api"
import type { Meta, StoryObj } from "@storybook/react"
import { Bold } from "lucide-react"

import { DatepickerDemo } from "../../docs/registry/default/example/datepicker/date-picker-demo.jsx"
import { DatePickerWithPresets } from "../../docs/registry/default/example/datepicker/date-picker-with-presets.jsx"
import { DatePicker } from "../../docs/registry/default/ui/date-picker.jsx"
import { DatepickerDemo as NyDatepickerDemo } from "../../docs/registry/new-york/example/datepicker/date-picker-demo.jsx"
import { DatePickerWithPresets as NyDatePickerWithPresets } from "../../docs/registry/new-york/example/datepicker/date-picker-with-presets.jsx"
import { ThemeHandler } from "./theme-wrapper.jsx"

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: "Date & Time /DatePicker",
}

export default meta

type Story = StoryObj<typeof DatePicker>

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
        Main={<DatepickerDemo />}
        NewYork={<NyDatepickerDemo />}
      />
    )
  },
}

export const Presets: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <ThemeHandler
        theme={theme}
        Main={<DatePickerWithPresets />}
        NewYork={<NyDatePickerWithPresets />}
      />
    )
  },
}
