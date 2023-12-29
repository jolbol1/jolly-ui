"use client"

import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import {
  CheckIcon,
  InfoCircledIcon,
  MoonIcon,
  ResetIcon,
  SunIcon,
} from "@radix-ui/react-icons"
import template from "lodash.template"
import { CopyIcon, Settings2, XIcon } from "lucide-react"
import { useTheme } from "next-themes"
import {
  Link,
  Button as _Button,
  Dialog as _Dialog,
  DialogTrigger as _DialogTrigger,
  Modal as _Modal,
  ModalOverlay as _ModalOverlay,
} from "react-aria-components"

import { useThemeGenerator } from "@/lib/use-theme-generator"
import { cn } from "@/lib/utils"
import { Popover } from "@/registry/default/ui/popover"
import { SelectTrigger } from "@/registry/default/ui/select"
import { Button, type ButtonProps } from "@/registry/new-york/ui/button"
import {
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/registry/new-york/ui/dialog"
import { Label } from "@/registry/new-york/ui/label"
import { PopoverTrigger } from "@/registry/new-york/ui/popover"
import {
  Select,
  SelectCollection,
  SelectContent,
  SelectItem,
  SelectPopover,
  SelectValue,
} from "@/registry/new-york/ui/select"
import { Gray, Theme } from "@/registry/themes"

import { copyToClipboardWithMeta } from "./copy-button"

export const NavThemeSheet = () => {
  const pathname = usePathname()

  return pathname === "/" ? null : <ThemeSheet />
}

export const ThemeSheet = ({
  theme = "default",
}: {
  theme?: ButtonProps["variant"]
}) => {
  const { reset } = useThemeGenerator()

  return (
    <_DialogTrigger>
      <Button variant={theme}>
        <Settings2 className="mr-2" />
        Customise
      </Button>
      <_ModalOverlay isDismissable className="fixed inset-0 z-[51]">
        <_Modal className="fixed inset-y-0 right-0  w-[400px]  border-l border-border bg-popover">
          <_Dialog className="flex h-full flex-col overflow-hidden p-3  focus:outline-none">
            {({ close }) => (
              <>
                <div className="flex items-start border-b border-border pb-4">
                  <div className="space-y-1 pr-2">
                    <div className="font-semibold leading-none tracking-tight">
                      Customize
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Pick a style and color for your components.
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-auto rounded-[0.5rem]"
                    onPress={() => {
                      close()
                    }}
                  >
                    <XIcon />
                    <span className="sr-only">Close</span>
                  </Button>
                </div>
                <Customizer />
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
              </>
            )}
          </_Dialog>
        </_Modal>
      </_ModalOverlay>
    </_DialogTrigger>
  )
}

function Customizer() {
  const [mounted, setMounted] = useState(false)
  const { setTheme: setMode, resolvedTheme: mode } = useTheme()
  const {
    currentBorderRadius,
    borderRadius,
    updateBorderRadius,
    updateGrayColor,
    updateStyle,
    currentStyle,
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

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <div className="flex flex-1 flex-col space-y-4 overflow-y-auto py-3 md:space-y-6">
        <div className="space-y-1.5">
          <div className="flex w-full items-center">
            <Label className="text-xs">Style</Label>
            <PopoverTrigger>
              <_Button aria-label="style info" className="ml-1">
                <InfoCircledIcon className="h-3 w-3" />
              </_Button>
              <span className="sr-only">About styles</span>
              <Popover className="space-y-3 rounded-[0.5rem] text-sm">
                <p className="font-medium">
                  What is the difference between the New York and Default style?
                </p>
                <p>
                  A style comes with its own set of components, animations,
                  icons and more.
                </p>
                <p>
                  The <span className="font-medium">Default</span> style has
                  larger inputs, uses lucide-react for icons and
                  tailwindcss-animate for animations.
                </p>
                <p>
                  The <span className="font-medium">New York</span> style ships
                  with smaller buttons and cards with shadows. It uses icons
                  from Radix Icons.
                </p>
              </Popover>
            </PopoverTrigger>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <Button
              variant={"outline"}
              size="sm"
              onPress={() => updateStyle("default")}
              className={cn(
                currentStyle === "default" && "border-2 border-primary"
              )}
            >
              Default
            </Button>
            <Button
              variant={"outline"}
              size="sm"
              onPress={() => updateStyle("new-york")}
              className={cn(
                currentStyle === "new-york" && "border-2 border-primary"
              )}
            >
              New York
            </Button>
          </div>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs">Font</Label>

          <Select
            aria-label="Font Select"
            selectedKey={currentFontFamily.label}
            onSelectionChange={(key) =>
              updateFontFamily(
                fontFamilies.find((f) => f.label === (key as string)) ??
                  fontFamilies[2]
              )
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a font" />
            </SelectTrigger>
            <SelectPopover>
              <SelectContent>
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
                {/* <SelectGroup>
                  {fontFamilies.map((font) => {
                    return (
                      <SelectItem key={font.label} value={font.value}>
                        {font.label}
                      </SelectItem>
                    )
                  })}
                </SelectGroup> */}
              </SelectContent>
            </SelectPopover>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs">Base Color</Label>
          <div className="grid grid-cols-3 gap-2">
            {grayColors.map((theme) => {
              return mounted ? (
                <Button
                  variant={"outline"}
                  size="sm"
                  key={theme.name}
                  onPress={() => {
                    updateGrayColor(theme.name)
                  }}
                  className={cn("justify-start")}
                >
                  <span
                    className={cn(
                      "mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full ",
                      theme.name
                    )}
                  >
                    {currentGrayColor === theme.name && (
                      <CheckIcon className="h-4 w-4 text-white" />
                    )}
                  </span>
                  {theme.label}
                </Button>
              ) : null
            })}
          </div>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs">Accent Color</Label>
          <div className="grid grid-cols-3 gap-2">
            {themes.map((theme) => {
              return mounted ? (
                <Button
                  variant={"outline"}
                  size="sm"
                  key={theme.name}
                  onPress={() => {
                    updateAccentColor(theme.name)
                  }}
                  className={cn("justify-start")}
                >
                  <span
                    className={cn(
                      "mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full",
                      theme.name
                    )}
                  >
                    {currentAccentColor === theme.name && (
                      <CheckIcon className="h-4 w-4 text-white" />
                    )}
                  </span>
                  {theme.label}
                </Button>
              ) : null
            })}
          </div>
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
                    currentBorderRadius === value && "border-2 border-primary"
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
          <div className="grid grid-cols-3 gap-2">
            {mounted ? (
              <>
                <Button
                  variant={"outline"}
                  size="sm"
                  onPress={() => setMode("light")}
                  className={cn(mode === "light" && "border-2 border-primary")}
                >
                  <SunIcon className="mr-1 -translate-x-1" />
                  Light
                </Button>
                <Button
                  variant={"outline"}
                  size="sm"
                  onPress={() => setMode("dark")}
                  className={cn(mode === "dark" && "border-2 border-primary")}
                >
                  <MoonIcon className="mr-1 -translate-x-1" />
                  Dark
                </Button>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  )
}

function CopyCodeButton() {
  const {
    currentBorderRadius,
    grayColors,
    currentGrayColor,
    currentAccentColor,
    currentFontFamily,
    themes,
  } = useThemeGenerator()
  const activeTheme = themes.find((theme) => theme.name === currentAccentColor)
  const activeBase = grayColors.find((theme) => theme.name === currentGrayColor)
  const [hasCopied, setHasCopied] = React.useState(false)

  useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  return (
    <>
      <DialogTrigger>
        <Button>Copy code</Button>
        <DialogOverlay className="z-[80]">
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Theme</DialogTitle>
              <p className="text-sm text-muted-foreground">
                Copy and paste the following code into your CSS file.
              </p>
            </DialogHeader>
            <CustomizerCode />
            <h3 className="text-lg font-semibold leading-none tracking-tight">
              Font
            </h3>
            <p className="text-sm text-muted-foreground">
              The Selected Font is:{" "}
              <span className="font-medium text-white">
                {currentFontFamily.label}
              </span>
              , Download{" "}
              <Link
                className="p-0 text-primary"
                target="_blank"
                href={currentFontFamily.link}
              >
                Here
              </Link>
              <br />
              <br />
              This font is for font-sans. Instructions on how to set that in
              tailwind config can be found in their{" "}
              <Link
                className="primary"
                target="_blank"
                href="https://tailwindcss.com/docs/font-family#customizing-your-theme"
              >
                documentation
              </Link>
            </p>
          </DialogContent>
        </DialogOverlay>
      </DialogTrigger>
    </>
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
  const [hasCopied, setHasCopied] = React.useState(false)
  const activeTheme = themes.find((theme) => theme.name === currentAccentColor)
  const activeBase = grayColors.find((theme) => theme.name === currentGrayColor)

  useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  return (
    <div data-rehype-pretty-code-fragment="">
      {activeTheme && (
        <Button
          size="sm"
          onPress={() => {
            copyToClipboardWithMeta(
              getThemeCode(activeTheme, activeBase, currentBorderRadius),
              {
                name: "copy_theme_code",
                properties: {
                  theme: activeTheme.name,
                  radius: currentBorderRadius,
                },
              }
            )
            setHasCopied(true)
          }}
          className="absolute right-6 top-4 z-[100] bg-muted text-muted-foreground hover:bg-muted hover:text-muted-foreground"
        >
          {hasCopied ? (
            <CheckIcon className="mr-2 h-4 w-4" />
          ) : (
            <CopyIcon className="mr-2 h-4 w-4" />
          )}
          Copy
        </Button>
      )}
      <pre className="max-h-[450px] overflow-x-auto rounded-lg border bg-popover py-4 ">
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

function getThemeCode(
  theme: Theme,
  baseColor: Gray | undefined,
  radius: string
) {
  if (!theme || !baseColor) {
    return ""
  }

  const colors = {
    light: { ...theme.cssVars.light, ...baseColor.cssVars.light },
    dark: { ...theme.cssVars.dark, ...baseColor.cssVars.dark },
  }
  1
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
