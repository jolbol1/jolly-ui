import {
  ColorThumb,
  ColorWheel,
  ColorWheelTrack,
} from "@/registry/default/ui/color"

export function ColorWheelDemo() {
  return (
    <ColorWheel>
      <ColorWheelTrack />
      <ColorThumb />
    </ColorWheel>
  )
}

export default ColorWheelDemo
