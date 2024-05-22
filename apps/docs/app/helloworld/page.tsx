"use client"

import React from "react"
import { Text, parseColor } from "react-aria-components"

import {
  ColorArea,
  ColorField,
  ColorSlider,
  ColorSwatch,
  ColorSwatchPicker,
  ColorSwatchPickerItem,
  ColorThumb,
  ColorWheel,
  ColorWheelTrack,
  SliderTrack,
} from "@/registry/default/ui/color"
// I use this to test components I am building. Easier than launching storybook to be honest.

import { Input } from "@/registry/default/ui/input"
import { Label } from "@/registry/default/ui/label"

export default function Page() {
  let [color, setColor] = React.useState(parseColor("#f00"))

  return (
    <div>
      Hello World
      {/* <ColorArea>
        <ColorThumb />
      </ColorArea>
      <ColorSlider defaultValue="hsl(0, 100%, 50%)" channel="hue">
        <SliderTrack>
          <ColorThumb className="top-1/2" />
        </SliderTrack>
      </ColorSlider>
      <ColorSlider defaultValue="#f00" channel="alpha">
        <SliderTrack
          style={({ defaultStyle }) => ({
            background: `${defaultStyle.background},
            repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`,
          })}
        >
          <ColorThumb className="top-1/2" />
        </SliderTrack>
      </ColorSlider>
      <ColorWheel>
        <ColorWheelTrack />
        <ColorThumb />
      </ColorWheel>
      <h1>LINKED</h1>
      <ColorArea
        value={color}
        onChange={setColor}
        xChannel="saturation"
        yChannel="brightness"
      >
        <ColorThumb />
      </ColorArea>
      <ColorSlider value={color} onChange={setColor} channel="hue">
        <SliderTrack>
          <ColorThumb className="top-1/2" />
        </SliderTrack>
      </ColorSlider>
      <ColorSlider value={color} onChange={setColor} channel="alpha">
        <SliderTrack
          style={({ defaultStyle }) => ({
            background: `${defaultStyle.background},
            repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`,
          })}
        >
          <ColorThumb className="top-1/2" />
        </SliderTrack>
      </ColorSlider>
      <ColorField
        value={color}
        onChange={(c) => c && setColor(c.toFormat("hsba"))}
        className="w-[8rem]"
      >
        <Label>Color</Label>
        <Input />
        <Text slot="description">Enter a background color.</Text>
      </ColorField> */}
      <ColorSwatchPicker
        value={color}
        onChange={(c) => setColor(c.toFormat("hsba"))}
      >
        <ColorSwatchPickerItem color="#A00">
          <ColorSwatch className="size-8" />
        </ColorSwatchPickerItem>
        <ColorSwatchPickerItem color="#f80">
          <ColorSwatch />
        </ColorSwatchPickerItem>
        <ColorSwatchPickerItem color="#080">
          <ColorSwatch />
        </ColorSwatchPickerItem>
        <ColorSwatchPickerItem color="#08f">
          <ColorSwatch />
        </ColorSwatchPickerItem>
        <ColorSwatchPickerItem color="#088">
          <ColorSwatch />
        </ColorSwatchPickerItem>
        <ColorSwatchPickerItem color="#008">
          <ColorSwatch />
        </ColorSwatchPickerItem>
      </ColorSwatchPicker>
    </div>
  )
}
