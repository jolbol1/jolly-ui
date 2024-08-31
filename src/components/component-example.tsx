"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { CopyButton, CopyWithClassNames } from "@/components/copy-button"
import { Tab, TabList, TabPanel, Tabs } from "@/registry/default/ui/tabs"

interface ComponentExampleProps extends React.HTMLAttributes<HTMLDivElement> {
  extractedClassNames?: string
  align?: "center" | "start" | "end"
}

export function ComponentExample({
  children,
  className,
  extractedClassNames,
  align = "center",
  ...props
}: ComponentExampleProps) {
  const [Example, Code, ...Children] = React.Children.toArray(
    children
  ) as React.ReactElement[]

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
              className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[selected]:border-b-primary data-[selected]:text-foreground data-[selected]:shadow-none"
            >
              Preview
            </Tab>
            <Tab
              id="code"
              className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[selected]:border-b-primary data-[selected]:text-foreground data-[selected]:shadow-none"
            >
              Code
            </Tab>
          </TabList>
          {extractedClassNames ? (
            <CopyWithClassNames
              value={codeString}
              classNames={extractedClassNames}
              className="absolute right-4 top-20"
            />
          ) : (
            codeString && (
              <CopyButton
                value={codeString}
                className="absolute right-4 top-20"
              />
            )
          )}
        </div>
        <TabPanel id="preview" className="overflow-auto rounded-md border">
          <div
            className={cn("flex min-h-[350px] justify-center p-10", {
              "items-center": align === "center",
              "items-start": align === "start",
              "items-end": align === "end",
            })}
          >
            {Example}
          </div>
        </TabPanel>
        <TabPanel id="code">
          <div className="flex flex-col space-y-4">
            <div className="w-full rounded-md [&_button]:hidden [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
              {Code}
            </div>
            {Children?.length ? (
              <div className="rounded-md [&_button]:hidden [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
                {Children}
              </div>
            ) : null}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
}
