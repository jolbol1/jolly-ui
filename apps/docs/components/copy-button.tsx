"use client"

import * as React from "react"
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons"
import { NpmCommands } from "types/unist"

import { Event, trackEvent } from "@/lib/events"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/registry/new-york/ui/button"
import {
  Menu,
  MenuItem,
  MenuPopover,
  MenuTrigger,
} from "@/registry/new-york/ui/menu"

interface CopyButtonProps extends ButtonProps {
  value: string
  src?: string
  event?: Event["name"]
}

export async function copyToClipboardWithMeta(value: string, event?: Event) {
  navigator.clipboard.writeText(value)
  if (event) {
    trackEvent(event)
  }
}

export function CopyButton({
  value,
  className,
  event,
  ...props
}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  return (
    <Button
      size="icon"
      variant="ghost"
      className={cn(
        "relative z-10 size-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50",
        className
      )}
      onPress={() => {
        copyToClipboardWithMeta(
          value,
          event
            ? {
                name: event,
                properties: {
                  code: value,
                },
              }
            : undefined
        )
        setHasCopied(true)
      }}
      {...props}
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? (
        <CheckIcon className="size-3" />
      ) : (
        <CopyIcon className="size-3" />
      )}
    </Button>
  )
}

interface CopyWithClassNamesProps {
  value: string
  classNames: string
  className?: string
}

export function CopyWithClassNames({
  value,
  classNames,
  className,
}: CopyWithClassNamesProps) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  const copyToClipboard = React.useCallback((value: string) => {
    copyToClipboardWithMeta(value)
    setHasCopied(true)
  }, [])

  return (
    <MenuTrigger>
      <Button
        size="icon"
        variant="ghost"
        className={cn(
          "relative z-10 size-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50",
          className
        )}
      >
        {hasCopied ? (
          <CheckIcon className="size-3" />
        ) : (
          <CopyIcon className="size-3" />
        )}
        <span className="sr-only">Copy</span>
      </Button>
      <MenuPopover placement="bottom end">
        <Menu
          onAction={(key) => {
            if (key == "component") {
              copyToClipboard(value)
            }
            if (key == "classname") {
              copyToClipboard(classNames)
            }
          }}
        >
          <MenuItem id="component">Component</MenuItem>
          <MenuItem id="classname">Classname</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}

interface CopyNpmCommandButtonProps {
  commands: Required<NpmCommands>
  className?: string
}

export function CopyNpmCommandButton({
  commands,
  className,
}: CopyNpmCommandButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  const commandMap: { [key: string]: string } = {
    pnpm: commands.__pnpmCommand__,
    npm: commands.__npmCommand__,
    yarn: commands.__yarnCommand__,
    bun: commands.__bunCommand__,
  }

  const copyCommand = React.useCallback(
    (value: string, pm: "npm" | "pnpm" | "yarn" | "bun") => {
      copyToClipboardWithMeta(value, {
        name: "copy_npm_command",
        properties: {
          command: value,
          pm,
        },
      })
      setHasCopied(true)
    },
    []
  )

  return (
    <MenuTrigger>
      <Button
        size="icon"
        variant="ghost"
        className={cn(
          "relative z-10 size-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50",
          className
        )}
      >
        {hasCopied ? (
          <CheckIcon className="size-3" />
        ) : (
          <CopyIcon className="size-3" />
        )}
        <span className="sr-only">Copy</span>
      </Button>
      <MenuPopover placement="bottom end">
        <Menu
          onAction={(key) => {
            copyCommand(commandMap[key as string]!, key as any)
          }}
        >
          <MenuItem id="npm">npm</MenuItem>
          <MenuItem id="yarn">yarn</MenuItem>
          <MenuItem id="pnpm">pnpm</MenuItem>
          <MenuItem id="bun">bun</MenuItem>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  )
}
