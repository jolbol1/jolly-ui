import { MainNavItem, SidebarNavItem } from "types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Components",
      href: "/docs/components/accordion",
    },
    {
      title: "Themes",
      href: "/themes",
    },
    {
      title: "Examples",
      href: "/examples",
    },
    {
      title: "Figma",
      href: "/docs/figma",
    },
    {
      title: "GitHub",
      href: "https://github.com/shadcn/ui",
      external: true,
    },
    {
      title: "Twitter",
      href: "https://twitter.com/shadcn",
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        // {
        //   title: "Installation",
        //   href: "/docs/installation",
        //   items: [],
        // },
        // {
        //   title: "components.json",
        //   href: "/docs/components-json",
        //   items: [],
        // },
        // {
        //   title: "Theming",
        //   href: "/docs/theming",
        //   items: [],
        // },
        // {
        //   title: "Dark mode",
        //   href: "/docs/dark-mode",
        //   items: [],
        // },
        // {
        //   title: "CLI",
        //   href: "/docs/cli",
        //   items: [],
        // },
        // {
        //   title: "Typography",
        //   href: "/docs/components/typography",
        //   items: [],
        // },
        // {
        //   title: "Figma",
        //   href: "/docs/figma",
        //   items: [],
        // },
        // {
        //   title: "Changelog",
        //   href: "/docs/changelog",
        //   items: [],
        // },
        // {
        //   title: "About",
        //   href: "/docs/about",
        //   items: [],
        // },
      ],
    },
    // {
    //   title: "Installation",
    //   items: [
    //     {
    //       title: "Next.js",
    //       href: "/docs/installation/next",
    //       items: [],
    //     },
    //     {
    //       title: "Vite",
    //       href: "/docs/installation/vite",
    //       items: [],
    //     },
    //     {
    //       title: "Remix",
    //       href: "/docs/installation/remix",
    //       items: [],
    //     },
    //     {
    //       title: "Gatsby",
    //       href: "/docs/installation/gatsby",
    //       items: [],
    //     },
    //     {
    //       title: "Astro",
    //       href: "/docs/installation/astro",
    //       items: [],
    //     },
    //     {
    //       title: "Laravel",
    //       href: "/docs/installation/laravel",
    //       items: [],
    //     },
    //     {
    //       title: "Manual",
    //       href: "/docs/installation/manual",
    //       items: [],
    //     },
    //   ],
    // },
    // {
    //   title: "Dark Mode",
    //   items: [
    //     {
    //       title: "Next.js",
    //       href: "/docs/dark-mode/next",
    //       items: [],
    //     },
    //     {
    //       title: "Vite",
    //       href: "/docs/dark-mode/vite",
    //       items: [],
    //     },
    //     {
    //       title: "Astro",
    //       href: "/docs/dark-mode/astro",
    //       items: [],
    //     },
    //   ],
    // },
    {
      title: "Components",
      items: [
        {
          title: "Accordion",
          href: "/docs/components/accordion",
          items: [],
          label: "todo",
          disabled: true,
        },
        {
          title: "Alert",
          href: "/docs/components/alert",
          items: [],
          label: "todo",
          disabled: true,
        },
        {
          title: "Alert Dialog",
          href: "/docs/components/alert-dialog",
          label: "v1",
          items: [],
        },
        {
          title: "Aspect Ratio",
          href: "/docs/components/aspect-ratio",
          items: [],
          label: "todo",
          disabled: true,
        },
        {
          title: "Avatar",
          href: "/docs/components/avatar",
          items: [],
          label: "todo",
          disabled: true,
        },
        {
          title: "Badge",
          href: "/docs/components/badge",
          items: [],
          label: "todo",
          disabled: true,
        },
        {
          title: "Button",
          href: "/docs/components/button",
          label: "v2",
          items: [],
        },
        {
          title: "Calendar",
          href: "/docs/components/calendar",
          items: [],
          label: "todo",
          disabled: true,
        },
        {
          title: "Card",
          href: "/docs/components/card",
          items: [],
          label: "todo",
          disabled: true,
        },
        {
          title: "Checkbox",
          href: "/docs/components/checkbox",
          items: [],
          label: "v2",
        },
        {
          title: "Collapsible",
          href: "/docs/components/collapsible",
          items: [],
          label: "todo",
          disabled: true,
        },
        {
          title: "Combobox",
          href: "/docs/components/combobox",
          items: [],
          label: "v1",
        },
        {
          title: "Command",
          href: "/docs/components/command",
          items: [],
          label: "todo",
          disabled: true,
        },
        {
          title: "Context Menu",
          href: "/docs/components/context-menu",
          items: [],
          label: "todo",
          disabled: true,
        },
        {
          title: "Data Table",
          href: "/docs/components/data-table",
          items: [],
          label: "todo",
          disabled: true,
        },
        {
          title: "Date Picker",
          href: "/docs/components/date-picker",
          items: [],
          label: "todo",
          disabled: true,
        },
        {
          title: "Dialog",
          href: "/docs/components/dialog",
          items: [],
          label: "todo",
          disabled: true,
        },
        {
          title: "Dropdown Menu",
          href: "/docs/components/dropdown-menu",
          items: [],
          label: "v1",
        },
        {
          title: "Form",
          href: "/docs/components/form",
          items: [],
          label: "todo",
          disabled: true,
        },
        {
          title: "Hover Card",
          href: "/docs/components/hover-card",
          items: [],
          label: "todo",
          disabled: true,
        },
        {
          title: "Input",
          href: "/docs/components/input",
          items: [],
          label: "todo",
          disabled: true,
        },
        {
          title: "Label",
          href: "/docs/components/label",
          items: [],
          label: "v1",
        },
        {
          title: "Menubar",
          href: "/docs/components/menubar",
          items: [],
          label: "todo",
          disabled: true,
        },
        {
          title: "Navigation Menu",
          href: "/docs/components/navigation-menu",
          items: [],
          label: "todo",
          disabled: true,
        },
        {
          title: "Popover",
          href: "/docs/components/popover",
          items: [],
          label: "v1",
        },
        {
          title: "Progress",
          href: "/docs/components/progress",
          items: [],
          label: "v1",
        },
        {
          title: "Radio Group",
          href: "/docs/components/radio-group",
          items: [],
          label: "v1",
        },
        {
          title: "Scroll Area",
          href: "/docs/components/scroll-area",
          items: [],
          label: "todo",
          disabled: true,
        },
        {
          title: "Select",
          href: "/docs/components/select",
          items: [],
          label: "v1",
        },
        {
          title: "Separator",
          href: "/docs/components/separator",
          items: [],
          label: "todo",
          disabled: true,
        },
        {
          title: "Sheet",
          href: "/docs/components/sheet",
          items: [],
          label: "todo",
          disabled: true,
        },
        {
          title: "Skeleton",
          href: "/docs/components/skeleton",
          items: [],
          label: "todo",
          disabled: true,
        },
        {
          title: "Slider",
          href: "/docs/components/slider",
          items: [],
          label: "v1",
        },
        {
          title: "Switch",
          href: "/docs/components/switch",
          items: [],
          label: "v1",
        },
        {
          title: "Table",
          href: "/docs/components/table",
          items: [],
          label: "todo",
          disabled: true,
        },
        {
          title: "Tabs",
          href: "/docs/components/tabs",
          items: [],
          label: "todo",
          disabled: true,
        },
        {
          title: "Textarea",
          href: "/docs/components/textarea",
          items: [],
          label: "todo",
          disabled: true,
        },
        {
          title: "Toast",
          href: "/docs/components/toast",
          items: [],
          label: "todo",
          disabled: true,
        },
        {
          title: "Toggle",
          href: "/docs/components/toggle",
          items: [],
          label: "v1",
        },
        {
          title: "Tooltip",
          href: "/docs/components/tooltip",
          items: [],
          label: "v1",
        },
      ],
    },
  ],
}
