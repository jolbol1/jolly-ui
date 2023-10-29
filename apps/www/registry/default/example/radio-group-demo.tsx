import { Label } from "@/registry/default/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/default/ui/radio-group"

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <RadioGroupItem value="default" id="r1">
        Default
      </RadioGroupItem>
      <RadioGroupItem value="comfortable" id="r2">
        Comfortable
      </RadioGroupItem>
      <RadioGroupItem value="compact" id="r3">
        Compact
      </RadioGroupItem>
    </RadioGroup>
  )
}
