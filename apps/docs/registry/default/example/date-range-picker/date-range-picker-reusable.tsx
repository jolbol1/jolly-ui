import { JollyDateRangePicker } from "@/registry/default/ui/date-picker"

export default function DateRangePickerReusable() {
  return (
    <JollyDateRangePicker
      className="min-w-[300px]"
      isRequired
      label="Trip dates"
    />
  )
}
