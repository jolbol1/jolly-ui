import { useArgs } from "@storybook/preview-api"
import type { Meta, StoryObj } from "@storybook/react"

import { SliderDemo } from "../../docs/registry/default/example/slider/slider-demo.jsx"
import { SliderValueDemo } from "../../docs/registry/default/example/slider/slider-value.jsx"
import { SliderVertical } from "../../docs/registry/default/example/slider/slider-vertical.jsx"
import { Slider } from "../../docs/registry/default/ui/slider.jsx"
import { SliderDemo as NySliderDemo } from "../../docs/registry/new-york/example/slider/slider-demo.jsx"
import { SliderValueDemo as NySliderValueDemo } from "../../docs/registry/new-york/example/slider/slider-value.jsx"
import { SliderVertical as NySliderVertical } from "../../docs/registry/new-york/example/slider/slider-vertical.jsx"
import { ThemeHandler } from "./theme-wrapper.jsx"

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: "Form/Slider",
}

export default meta

type Story = StoryObj<typeof Slider>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Basic: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <div className="w-[600px] flex justify-center">
        <ThemeHandler
          theme={theme}
          Main={<SliderDemo />}
          NewYork={<NySliderDemo />}
        />
      </div>
    )
  },
}

export const Value: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <div className="w-[600px] flex justify-center">
        <ThemeHandler
          theme={theme}
          Main={<SliderValueDemo />}
          NewYork={<NySliderValueDemo />}
        />
      </div>
    )
  },
}

export const Vertical: Story = {
  render: function Render(args) {
    const [{ theme }] = useArgs()
    return (
      <div className="w-[600px] flex justify-center">
        <ThemeHandler
          theme={theme}
          Main={<SliderVertical />}
          NewYork={<NySliderVertical />}
        />
      </div>
    )
  },
}
