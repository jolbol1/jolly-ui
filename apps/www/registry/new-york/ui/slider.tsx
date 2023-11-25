"use client"

import * as React from "react"
import {
  Slider,
  SliderProps,
  SliderThumb,
  SliderTrack,
} from "react-aria-components"

import { cnv } from "@/lib/utils"

const _Slider = ({ className, children, ...props }: SliderProps) => (
  <Slider
    className={(values) =>
      cnv(
        values,
        "relative flex w-full touch-none select-none items-center",
        className
      )
    }
    {...props}
  >
    {(values) => (
      <>
        {typeof children === "function" ? children(values) : children}
        <SliderTrack className="relative h-1.5 w-full grow  rounded-full bg-primary/20">
          <div
            style={{ width: values.state.getThumbPercent(0) * 100 + "%" }}
            className="absolute h-full rounded-full bg-primary"
          />
          <SliderThumb className="top-[50%] block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
        </SliderTrack>
      </>
    )}
  </Slider>
)

export { _Slider as Slider }
