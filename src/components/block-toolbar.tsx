"use client"

import * as React from "react"
import { createHideableComponent } from "@react-aria/collections"
import { CircleHelp, Monitor, Smartphone, Tablet } from "lucide-react"
import { ImperativePanelHandle } from "react-resizable-panels"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/badge"
import { BlockCopyButton } from "@/components/block-copy-button"
import { StyleSwitcher } from "@/components/style-switcher"
import { Button } from "@/registry/new-york/ui/button"
import {
  Popover,
  PopoverDialog,
  PopoverTrigger,
} from "@/registry/new-york/ui/popover"
import { Radio, RadioGroup } from "@/registry/new-york/ui/radio-group"
import { Separator } from "@/registry/new-york/ui/separator"
import { Tab, TabList } from "@/registry/new-york/ui/tabs"
import { toggleVariants } from "@/registry/new-york/ui/toggle"
import { Block } from "@/registry/schema"

import { CommandAddBlockButton } from "./copy-button"

const StyleSwitchers = createHideableComponent(StyleSwitcher)
const CommandAddBlockButtons = createHideableComponent(CommandAddBlockButton)

export function BlockToolbar({
  block,
  resizablePanelRef,
}: {
  block: Block
  resizablePanelRef: React.RefObject<ImperativePanelHandle>
}) {
  const [selectedSize, setSelectedSize] = React.useState("100")
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <TabList className="hidden h-7 rounded-md p-0 px-[calc(theme(spacing.1)_-_2px)] py-[theme(spacing.1)] sm:flex">
          <Tab id="preview" className="h-[1.45rem] rounded-sm px-2 text-xs">
            Preview
          </Tab>
          <Tab id="code" className="h-[1.45rem] rounded-sm px-2 text-xs">
            Code
          </Tab>
        </TabList>
        <Separator orientation="vertical" className="mx-2 hidden h-4 md:flex" />
        <StyleSwitchers />
        <PopoverTrigger>
          <Button
            variant="ghost"
            size="icon"
            className="hidden size-3.5 text-muted-foreground hover:text-foreground disabled:opacity-50 sm:flex"
          >
            <CircleHelp className="size-3.5" />
            <span className="sr-only">Block description</span>
          </Button>
          <Popover
            placement="top"
            offset={20}
            className="rounded-[0.5rem] text-sm "
          >
            <PopoverDialog className="flex w-72 flex-col gap-3">
              <p className="font-medium">
                What is the difference between the New York and Default style?
              </p>
              <p>
                A style comes with its own set of components, animations, icons
                and more.
              </p>
              <p>
                The <span className="font-medium">Default</span> style has
                larger inputs, uses lucide-react for icons and
                tailwindcss-animate for animations.
              </p>
              <p>
                The <span className="font-medium">New York</span> style ships
                with smaller buttons and inputs. It also uses shadows on cards
                and buttons.
              </p>
            </PopoverDialog>
          </Popover>
        </PopoverTrigger>
        <div className="hidden items-center gap-2 sm:flex">
          <Separator
            orientation="vertical"
            className="mx-2 mr-0 hidden h-4 md:flex"
          />
          <div className="flex items-center gap-2">
            <a href={`#${block.name}`}>
              <Badge variant="secondary" className={cn("bg-transparent")}>
                {block.name}
              </Badge>
            </a>
          </div>
        </div>
      </div>
      {block.code && (
        <div className="ml-auto flex items-center gap-2 md:pr-[14px]">
          <div className="hidden h-[28px] items-center gap-1.5 rounded-md border p-[2px] shadow-sm md:flex">
            <RadioGroup
              value={selectedSize}
              onChange={(value) => {
                if (resizablePanelRef.current) {
                  resizablePanelRef.current.resize(parseInt(value))
                }
                setSelectedSize(value)
              }}
              orientation="horizontal"
              className="h-full"
            >
              <Radio
                className={toggleVariants({
                  variant: "outline",
                  size: "sm",
                  className: "[&>.jolly-Radio]:hidden h-full border-none px-1",
                })}
                value="100"
              >
                <Monitor className="size-3.5" />
              </Radio>
              <Radio
                className={toggleVariants({
                  variant: "outline",
                  size: "sm",
                  className: "[&>.jolly-Radio]:hidden h-full border-none px-1",
                })}
                value="60"
              >
                <Tablet className="size-3.5" />
              </Radio>
              <Radio
                className={toggleVariants({
                  variant: "outline",
                  size: "sm",
                  className: "[&>.jolly-Radio]:hidden h-full border-none px-1",
                })}
                value="30"
              >
                <Smartphone className="size-3.5" />
              </Radio>
            </RadioGroup>
          </div>
          <Separator
            orientation="vertical"
            className="mx-2 hidden h-4 md:flex"
          />
          <CommandAddBlockButtons block={block.name} />
          <BlockCopyButton name={block.name} code={block.code} />
        </div>
      )}
    </div>
  )
}
