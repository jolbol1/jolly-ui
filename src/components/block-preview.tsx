"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Link } from "react-aria-components"
import { ImperativePanelHandle } from "react-resizable-panels"

import {
  syncIframeBorderRadius,
  syncIframeFontFamily,
  syncIframeGrayColor,
  syncIframeThemeColor,
} from "@/lib/use-theme-generator"
import { useThemeStore } from "@/lib/use-theme-store"
import { cn } from "@/lib/utils"
import { BlockToolbar } from "@/components/block-toolbar"
import { Icons } from "@/components/icons"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/resizable"
import { TabPanel, Tabs } from "@/registry/new-york/ui/tabs"
import { Block } from "@/registry/schema"

import { Callout } from "./callout"

export function BlockPreview({ block }: { block: Block }) {
  const style = useThemeStore((state) => state.style)
  const [isLoading, setIsLoading] = React.useState(true)
  const ref = React.useRef<ImperativePanelHandle>(null)
  const { setTheme, resolvedTheme } = useTheme()
  const currentGrayColor = useThemeStore((state) => state.grayColor)
  const currentAccentColor = useThemeStore((state) => state.accentColor)
  const currentFontFamily = useThemeStore((state) => state.fontFamily)
  const currentBorderRadius = useThemeStore((state) => state.borderRadius)

  if (style !== block.style) {
    return null
  }

  return (
    <Tabs
      id={block.name}
      defaultSelectedKey="preview"
      className="relative grid w-full scroll-m-20 gap-4"
      style={
        {
          "--container-height": block.container?.height,
        } as React.CSSProperties
      }
    >
      <BlockToolbar block={block} resizablePanelRef={ref} />
      <TabPanel
        id="preview"
        className="relative after:absolute after:inset-0 after:right-3 after:z-0 after:rounded-lg after:bg-muted"
      >
        <ResizablePanelGroup direction="horizontal" className="relative z-10">
          <ResizablePanel
            ref={ref}
            className={cn(
              "relative rounded-lg border bg-background",
              "border-border"
            )}
            defaultSize={100}
            minSize={30}
          >
            {isLoading ? (
              <div className="absolute inset-0 z-10 flex h-[--container-height] w-full items-center justify-center gap-2 bg-background text-sm text-muted-foreground">
                <Icons.spinner className="size-4 animate-spin" />
                Loading...
              </div>
            ) : null}
            <iframe
              id={`block-${block.style}-${block.name}`}
              src={`/blocks/${block.style}/${block.name}`}
              height={block.container?.height ?? 450}
              className="chunk-mode relative z-20 w-full bg-background"
              onLoad={() => {
                setIsLoading(false)
                const id = `block-${block.style}-${block.name}`
                syncIframeGrayColor(id, currentGrayColor, resolvedTheme)
                syncIframeThemeColor(id, currentAccentColor, resolvedTheme)
                syncIframeBorderRadius(id, currentBorderRadius)
                syncIframeFontFamily(id, currentFontFamily)
              }}
              allowTransparency
            />
          </ResizablePanel>
          <ResizableHandle
            className={cn(
              "relative hidden w-3 bg-transparent p-0 after:absolute after:right-0 after:top-1/2 after:h-8 after:w-[6px] after:-translate-x-px after:-translate-y-1/2 after:rounded-full after:bg-border after:transition-all after:hover:h-10 sm:block"
            )}
          />
          <ResizablePanel defaultSize={0} minSize={0} />
        </ResizablePanelGroup>
      </TabPanel>
      <TabPanel id="code">
        {block.registryDependencies?.some((entry) =>
          entry.startsWith("shadcn")
        ) ? (
          <Callout>
            Note the following must be installed from{" "}
            <Link
              className="font-bold data-[hovered]:text-primary/80"
              href="https://ui.shadcn.com"
            >
              shadcn/ui
            </Link>
            :
            <p className="text-sm italic text-muted-foreground">
              The shadcn add command will install these for you
            </p>
            <ul className="list-disc pl-4">
              {block.registryDependencies
                .filter((entry) => entry.startsWith("shadcn"))
                .map((entry) => (
                  <li key={entry}>
                    <Link
                      className="capitalize text-secondary-foreground underline data-[hovered]:text-secondary-foreground/80"
                      href={`https://ui.shadcn.com/docs/components/${entry.replace(
                        "shadcn/",
                        ""
                      )}`}
                    >
                      {entry.replace("shadcn/", "")}
                    </Link>
                  </li>
                ))}
            </ul>
          </Callout>
        ) : null}
        <div
          data-rehype-pretty-code-fragment
          dangerouslySetInnerHTML={{ __html: block.highlightedCode }}
          className="w-full overflow-hidden rounded-md [&_pre]:my-0 [&_pre]:h-[--container-height] [&_pre]:overflow-auto [&_pre]:whitespace-break-spaces [&_pre]:p-6 [&_pre]:font-mono [&_pre]:text-sm [&_pre]:leading-relaxed"
        />
      </TabPanel>
    </Tabs>
  )
}
