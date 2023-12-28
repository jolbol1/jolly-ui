// import {
//   accentColors,
//   borderRadii,
//   grayColors,
//   type AccentColor,
//   type BorderRadius,
//   type GrayColor,
// } from "@park-ui/panda-preset"
// import { token } from "styled-system/tokens"

import { GrayColor, ThemeColor, grayColors, themes } from "@/registry/themes"

import { useThemeStore } from "./use-theme-store"

const borderRadius = ["0", "0.3", "0.5", "0.75", "1"] as const

export type BorderRadius = (typeof borderRadius)[number]

export const useThemeGenerator = () => {
  const currentAccentColor = useThemeStore((state) => state.accentColor)
  const currentGrayColor = useThemeStore((state) => state.grayColor)
  const currentFontFamily = useThemeStore((state) => state.fontFamily)
  const currentBorderRadius = useThemeStore((state) => state.borderRadius)
  const currentStyle = useThemeStore((state) => state.style)

  const updateAccentColor = useThemeStore((state) => state.setAccentColor)
  const updateGrayColor = useThemeStore((state) => state.setGrayColor)
  const updateFontFamily = useThemeStore((state) => state.setFontFamily)
  const updateBorderRadius = useThemeStore((state) => state.setBorderRadius)
  const updateStyle = useThemeStore((state) => state.setStyle)

  const reset = useThemeStore((state) => state.reset)

  return {
    themes,
    // borderRadii,
    fontFamilies,
    grayColors,
    // pandaConfig,
    // tailwindConfig,
    currentAccentColor,
    currentBorderRadius,
    borderRadius,
    currentFontFamily,
    currentGrayColor,
    updateAccentColor,
    updateGrayColor,
    updateFontFamily,
    updateBorderRadius,
    updateStyle,
    currentStyle,
    reset,
  }
}

export type ThemeConfig = {
  code: string
  config: string
}

export const syncGrayColor = (
  color: GrayColor,
  resolvedTheme: string | undefined
) => {
  const root = document.querySelector<HTMLHtmlElement>(":root")
  if (!root) return

  const grayColor = grayColors.find((c) => c.name === color)

  const vars = (
    resolvedTheme === "light"
      ? { ...grayColor?.cssVars.light! }
      : { ...grayColor?.cssVars.dark! }
  ) as { [key: string]: string }

  Object.keys(vars)?.forEach((variable) => {
    root.style.setProperty(`--${variable}`, `${vars[variable]}`)
  })

  root.style.setProperty(
    "--background",
    resolvedTheme === "light"
      ? `${grayColor?.cssVars.light.background}`
      : `${grayColor?.cssVars.dark.background}`
  )
}

export const syncThemeColor = (
  color: ThemeColor,
  resolvedTheme: string | undefined
) => {
  const root = document.querySelector<HTMLHtmlElement>(":root")
  if (!root) return

  const grayColor = themes.find((c) => c.name === color)

  const vars = (
    resolvedTheme === "light"
      ? { ...grayColor?.cssVars.light! }
      : { ...grayColor?.cssVars.dark! }
  ) as { [key: string]: string }

  Object.keys(vars)?.forEach((variable) => {
    root.style.setProperty(`--${variable}`, `${vars[variable]}`)
  })
}

// const syncAccentColor = (color: AccentColor) => {
//   const root = document.querySelector<HTMLHtmlElement>(":root")
//   if (!root) return

//   syncColorPalette(color, "accent")

//   match(color)
//     .with("neutral", () => {
//       root.style.removeProperty("--colors-accent-fg")
//       root.style.removeProperty("--colors-accent-default")
//       root.style.removeProperty("--colors-accent-emphasized")
//       root.style.removeProperty("--colors-accent-text")
//     })
//     .with("amber", "lime", "mint", "sky", "yellow", () => {
//       root.style.setProperty(
//         "--colors-accent-fg",
//         token.var(`colors.gray.light.12`)
//       )
//       root.style.setProperty(
//         "--colors-accent-default",
//         token.var(`colors.accent.9`)
//       )
//       root.style.setProperty(
//         "--colors-accent-emphasized",
//         token.var(`colors.accent.10`)
//       )
//       root.style.setProperty(
//         "--colors-accent-text",
//         token.var(`colors.accent.a11`)
//       )
//     })
//     .otherwise(() => {
//       root.style.setProperty("--colors-accent-fg", token.var(`colors.white`))
//       root.style.setProperty(
//         "--colors-accent-default",
//         token.var(`colors.accent.9`)
//       )
//       root.style.setProperty(
//         "--colors-accent-emphasized",
//         token.var(`colors.accent.10`)
//       )
//       root.style.setProperty(
//         "--colors-accent-text",
//         token.var(`colors.accent.a11`)
//       )
//     })
// }

// const syncGrayColor = (color: GrayColor, name: "accent" | "gray") => {
//   const root = document.querySelector<HTMLHtmlElement>(":root")
//   if (!root) return

//   const hues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const
//   const isDefaultColor = color === "neutral"

//   isDefaultColor
//     ? hues.map((hue) => {
//         root.style.removeProperty(`--colors-${name}-${hue}`)
//         root.style.removeProperty(`--colors-${name}-a${hue}`)
//       })
//     : hues.map((hue) => {
//         root.style.setProperty(
//           `--colors-${name}-${hue}`,
//           token.var(`colors.${color}.${hue}`)
//         )
//         root.style.setProperty(
//           `--colors-${name}-a${hue}`,
//           token.var(`colors.${color}.a${hue}`)
//         )
//       })
// }

export const syncBorderRaius = (borderRadius: BorderRadius) => {
  const root = document.querySelector<HTMLHtmlElement>(":root")
  if (!root) return
  console.log("Setting", borderRadius)
  root.style.setProperty("--radius", `${borderRadius}rem`)
}

export const syncFontFamily = (fontFamily: FontFamily) => {
  const root = document.querySelector<HTMLHtmlElement>(":root")
  if (root) {
    console.log("Setting", fontFamily)
    root.style.setProperty("--font-sans", `var(${fontFamily.value})`)
  }
}

export const pandaConfig = `import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@park-ui/panda-preset'

export default defineConfig({
  preflight: true,
  presets: [
    '@pandacss/preset-base',
    createPreset({
      accentColor: '__ACCENT_COLOR__',
      grayColor: '__GRAY_COLOR__',
      borderRadius: '__BORDER_RADIUS__',
    }),
  ],
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  jsxFramework: 'react',
  outdir: 'styled-system',
})
`

export const tailwindConfig = `const { parkwindPlugin } = require('@park-ui/tailwind-plugin')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [parkwindPlugin],

  parkUI: {
    accentColor: '__ACCENT_COLOR__',
    grayColor: '__GRAY_COLOR__',
    borderRadius: '__BORDER_RADIUS__',
  },
  
  darkMode: ['class'],
}
`

export type FontFamily = (typeof fontFamilies)[number]
export const fontFamilies = [
  {
    label: "Jakarta",
    value: "--font-jakarta",
    link: "https://fonts.google.com/specimen/Plus+Jakarta+Sans",
  },
  {
    label: "Inter",
    value: "--font-inter",
    link: "https://fonts.google.com/specimen/Inter",
  },
  {
    label: "Outfit",
    value: "--font-outfit",
    link: "https://fonts.google.com/specimen/Outfit",
  },
  {
    label: "Raleway",
    value: "--font-raleway",
    link: "https://fonts.google.com/specimen/Raleway",
  },
  {
    label: "Geist",
    value: "--font-geist-sans",
    link: "https://vercel.com/font",
  },
] as const
