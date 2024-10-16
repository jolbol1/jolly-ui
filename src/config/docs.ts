import { MainNavItem, SidebarNavItem } from "@/types/nav"

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
      href: "/docs/components/breadcrumbs",
    },
    {
      title: "Blocks",
      href: "/blocks",
    },
    {
      title: "GitHub",
      href: "https://github.com/jolbol1/jolly-ui",
      external: true,
    },
    {
      title: "Twitter",
      href: "https://twitter.com/jollyshopland",
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: "About",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Changelog",
          href: "/docs/changelog",
          items: [],
        },
      ],
    },
    {
      title: "Installation",
      items: [
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
        {
          title: "CLI",
          href: "/docs/installation/cli",
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
          title: "GridList",
          href: "/docs/components/grid-list",
          items: [],
        },
        {
          title: "ListBox",
          href: "/docs/components/list-box",
          items: [],
        },
        {
          title: "Menu",
          href: "/docs/components/menu",
          items: [],
        },
        {
          title: "Table",
          href: "/docs/components/table",
          items: [],
          label: "Beta",
        },
        {
          title: "TagGroup",
          href: "/docs/components/tag-group",
          items: [],
        },
        {
          title: "Tree",
          href: "/docs/components/tree",
          items: [],
          label: "Beta",
        },
      ],
    },
    {
      title: "Color",
      items: [
        {
          title: "Color Pickers",
          href: "/docs/components/color",
          items: [],
          label: "Beta",
        },
        {
          title: "Primitives",
          href: "/docs/components/color-primitives",
          items: [],
          label: "Beta",
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
        },
        {
          title: "DateField",
          href: "/docs/components/datefield",
          items: [],
        },
        {
          title: "Date Picker",
          href: "/docs/components/date-picker",
          items: [],
        },
        {
          title: "Date Range Picker",
          href: "/docs/components/date-range-picker",
          items: [],
        },
        {
          title: "Range Calendar",
          href: "/docs/components/range-calendar",
          items: [],
        },
        {
          title: "TimeField",
          href: "/docs/components/timefield",
          items: [],
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
          title: "Form",
          href: "/docs/components/form",
          items: [],
        },
        {
          title: "NumberField",
          href: "/docs/components/numberfield",
          items: [],
        },
        {
          title: "Radio Group",
          href: "/docs/components/radio-group",
          items: [],
        },
        {
          title: "Searchfield",
          href: "/docs/components/searchfield",
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
          title: "Disclosure",
          href: "/docs/components/disclosure",
          items: [],
          label: "Alpha",
        },
        {
          title: "DisclosureGroup",
          href: "/docs/components/disclosure-group",
          items: [],
          label: "Alpha",
        },
        {
          title: "Link",
          href: "/docs/components/link",
          items: [],
        },
        {
          title: "Tabs",
          href: "/docs/components/tabs",
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
          title: "Modal",
          href: "/docs/components/modal",
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
      title: "Content",
      items: [
        {
          title: "Group",
          href: "/docs/components/group",
          items: [],
        },
        {
          title: "Toolbar",
          href: "/docs/components/toolbar",
          items: [],
        },
      ],
    },
  ],
}
