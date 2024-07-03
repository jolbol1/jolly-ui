import { Registry } from "@/registry/schema"

const ui: Registry = [
  {
    name: "breadcrumbs",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    registryDependencies: ["button"],
    files: ["ui/breadcrumbs.tsx"],
  },
  {
    name: "button",
    type: "components:ui",
    dependencies: ["react-aria-components", "class-variance-authority"],
    files: ["ui/button.tsx"],
  },
  {
    name: "calendar",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    registryDependencies: ["button"],
    files: ["ui/calendar.tsx"],
  },
  {
    name: "checkbox",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    registryDependencies: ["label"],
    files: ["ui/checkbox.tsx"],
  },
  {
    name: "color",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/color.tsx"],
  },
  {
    name: "combobox",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/combobox.tsx"],
  },
  {
    name: "date-picker",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    registryDependencies: ["button", "popover"],
    files: ["ui/date-picker.tsx"],
  },
  {
    name: "datefield",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    registryDependencies: ["button"],
    files: ["ui/datefield.tsx"],
  },
  {
    name: "dialog",
    type: "components:ui",
    dependencies: ["react-aria-components", "class-variance-authority"],
    files: ["ui/dialog.tsx"],
  },
  {
    name: "dropzone",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/dropzone.tsx"],
  },
  {
    name: "grid-list",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    registryDependencies: ["checkbox"],
    files: ["ui/grid-list.tsx"],
  },
  {
    name: "textfield",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/textfield.tsx"],
  },
  {
    name: "link",
    type: "components:ui",
    dependencies: ["react-aria-components", "class-variance-authority"],
    registryDependencies: ["button"],
    files: ["ui/link.tsx"],
  },
  {
    name: "list-box",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/grid-list.tsx"],
  },
  {
    name: "menu",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/menu.tsx"],
  },
  {
    name: "meter",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/meter.tsx"],
  },
  {
    name: "popover",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/popover.tsx"],
  },
  {
    name: "progress",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/progress.tsx"],
  },
  {
    name: "radio-group",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    registryDependencies: ["label"],
    files: ["ui/radio-group.tsx"],
  },
  {
    name: "searchfield",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/searchfield.tsx"],
  },
  {
    name: "select",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/select.tsx"],
  },
  {
    name: "separator",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/separator.tsx"],
  },
  {
    name: "slider",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/slider.tsx"],
  },
  {
    name: "switch",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/switch.tsx"],
  },
  {
    name: "tabs",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/tabs.tsx"],
  },
  {
    name: "tag-group",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/tag-group.tsx"],
  },
  {
    name: "toggle",
    type: "components:ui",
    dependencies: ["react-aria-components", "class-variance-authority"],
    files: ["ui/toggle.tsx"],
  },
  {
    name: "tooltip",
    type: "components:ui",
    dependencies: ["react-aria-components"],
    files: ["ui/tooltip.tsx"],
  },
]

const example: Registry = [
  {
    name: "breadcrumbs-demo",
    type: "components:example/breadcrumbs",
    registryDependencies: ["breadcrumbs"],
    files: ["example/breadcrumbs/breadcrumbs-demo.tsx"],
  },
  {
    name: "breadcrumbs-dropdown",
    type: "components:example/breadcrumbs",
    registryDependencies: ["breadcrumbs"],
    files: ["example/breadcrumbs/breadcrumbs-dropdown.tsx"],
  },
  {
    name: "breadcrumbs-disabled",
    type: "components:example/breadcrumbs",
    registryDependencies: ["breadcrumbs"],
    files: ["example/breadcrumbs/breadcrumbs-disabled.tsx"],
  },
  {
    name: "breadcrumbs-ellipsis",
    type: "components:example/breadcrumbs",
    registryDependencies: ["breadcrumbs"],
    files: ["example/breadcrumbs/breadcrumbs-ellipsis.tsx"],
  },
  {
    name: "breadcrumbs-separator",
    type: "components:example/breadcrumbs",
    registryDependencies: ["breadcrumbs"],
    files: ["example/breadcrumbs/breadcrumbs-separator.tsx"],
  },
  {
    name: "breadcrumbs-items",
    type: "components:example/breadcrumbs",
    registryDependencies: ["breadcrumbs"],
    files: ["example/breadcrumbs/breadcrumbs-items.tsx"],
  },

  {
    name: "color-area",
    type: "components:example/color",
    registryDependencies: ["color"],
    files: ["example/color/color-area.tsx"],
  },
  {
    name: "color-picker-eye",
    type: "components:example/color/pickers",
    registryDependencies: ["color"],
    files: ["example/color/pickers/color-picker-eye.tsx"],
  },
  {
    name: "color-picker-hex",
    type: "components:example/color/pickers",
    registryDependencies: ["color"],
    files: ["example/color/pickers/color-picker-hex.tsx"],
  },
  {
    name: "color-picker-slider",
    type: "components:example/color/pickers",
    registryDependencies: ["color"],
    files: ["example/color/pickers/color-picker-slider.tsx"],
  },
  {
    name: "color-picker-hexa",
    type: "components:example/color/pickers",
    registryDependencies: ["color"],
    files: ["example/color/pickers/color-picker-hexa.tsx"],
  },
  {
    name: "color-picker-hsb",
    type: "components:example/color/pickers",
    registryDependencies: ["color"],
    files: ["example/color/pickers/color-picker-hsb.tsx"],
  },
  {
    name: "color-picker-hsba",
    type: "components:example/color/pickers",
    registryDependencies: ["color"],
    files: ["example/color/pickers/color-picker-hsba.tsx"],
  },
  {
    name: "color-picker-multi",
    type: "components:example/color/pickers",
    registryDependencies: ["color"],
    files: ["example/color/pickers/color-picker-multi.tsx"],
  },
  {
    name: "color-picker-hsl",
    type: "components:example/color/pickers",
    registryDependencies: ["color"],
    files: ["example/color/pickers/color-picker-hsl.tsx"],
  },
  {
    name: "color-picker-hsla",
    type: "components:example/color/pickers",
    registryDependencies: ["color"],
    files: ["example/color/pickers/color-picker-hsla.tsx"],
  },
  {
    name: "color-picker-rgb",
    type: "components:example/color/pickers",
    registryDependencies: ["color"],
    files: ["example/color/pickers/color-picker-rgb.tsx"],
  },
  {
    name: "color-picker-rgba",
    type: "components:example/color/pickers",
    registryDependencies: ["color"],
    files: ["example/color/pickers/color-picker-rgba.tsx"],
  },
  {
    name: "color-slider",
    type: "components:example/color",
    registryDependencies: ["color"],
    files: ["example/color/color-slider.tsx"],
  },
  {
    name: "color-swatch-picker",
    type: "components:example/color",
    registryDependencies: ["color"],
    files: ["example/color/color-swatch-picker.tsx"],
  },
  {
    name: "color-wheel",
    type: "components:example/color",
    registryDependencies: ["color"],
    files: ["example/color/color-wheel.tsx"],
  },
  {
    name: "file-trigger-button-demo",
    type: "components:example/file-trigger",
    registryDependencies: ["button"],
    files: ["example/file-trigger/file-trigger-button-demo.tsx"],
  },
  {
    name: "file-trigger-input-file",
    type: "components:example/file-trigger",
    registryDependencies: ["input"],
    files: ["example/file-trigger/file-trigger-input-file.tsx"],
  },
  {
    name: "input-demo",
    type: "components:example/input",
    registryDependencies: ["input"],
    files: ["example/input/input-demo.tsx"],
  },
  {
    name: "input-disabled",
    type: "components:example/input",
    registryDependencies: ["input"],
    files: ["example/input/input-disabled.tsx"],
  },
  {
    name: "link-demo",
    type: "components:example/link",
    registryDependencies: ["link"],
    files: ["example/link/link-demo.tsx"],
  },
  {
    name: "link-variants",
    type: "components:example/link",
    registryDependencies: ["link"],
    files: ["example/link/link-variants.tsx"],
  },

  {
    name: "separator-demo",
    type: "components:example/separator",
    registryDependencies: ["separator"],
    files: ["example/separator/separator-demo.tsx"],
  },
  {
    name: "switch-demo",
    type: "components:example/switch",
    registryDependencies: ["switch"],
    files: ["example/switch/switch-demo.tsx"],
  },
  {
    name: "switch-disabled",
    type: "components:example/switch",
    registryDependencies: ["switch"],
    files: ["example/switch/switch-disabled.tsx"],
  },
  {
    name: "switch-readonly",
    type: "components:example/switch",
    registryDependencies: ["switch"],
    files: ["example/switch/switch-readonly.tsx"],
  },
  {
    name: "button-demo",
    type: "components:example/button",
    registryDependencies: ["button"],
    files: ["example/button/button-demo.tsx"],
  },
  {
    name: "button-ghost",
    type: "components:example/button",
    registryDependencies: ["button"],
    files: ["example/button/button-ghost.tsx"],
  },
  {
    name: "button-icon",
    type: "components:example/button",
    registryDependencies: ["button"],
    files: ["example/button/button-icon.tsx"],
  },
  {
    name: "button-link",
    type: "components:example/button",
    registryDependencies: ["button"],
    files: ["example/button/button-link.tsx"],
  },
  {
    name: "button-loading",
    type: "components:example/button",
    registryDependencies: ["button"],
    files: ["example/button/button-loading.tsx"],
  },
  {
    name: "button-press",
    type: "components:example/button",
    registryDependencies: ["button"],
    files: ["example/button/button-press.tsx"],
  },
  {
    name: "button-secondary",
    type: "components:example/button",
    registryDependencies: ["button"],
    files: ["example/button/button-secondary.tsx"],
  },
  {
    name: "button-with-icon",
    type: "components:example/button",
    registryDependencies: ["button"],
    files: ["example/button/button-with-icon.tsx"],
  },
  {
    name: "button-outline",
    type: "components:example/button",
    registryDependencies: ["button"],
    files: ["example/button/button-outline.tsx"],
  },
  {
    name: "button-destructive",
    type: "components:example/button",
    registryDependencies: ["button"],
    files: ["example/button/button-destructive.tsx"],
  },
  {
    name: "toggle-demo",
    type: "components:example/toggle",
    registryDependencies: ["toggle"],
    files: ["example/toggle/toggle-demo.tsx"],
  },
  {
    name: "toggle-disabled",
    type: "components:example/toggle",
    registryDependencies: ["toggle"],
    files: ["example/toggle/toggle-disabled.tsx"],
  },
  {
    name: "toggle-lg",
    type: "components:example/toggle",
    registryDependencies: ["toggle"],
    files: ["example/toggle/toggle-lg.tsx"],
  },
  {
    name: "toggle-outline",
    type: "components:example/toggle",
    registryDependencies: ["toggle"],
    files: ["example/toggle/toggle-outline.tsx"],
  },
  {
    name: "toggle-sm",
    type: "components:example/toggle",
    registryDependencies: ["toggle"],
    files: ["example/toggle/toggle-sm.tsx"],
  },
  {
    name: "toggle-with-text",
    type: "components:example/toggle",
    registryDependencies: ["toggle"],
    files: ["example/toggle/toggle-with-text.tsx"],
  },

  // GridList
  {
    name: "grid-list-content",
    type: "components:example/grid-list",
    registryDependencies: ["grid-list"],
    files: ["example/grid-list/grid-list-content.tsx"],
  },
  {
    name: "grid-list-demo",
    type: "components:example/grid-list",
    registryDependencies: ["grid-list"],
    files: ["example/grid-list/grid-list-demo.tsx"],
  },
  {
    name: "grid-list-direct-row-actions",
    type: "components:example/grid-list",
    registryDependencies: ["grid-list"],
    files: ["example/grid-list/grid-list-direct-row-actions.tsx"],
  },
  {
    name: "grid-list-disabled-behavior",
    type: "components:example/grid-list",
    registryDependencies: ["grid-list"],
    files: ["example/grid-list/grid-list-disabled-behavior.tsx"],
  },
  {
    name: "grid-list-disabled-items",
    type: "components:example/grid-list",
    registryDependencies: ["grid-list"],
    files: ["example/grid-list/grid-list-disabled-items.tsx"],
  },
  {
    name: "grid-list-disabled-keys",
    type: "components:example/grid-list",
    registryDependencies: ["grid-list"],
    files: ["example/grid-list/grid-list-disabled-keys.tsx"],
  },
  {
    name: "grid-list-disallow-empty",
    type: "components:example/grid-list",
    registryDependencies: ["grid-list"],
    files: ["example/grid-list/grid-list-disallow-empty.tsx"],
  },
  {
    name: "grid-list-drag-between",
    type: "components:example/grid-list",
    registryDependencies: ["grid-list"],
    files: ["example/grid-list/grid-list-drag-between.tsx"],
  },
  {
    name: "grid-list-drag-drop",
    type: "components:example/grid-list",
    registryDependencies: ["grid-list"],
    files: ["example/grid-list/grid-list-drag-drop.tsx"],
  },
  {
    name: "grid-list-empty",
    type: "components:example/grid-list",
    registryDependencies: ["grid-list"],
    files: ["example/grid-list/grid-list-empty.tsx"],
  },
  {
    name: "grid-list-links",
    type: "components:example/grid-list",
    registryDependencies: ["grid-list"],
    files: ["example/grid-list/grid-list-links.tsx"],
  },
  {
    name: "grid-list-multi-select",
    type: "components:example/grid-list",
    registryDependencies: ["grid-list"],
    files: ["example/grid-list/grid-list-multi-select.tsx"],
  },
  {
    name: "grid-list-replace",
    type: "components:example/grid-list",
    registryDependencies: ["grid-list"],
    files: ["example/grid-list/grid-list-replace.tsx"],
  },
  {
    name: "grid-list-row-actions",
    type: "components:example/grid-list",
    registryDependencies: ["grid-list"],
    files: ["example/grid-list/grid-list-row-actions.tsx"],
  },
  {
    name: "grid-list-single-select",
    type: "components:example/grid-list",
    registryDependencies: ["grid-list"],
    files: ["example/grid-list/grid-list-single-select.tsx"],
  },

  // ListBox
  {
    name: "list-box-content",
    type: "components:example/list-box",
    registryDependencies: ["list-box"],
    files: ["example/list-box/list-box-content.tsx"],
  },
  {
    name: "list-box-demo",
    type: "components:example/list-box",
    registryDependencies: ["list-box"],
    files: ["example/list-box/list-box-demo.tsx"],
  },
  {
    name: "list-box-disabled-items",
    type: "components:example/list-box",
    registryDependencies: ["list-box"],
    files: ["example/list-box/list-box-disabled-items.tsx"],
  },
  {
    name: "list-box-disabled-keys",
    type: "components:example/list-box",
    registryDependencies: ["list-box"],
    files: ["example/list-box/list-box-disabled-keys.tsx"],
  },
  {
    name: "list-box-drag-between",
    type: "components:example/list-box",
    registryDependencies: ["list-box"],
    files: ["example/list-box/list-box-drag-between.tsx"],
  },
  {
    name: "list-box-drag-drop",
    type: "components:example/list-box",
    registryDependencies: ["list-box"],
    files: ["example/list-box/list-box-drag-drop.tsx"],
  },
  {
    name: "list-box-dynamic",
    type: "components:example/list-box",
    registryDependencies: ["list-box"],
    files: ["example/list-box/list-box-dynamic.tsx"],
  },
  {
    name: "list-box-empty",
    type: "components:example/list-box",
    registryDependencies: ["list-box"],
    files: ["example/list-box/list-box-empty.tsx"],
  },
  {
    name: "list-box-links-replace",
    type: "components:example/list-box",
    registryDependencies: ["list-box"],
    files: ["example/list-box/list-box-links-replace.tsx"],
  },
  {
    name: "list-box-links",
    type: "components:example/list-box",
    registryDependencies: ["list-box"],
    files: ["example/list-box/list-box-links.tsx"],
  },
  {
    name: "list-box-sections",
    type: "components:example/list-box",
    registryDependencies: ["list-box"],
    files: ["example/list-box/list-box-sections.tsx"],
  },
  {
    name: "list-box-selection-replace",
    type: "components:example/list-box",
    registryDependencies: ["list-box"],
    files: ["example/list-box/list-box-selection-replace.tsx"],
  },
  {
    name: "list-box-text-slot",
    type: "components:example/list-box",
    registryDependencies: ["list-box"],
    files: ["example/list-box/list-box-text-slot.tsx"],
  },

  // Menu
  {
    name: "menu-content",
    type: "components:example/menu",
    registryDependencies: ["menu"],
    files: ["example/menu/menu-content.tsx"],
  },
  {
    name: "menu-demo",
    type: "components:example/menu",
    registryDependencies: ["menu"],
    files: ["example/menu/menu-demo.tsx"],
  },
  {
    name: "menu-disabled-items",
    type: "components:example/menu",
    registryDependencies: ["menu"],
    files: ["example/menu/menu-disabled-items.tsx"],
  },
  {
    name: "menu-disabled-keys",
    type: "components:example/menu",
    registryDependencies: ["menu"],
    files: ["example/menu/menu-disabled-keys.tsx"],
  },
  {
    name: "menu-links",
    type: "components:example/menu",
    registryDependencies: ["menu"],
    files: ["example/menu/menu-links.tsx"],
  },
  {
    name: "menu-long-press",
    type: "components:example/menu",
    registryDependencies: ["menu"],
    files: ["example/menu/menu-long-press.tsx"],
  },
  {
    name: "menu-sections-dynamic",
    type: "components:example/menu",
    registryDependencies: ["menu"],
    files: ["example/menu/menu-sections-dynamic.tsx"],
  },
  {
    name: "menu-sections",
    type: "components:example/menu",
    registryDependencies: ["menu"],
    files: ["example/menu/menu-sections.tsx"],
  },
  {
    name: "menu-selection-multiple",
    type: "components:example/menu",
    registryDependencies: ["menu"],
    files: ["example/menu/menu-selection-multiple.tsx"],
  },
  {
    name: "menu-selection-single",
    type: "components:example/menu",
    registryDependencies: ["menu"],
    files: ["example/menu/menu-selection-single.tsx"],
  },
  {
    name: "menu-separators",
    type: "components:example/menu",
    registryDependencies: ["menu"],
    files: ["example/menu/menu-separators.tsx"],
  },
  {
    name: "menu-sub-menu-dynamic",
    type: "components:example/menu",
    registryDependencies: ["menu"],
    files: ["example/menu/menu-sub-menu-dynamic.tsx"],
  },
  {
    name: "menu-sub-menu",
    type: "components:example/menu",
    registryDependencies: ["menu"],
    files: ["example/menu/menu-sub-menu.tsx"],
  },
  {
    name: "menu-text-slots",
    type: "components:example/menu",
    registryDependencies: ["menu"],
    files: ["example/menu/menu-text-slots.tsx"],
  },
  {
    name: "menu-reusable",
    type: "components:example/menu",
    registryDependencies: ["menu"],
    files: ["example/menu/menu-reusable.tsx"],
  },

  //TagGroup
  {
    name: "tag-error-text",
    type: "components:example/tag-group",
    registryDependencies: ["tag"],
    files: ["example/tag/tag-error-text.tsx"],
  },
  {
    name: "tag-group-demo",
    type: "components:example/tag-group",
    registryDependencies: ["tag-group"],
    files: ["example/tag-group/tag-group-demo.tsx"],
  },
  {
    name: "tag-group-disabled-items",
    type: "components:example/tag-group",
    registryDependencies: ["tag-group"],
    files: ["example/tag-group/tag-group-disabled-items.tsx"],
  },
  {
    name: "tag-group-disabled-keys",
    type: "components:example/tag-group",
    registryDependencies: ["tag-group"],
    files: ["example/tag-group/tag-group-disabled-keys.tsx"],
  },
  {
    name: "tag-group-empty",
    type: "components:example/tag-group",
    registryDependencies: ["tag-group"],
    files: ["example/tag-group/tag-group-empty.tsx"],
  },
  {
    name: "tag-group-helper",
    type: "components:example/tag-group",
    registryDependencies: ["tag-group"],
    files: ["example/tag-group/tag-group-helper.tsx"],
  },
  {
    name: "tag-group-links",
    type: "components:example/tag-group",
    registryDependencies: ["tag-group"],
    files: ["example/tag-group/tag-group-links.tsx"],
  },
  {
    name: "tag-group-remove",
    type: "components:example/tag-group",
    registryDependencies: ["tag-group"],
    files: ["example/tag-group/tag-group-remove.tsx"],
  },
  {
    name: "tag-group-selection",
    type: "components:example/tag-group",
    registryDependencies: ["tag-group"],
    files: ["example/tag-group/tag-group-selection.tsx"],
  },
  {
    name: "tag-group-reusable",
    type: "components:example/tag-group",
    registryDependencies: ["tag-group"],
    files: ["example/tag-group/tag-group-reusable.tsx"],
  },

  // Calendar
  {
    name: "calendar-demo",
    type: "components:example/calendar",
    registryDependencies: ["calendar"],
    files: ["example/calendar/calendar-demo.tsx"],
  },
  {
    name: "calendar-disabled",
    type: "components:example/calendar",
    registryDependencies: ["calendar"],
    files: ["example/calendar/calendar-disabled.tsx"],
  },
  {
    name: "calendar-error",
    type: "components:example/calendar",
    registryDependencies: ["calendar"],
    files: ["example/calendar/calendar-error.tsx"],
  },
  {
    name: "calendar-multi",
    type: "components:example/calendar",
    registryDependencies: ["calendar"],
    files: ["example/calendar/calendar-multi.tsx"],
  },
  {
    name: "calendar-readonly",
    type: "components:example/calendar",
    registryDependencies: ["calendar"],
    files: ["example/calendar/calendar-readonly.tsx"],
  },
  {
    name: "calendar-unavailable",
    type: "components:example/calendar",
    registryDependencies: ["calendar"],
    files: ["example/calendar/calendar-unavailable.tsx"],
  },
  {
    name: "calendar-validation",
    type: "components:example/calendar",
    registryDependencies: ["calendar"],
    files: ["example/calendar/calendar-validation.tsx"],
  },
  {
    name: "calendar-reusable",
    type: "components:example/calendar",
    registryDependencies: ["calendar"],
    files: ["example/calendar/calendar-reusable.tsx"],
  },

  // DateField
  {
    name: "datefield-demo",
    type: "components:example/datefield",
    registryDependencies: ["datefield"],
    files: ["example/datefield/datefield-demo.tsx"],
  },
  {
    name: "datefield-description",
    type: "components:example/datefield",
    registryDependencies: ["datefield"],
    files: ["example/datefield/datefield-description.tsx"],
  },
  {
    name: "datefield-granularity",
    type: "components:example/datefield",
    registryDependencies: ["datefield"],
    files: ["example/datefield/datefield-granularity.tsx"],
  },
  {
    name: "datefield-timezone",
    type: "components:example/datefield",
    registryDependencies: ["datefield"],
    files: ["example/datefield/datefield-timezone.tsx"],
  },
  {
    name: "datefield-validation-min-max",
    type: "components:example/datefield",
    registryDependencies: ["datefield"],
    files: ["example/datefield/datefield-validation-min-max.tsx"],
  },
  {
    name: "datefield-validation",
    type: "components:example/datefield",
    registryDependencies: ["datefield"],
    files: ["example/datefield/datefield-validation.tsx"],
  },
  {
    name: "datefield-reusable",
    type: "components:example/datefield",
    registryDependencies: ["datefield"],
    files: ["example/datefield/datefield-reusable.tsx"],
  },

  // Datepicker
  {
    name: "datepicker-custom-validation",
    type: "components:example/datepicker",
    registryDependencies: ["datepicker"],
    files: ["example/datepicker/datepicker-custom-validation.tsx"],
  },
  {
    name: "datepicker-demo",
    type: "components:example/datepicker",
    registryDependencies: ["datepicker"],
    files: ["example/datepicker/datepicker-demo.tsx"],
  },
  {
    name: "datepicker-description",
    type: "components:example/datepicker",
    registryDependencies: ["datepicker"],
    files: ["example/datepicker/datepicker-description.tsx"],
  },
  {
    name: "datepicker-granularity",
    type: "components:example/datepicker",
    registryDependencies: ["datepicker"],
    files: ["example/datepicker/datepicker-granularity.tsx"],
  },
  {
    name: "datepicker-min-max",
    type: "components:example/datepicker",
    registryDependencies: ["datepicker"],
    files: ["example/datepicker/datepicker-min-max.tsx"],
  },
  {
    name: "datepicker-timezone",
    type: "components:example/datepicker",
    registryDependencies: ["datepicker"],
    files: ["example/datepicker/datepicker-timezone.tsx"],
  },
  {
    name: "datepicker-unavailable",
    type: "components:example/datepicker",
    registryDependencies: ["datepicker"],
    files: ["example/datepicker/datepicker-unavailable.tsx"],
  },
  {
    name: "datepicker-validation",
    type: "components:example/datepicker",
    registryDependencies: ["datepicker"],
    files: ["example/datepicker/datepicker-validation.tsx"],
  },
  {
    name: "datepicker-reusable",
    type: "components:example/datepicker",
    registryDependencies: ["datepicker"],
    files: ["example/datepicker/datepicker-reusable.tsx"],
  },

  //Date range picker
  {
    name: "date-range-non-continuous",
    type: "components:example/date-range-picker",
    registryDependencies: ["date-range-picker"],
    files: ["example/date-range-picker/date-range-non-continuous.tsx"],
  },
  {
    name: "date-range-picker-custom-validation",
    type: "components:example/date-range-picker",
    registryDependencies: ["date-range-picker"],
    files: [
      "example/date-range-picker/date-range-picker-custom-validation.tsx",
    ],
  },
  {
    name: "date-range-picker-demo",
    type: "components:example/date-range-picker",
    registryDependencies: ["date-range-picker"],
    files: ["example/date-range-picker/date-range-picker-demo.tsx"],
  },
  {
    name: "date-range-picker-description",
    type: "components:example/date-range-picker",
    registryDependencies: ["date-range-picker"],
    files: ["example/date-range-picker/date-range-picker-description.tsx"],
  },
  {
    name: "date-range-picker-granularity",
    type: "components:example/date-range-picker",
    registryDependencies: ["date-range-picker"],
    files: ["example/date-range-picker/date-range-picker-granularity.tsx"],
  },
  {
    name: "date-range-picker-min-max",
    type: "components:example/date-range-picker",
    registryDependencies: ["date-range-picker"],
    files: ["example/date-range-picker/date-range-picker-min-max.tsx"],
  },
  {
    name: "date-range-picker-timezone",
    type: "components:example/date-range-picker",
    registryDependencies: ["date-range-picker"],
    files: ["example/date-range-picker/date-range-picker-timezone.tsx"],
  },
  {
    name: "date-range-picker-validation",
    type: "components:example/date-range-picker",
    registryDependencies: ["date-range-picker"],
    files: ["example/date-range-picker/date-range-picker-validation.tsx"],
  },
  {
    name: "date-range-unavailable",
    type: "components:example/date-range-picker",
    registryDependencies: ["date-range-picker"],
    files: ["example/date-range-picker/date-range-unavailable.tsx"],
  },
  {
    name: "date-range-picker-reusable",
    type: "components:example/date-range-picker",
    registryDependencies: ["date-range-picker"],
    files: ["example/date-range-picker/date-range-picker-reusable.tsx"],
  },

  // Range Calendar

  {
    name: "range-calendar-demo",
    type: "components:example/range-calendar",
    registryDependencies: ["range-calendar"],
    files: ["example/range-calendar/range-calendar-demo.tsx"],
  },
  {
    name: "range-calendar-disabled",
    type: "components:example/range-calendar",
    registryDependencies: ["range-calendar"],
    files: ["example/range-calendar/range-calendar-disabled.tsx"],
  },
  {
    name: "range-calendar-error",
    type: "components:example/range-calendar",
    registryDependencies: ["range-calendar"],
    files: ["example/range-calendar/range-calendar-error.tsx"],
  },
  {
    name: "range-calendar-multi-month",
    type: "components:example/range-calendar",
    registryDependencies: ["range-calendar"],
    files: ["example/range-calendar/range-calendar-multi-month.tsx"],
  },
  {
    name: "range-calendar-non-continuous",
    type: "components:example/range-calendar",
    registryDependencies: ["range-calendar"],
    files: ["example/range-calendar/range-calendar-non-continuous.tsx"],
  },
  {
    name: "range-calendar-readonly",
    type: "components:example/range-calendar",
    registryDependencies: ["range-calendar"],
    files: ["example/range-calendar/range-calendar-readonly.tsx"],
  },
  {
    name: "range-calendar-unavailable",
    type: "components:example/range-calendar",
    registryDependencies: ["range-calendar"],
    files: ["example/range-calendar/range-calendar-unavailable.tsx"],
  },
  {
    name: "range-calendar-validation",
    type: "components:example/range-calendar",
    registryDependencies: ["range-calendar"],
    files: ["example/range-calendar/range-calendar-validation.tsx"],
  },
  {
    name: "range-calendar-reusable",
    type: "components:example/range-calendar",
    registryDependencies: ["range-calendar"],
    files: ["example/range-calendar/range-calendar-reusable.tsx"],
  },
  // TimeField
  {
    name: "timefield-custom-validation",
    type: "components:example/timefield",
    registryDependencies: ["timefield"],
    files: ["example/timefield/timefield-custom-validation.tsx"],
  },
  {
    name: "timefield-demo",
    type: "components:example/timefield",
    registryDependencies: ["timefield"],
    files: ["example/timefield/timefield-demo.tsx"],
  },
  {
    name: "timefield-description",
    type: "components:example/timefield",
    registryDependencies: ["timefield"],
    files: ["example/timefield/timefield-description.tsx"],
  },
  {
    name: "timefield-granularity",
    type: "components:example/timefield",
    registryDependencies: ["timefield"],
    files: ["example/timefield/timefield-granularity.tsx"],
  },
  {
    name: "timefield-min-max",
    type: "components:example/timefield",
    registryDependencies: ["timefield"],
    files: ["example/timefield/timefield-min-max.tsx"],
  },
  {
    name: "timefield-timezone",
    type: "components:example/timefield",
    registryDependencies: ["timefield"],
    files: ["example/timefield/timefield-timezone.tsx"],
  },
  {
    name: "timefield-validation",
    type: "components:example/timefield",
    registryDependencies: ["timefield"],
    files: ["example/timefield/timefield-validation.tsx"],
  },
  {
    name: "timefield-reusable",
    type: "components:example/timefield",
    registryDependencies: ["timefield"],
    files: ["example/timefield/timefield-reusable.tsx"],
  },

  // Dropzone
  {
    name: "dropzone-demo",
    type: "components:example/dropzone",
    registryDependencies: ["dropzone"],
    files: ["example/dropzone/dropzone-demo.tsx"],
  },
  {
    name: "dropzone-file",
    type: "components:example/dropzone",
    registryDependencies: ["dropzone"],
    files: ["example/dropzone/dropzone-file.tsx"],
  },

  // Checkbox

  {
    name: "checkbox-demo",
    type: "components:example/checkbox",
    registryDependencies: ["checkbox"],
    files: ["example/checkbox/checkbox-demo.tsx"],
  },
  {
    name: "checkbox-disabled",
    type: "components:example/checkbox",
    registryDependencies: ["checkbox"],
    files: ["example/checkbox/checkbox-disabled.tsx"],
  },
  {
    name: "checkbox-indeterminate",
    type: "components:example/checkbox",
    registryDependencies: ["checkbox"],
    files: ["example/checkbox/checkbox-indeterminate.tsx"],
  },
  {
    name: "checkbox-readonly",
    type: "components:example/checkbox",
    registryDependencies: ["checkbox"],
    files: ["example/checkbox/checkbox-readonly.tsx"],
  },
  {
    name: "checkbox-validation",
    type: "components:example/checkbox",
    registryDependencies: ["checkbox"],
    files: ["example/checkbox/checkbox-validation.tsx"],
  },


  // CheckboxGroup

  {
    name: "checkbox-group-demo",
    type: "components:example/checkbox-group",
    registryDependencies: ["checkbox-group"],
    files: ["example/checkbox-group/checkbox-group-demo.tsx"],
  },
  {
    name: "checkbox-group-description",
    type: "components:example/checkbox-group",
    registryDependencies: ["checkbox-group"],
    files: ["example/checkbox-group/checkbox-group-description.tsx"],
  },
  {
    name: "checkbox-group-disabled-individual",
    type: "components:example/checkbox-group",
    registryDependencies: ["checkbox-group"],
    files: ["example/checkbox-group/checkbox-group-disabled-individual.tsx"],
  },
  {
    name: "checkbox-group-disabled",
    type: "components:example/checkbox-group",
    registryDependencies: ["checkbox-group"],
    files: ["example/checkbox-group/checkbox-group-disabled.tsx"],
  },
  {
    name: "checkbox-group-individual-validation",
    type: "components:example/checkbox-group",
    registryDependencies: ["checkbox-group"],
    files: ["example/checkbox-group/checkbox-group-individual-validation.tsx"],
  },
  {
    name: "checkbox-group-readonly",
    type: "components:example/checkbox-group",
    registryDependencies: ["checkbox-group"],
    files: ["example/checkbox-group/checkbox-group-readonly.tsx"],
  },
  {
    name: "checkbox-group-validation",
    type: "components:example/checkbox-group",
    registryDependencies: ["checkbox-group"],
    files: ["example/checkbox-group/checkbox-group-validation.tsx"],
  },
  {
    name: "checkbox-group-reusable",
    type: "components:example/checkbox-group",
    registryDependencies: ["checkbox"],
    files: ["example/checkbox-group/checkbox-reusable.tsx"],
  },

  // Form
  {
    name: "form-demo",
    type: "components:example/form",
    registryDependencies: ["form"],
    files: ["example/form/form-demo.tsx"],
  },
  {
    name: "form-validation-behavior",
    type: "components:example/form",
    registryDependencies: ["form"],
    files: ["example/form/form-validation-behavior.tsx"],
  },
  {
    name: "form-validation",
    type: "components:example/form",
    registryDependencies: ["form"],
    files: ["example/form/form-validation.tsx"],
  },

  // NumberField
  {
    name: "numberfield-currency",
    type: "components:example/numberfield",
    registryDependencies: ["numberfield"],
    files: ["example/numberfield/numberfield-currency.tsx"],
  },
  {
    name: "numberfield-demo",
    type: "components:example/numberfield",
    registryDependencies: ["numberfield"],
    files: ["example/numberfield/numberfield-demo.tsx"],
  },
  {
    name: "numberfield-description",
    type: "components:example/numberfield",
    registryDependencies: ["numberfield"],
    files: ["example/numberfield/numberfield-description.tsx"],
  },
  {
    name: "numberfield-disabled",
    type: "components:example/numberfield",
    registryDependencies: ["numberfield"],
    files: ["example/numberfield/numberfield-disabled.tsx"],
  },
  {
    name: "numberfield-formatting",
    type: "components:example/numberfield",
    registryDependencies: ["numberfield"],
    files: ["example/numberfield/numberfield-formatting.tsx"],
  },
  {
    name: "numberfield-percentages",
    type: "components:example/numberfield",
    registryDependencies: ["numberfield"],
    files: ["example/numberfield/numberfield-percentages.tsx"],
  },
  {
    name: "numberfield-readonly",
    type: "components:example/numberfield",
    registryDependencies: ["numberfield"],
    files: ["example/numberfield/numberfield-readonly.tsx"],
  },
  {
    name: "numberfield-step-values",
    type: "components:example/numberfield",
    registryDependencies: ["numberfield"],
    files: ["example/numberfield/numberfield-step-values.tsx"],
  },
  {
    name: "numberfield-units",
    type: "components:example/numberfield",
    registryDependencies: ["numberfield"],
    files: ["example/numberfield/numberfield-units.tsx"],
  },
  {
    name: "numberfield-validation-error",
    type: "components:example/numberfield",
    registryDependencies: ["numberfield"],
    files: ["example/numberfield/numberfield-validation-error.tsx"],
  },
  {
    name: "numberfield-validation",
    type: "components:example/numberfield",
    registryDependencies: ["numberfield"],
    files: ["example/numberfield/numberfield-validation.tsx"],
  },
  {
    name: "numberfield-reusable",
    type: "components:example/numberfield",
    registryDependencies: ["numberfield"],
    files: ["example/numberfield/numberfield-reusable.tsx"],
  },

  // RadioGroup

  {
    name: "radio-group-demo",
    type: "components:example/radio-group",
    registryDependencies: ["radio-group"],
    files: ["example/radio-group/radio-group-demo.tsx"],
  },
  {
    name: "radio-group-description",
    type: "components:example/radio-group",
    registryDependencies: ["radio-group"],
    files: ["example/radio-group/radio-group-description.tsx"],
  },
  {
    name: "radio-group-disabled-individual",
    type: "components:example/radio-group",
    registryDependencies: ["radio-group"],
    files: ["example/radio-group/radio-group-disabled-individual.tsx"],
  },
  {
    name: "radio-group-disabled",
    type: "components:example/radio-group",
    registryDependencies: ["radio-group"],
    files: ["example/radio-group/radio-group-disabled.tsx"],
  },
  {
    name: "radio-group-orientation",
    type: "components:example/radio-group",
    registryDependencies: ["radio-group"],
    files: ["example/radio-group/radio-group-orientation.tsx"],
  },
  {
    name: "radio-group-readonly",
    type: "components:example/radio-group",
    registryDependencies: ["radio-group"],
    files: ["example/radio-group/radio-group-readonly.tsx"],
  },
  {
    name: "radio-group-validation",
    type: "components:example/radio-group",
    registryDependencies: ["radio-group"],
    files: ["example/radio-group/radio-group-validation.tsx"],
  },
  {
    name: "radio-group-reusable",
    type: "components:example/radio-group",
    registryDependencies: ["radio-group"],
    files: ["example/radio-group/radio-group-reusable.tsx"],
  },

  // SearchField
  {
    name: "searchfield-demo",
    type: "components:example/searchfield",
    registryDependencies: ["searchfield"],
    files: ["example/searchfield/searchfield-demo.tsx"],
  },
  {
    name: "searchfield-description",
    type: "components:example/searchfield",
    registryDependencies: ["searchfield"],
    files: ["example/searchfield/searchfield-description.tsx"],
  },
  {
    name: "searchfield-disabled",
    type: "components:example/searchfield",
    registryDependencies: ["searchfield"],
    files: ["example/searchfield/searchfield-disabled.tsx"],
  },
  {
    name: "searchfield-readonly",
    type: "components:example/searchfield",
    registryDependencies: ["searchfield"],
    files: ["example/searchfield/searchfield-readonly.tsx"],
  },
  {
    name: "searchfield-validation",
    type: "components:example/searchfield",
    registryDependencies: ["searchfield"],
    files: ["example/searchfield/searchfield-validation.tsx"],
  },
  {
    name: "searchfield-reusable",
    type: "components:example/searchfield",
    registryDependencies: ["searchfield"],
    files: ["example/searchfield/searchfield-reusable.tsx"],
  },

  //Slider
  {
    name: "slider-demo",
    type: "components:example/slider",
    registryDependencies: ["slider"],
    files: ["example/slider/slider-demo.tsx"],
  },
  {
    name: "slider-disabled",
    type: "components:example/slider",
    registryDependencies: ["slider"],
    files: ["example/slider/slider-disabled.tsx"],
  },
  {
    name: "slider-step-values",
    type: "components:example/slider",
    registryDependencies: ["slider"],
    files: ["example/slider/slider-step-values.tsx"],
  },
  {
    name: "slider-values",
    type: "components:example/slider",
    registryDependencies: ["slider"],
    files: ["example/slider/slider-values.tsx"],
  },
  {
    name: "slider-vertical",
    type: "components:example/slider",
    registryDependencies: ["slider"],
    files: ["example/slider/slider-vertical.tsx"],
  },

  // TextField

  {
    name: "textfield-demo",
    type: "components:example/textfield",
    registryDependencies: ["textfield"],
    files: ["example/textfield/textfield-demo.tsx"],
  },
  {
    name: "textfield-description",
    type: "components:example/textfield",
    registryDependencies: ["textfield"],
    files: ["example/textfield/textfield-description.tsx"],
  },
  {
    name: "textfield-disabled",
    type: "components:example/textfield",
    registryDependencies: ["textfield"],
    files: ["example/textfield/textfield-disabled.tsx"],
  },
  {
    name: "textfield-multiline",
    type: "components:example/textfield",
    registryDependencies: ["textfield"],
    files: ["example/textfield/textfield-multiline.tsx"],
  },
  {
    name: "textfield-readonly",
    type: "components:example/textfield",
    registryDependencies: ["textfield"],
    files: ["example/textfield/textfield-readonly.tsx"],
  },
  {
    name: "textfield-validation",
    type: "components:example/textfield",
    registryDependencies: ["textfield"],
    files: ["example/textfield/textfield-validation.tsx"],
  },
  {
    name: "textfield-reusable",
    type: "components:example/textfield",
    registryDependencies: ["textfield"],
    files: ["example/textfield/textfield-reusable.tsx"],
  },

  //Tabs
  {
    name: "tabs-demo",
    type: "components:example/tabs",
    registryDependencies: ["tabs"],
    files: ["example/tabs/tabs-demo.tsx"],
  },
  {
    name: "tabs-disabled-dynamic",
    type: "components:example/tabs",
    registryDependencies: ["tabs"],
    files: ["example/tabs/tabs-disabled-dynamic.tsx"],
  },
  {
    name: "tabs-disabled-items",
    type: "components:example/tabs",
    registryDependencies: ["tabs"],
    files: ["example/tabs/tabs-disabled-items.tsx"],
  },
  {
    name: "tabs-disabled",
    type: "components:example/tabs",
    registryDependencies: ["tabs"],
    files: ["example/tabs/tabs-disabled.tsx"],
  },
  {
    name: "tabs-dynamic",
    type: "components:example/tabs",
    registryDependencies: ["tabs"],
    files: ["example/tabs/tabs-dynamic.tsx"],
  },
  {
    name: "tabs-focus",
    type: "components:example/tabs",
    registryDependencies: ["tabs"],
    files: ["example/tabs/tabs-focus.tsx"],
  },
  {
    name: "tabs-vertical",
    type: "components:example/tabs",
    registryDependencies: ["tabs"],
    files: ["example/tabs/tabs-vertical.tsx"],
  },

  // Dialog
  {
    name: "dialog-alert-demo",
    type: "components:example/dialog",
    registryDependencies: ["dialog"],
    files: ["example/dialog/dialog-alert-demo.tsx"],
  },
  {
    name: "dialog-demo",
    type: "components:example/dialog",
    registryDependencies: ["dialog"],
    files: ["example/dialog/dialog-demo.tsx"],
  },
  {
    name: "dialog-sheet",
    type: "components:example/dialog",
    registryDependencies: ["dialog"],
    files: ["example/dialog/dialog-sheet.tsx"],
  },
  {
    name: "dialog-popover",
    type: "components:example/dialog",
    registryDependencies: ["dialog"],
    files: ["example/dialog/dialog-popover.tsx"],
  },

  //Modal
  {
    name: "modal-demo",
    type: "components:example/modal",
    registryDependencies: ["dialog"],
    files: ["example/modal/modal-demo.tsx"],
  },
  {
    name: "modal-sheet",
    type: "components:example/modal",
    registryDependencies: ["dialog"],
    files: ["example/modal/modal-sheet.tsx"],
  },
  {
    name: "modal-dismissable",
    type: "components:example/modal",
    registryDependencies: ["dialog"],
    files: ["example/modal/modal-dismissable.tsx"],
  },
  {
    name: "modal-keyboard-dismissable",
    type: "components:example/modal",
    registryDependencies: ["dialog"],
    files: ["example/modal/modal-keyboard-dismissable.tsx"],
  },

  // Popover
  {
    name: "popover-container-padding",
    type: "components:example/popover",
    registryDependencies: ["popover"],
    files: ["example/popover/popover-container-padding.tsx"],
  },
  {
    name: "popover-cross-offset",
    type: "components:example/popover",
    registryDependencies: ["popover"],
    files: ["example/popover/popover-cross-offset.tsx"],
  },
  {
    name: "popover-demo",
    type: "components:example/popover",
    registryDependencies: ["popover"],
    files: ["example/popover/popover-demo.tsx"],
  },
  {
    name: "popover-flipping",
    type: "components:example/popover",
    registryDependencies: ["popover"],
    files: ["example/popover/popover-flipping.tsx"],
  },
  {
    name: "popover-offset",
    type: "components:example/popover",
    registryDependencies: ["popover"],
    files: ["example/popover/popover-offset.tsx"],
  },
  {
    name: "popover-position",
    type: "components:example/popover",
    registryDependencies: ["popover"],
    files: ["example/popover/popover-position.tsx"],
  },

  // Tooltip
  {
    name: "tooltip-demo",
    type: "components:example/tooltip",
    registryDependencies: ["tooltip"],
    files: ["example/tooltip/tooltip-demo.tsx"],
  },
  {
    name: "tooltip-position",
    type: "components:example/tooltip",
    registryDependencies: ["tooltip"],
    files: ["example/tooltip/tooltip-position.tsx"],
  },
  {
    name: "tooltip-offset",
    type: "components:example/tooltip",
    registryDependencies: ["tooltip"],
    files: ["example/tooltip/tooltip-offset.tsx"],
  },
  {
    name: "tooltip-cross-offset",
    type: "components:example/tooltip",
    registryDependencies: ["tooltip"],
    files: ["example/tooltip/tooltip-cross-offset.tsx"],
  },
  {
    name: "tooltip-disabled",
    type: "components:example/tooltip",
    registryDependencies: ["tooltip"],
    files: ["example/tooltip/tooltip-disabled.tsx"],
  },

  //Combobox

  {
    name: "combobox-content",
    type: "components:example/combobox",
    registryDependencies: ["combobox"],
    files: ["example/combobox/combobox-content.tsx"],
  },
  {
    name: "combobox-demo",
    type: "components:example/combobox",
    registryDependencies: ["combobox"],
    files: ["example/combobox/combobox-demo.tsx"],
  },
  {
    name: "combobox-description",
    type: "components:example/combobox",
    registryDependencies: ["combobox"],
    files: ["example/combobox/combobox-description.tsx"],
  },
  {
    name: "combobox-disabled",
    type: "components:example/combobox",
    registryDependencies: ["combobox"],
    files: ["example/combobox/combobox-disabled.tsx"],
  },
  {
    name: "combobox-links",
    type: "components:example/combobox",
    registryDependencies: ["combobox"],
    files: ["example/combobox/combobox-links.tsx"],
  },
  {
    name: "combobox-menu-trigger",
    type: "components:example/combobox",
    registryDependencies: ["combobox"],
    files: ["example/combobox/combobox-menu-trigger.tsx"],
  },
  {
    name: "combobox-sections-dynamic",
    type: "components:example/combobox",
    registryDependencies: ["combobox"],
    files: ["example/combobox/combobox-sections-dynamic.tsx"],
  },
  {
    name: "combobox-sections",
    type: "components:example/combobox",
    registryDependencies: ["combobox"],
    files: ["example/combobox/combobox-sections.tsx"],
  },
  {
    name: "combobox-text-slots",
    type: "components:example/combobox",
    registryDependencies: ["combobox"],
    files: ["example/combobox/combobox-text-slots.tsx"],
  },
  {
    name: "combobox-validation",
    type: "components:example/combobox",
    registryDependencies: ["combobox"],
    files: ["example/combobox/combobox-validation.tsx"],
  },
  {
    name: "combobox-reusable",
    type: "components:example/combobox",
    registryDependencies: ["combobox"],
    files: ["example/combobox/combobox-reusable.tsx"],
  },

  // Select
  {
    name: "select-content",
    type: "components:example/select",
    registryDependencies: ["select"],
    files: ["example/select/select-content.tsx"],
  },
  {
    name: "select-demo",
    type: "components:example/select",
    registryDependencies: ["select"],
    files: ["example/select/select-demo.tsx"],
  },
  {
    name: "select-description",
    type: "components:example/select",
    registryDependencies: ["select"],
    files: ["example/select/select-description.tsx"],
  },
  {
    name: "select-disabled-items",
    type: "components:example/select",
    registryDependencies: ["select"],
    files: ["example/select/select-disabled-items.tsx"],
  },
  {
    name: "select-disabled",
    type: "components:example/select",
    registryDependencies: ["select"],
    files: ["example/select/select-disabled.tsx"],
  },
  {
    name: "select-links",
    type: "components:example/select",
    registryDependencies: ["select"],
    files: ["example/select/select-links.tsx"],
  },
  {
    name: "select-sections-dynamic",
    type: "components:example/select",
    registryDependencies: ["select"],
    files: ["example/select/select-sections-dynamic.tsx"],
  },
  {
    name: "select-sections",
    type: "components:example/select",
    registryDependencies: ["select"],
    files: ["example/select/select-sections.tsx"],
  },
  {
    name: "select-text-slots",
    type: "components:example/select",
    registryDependencies: ["select"],
    files: ["example/select/select-text-slots.tsx"],
  },
  {
    name: "select-validation",
    type: "components:example/select",
    registryDependencies: ["select"],
    files: ["example/select/select-validation.tsx"],
  },
  {
    name: "select-reusable",
    type: "components:example/select",
    registryDependencies: ["select"],
    files: ["example/select/select-reusable.tsx"],
  },

  // Meter
  {
    name: "meter-custom-format",
    type: "components:example/meter",
    registryDependencies: ["meter"],
    files: ["example/meter/meter-custom-format.tsx"],
  },
  {
    name: "meter-demo",
    type: "components:example/meter",
    registryDependencies: ["meter"],
    files: ["example/meter/meter-demo.tsx"],
  },
  {
    name: "meter-value-format",
    type: "components:example/meter",
    registryDependencies: ["meter"],
    files: ["example/meter/meter-value-format.tsx"],
  },
  {
    name: "meter-reusable",
    type: "components:example/meter",
    registryDependencies: ["meter"],
    files: ["example/meter/meter-reusable.tsx"],
  },

  // Progress
  {
    name: "progress-custom-format",
    type: "components:example/progress",
    registryDependencies: ["progress"],
    files: ["example/progress/progress-custom-format.tsx"],
  },
  {
    name: "progress-demo",
    type: "components:example/progress",
    registryDependencies: ["progress"],
    files: ["example/progress/progress-demo.tsx"],
  },
  {
    name: "progress-value-format",
    type: "components:example/progress",
    registryDependencies: ["progress"],
    files: ["example/progress/progress-value-format.tsx"],
  },
  {
    name: "progress-reusable",
    type: "components:example/progress",
    registryDependencies: ["progress"],
    files: ["example/progress/progress-reusable.tsx"],
  },

  // Group

  {
    name: "group-demo",
    type: "components:example/group",
    registryDependencies: ["group"],
    files: ["example/group/group-demo.tsx"],
  },
  {
    name: "group-label",
    type: "components:example/group",
    registryDependencies: ["group"],
    files: ["example/group/group-label.tsx"],
  },

  // Toolbar
  {
    name: "toolbar-demo",
    type: "components:example/toolbar",
    registryDependencies: ["toolbar"],
    files: ["example/toolbar/toolbar-demo.tsx"],
  },
  {
    name: "toolbar-vertical",
    type: "components:example/toolbar",
    registryDependencies: ["toolbar"],
    files: ["example/toolbar/toolbar-vertical.tsx"],
  },

  //Reusable
]

export const registry: Registry = [...ui, ...example]
