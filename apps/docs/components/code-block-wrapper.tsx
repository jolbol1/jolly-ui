"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { useMounted } from "@/hooks/use-mounted"

import { Icons } from "./icons"

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CodeBlockWrapper({
  className,
  children,
  ...props
}: CodeBlockProps) {
  const mounted = useMounted()

  return (
    <div className={cn("relative overflow-hidden", className)} {...props}>
      <div
        className={cn("[&_pre]:my-0 [&_pre]:max-h-[650px] [&_pre]:pb-[100px]")}
      >
        {mounted ? (
          children
        ) : (
          <div className="relative my-6 overflow-hidden rounded-md">
            <div className="[&amp;_pre]:my-0 [&amp;_pre]:max-h-[650px] [&amp;_pre]:pb-[100px]">
              <div data-rehype-pretty-code-figure="">
                <pre
                  className="mb-4 mt-6 h-[650px] overflow-x-auto rounded-lg border"
                  data-language="tsx"
                  data-theme="default"
                >
                  <code
                    className="relative flex h-full items-center justify-center rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                    data-language="tsx"
                    data-theme="default"
                  >
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Icons.spinner className="mr-2 size-4 animate-spin" />
                      Loading...
                    </div>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
