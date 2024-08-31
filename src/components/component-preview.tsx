"use client"

import * as React from "react"
import { Index } from "@/__registry__"

import { useThemeStore } from "@/lib/use-theme-store"
import { cn } from "@/lib/utils"
import { CopyButton, CopyWithClassNames } from "@/components/copy-button"
import { Icons } from "@/components/icons"
import { StyleSwitcher } from "@/components/style-switcher"
import { Tab, TabList, TabPanel, Tabs } from "@/registry/default/ui/tabs"
import { styles } from "@/registry/styles"

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  extractedClassNames?: string
  align?: "center" | "start" | "end"
}

export function ComponentPreview({
  name,
  children,
  className,
  extractedClassNames,
  align = "center",
  ...props
}: ComponentPreviewProps) {
  const currentStyle = useThemeStore((state) => state.style)
  const index = styles.findIndex((style) => style.name === currentStyle)

  const Codes = React.Children.toArray(children) as React.ReactElement[]
  const Code = Codes[index]

  const Preview = React.useMemo(() => {
    const Component = Index[currentStyle][name]?.component

    if (!Component) {
      return (
        <p className="text-sm text-muted-foreground">
          Component{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {name}
          </code>{" "}
          not found in registry.
        </p>
      )
    }

    return <Component />
  }, [name, currentStyle])

  const codeString = React.useMemo(() => {
    if (typeof Code?.props["data-rehype-pretty-code-figure"] !== "undefined") {
      const [, Button] = React.Children.toArray(
        Code.props.children
      ) as React.ReactElement[]
      return Button?.props?.value || Button?.props?.__rawString__ || null
    }
  }, [Code])

  return (
    <div
      className={cn("group relative my-4 flex flex-col space-y-2", className)}
      {...props}
    >
      <Tabs defaultSelectedKey="preview" className="relative mr-auto w-full">
        <div className="flex items-center justify-between pb-3">
          <TabList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            <Tab
              id="preview"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[selected]:border-b-primary data-[selected]:text-foreground data-[selected]:shadow-none"
            >
              Preview
            </Tab>
            <Tab
              id="code"
              className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[selected]:border-b-primary data-[selected]:text-foreground data-[selected]:shadow-none"
            >
              Code
            </Tab>
          </TabList>
        </div>
        <TabPanel
          id="preview"
          className="relative overflow-auto rounded-md border"
        >
          <div className="flex items-center justify-between p-4">
            <StyleSwitcher />
            {extractedClassNames ? (
              <CopyWithClassNames
                value={codeString}
                classNames={extractedClassNames}
              />
            ) : (
              codeString && <CopyButton value={codeString} />
            )}
          </div>
          <div
            className={cn(
              "preview flex min-h-[350px] w-full justify-center p-10",
              {
                "items-center": align === "center",
                "items-start": align === "start",
                "items-end": align === "end",
              }
            )}
          >
            <React.Suspense
              fallback={
                <div className="flex items-center text-sm text-muted-foreground">
                  <Icons.spinner className="mr-2 size-4 animate-spin" />
                  Loading...
                </div>
              }
            >
              {Preview}
            </React.Suspense>
          </div>
        </TabPanel>
        <TabPanel id="code">
          <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:h-[412px] [&_pre]:max-h-[412px] [&_pre]:overflow-auto">
            {Code}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
}
