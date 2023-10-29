import { Label } from "@/registry/new-york/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/new-york/ui/radio-group"

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1">
          Default
        </RadioGroupItem>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2">
          Comfortable
        </RadioGroupItem>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3">
          Compact
        </RadioGroupItem>
      </div>
    </RadioGroup>
  )
}
