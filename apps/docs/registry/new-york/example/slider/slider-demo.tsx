import {
  Slider,
  SliderFillTrack,
  SliderThumb,
  SliderTrack,
} from "@/registry/new-york/ui/slider"

export function SliderDemo() {
  return (
    <Slider
      aria-label="slider demo"
      defaultValue={[50]}
      maxValue={100}
      step={1}
      className="w-[60%]"
    >
      <SliderTrack>
        <SliderFillTrack />
        <SliderThumb />
      </SliderTrack>
    </Slider>
  )
}
export default SliderDemo
