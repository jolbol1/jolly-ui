import { Label } from "@/registry/new-york/ui/field"
import {
  Slider,
  SliderFillTrack,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from "@/registry/new-york/ui/slider"

export default function SliderValues() {
  return (
    <Slider
      minValue={50}
      maxValue={150}
      defaultValue={100}
      className="flex w-3/5 flex-col items-start gap-2"
    >
      <div className="flex w-full justify-between">
        <Label>Cookies to Buy</Label>
        <SliderOutput />
      </div>
      <SliderTrack>
        <SliderFillTrack />
        <SliderThumb />
      </SliderTrack>
    </Slider>
  )
}
