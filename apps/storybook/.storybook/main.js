import { dirname, join, resolve } from "path"
import { mergeConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")))
}

const config = {
  stories: ["../stories/*.stories.tsx", "../stories/**/*.stories.tsx"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-themes"),
    getAbsolutePath("@storybook/addon-a11y"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  staticDirs: ["../public"],

  core: {},

  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return mergeConfig(config, {
      define: { "process.env": {} },
      plugins: [tsconfigPaths()],
      resolve: {
        alias: [
          {
            find: "ui",
            replacement: resolve(__dirname, "../../../packages/ui/"),
          },
        ],
      },
    })
  },

  docs: {
    autodocs: true,
  },
}

export default config
