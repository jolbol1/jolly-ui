import { Registry } from "@/registry/schema"

export const ui: Registry = [
  {
    name: "breadcrumbs",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    registryDependencies: ["button"],
    files: ["ui/breadcrumbs.tsx"],
  },
  {
    name: "button",
    type: "registry:ui",
    dependencies: ["react-aria-components", "class-variance-authority"],
    files: ["ui/button.tsx"],
  },
  {
    name: "calendar",
    type: "registry:ui",
    dependencies: ["react-aria-components", "@internationalized/date"],
    registryDependencies: ["button"],
    files: ["ui/calendar.tsx"],
  },
  {
    name: "checkbox",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    registryDependencies: ["field"],
    files: ["ui/checkbox.tsx"],
  },
  {
    name: "color",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/color.tsx"],
  },
  {
    name: "combobox",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    registryDependencies: ["field", "popover", "button", "list-box"],
    files: ["ui/combobox.tsx"],
  },
  {
    name: "date-picker",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    registryDependencies: [
      "field",
      "popover",
      "button",
      "calendar",
      "datefield",
      "field",
    ],
    files: ["ui/date-picker.tsx"],
  },
  {
    name: "datefield",
    type: "registry:ui",
    dependencies: ["react-aria-components", "class-variance-authority"],
    registryDependencies: ["field"],
    files: ["ui/datefield.tsx"],
  },
  {
    name: "dialog",
    type: "registry:ui",
    dependencies: ["react-aria-components", "class-variance-authority"],
    files: ["ui/dialog.tsx"],
  },
  {
    name: "dropzone",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/dropzone.tsx"],
  },
  {
    name: "field",
    type: "registry:ui",
    dependencies: ["react-aria-components", "class-variance-authority"],
    files: ["ui/field.tsx"],
  },
  {
    name: "grid-list",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    registryDependencies: ["checkbox"],
    files: ["ui/grid-list.tsx"],
  },
  {
    name: "link",
    type: "registry:ui",
    dependencies: ["react-aria-components", "class-variance-authority"],
    registryDependencies: ["button"],
    files: ["ui/link.tsx"],
  },
  {
    name: "list-box",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/list-box.tsx"],
  },
  {
    name: "menu",
    type: "registry:ui",
    dependencies: ["react-aria-components", "class-variance-authority"],
    registryDependencies: ["button", "list-box", "select"],
    files: ["ui/menu.tsx"],
  },
  {
    name: "meter",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    registryDependencies: ["field"],
    files: ["ui/meter.tsx"],
  },
  {
    name: "numberfield",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    registryDependencies: ["field", "button"],
    files: ["ui/numberfield.tsx"],
  },
  {
    name: "popover",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/popover.tsx"],
  },
  {
    name: "progress",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    registryDependencies: ["field"],
    files: ["ui/progress.tsx"],
  },
  {
    name: "radio-group",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    registryDependencies: ["field"],
    files: ["ui/radio-group.tsx"],
  },
  {
    name: "searchfield",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    registryDependencies: ["field"],
    files: ["ui/searchfield.tsx"],
  },
  {
    name: "select",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    registryDependencies: ["field", "popover"],
    files: ["ui/select.tsx"],
  },
  {
    name: "separator",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/separator.tsx"],
  },
  {
    name: "slider",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    registryDependencies: ["field"],
    files: ["ui/slider.tsx"],
  },
  {
    name: "switch",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/switch.tsx"],
  },
  {
    name: "tabs",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/tabs.tsx"],
  },
  {
    name: "table",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/table.tsx"],
  },
  {
    name: "tag-group",
    type: "registry:ui",
    dependencies: ["react-aria-components", "class-variance-authority"],
    registryDependencies: ["field"],
    files: ["ui/tag-group.tsx"],
  },
  {
    name: "textfield",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    registryDependencies: ["field"],
    files: ["ui/textfield.tsx"],
  },
  {
    name: "toggle",
    type: "registry:ui",
    dependencies: ["react-aria-components", "class-variance-authority"],
    files: ["ui/toggle.tsx"],
  },
  {
    name: "tooltip",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/tooltip.tsx"],
  },
  {
    name: "toolbar",
    type: "registry:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/toolbar.tsx"],
  },
]
