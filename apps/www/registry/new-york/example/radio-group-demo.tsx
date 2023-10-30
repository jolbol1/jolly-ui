import { Radio, RadioGroup } from "@/registry/new-york/ui/radio-group"

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <Radio value="default">Default</Radio>
      <Radio value="comfortable">Comfortable</Radio>
      <Radio value="compact">Compact</Radio>
    </RadioGroup>
  )
}
