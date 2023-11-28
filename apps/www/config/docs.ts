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
        {
          title: "About",
          href: "/docs/about",
          items: [],
        },
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
      title: "Collections",
      items: [
        {
          title: "Menu",
          href: "/docs/components/menu",
          items: [],
        },
      ],
    },
    {
      title: "Date and Time",
      items: [
        {
          title: "Calendar",
          href: "/docs/components/calendar",
          items: [],
          label: "needs work",
        },
        {
          title: "Date Picker",
          href: "/docs/components/date-picker",
          items: [],
          label: "needs work",
        },
      ],
    },
    {
      title: "Drag and Drop",
      items: [
        {
          title: "Dropzone",
          href: "/docs/components/dropzone",
          items: [],
        },
      ],
    },
    {
      title: "Forms",
      items: [
        {
          title: "Checkbox",
          href: "/docs/components/checkbox",
          items: [],
        },
        {
          title: "Checkbox Group",
          href: "/docs/components/checkbox-group",
          items: [],
        },
        {
          title: "Radio Group",
          href: "/docs/components/radio-group",
          items: [],
        },
        {
          title: "Slider",
          href: "/docs/components/slider",
          items: [],
        },
        {
          title: "Switch",
          href: "/docs/components/switch",
          items: [],
        },
        {
          title: "TextField",
          href: "/docs/components/textfield",
          items: [],
        },
      ],
    },
    {
      title: "Navigation",
      items: [
        {
          title: "Breadcrumbs",
          href: "/docs/components/breadcrumbs",
          items: [],
        },
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
          title: "Dialog",
          href: "/docs/components/dialog",
          items: [],
        },
        {
          title: "Popover",
          href: "/docs/components/popover",
          items: [],
        },
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
        {
          title: "Input",
          href: "/docs/components/input",
          items: [],
        },
        {
          title: "TextArea",
          href: "/docs/components/textarea",
          items: [],
        },
      ],
    },
  ],
}
