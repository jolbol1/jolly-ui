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
      href: "/docs/components/button",
    },
    {
      title: "GitHub",
      href: "https://github.com/jolbol1/shadcn-aria",
      external: true,
    },
    {
      title: "Twitter",
      href: "https://twitter.com/JollyShopland",
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
    {
      title: "Utilities",
      items: [
        {
          title: "Styling",
          href: "/docs/utilities/styling",
          items: [],
        },
      ],
    },
    {
      title: "Installation",
      items: [
        {
          title: "Manual",
          href: "/docs/installation/manual",
          items: [],
        },
      ],
    },
    {
      title: "Buttons",
      items: [
        {
          title: "Button",
          href: "/docs/components/button",
          items: [],
        },
        {
          title: "File Trigger",
          href: "/docs/components/file-trigger",
          items: [],
        },
        {
          title: "Toggle Button",
          href: "/docs/components/toggle",
          items: [],
        },
      ],
    },
    {
      title: "Form",
      items: [
        {
          title: "Checkbox",
          href: "/docs/components/checkbox",
          items: [],
        },
      ],
    },
    {
      title: "Navigation",
      items: [
        {
          title: "Link",
          href: "/docs/components/link",
          items: [],
        },
      ],
    },
    {
      title: "Overlays",
      items: [
        {
          title: "Tooltip",
          href: "/docs/components/tooltip",
          items: [],
        },
      ],
    },
    {
      title: "Pickers",
      items: [
        {
          title: "ComboBox",
          href: "/docs/components/combobox",
          items: [],
        },
        {
          title: "Select",
          href: "/docs/components/select",
          items: [],
        },
      ],
    },
    {
      title: "Status",
      items: [
        {
          title: "Meter",
          href: "/docs/components/meter",
          items: [],
        },
        {
          title: "Progress Bar",
          href: "/docs/components/progress",
          items: [],
        },
      ],
    },
    {
      title: "Primitive",
      items: [
        {
          title: "Label",
          href: "/docs/components/label",
          items: [],
        },
      ],
    },
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
    // {
    //   title: "Components",
    //   items: [
    //     {
    //       title: "Accordion",
    //       href: "/docs/components/accordion",
    //       items: [],
    //       label: "todo",
    //       disabled: true,
    //     },
    //     {
    //       title: "Alert",
    //       href: "/docs/components/alert",
    //       items: [],
    //       label: "todo",
    //       disabled: true,
    //     },
    //     {
    //       title: "Alert Dialog",
    //       href: "/docs/components/dialog#alert-dialog",
    //       items: [],
    //     },
    //     {
    //       title: "Aspect Ratio",
    //       href: "/docs/components/aspect-ratio",
    //       items: [],
    //       label: "todo",
    //       disabled: true,
    //     },
    //     {
    //       title: "Avatar",
    //       href: "/docs/components/avatar",
    //       items: [],
    //       label: "todo",
    //       disabled: true,
    //     },
    //     {
    //       title: "Badge",
    //       href: "/docs/components/badge",
    //       items: [],
    //       label: "todo",
    //       disabled: true,
    //     },
    //     {
    //       title: "Button",
    //       href: "/docs/components/button",
    //       items: [],
    //     },
    //     {
    //       title: "Calendar",
    //       href: "/docs/components/calendar",
    //       items: [],
    //     },
    //     {
    //       title: "Card",
    //       href: "/docs/components/card",
    //       items: [],
    //       label: "todo",
    //       disabled: true,
    //     },
    //     {
    //       title: "Checkbox",
    //       href: "/docs/components/checkbox",
    //       items: [],
    //     },
    //     {
    //       title: "Collapsible",
    //       href: "/docs/components/collapsible",
    //       items: [],
    //       label: "todo",
    //       disabled: true,
    //     },
    //     {
    //       title: "Combobox",
    //       href: "/docs/components/combobox",
    //       items: [],
    //     },
    //     {
    //       title: "Command",
    //       href: "/docs/components/command",
    //       items: [],
    //       label: "todo",
    //       disabled: true,
    //     },
    //     {
    //       title: "Context Menu",
    //       href: "/docs/components/context-menu",
    //       items: [],
    //       label: "todo",
    //       disabled: true,
    //     },
    //     {
    //       title: "Data Table",
    //       href: "/docs/components/data-table",
    //       items: [],
    //       label: "todo",
    //       disabled: true,
    //     },
    //     {
    //       title: "Date Picker",
    //       href: "/docs/components/date-picker",
    //       items: [],
    //     },
    //     {
    //       title: "Date Range Picker",
    //       href: "/docs/components/date-picker",
    //       items: [],
    //       label: "todo",
    //       disabled: true,
    //     },
    //     {
    //       title: "Dialog",
    //       href: "/docs/components/dialog",
    //       items: [],
    //     },
    //     {
    //       title: "Dropdown Menu",
    //       href: "/docs/components/dropdown-menu",
    //       items: [],
    //     },
    //     {
    //       title: "Form",
    //       href: "/docs/components/form",
    //       items: [],
    //       label: "todo",
    //       disabled: true,
    //     },
    //     {
    //       title: "Hover Card",
    //       href: "/docs/components/hover-card",
    //       items: [],
    //       label: "todo",
    //       disabled: true,
    //     },
    //     {
    //       title: "Input",
    //       href: "/docs/components/input",
    //       items: [],
    //     },
    //     {
    //       title: "Label",
    //       href: "/docs/components/label",
    //       items: [],
    //     },
    //     {
    //       title: "Menubar",
    //       href: "/docs/components/menubar",
    //       items: [],
    //       label: "todo",
    //       disabled: true,
    //     },
    //     {
    //       title: "Navigation Menu",
    //       href: "/docs/components/navigation-menu",
    //       items: [],
    //       label: "todo",
    //       disabled: true,
    //     },
    //     {
    //       title: "Popover",
    //       href: "/docs/components/popover",
    //       items: [],
    //     },
    //     {
    //       title: "Progress",
    //       href: "/docs/components/progress",
    //       items: [],
    //     },
    //     {
    //       title: "Radio Group",
    //       href: "/docs/components/radio-group",
    //       items: [],
    //     },
    //     {
    //       title: "Scroll Area",
    //       href: "/docs/components/scroll-area",
    //       items: [],
    //       label: "todo",
    //       disabled: true,
    //     },
    //     {
    //       title: "Select",
    //       href: "/docs/components/select",
    //       items: [],
    //     },
    //     {
    //       title: "Separator",
    //       href: "/docs/components/separator",
    //       items: [],
    //     },
    //     {
    //       title: "Sheet",
    //       href: "/docs/components/sheet",
    //       items: [],
    //       label: "todo",
    //       disabled: true,
    //     },
    //     {
    //       title: "Skeleton",
    //       href: "/docs/components/skeleton",
    //       items: [],
    //       label: "todo",
    //       disabled: true,
    //     },
    //     {
    //       title: "Slider",
    //       href: "/docs/components/slider",
    //       items: [],
    //     },
    //     {
    //       title: "Switch",
    //       href: "/docs/components/switch",
    //       items: [],
    //     },
    //     {
    //       title: "Table",
    //       href: "/docs/components/table",
    //       items: [],
    //       label: "todo",
    //       disabled: true,
    //     },
    //     {
    //       title: "Tabs",
    //       href: "/docs/components/tabs",
    //       items: [],
    //       label: "todo",
    //       disabled: true,
    //     },
    //     {
    //       title: "Textarea",
    //       href: "/docs/components/textarea",
    //       items: [],
    //     },
    //     {
    //       title: "Toast",
    //       href: "/docs/components/toast",
    //       items: [],
    //       label: "todo",
    //       disabled: true,
    //     },
    //     {
    //       title: "Toggle",
    //       href: "/docs/components/toggle",
    //       items: [],
    //     },
    //     {
    //       title: "Tooltip",
    //       href: "/docs/components/tooltip",
    //       items: [],
    //     },
    //   ],
    // },
  ],
}
