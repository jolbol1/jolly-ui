import * as z from "zod"

export const registrySchema = z.array(
  z.object({
    name: z.string(),
    dependencies: z.array(z.string()).optional(),
    registryDependencies: z.array(z.string()).optional(),
    files: z.array(z.string()),
    type: z.enum([
      "components:ui",
      "components:component",
      "components:example",
      "components:example/breadcrumbs",
      "components:example/button",
      "components:example/calendar",
      "components:example/checkbox",
      "components:example/checkbox-group",
      "components:example/combobox",
      "components:example/color",
      "components:example/color/pickers",
      "components:example/datefield",
      "components:example/datepicker",
      "components:example/date-range-picker",
      "components:example/dialog",
      "components:example/dropzone",
      "components:example/file-trigger",
      "components:example/form",
      "components:example/group",
      "components:example/grid-list",
      "components:example/input",
      "components:example/label",
      "components:example/link",
      "components:example/list-box",
      "components:example/menu",
      "components:example/meter",
      "components:example/modal",
      "components:example/numberfield",
      "components:example/popover",
      "components:example/progress",
      "components:example/radio",
      "components:example/radio-group",
      "components:example/range-calendar",
      "components:example/searchfield",
      "components:example/select",
      "components:example/separator",
      "components:example/slider",
      "components:example/switch",
      "components:example/toolbar",
      "components:example/tag-group",
      "components:example/tabs",
      "components:example/textarea",
      "components:example/textfield",
      "components:example/timefield",
      "components:example/toggle",
      "components:example/tooltip",
    ]),
  })
)

export type Registry = z.infer<typeof registrySchema>
