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
      "components:example/combobox",
      "components:example/color",
      "components:example/color/pickers",
      "components:example/datepicker",
      "components:example/dialog",
      "components:example/dropzone",
      "components:example/file-trigger",
      "components:example/grid-list",
      "components:example/input",
      "components:example/label",
      "components:example/link",
      "components:example/menu",
      "components:example/meter",
      "components:example/popover",
      "components:example/progress",
      "components:example/radio",
      "components:example/searchfield",
      "components:example/select",
      "components:example/separator",
      "components:example/slider",
      "components:example/switch",
      "components:example/tabs",
      "components:example/textarea",
      "components:example/textfield",
      "components:example/toggle",
      "components:example/tooltip",
    ]),
  })
)

export type Registry = z.infer<typeof registrySchema>
