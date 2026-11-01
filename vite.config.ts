import { fileURLToPath } from "node:url"
import mdx from "@mdx-js/rollup"
import tailwindcss from "@tailwindcss/vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import { defineConfig } from "vite"

import { contentPlugin, getPrerenderPaths } from "./build/content.ts"
import { mdxOptions } from "./build/mdx.ts"

export default defineConfig(async () => ({
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  plugins: [
    contentPlugin(),
    { enforce: "pre" as const, ...mdx(mdxOptions) },
    tailwindcss(),
    tanstackStart({
      // The whole site is prerendered to static HTML and served as Workers
      // static assets, so there's no server at runtime.
      prerender: {
        enabled: true,
        // Every route is listed in `pages` below. Crawling would also follow
        // the placeholder links inside component demos (e.g. `/home`).
        crawlLinks: false,
        autoStaticPathsDiscovery: false,
        // `/docs/button` -> `docs/button.html` rather than `docs/button/index.html`,
        // so URLs don't pick up a trailing slash.
        autoSubfolderIndex: false,
        failOnError: true,
      },
      pages: [
        ...(await getPrerenderPaths()).map((path) => ({
          path,
          // The per-style block pages only exist to be iframed.
          sitemap: {
            exclude: path.split("/").length > 3 && path.startsWith("/blocks/"),
          },
        })),
        {
          path: "/404",
          prerender: { outputPath: "/404" },
          sitemap: { exclude: true },
        },
      ],
      sitemap: {
        enabled: true,
        host: "https://jollyui.dev",
      },
    }),
    viteReact(),
  ],
}))
