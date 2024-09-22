"use client"

import React from "react"
import { MagicWandIcon } from "@radix-ui/react-icons"
import {
  ColorPickerStateContext,
  getColorChannels,
  parseColor,
  type ColorSpace,
} from "react-aria-components"

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
import { Label } from "@/registry/new-york/ui/field"
import { Popover } from "@/registry/new-york/ui/popover"
import {
  Select,
  SelectItem,
  SelectListBox,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"
import { Input } from "@/registry/new-york/ui/textfield"

function EyeDropperButton() {
  let state = React.useContext(ColorPickerStateContext)!

  // Check browser support.
  // @ts-expect-error
  if (typeof EyeDropper === "undefined") {
    return null
  }

  return (
    <Button
      aria-label="Eye dropper"
      size="icon"
      variant="outline"
      onPress={() => {
        // @ts-expect-error
        new EyeDropper()
          .open()
          .then((result: { sRGBHex: string }) =>
            state.setColor(parseColor(result.sRGBHex))
          )
      }}
    >
      <MagicWandIcon />
    </Button>
  )
}

export function PickerMulti() {
  let [color, setColor] = React.useState(parseColor("hsl(60, 100%, 50%)"))
  let [space, setSpace] = React.useState<ColorSpace>("rgb")

  return (
    <ColorPicker value={color} onChange={setColor}>
      <DialogTrigger>
        <Button variant="ghost" className="flex h-fit items-center gap-2 p-1">
          <ColorSwatch className="size-8 rounded-md border-2" />
          Fill Color
        </Button>
        <Popover placement="bottom start" className="w-fit">
          <Dialog className="flex flex-col gap-4 p-3 outline-none">
            <div>
              <ColorArea
                colorSpace="hsb"
                xChannel="saturation"
                yChannel="brightness"
                className="h-[164px] rounded-b-none border-b-0"
              >
                <ColorThumb className="z-50" />
              </ColorArea>
              <ColorSlider colorSpace="hsb" channel="hue">
                <SliderTrack className="rounded-t-none border-t-0">
                  <ColorThumb className="top-1/2" />
                </SliderTrack>
              </ColorSlider>
            </div>
            <Select
              selectedKey={space}
              onSelectionChange={(s) => setSpace(s as ColorSpace)}
              aria-label="Color Space"
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectPopover>
                <SelectListBox aria-label="items">
                  <SelectItem id="rgb" textValue="rgb">
                    RGB
                  </SelectItem>
                  <SelectItem id="hsl" textValue="hsl">
                    HSL
                  </SelectItem>
                  <SelectItem id="hsb" textValue="hsb">
                    HSB
                  </SelectItem>
                </SelectListBox>
              </SelectPopover>
            </Select>
            <div className="grid w-[192px] grid-cols-3 gap-1">
              {getColorChannels(space).map((channel) => (
                <ColorField colorSpace={space} channel={channel} key={channel}>
                  <Input aria-label={channel.toString()} />
                </ColorField>
              ))}
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
            <EyeDropperButton />
          </Dialog>
        </Popover>
      </DialogTrigger>
    </ColorPicker>
  )
}

export default PickerMulti
