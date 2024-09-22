"use client"

import * as React from "react"
import { ImperativePanelHandle } from "react-resizable-panels"

import { useThemeStore } from "@/lib/use-theme-store"
import { cn } from "@/lib/utils"
import { useLiftMode } from "@/hooks/use-lift-mode"
import { BlockToolbar } from "@/components/block-toolbar"
import { Icons } from "@/components/icons"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/resizable"
import { TabPanel, Tabs } from "@/registry/new-york/ui/tabs"
import { Block } from "@/registry/schema"

export function BlockPreview({
  block,
}: {
  block: Block & { hasLiftMode: boolean }
}) {
  const style = useThemeStore((state) => state.style)
  const { isLiftMode } = useLiftMode(block.name)
  const [isLoading, setIsLoading] = React.useState(true)
  const ref = React.useRef<ImperativePanelHandle>(null)

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
              isLiftMode ? "border-border/50" : "border-border"
            )}
            defaultSize={100}
            minSize={30}
          >
            {isLoading ? (
              <div className="absolute inset-0 z-10 flex h-[--container-height] w-full items-center justify-center gap-2 bg-background text-sm text-muted-foreground">
                <Icons.spinner className="h-4 w-4 animate-spin" />
                Loading...
              </div>
            ) : null}
            <iframe
              src={`/blocks/${block.style}/${block.name}`}
              height={block.container?.height ?? 450}
              className="chunk-mode relative z-20 w-full bg-background"
              onLoad={() => {
                setIsLoading(false)
              }}
              allowTransparency
            />
          </ResizablePanel>
          <ResizableHandle
            className={cn(
              "relative hidden w-3 bg-transparent p-0 after:absolute after:right-0 after:top-1/2 after:h-8 after:w-[6px] after:-translate-y-1/2 after:translate-x-[-1px] after:rounded-full after:bg-border after:transition-all after:hover:h-10 sm:block",
              isLiftMode && "invisible"
            )}
          />
          <ResizablePanel defaultSize={0} minSize={0} />
        </ResizablePanelGroup>
      </TabPanel>
      <TabPanel id="code">
        <div
          data-rehype-pretty-code-fragment
          dangerouslySetInnerHTML={{ __html: block.highlightedCode }}
          className="w-full overflow-hidden rounded-md [&_pre]:my-0 [&_pre]:h-[--container-height] [&_pre]:overflow-auto [&_pre]:whitespace-break-spaces [&_pre]:p-6 [&_pre]:font-mono [&_pre]:text-sm [&_pre]:leading-relaxed"
        />
      </TabPanel>
    </Tabs>
  )
}
