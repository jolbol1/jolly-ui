"use client"

import React from "react"
import { getColorChannels, parseColor } from "react-aria-components"

import { Button } from "@/registry/default/ui/button"
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
} from "@/registry/default/ui/color"
import { Dialog, DialogTrigger } from "@/registry/default/ui/dialog"
import { Label } from "@/registry/default/ui/field"
import { Popover } from "@/registry/default/ui/popover"
import { Input } from "@/registry/default/ui/textfield"

export function HslaPicker() {
  let [color, setColor] = React.useState(
    parseColor("hsla(240, 100%, 50%, 0.8)")
  )

  return (
    <ColorPicker value={color} onChange={setColor}>
      <DialogTrigger>
        <Button variant="ghost" className="flex h-fit items-center gap-2 p-1">
          <ColorSwatch className="size-8 rounded-md border-2" />
          HSLA Color
        </Button>
        <Popover placement="bottom start" className="w-fit">
          <Dialog className="flex flex-col gap-4 p-3 outline-none">
            <div>
              <ColorArea
                colorSpace="hsb"
                xChannel="saturation"
                yChannel="brightness"
                className="h-[136px] rounded-b-none border-b-0"
              >
                <ColorThumb className="z-50" />
              </ColorArea>
              <ColorSlider colorSpace="hsb" channel="hue">
                <SliderTrack className="rounded-none border-y-0">
                  <ColorThumb className="top-1/2" />
                </SliderTrack>
              </ColorSlider>
              <ColorSlider colorSpace="hsb" channel="alpha">
                <SliderTrack
                  className="rounded-t-none border-t-0"
                  style={({ defaultStyle }) => ({
                    background: `${defaultStyle.background},
            repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`,
                  })}
                >
                  <ColorThumb className="top-1/2" />
                </SliderTrack>
              </ColorSlider>
            </div>
            <div className="grid w-[192px] grid-cols-4 gap-1">
              {getColorChannels("hsl").map((channel) => (
                <ColorField
                  colorSpace="hsl"
                  channel={channel}
                  key={channel}
                  className="col-span-2"
                >
                  <Label className="capitalize">{channel.toString()}</Label>
                  <Input className="" />
                </ColorField>
              ))}
              <ColorField
                colorSpace="rgb"
                channel="alpha"
                className="col-span-2"
              >
                <Label className="capitalize">Alpha</Label>
                <Input className="" />
              </ColorField>
            </div>

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

export default HslaPicker
