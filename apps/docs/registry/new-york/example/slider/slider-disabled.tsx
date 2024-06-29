import { Label } from "@/registry/new-york/ui/field"
import {
  Slider,
  SliderFillTrack,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from "@/registry/new-york/ui/slider"

export default function SliderDisabled() {
  return (
    <Slider
      defaultValue={25}
      isDisabled
      className="w-[60%] flex flex-col items-start gap-2"
    >
      <div className="flex w-full justify-between">
        <Label>Cookies to share</Label>
        <SliderOutput />
      </div>
      <SliderTrack>
        <SliderFillTrack />
        <SliderThumb />
      </SliderTrack>
    </Slider>
  )
}
