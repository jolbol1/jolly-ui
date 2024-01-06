/** @type { import('@storybook/react').Preview } */
import React from "react"
import { withThemeByClassName } from "@storybook/addon-themes"

import "../styles.css"
import { Preview } from "@storybook/react"

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "",
      dark: "dark ",
    },
    defaultTheme: "light",
  }),
]

const preview: Preview = {
  args: {
    theme: "default",
  },
  argTypes: {
    theme: {
      options: ["default", "new-york"],
      control: { type: "radio" },
    },
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: "aria-hidden-focus",
            selector: 'body *:not([data-a11y-ignore="aria-hidden-focus"])',
          },
        ],
      },
    },
    layout: "centered",
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
