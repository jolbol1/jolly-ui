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
        <SliderTrack className="relative h-2 w-full grow rounded-full bg-secondary">
          <div
            style={{ width: values.state.getThumbPercent(0) * 100 + "%" }}
            className="absolute h-full rounded-full bg-primary"
          />
          <SliderThumb className="top-[50%] block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
        </SliderTrack>
      </>
    )}
  </Slider>
)

export { _Slider as Slider }
