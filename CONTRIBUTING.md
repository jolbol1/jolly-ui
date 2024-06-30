# Contributing

Thanks for your interest in contributing to Jolly-UI

## Code Style Guidelines

Please ensure you follow the [code style guidelines](./CODE-STYLE.md) when contributing.

## About this repository

This repository is a monorepo.

- We use [pnpm](https://pnpm.io) and [`workspaces`](https://pnpm.io/workspaces) for development.
- We use [Turborepo](https://turbo.build/repo) as our build system.

## Structure

This repository is structured as follows:

```
apps
└── docs
    ├── app
    ├── components
    ├── content
    └── registry
        ├── default
        │   ├── example
        │   └── ui
        └── new-york
            ├── example
            └── ui
packages
└── (config files)
```

| Path                   | Description                              |
| ---------------------- | ---------------------------------------- |
| `apps/docs/app`        | The Next.js application for the website. |
| `apps/docs/components` | The React components for the website.    |
| `apps/docs/content`    | The content for the website.             |
| `apps/docs/registry`   | The registry for the components.         |

## Development

### Fork this repo

You can fork this repo by clicking the fork button in the top right corner of this page.

### Clone on your local machine

```bash
git clone https://github.com/your-username/ui.git
```

### Navigate to project directory

```bash
cd jolly-ui
```

### Create a new Branch

```bash
git checkout -b my-new-branch
```

### Install dependencies

```bash
pnpm install
```

#### Examples

1. To run the `jollyui.dev` website:

```bash
pnpm --filter=docs dev
```

## Documentation

The documentation for this project is located in the `docs` workspace. You can run the documentation locally by running the following command:

```bash
pnpm --filter=docs dev
```

Documentation is written using [MDX](https://mdxjs.com). You can find the documentation files in the `apps/docs/content/docs` directory.

## Components

We use a registry system for developing components. You can find the source code for the components under `apps/docs/registry`. The components are organized by styles.

```bash
apps
└── docs
    └── registry
        ├── default
        │   ├── example
        │   └── ui
        └── new-york
            ├── example
            └── ui
```

When adding or modifying components, please ensure that:

1. You make the changes for every style.
2. You update the documentation.
3. You run `pnpm build:registry` to update the registry.

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

  e.g. `feat(components): add new prop to the avatar component`

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

## Requests for new components

If you have a request for a new component, please open a discussion on GitHub. We'll be happy to help you out.
