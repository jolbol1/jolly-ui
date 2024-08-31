"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { ResetIcon } from "@radix-ui/react-icons"
import template from "lodash.template"
import { CheckIcon, CopyIcon, MoonIcon, Settings2, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { ListBox, ListBoxItem } from "react-aria-components"

import { useThemeGenerator } from "@/lib/use-theme-generator"
import { cn } from "@/lib/utils"
import { DialogTitle } from "@/registry/default/ui/dialog"
import { Button, buttonVariants } from "@/registry/new-york/ui/button"
import {
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTrigger,
} from "@/registry/new-york/ui/dialog"
import { Label } from "@/registry/new-york/ui/field"
import { Link } from "@/registry/new-york/ui/link"
import {
  Select,
  SelectCollection,
  SelectItem,
  SelectListBox,
  SelectPopover,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"
import { Gray, Theme } from "@/registry/themes"

import { copyToClipboardWithMeta } from "./copy-button"

// TODO: Change listboxes to use radio groups
// TODO: Fix selected key issue (^ solved by above)

export function ThemeCustomizer({
  hide = false,
  shrink = false,
}: {
  shrink?: boolean
  hide?: boolean
}) {
  const { setTheme: setMode, resolvedTheme: mode } = useTheme()
  const pathname = usePathname()
  const {
    currentBorderRadius,
    borderRadius,
    updateBorderRadius,
    updateGrayColor,
    currentGrayColor,
    currentFontFamily,
    grayColors,
    currentAccentColor,
    fontFamilies,
    themes,
    updateAccentColor,
    updateFontFamily,
    reset,
  } = useThemeGenerator()

  if (pathname === "/" && hide) {
    return null
  }

  return (
    <DialogTrigger>
      <Button
        variant="default"
        className={cn(
          shrink && "h-9 min-w-9 p-0 sm:py-2 lg:h-9 lg:w-auto lg:px-4"
        )}
      >
        <Settings2 className={cn("mr-2", shrink && "mr-0 lg:mr-2")} />
        <p className={cn(shrink && "hidden lg:inline-block")}>Customize</p>
      </Button>
      <DialogOverlay className="bg-transparent backdrop-blur-none">
        <DialogContent side="right" className="w-3/4 p-4 pb-0">
          <div className="flex h-full max-h-full flex-col overflow-hidden">
            <div className="flex items-start border-b border-border pb-4">
              <div className="space-y-1 pr-2">
                <div className="font-semibold leading-none tracking-tight">
                  Customize
                </div>
                <div className="text-xs text-muted-foreground">
                  Pick a style and color for your components.
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {" "}
              <>
                <div className="flex flex-1 flex-col space-y-4 overflow-y-auto px-1 py-3 md:space-y-6">
                  <div className="space-y-1.5">
                    <Label className="text-xs">Font</Label>

                    <Select
                      placeholder="Select a font"
                      aria-label="Font Select"
                      selectedKey={currentFontFamily.label}
                      onSelectionChange={(key) =>
                        updateFontFamily(
                          fontFamilies.find(
                            (f) => f.label === (key as string)
                          ) ?? fontFamilies[2]
                        )
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectPopover>
                        <SelectListBox>
                          <SelectCollection items={fontFamilies}>
                            {(item) => (
                              <SelectItem
                                aria-label={item.label}
                                textValue={item.label}
                                key={item.label}
                                id={item.label}
                              >
                                {item.label}
                              </SelectItem>
                            )}
                          </SelectCollection>
                        </SelectListBox>
                      </SelectPopover>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs">Base Color</Label>
                    <ListBox
                      aria-label="Base Colors"
                      className="grid grid-cols-2 gap-2 sm:grid-cols-3"
                      disallowEmptySelection
                      selectionMode="single"
                      selectedKeys={[currentGrayColor]}
                      onSelectionChange={(key) => {
                        //@ts-expect-error needs fixing
                        if (key.currentKey) updateGrayColor(key.currentKey)
                      }}
                    >
                      {grayColors.map((theme) => {
                        return (
                          <ListBoxItem
                            textValue={theme.name}
                            id={theme.name}
                            key={theme.name}
                            className={cn(
                              buttonVariants({
                                size: "sm",
                                variant: "outline",
                                className:
                                  "justify-start text-xs cursor-pointer",
                              })
                            )}
                          >
                            {({ isSelected }) => (
                              <>
                                <span
                                  className={cn(
                                    "mr-1 flex size-4 shrink-0 -translate-x-1 items-center justify-center rounded-full ",
                                    theme.name
                                  )}
                                >
                                  {isSelected && (
                                    <CheckIcon
                                      className={cn(
                                        "size-3 text-white",
                                        theme.name === "zinc" && "text-black"
                                      )}
                                    />
                                  )}
                                </span>
                                {theme.label}
                              </>
                            )}
                          </ListBoxItem>
                        )
                      })}
                    </ListBox>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs">Accent Color</Label>
                    <ListBox
                      aria-label="Accent Colors"
                      className="grid grid-cols-2 gap-2 sm:grid-cols-3"
                      disallowEmptySelection
                      selectionMode="single"
                      selectedKeys={[currentAccentColor]}
                      onSelectionChange={(key) => {
                        //@ts-expect-error needs fixing
                        if (key.currentKey) {
                          //@ts-expect-error needs fixing
                          updateAccentColor(key.currentKey)
                        }
                      }}
                    >
                      {themes.map((theme) => {
                        return (
                          <ListBoxItem
                            textValue={theme.name}
                            id={theme.name}
                            key={theme.name}
                            className={cn(
                              buttonVariants({
                                variant: "outline",
                                size: "sm",
                                className: "justify-start cursor-pointer",
                              })
                            )}
                          >
                            {({ isSelected }) => (
                              <>
                                <span
                                  className={cn(
                                    "mr-1 flex size-4 shrink-0 -translate-x-1 items-center justify-center rounded-full",
                                    theme.name
                                  )}
                                >
                                  {isSelected && (
                                    <CheckIcon
                                      className={cn(
                                        "size-3 text-white",
                                        theme.name === "zinc" && "text-black"
                                      )}
                                    />
                                  )}
                                </span>
                                {theme.label}
                              </>
                            )}
                          </ListBoxItem>
                        )
                      })}
                    </ListBox>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs">Radius</Label>
                    <div className="grid grid-cols-5 gap-2">
                      {borderRadius.map((value) => {
                        return (
                          <Button
                            variant={"outline"}
                            size="sm"
                            key={value}
                            onPress={() => {
                              updateBorderRadius(value)
                            }}
                            className={cn(
                              currentBorderRadius === value &&
                                "border-2 border-primary"
                            )}
                          >
                            {value}
                          </Button>
                        )
                      })}
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-xs">Mode</Label>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                      <>
                        <Button
                          variant={"outline"}
                          size="sm"
                          onPress={() => setMode("light")}
                          className={cn(
                            mode === "light" && "border-2 border-primary"
                          )}
                        >
                          <SunIcon className="mr-1 size-4 -translate-x-1" />
                          Light
                        </Button>
                        <Button
                          variant={"outline"}
                          size="sm"
                          onPress={() => setMode("dark")}
                          className={cn(
                            mode === "dark" && "border-2 border-primary"
                          )}
                        >
                          <MoonIcon className="mr-1 size-4 -translate-x-1" />
                          Dark
                        </Button>
                      </>
                    </div>
                  </div>
                </div>
              </>
            </div>
            <div className="flex justify-end gap-4 border-t border-border py-4">
              <CopyCodeButton />
              <Button
                variant="secondary"
                className="rounded-[0.5rem]"
                onPress={() => {
                  reset()
                }}
              >
                <ResetIcon className="mr-2" /> Reset
                <span className="sr-only">Reset</span>
              </Button>
            </div>
          </div>
        </DialogContent>
      </DialogOverlay>
    </DialogTrigger>
  )
}
function CustomizerCode() {
  const {
    currentBorderRadius,

    grayColors,
    currentGrayColor,
    currentAccentColor,
    themes,
  } = useThemeGenerator()
  const [hasCopied, setHasCopied] = useState(false)
  const activeTheme = themes.find((theme) => theme.name === currentAccentColor)
  const activeBase = grayColors.find((theme) => theme.name === currentGrayColor)

  useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  return (
    <div data-rehype-pretty-code-figure="">
      {activeTheme && (
        <Button
          size="sm"
          onPress={() => {
            copyToClipboardWithMeta(
              getThemeCode(activeTheme, activeBase, currentBorderRadius),
              { name: "copy_theme_code" }
            )
            setHasCopied(true)
          }}
          className="absolute right-6 top-4 z-[100] bg-muted text-muted-foreground hover:bg-muted hover:text-muted-foreground"
        >
          {hasCopied ? (
            <CheckIcon className="mr-2 size-4" />
          ) : (
            <CopyIcon className="mr-2 size-4" />
          )}
          Copy
        </Button>
      )}
      <pre className="max-h-[450px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900">
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
          <span className="line text-white">@layer base &#123;</span>
          <span className="line text-white">&nbsp;&nbsp;:root &#123;</span>
          <span className="line text-white">
            &nbsp;&nbsp;&nbsp;&nbsp;--background:{" "}
            {activeBase?.cssVars.light["background"]};
          </span>
          <span className="line text-white">
            &nbsp;&nbsp;&nbsp;&nbsp;--foreground:{" "}
            {activeBase?.cssVars.light["foreground"]};
          </span>
          {["card", "popover", "muted", "accent"].map((prefix) => (
            <>
              <span className="line text-white">
                &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}:{" "}
                {
                  activeBase?.cssVars.light[
                    prefix as keyof typeof activeBase.cssVars.light
                  ]
                }
                ;
              </span>
              <span className="line text-white">
                &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}-foreground:{" "}
                {
                  activeBase?.cssVars.light[
                    `${prefix}-foreground` as keyof typeof activeBase.cssVars.light
                  ]
                }
                ;
              </span>
            </>
          ))}
          {["primary", "secondary", "destructive"].map((prefix) => (
            <>
              <span className="line text-white">
                &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}:{" "}
                {
                  activeTheme?.cssVars.light[
                    prefix as keyof typeof activeTheme.cssVars.light
                  ]
                }
                ;
              </span>
              <span className="line text-white">
                &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}-foreground:{" "}
                {
                  activeTheme?.cssVars.light[
                    `${prefix}-foreground` as keyof typeof activeTheme.cssVars.light
                  ]
                }
                ;
              </span>
            </>
          ))}
          <span className="line text-white">
            &nbsp;&nbsp;&nbsp;&nbsp;--border:{" "}
            {activeBase?.cssVars.light["border"]};
          </span>
          <span className="line text-white">
            &nbsp;&nbsp;&nbsp;&nbsp;--input:{" "}
            {activeBase?.cssVars.light["input"]};
          </span>
          <span className="line text-white">
            &nbsp;&nbsp;&nbsp;&nbsp;--ring: {activeTheme?.cssVars.light["ring"]}
            ;
          </span>
          <span className="line text-white">
            &nbsp;&nbsp;&nbsp;&nbsp;--radius: {currentBorderRadius}rem;
          </span>
          <span className="line text-white">&nbsp;&nbsp;&#125;</span>
          <span className="line text-white">&nbsp;</span>
          <span className="line text-white">&nbsp;&nbsp;.dark &#123;</span>
          <span className="line text-white">
            &nbsp;&nbsp;&nbsp;&nbsp;--background:{" "}
            {activeBase?.cssVars.dark["background"]};
          </span>
          <span className="line text-white">
            &nbsp;&nbsp;&nbsp;&nbsp;--foreground:{" "}
            {activeBase?.cssVars.dark["foreground"]};
          </span>
          {["card", "popover", "muted", "accent"].map((prefix) => (
            <>
              <span className="line text-white">
                &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}:{" "}
                {
                  activeBase?.cssVars.dark[
                    prefix as keyof typeof activeBase.cssVars.dark
                  ]
                }
                ;
              </span>
              <span className="line text-white">
                &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}-foreground:{" "}
                {
                  activeBase?.cssVars.dark[
                    `${prefix}-foreground` as keyof typeof activeBase.cssVars.dark
                  ]
                }
                ;
              </span>
            </>
          ))}
          {["primary", "secondary", "destructive"].map((prefix) => (
            <>
              <span className="line text-white">
                &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}:{" "}
                {
                  activeTheme?.cssVars.dark[
                    prefix as keyof typeof activeTheme.cssVars.dark
                  ]
                }
                ;
              </span>
              <span className="line text-white">
                &nbsp;&nbsp;&nbsp;&nbsp;--{prefix}-foreground:{" "}
                {
                  activeTheme?.cssVars.dark[
                    `${prefix}-foreground` as keyof typeof activeTheme.cssVars.dark
                  ]
                }
                ;
              </span>
            </>
          ))}
          <span className="line text-white">
            &nbsp;&nbsp;&nbsp;&nbsp;--border:{" "}
            {activeBase?.cssVars.dark["border"]};
          </span>
          <span className="line text-white">
            &nbsp;&nbsp;&nbsp;&nbsp;--input: {activeBase?.cssVars.dark["input"]}
            ;
          </span>
          <span className="line text-white">
            &nbsp;&nbsp;&nbsp;&nbsp;--ring: {activeTheme?.cssVars.dark["ring"]};
          </span>
          <span className="line text-white">&nbsp;&nbsp;&#125;</span>
          <span className="line text-white">&#125;</span>
        </code>
      </pre>
    </div>
  )
}
function CopyCodeButton() {
  const { currentFontFamily } = useThemeGenerator()

  return (
    <>
      <DialogTrigger>
        <Button>Copy code</Button>
        <DialogOverlay className="z-[80]">
          <DialogContent className="max-w-2xl">
            <DialogHeader className="text-left">
              <DialogTitle>Theme</DialogTitle>
              <p className="text-sm text-muted-foreground">
                Copy and paste the following code into your CSS file.
              </p>
            </DialogHeader>
            <CustomizerCode />
            <div>
              <h3 className="text-lg font-semibold leading-none tracking-tight">
                Font
              </h3>
              <p className="text-sm text-muted-foreground">
                The Selected Font is:{" "}
                <span className="font-medium text-black dark:text-white">
                  {currentFontFamily.label}
                </span>
                , Download{" "}
                <Link
                  className="p-0 text-primary"
                  variant="link"
                  target="_blank"
                  href={currentFontFamily.link}
                >
                  Here
                </Link>
                <br />
                This font is for font-sans. Instructions on how to set that in
                tailwind config can be found in their{" "}
                <Link
                  className="primary p-0"
                  variant="link"
                  target="_blank"
                  href="https://tailwindcss.com/docs/font-family#customizing-your-theme"
                >
                  documentation
                </Link>
              </p>
            </div>
          </DialogContent>
        </DialogOverlay>
      </DialogTrigger>
    </>
  )
}

function getThemeCode(theme: Theme, grays: Gray | undefined, radius: string) {
  if (!theme || !grays) {
    return ""
  }

  const colors = {
    light: { ...theme.cssVars.light, ...grays.cssVars.light },
    dark: { ...theme.cssVars.dark, ...grays.cssVars.dark },
  }

  return template(BASE_STYLES_WITH_VARIABLES)({
    colors: colors,
    radius,
  })
}

const BASE_STYLES_WITH_VARIABLES = `
@layer base {
  :root {
    --background: <%- colors.light["background"] %>;
    --foreground: <%- colors.light["foreground"] %>;
    --card: <%- colors.light["card"] %>;
    --card-foreground: <%- colors.light["card-foreground"] %>;
    --popover: <%- colors.light["popover"] %>;
    --popover-foreground: <%- colors.light["popover-foreground"] %>;
    --primary: <%- colors.light["primary"] %>;
    --primary-foreground: <%- colors.light["primary-foreground"] %>;
    --secondary: <%- colors.light["secondary"] %>;
    --secondary-foreground: <%- colors.light["secondary-foreground"] %>;
    --muted: <%- colors.light["muted"] %>;
    --muted-foreground: <%- colors.light["muted-foreground"] %>;
    --accent: <%- colors.light["accent"] %>;
    --accent-foreground: <%- colors.light["accent-foreground"] %>;
    --destructive: <%- colors.light["destructive"] %>;
    --destructive-foreground: <%- colors.light["destructive-foreground"] %>;
    --border: <%- colors.light["border"] %>;
    --input: <%- colors.light["input"] %>;
    --ring: <%- colors.light["ring"] %>;
    --radius: <%- radius %>rem;
  }

  .dark {
    --background: <%- colors.dark["background"] %>;
    --foreground: <%- colors.dark["foreground"] %>;
    --card: <%- colors.dark["card"] %>;
    --card-foreground: <%- colors.dark["card-foreground"] %>;
    --popover: <%- colors.dark["popover"] %>;
    --popover-foreground: <%- colors.dark["popover-foreground"] %>;
    --primary: <%- colors.dark["primary"] %>;
    --primary-foreground: <%- colors.dark["primary-foreground"] %>;
    --secondary: <%- colors.dark["secondary"] %>;
    --secondary-foreground: <%- colors.dark["secondary-foreground"] %>;
    --muted: <%- colors.dark["muted"] %>;
    --muted-foreground: <%- colors.dark["muted-foreground"] %>;
    --accent: <%- colors.dark["accent"] %>;
    --accent-foreground: <%- colors.dark["accent-foreground"] %>;
    --destructive: <%- colors.dark["destructive"] %>;
    --destructive-foreground: <%- colors.dark["destructive-foreground"] %>;
    --border: <%- colors.dark["border"] %>;
    --input: <%- colors.dark["input"] %>;
    --ring: <%- colors.dark["ring"] %>;
  }
}
`
