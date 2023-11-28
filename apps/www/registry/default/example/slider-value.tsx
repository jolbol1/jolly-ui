import { cn } from "@/lib/utils"
import { Label } from "@/registry/default/ui/label"
import {
  Slider,
  SliderFillTrack,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from "@/registry/default/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>

export default function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <Slider
      aria-label="slider demo"
      defaultValue={[50]}
      maxValue={100}
      step={1}
      className={cn("w-[60%]")}
      {...props}
    >
      <div className="flex w-full flex-col">
        <div className="flex justify-between">
          <Label>Opacity</Label>
          <SliderOutput className="text-sm" />
        </div>
        <SliderTrack>
          <SliderFillTrack />
          <SliderThumb />
        </SliderTrack>
      </div>
    </Slider>
  )
}
