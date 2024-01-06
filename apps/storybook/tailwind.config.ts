// tailwind config is required for editor support

import sharedConfig from "@repo/tailwind-config"
import type { Config } from "tailwindcss"

const config: Pick<Config, "content" | "presets"> = {
  content: [
    "./.storybook/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
    "../docs/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [sharedConfig],
}

export default config
