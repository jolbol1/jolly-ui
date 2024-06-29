import {
  ColorThumb,
  ColorWheel,
  ColorWheelTrack,
} from "@/registry/new-york/ui/color"

export function ColorWheelDemo() {
  return (
    <ColorWheel>
      <ColorWheelTrack />
      <ColorThumb />
    </ColorWheel>
  )
}

export default ColorWheelDemo
