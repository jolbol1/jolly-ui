# JollyUI

> [!IMPORTANT]
> **This project is archived.** shadcn/ui now [officially supports React Aria Components](https://ui.shadcn.com/docs/changelog/2026-07-react-aria) (`npx shadcn@latest init --base aria`). Use that instead. The docs and registry stay online, but JollyUI is no longer maintained.

[shadcn/ui](https://ui.shadcn.com/) compatible [react aria components](https://react-spectrum.adobe.com/react-aria/index.html) that you can copy and paste into your apps. Accessible. Customizable. Open Source.

![hero](public/og.jpg)

## Documentation

Visit https://jollyui.dev/docs to view the documentation.

## Development

The site is a [TanStack Start](https://tanstack.com/start) app that's fully prerendered to static HTML at build time (docs are MDX compiled by Vite, and search is a static index) and deployed to Cloudflare Workers as static assets only.

```bash
bun install
bun dev             # http://localhost:3000
bun run build       # prerender everything to dist/client
bun run preview     # build, then serve dist/client with wrangler
bun run deploy      # build, then deploy to Cloudflare
```

## Contributing

Please read the [contributing guide](/CONTRIBUTING.md).

## License

Licensed under the [MIT license](https://github.com/shadcn/ui/blob/main/LICENSE.md).

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://jamesshopland.com"><img src="https://avatars.githubusercontent.com/u/5064896?v=4?s=100" width="100px;" alt="James Shopland"/><br /><sub><b>James Shopland</b></sub></a><br /><a href="#doc-jolbol1" title="Documentation">📖</a> <a href="#code-jolbol1" title="Code">💻</a> <a href="#design-jolbol1" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/GregorGabric"><img src="https://avatars.githubusercontent.com/u/83283727?v=4?s=100" width="100px;" alt="Gregor Gabrič"/><br /><sub><b>Gregor Gabrič</b></sub></a><br /><a href="#doc-GregorGabric" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Lorde4Avalon"><img src="https://avatars.githubusercontent.com/u/74342663?v=4?s=100" width="100px;" alt="Lorde"/><br /><sub><b>Lorde</b></sub></a><br /><a href="#doc-Lorde4Avalon" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nxsdev"><img src="https://avatars.githubusercontent.com/u/81478127?v=4?s=100" width="100px;" alt="noxis"/><br /><sub><b>noxis</b></sub></a><br /><a href="#design-nxsdev" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/saeidex"><img src="https://avatars.githubusercontent.com/u/112776380?v=4?s=100" width="100px;" alt="EK Nayeem"/><br /><sub><b>EK Nayeem</b></sub></a><br /><a href="#doc-saeidex" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/alecmev"><img src="https://avatars.githubusercontent.com/u/2584727?v=4?s=100" width="100px;" alt="Alec Mev"/><br /><sub><b>Alec Mev</b></sub></a><br /><a href="#design-alecmev" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jvliwanag"><img src="https://avatars.githubusercontent.com/u/211068?v=4?s=100" width="100px;" alt="Jan Vincent Liwanag"/><br /><sub><b>Jan Vincent Liwanag</b></sub></a><br /><a href="#doc-jvliwanag" title="Documentation">📖</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://xuann.wang"><img src="https://avatars.githubusercontent.com/u/44045911?v=4?s=100" width="100px;" alt="Kid"/><br /><sub><b>Kid</b></sub></a><br /><a href="#doc-kidonng" title="Documentation">📖</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
