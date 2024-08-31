import { Label } from "@/registry/default/ui/field"
import {
  Slider,
  SliderFillTrack,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from "@/registry/default/ui/slider"

export default function SliderDemo() {
  return (
    <Slider defaultValue={30} className="flex w-3/5 flex-col items-start gap-2">
      <div className="flex w-full justify-between">
        <Label>Opacity</Label>
        <SliderOutput />
      </div>
      <SliderTrack>
        <SliderFillTrack />
        <SliderThumb />
      </SliderTrack>
    </Slider>
  )
}
