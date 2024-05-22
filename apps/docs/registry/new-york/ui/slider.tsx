"use client"

import * as React from "react"
import {
  Slider,
  SliderOutput,
  SliderProps,
  SliderStateContext,
  SliderThumb,
  SliderThumbProps,
  SliderTrack,
  SliderTrackProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const _SliderOutput = SliderOutput

const _Slider = ({
  className,
  orientation = "horizontal",
  ...props
}: SliderProps) => (
  <Slider
    className={(values) =>
      cn(
        "relative flex touch-none select-none items-center",
        {
          "h-full": orientation === "vertical",
          "w-full": orientation === "horizontal",
        },
        typeof className === "function" ? className(values) : className
      )
    }
    orientation={orientation}
    {...props}
  />
)

const _SliderTrack = ({ className, ...props }: SliderTrackProps) => (
  <SliderTrack
    className={(values) =>
      cn(
        {
          "h-1.5 w-full": values.orientation === "horizontal",
          "h-full w-1.5": values.orientation === "vertical",
        },
        "relative grow rounded-full bg-primary/20",
        typeof className === "function" ? className(values) : className
      )
    }
    {...props}
  />
)

const _SliderFillTrack = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  let state = React.useContext(SliderStateContext)!
  const orientation = state.orientation === "vertical" ? "height" : "width"
  return (
    <div
      style={{ [orientation]: state.getThumbPercent(0) * 100 + "%" }}
      className={cn(
        "absolute rounded-full bg-primary",
        {
          "h-full": state.orientation === "horizontal",
          "w-full bottom-0": state.orientation === "vertical",
        },
        className
      )}
      {...props}
    />
  )
}

const _SliderThumb = ({ className }: SliderThumbProps) => (
  <SliderThumb
    className={(values) =>
      cn(
        "left-[50%] top-[50%] block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        typeof className === "function" ? className(values) : className
      )
    }
  />
)

export {
  _Slider as Slider,
  _SliderTrack as SliderTrack,
  _SliderFillTrack as SliderFillTrack,
  _SliderThumb as SliderThumb,
  _SliderOutput as SliderOutput,
}
