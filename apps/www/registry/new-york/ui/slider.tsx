"use client"

import * as React from "react"
import {
  Slider as RaSlider,
  SliderThumb,
  SliderTrack,
} from "react-aria-components"

import { cn, cnv } from "@/lib/utils"

const Slider = React.forwardRef<
  React.ElementRef<typeof RaSlider>,
  React.ComponentPropsWithoutRef<typeof RaSlider>
>(({ className, children, ...props }, ref) => (
  <RaSlider
    ref={ref}
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
  </RaSlider>
))
Slider.displayName = "Slider"
export { Slider }
