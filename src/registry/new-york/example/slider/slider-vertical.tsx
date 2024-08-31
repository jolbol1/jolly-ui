import {
  Slider,
  SliderFillTrack,
  SliderThumb,
  SliderTrack,
} from "@/registry/new-york/ui/slider"

export default function SliderVertical() {
  return (
    <Slider
      orientation="vertical"
      aria-label="Opacity"
      maxValue={1}
      step={0.01}
      className="flex h-[150px] flex-col items-start gap-2"
    >
      <SliderTrack>
        <SliderFillTrack />
        <SliderThumb />
      </SliderTrack>
    </Slider>
  )
}
