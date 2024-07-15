import { Label } from "@/registry/new-york/ui/field"
import {
  Slider,
  SliderFillTrack,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from "@/registry/new-york/ui/slider"

export default function SliderStepValues() {
  return (
    <Slider
      formatOptions={{ style: "currency", currency: "USD" }}
      minValue={0}
      maxValue={100}
      step={5}
      className="flex w-3/5 flex-col items-start gap-2"
    >
      <div className="flex w-full justify-between">
        <Label>Amount</Label>
        <SliderOutput />
      </div>
      <SliderTrack>
        <SliderFillTrack />
        <SliderThumb />
      </SliderTrack>
    </Slider>
  )
}
