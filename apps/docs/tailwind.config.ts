// tailwind config is required for editor support

import sharedConfig from "@repo/tailwind-config"
import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Pick<Config, "content" | "presets" | "theme"> = {
  content: [
    "./app/**/*.tsx",
    "./registry/**/*.tsx",
    "components/**/*.{ts,tsx}",
  ],
  presets: [sharedConfig],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        // mono: ["var(--font-mono)", ...fontFamily.mono],
      },
    },
  },
}

export default config
