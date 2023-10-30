import { Radio, RadioGroup } from "@/registry/default/ui/radio-group"

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <Radio value="default">Default</Radio>
      <Radio value="comfortable">Comfortable</Radio>
      <Radio value="compact">Compact</Radio>
    </RadioGroup>
  )
}
