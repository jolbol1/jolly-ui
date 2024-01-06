const { resolve } = require("node:path")
const tailwind = resolve(process.cwd(), "tailwind.config.ts")

const project = resolve(process.cwd(), "tsconfig.json")

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:tailwindcss/recommended",
    require.resolve("@vercel/style-guide/eslint/next"),
    "eslint-config-turbo",
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: ["only-warn", "tailwindcss"],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
    tailwindcss: {
      callees: ["cn", "cva"],
      config: tailwind,
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
  ],
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
  rules: {
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/classnames-order": "error",
  },
}
