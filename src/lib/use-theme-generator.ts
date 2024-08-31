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
    fontFamilies,
    grayColors,
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

export const syncBorderRadius = (borderRadius: BorderRadius) => {
  const root = document.querySelector<HTMLHtmlElement>(":root")
  if (!root) return
  root.style.setProperty("--radius", `${borderRadius}rem`)
}

export const syncFontFamily = (fontFamily: FontFamily) => {
  const root = document.querySelector<HTMLHtmlElement>(":root")
  if (root) {
    root.style.setProperty("--font-sans", `var(${fontFamily.value})`)
  }
}

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
