"use client"

import React from "react"
import { getColorChannels, parseColor } from "react-aria-components"
import type { ColorSpace } from "react-aria-components"

import { Button } from "@/registry/default/ui/button"
import {
  ColorPicker,
  ColorSlider,
  ColorSwatch,
  ColorThumb,
  SliderOutput,
  SliderTrack,
} from "@/registry/default/ui/color"
import { Dialog, DialogTrigger } from "@/registry/default/ui/dialog"
import { Label } from "@/registry/default/ui/label"
import { Popover } from "@/registry/default/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select"

export function PickerSliders() {
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
          <Dialog className="outline-none flex flex-col gap-4">
            <Select
              selectedKey={space}
              onSelectionChange={(s) => setSpace(s as ColorSpace)}
              aria-label="Color Space"
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectPopover>
                <SelectContent aria-label="items">
                  <SelectItem id="rgb" textValue="rgb">
                    RGB
                  </SelectItem>
                  <SelectItem id="hsl" textValue="hsl">
                    HSL
                  </SelectItem>
                  <SelectItem id="hsb" textValue="hsb">
                    HSB
                  </SelectItem>
                </SelectContent>
              </SelectPopover>
            </Select>
            {getColorChannels(space).map((channel) => (
              <ColorSlider key={channel} colorSpace={space} channel={channel}>
                <div className="flex justify-between">
                  <Label className="capitalize">{channel}</Label>
                  <SliderOutput />
                </div>
                <SliderTrack>
                  <ColorThumb className="top-1/2" />
                </SliderTrack>
              </ColorSlider>
            ))}
            <ColorSlider channel="alpha">
              <div className="flex justify-between">
                <Label className="capitalize">Alpha</Label>
                <SliderOutput />
              </div>
              <SliderTrack>
                <ColorThumb className="top-1/2" />
              </SliderTrack>
            </ColorSlider>
          </Dialog>
        </Popover>
      </DialogTrigger>
    </ColorPicker>
  )
}

export default PickerSliders
