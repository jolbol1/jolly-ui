import {
  Slider,
  SliderFillTrack,
  SliderThumb,
  SliderTrack,
} from "@/registry/new-york/ui/slider"

export function SliderVertical() {
  return (
    <Slider
      aria-label="slider demo"
      defaultValue={[50]}
      maxValue={100}
      step={1}
      className="h-[150px]"
      orientation="vertical"
    >
      <SliderTrack>
        <SliderFillTrack />
        <SliderThumb />
      </SliderTrack>
    </Slider>
  )
}
export default SliderVertical
