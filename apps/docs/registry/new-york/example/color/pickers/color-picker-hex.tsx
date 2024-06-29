import React from "react"
import { parseColor } from "react-aria-components"

import { Button } from "@/registry/new-york/ui/button"
import {
  ColorArea,
  ColorField,
  ColorPicker,
  ColorSlider,
  ColorSwatch,
  ColorSwatchPicker,
  ColorSwatchPickerItem,
  ColorThumb,
  SliderTrack,
} from "@/registry/new-york/ui/color"
import { Dialog, DialogTrigger } from "@/registry/new-york/ui/dialog"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"
import { Popover } from "@/registry/new-york/ui/popover"

export function HexPicker() {
  let [color, setColor] = React.useState(parseColor("#f00"))

  return (
    <ColorPicker value={color} onChange={setColor}>
      <DialogTrigger>
        <Button variant="ghost" className="h-fit flex gap-2 items-center p-1">
          <ColorSwatch className="rounded-md size-8 border-2" />
          Hex Color
        </Button>
        <Popover placement="bottom start" className="w-fit">
          <Dialog className="p-3 outline-none flex flex-col gap-4">
            <div>
              <ColorArea
                colorSpace="hsb"
                xChannel="saturation"
                yChannel="brightness"
                className="border-b-0 rounded-b-none h-[164px]"
              >
                <ColorThumb className="z-50" />
              </ColorArea>
              <ColorSlider colorSpace="hsb" channel="hue">
                <SliderTrack className="rounded-t-none border-t-0">
                  <ColorThumb className="top-1/2" />
                </SliderTrack>
              </ColorSlider>
            </div>
            <ColorField colorSpace="hsb" className="w-[192px]">
              <Label>Hex</Label>
              <Input className="" />
            </ColorField>
            <ColorSwatchPicker className="w-[192px]">
              <ColorSwatchPickerItem color="#F00">
                <ColorSwatch />
              </ColorSwatchPickerItem>
              <ColorSwatchPickerItem color="#f90">
                <ColorSwatch />
              </ColorSwatchPickerItem>
              <ColorSwatchPickerItem color="#0F0">
                <ColorSwatch />
              </ColorSwatchPickerItem>
              <ColorSwatchPickerItem color="#08f">
                <ColorSwatch />
              </ColorSwatchPickerItem>
              <ColorSwatchPickerItem color="#00f">
                <ColorSwatch />
              </ColorSwatchPickerItem>
            </ColorSwatchPicker>
          </Dialog>
        </Popover>
      </DialogTrigger>
    </ColorPicker>
  )
}

export default HexPicker
