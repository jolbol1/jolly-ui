import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

import { GrayColor, ThemeColor } from "@/registry/themes"

import type { BorderRadius, FontFamily } from "./use-theme-generator"

type State = {
  accentColor: ThemeColor
  borderRadius: BorderRadius
  fontFamily: FontFamily
  grayColor: GrayColor
  style: "default" | "new-york"
}

type Actions = {
  setAccentColor: (color: ThemeColor) => void
  setGrayColor: (color: GrayColor) => void
  setFontFamily: (font: FontFamily) => void
  setBorderRadius: (radius: BorderRadius) => void
  setStyle: (style: "default" | "new-york") => void
  reset: () => void
}

const initialState: State = {
  accentColor: "zinc",
  style: "default",
  borderRadius: "0.5",
  fontFamily: {
    label: "Geist",
    value: "--font-geist-sans",
    link: "https://vercel.com/font",
  },
  grayColor: "zinc",
}

export const useThemeStore = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
        ...initialState,
        setStyle: (style) => set(() => ({ style })),
        setAccentColor: (accentColor) => set(() => ({ accentColor })),
        setBorderRadius: (borderRadius) => set(() => ({ borderRadius })),
        setFontFamily: (fontFamily) => set(() => ({ fontFamily })),
        setGrayColor: (grayColor) => set(() => ({ grayColor })),
        reset: () => {
          set(initialState)
        },
      }),
      {
        name: "jolly-ui-theme-store",
        version: 2,
      }
    )
  )
)
