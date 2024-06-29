import React from "react"
import { getColorChannels, parseColor } from "react-aria-components"
import type { ColorSpace } from "react-aria-components"

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
import {
  Select,
  SelectItem,
  SelectListBox,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"

export function PickerMulti() {
  let [color, setColor] = React.useState(parseColor("hsl(60, 100%, 50%)"))
  let [space, setSpace] = React.useState<ColorSpace>("rgb")

  return (
    <ColorPicker value={color} onChange={setColor}>
      <DialogTrigger>
        <Button variant="ghost" className="h-fit flex gap-2 items-center p-1">
          <ColorSwatch className="rounded-md size-8 border-2" />
          Fill Color
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
            <div className="grid grid-cols-3 gap-1 w-[192px]">
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
          </Dialog>
        </Popover>
      </DialogTrigger>
    </ColorPicker>
  )
}

export default PickerMulti
