"use client"

import React from "react"
import { parseColor } from "react-aria-components"

import {
  ColorSwatch,
  ColorSwatchPicker,
  ColorSwatchPickerItem,
} from "@/registry/new-york/ui/color"

export function ColorSwatchPickerDemo() {
  let [color, setColor] = React.useState(parseColor("#A00"))

  return (
    <ColorSwatchPicker value={color} onChange={setColor}>
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
  )
}

export default ColorSwatchPickerDemo
