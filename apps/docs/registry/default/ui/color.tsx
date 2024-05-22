import {
  ColorArea as _ColorArea,
  ColorField as _ColorField,
  ColorSlider as _ColorSlider,
  ColorSwatch as _ColorSwatch,
  ColorSwatchPicker as _ColorSwatchPicker,
  ColorSwatchPickerItem as _ColorSwatchPickerItem,
  ColorThumb as _ColorThumb,
  ColorWheel as _ColorWheel,
  ColorWheelTrack as _ColorWheelTrack,
  SliderTrack as _SliderTrack,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const ColorSlider = _ColorSlider

const ColorField = _ColorField

const ColorWheelTrack = _ColorWheelTrack

interface ColorWheelProps
  extends Omit<
    React.ComponentProps<typeof _ColorWheel>,
    "outerRadius" | "innerRadius"
  > {
  outerRadius?: number
  innerRadius?: number
}

function ColorWheel({
  className,
  outerRadius = 100,
  innerRadius = 74,
  ...props
}: ColorWheelProps) {
  return (
    <_ColorWheel
      innerRadius={innerRadius}
      outerRadius={outerRadius}
      className={cn(className)}
      {...props}
    />
  )
}

function ColorArea({
  className,
  ...props
}: React.ComponentProps<typeof _ColorArea>) {
  return (
    <_ColorArea
      className={cn(
        "h-[192px] w-[192px] shrink-0 rounded-md border border-border shadow-md",
        className
      )}
      {...props}
    />
  )
}

function SliderTrack({
  className,
  ...props
}: React.ComponentProps<typeof _SliderTrack>) {
  return (
    <_SliderTrack
      className={cn(
        "h-7 w-[192px] rounded-md border border-border ",
        className
      )}
      {...props}
    />
  )
}

function ColorThumb({
  className,
  ...props
}: React.ComponentProps<typeof _ColorThumb>) {
  return (
    <_ColorThumb
      className={cn(
        "box-border size-5 rounded-[50%] border-2 border-white shadow-md data-[focus-visible]:size-6",
        className
      )}
      {...props}
    />
  )
}

function ColorSwatchPicker({
  className,
  ...props
}: React.ComponentProps<typeof _ColorSwatchPicker>) {
  return (
    <_ColorSwatchPicker
      className={cn("flex flex-wrap gap-2", className)}
      {...props}
    />
  )
}

function ColorSwatchPickerItem({
  className,
  ...props
}: React.ComponentProps<typeof _ColorSwatchPickerItem>) {
  return (
    <_ColorSwatchPickerItem
      className={cn(
        "w-fit overflow-hidden rounded-md border-2 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring  data-[disabled]:pointer-events-none data-[selected]:border-white data-[disabled]:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function ColorSwatch({
  className,
  ...props
}: React.ComponentProps<typeof _ColorSwatch>) {
  return <_ColorSwatch className={cn("size-8", className)} {...props} />
}

export type { ColorWheelProps }
export {
  ColorSlider,
  ColorField,
  ColorWheelTrack,
  ColorWheel,
  ColorArea,
  SliderTrack,
  ColorThumb,
  ColorSwatchPicker,
  ColorSwatchPickerItem,
  ColorSwatch,
}
