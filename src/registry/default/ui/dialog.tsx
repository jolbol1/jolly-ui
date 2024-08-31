"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import {
  Button as AriaButton,
  Dialog as AriaDialog,
  DialogProps as AriaDialogProps,
  DialogTrigger as AriaDialogTrigger,
  Heading as AriaHeading,
  HeadingProps as AriaHeadingProps,
  Modal as AriaModal,
  ModalOverlay as AriaModalOverlay,
  ModalOverlayProps as AriaModalOverlayProps,
  composeRenderProps,
} from "react-aria-components"

import { cn } from "@/lib/utils"

const Dialog = AriaDialog

const sheetVariants = cva(
  [
    "fixed z-50 gap-4 bg-background shadow-lg transition ease-in-out",
    /* Entering */
    "data-[entering]:duration-500 data-[entering]:animate-in",
    /* Exiting */
    "data-[exiting]:duration-300  data-[exiting]:animate-out",
  ],
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[entering]:slide-in-from-top data-[exiting]:slide-out-to-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[entering]:slide-in-from-bottom data-[exiting]:slide-out-to-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[entering]:slide-in-from-left data-[exiting]:slide-out-to-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[entering]:slide-in-from-right data-[exiting]:slide-out-to-right sm:max-w-sm",
      },
    },
  }
)

const DialogTrigger = AriaDialogTrigger

const DialogOverlay = ({
  className,
  isDismissable = true,
  ...props
}: AriaModalOverlayProps) => (
  <AriaModalOverlay
    isDismissable={isDismissable}
    className={composeRenderProps(className, (className) =>
      cn(
        "fixed inset-0 z-50 bg-black/80",
        /* Exiting */
        "data-[exiting]:duration-300 data-[exiting]:animate-out data-[exiting]:fade-out-0",
        /* Entering */
        "data-[entering]:animate-in data-[entering]:fade-in-0",
        className
      )
    )}
    {...props}
  />
)

interface DialogContentProps
  extends Omit<React.ComponentProps<typeof AriaModal>, "children">,
    VariantProps<typeof sheetVariants> {
  children?: AriaDialogProps["children"]
  role?: AriaDialogProps["role"]
  closeButton?: boolean
}

const DialogContent = ({
  className,
  children,
  side,
  role,
  closeButton = true,
  ...props
}: DialogContentProps) => (
  <AriaModal
    className={composeRenderProps(className, (className) =>
      cn(
        side
          ? sheetVariants({ side, className: "h-full p-6" })
          : "fixed left-[50vw] top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 border bg-background p-6 shadow-lg duration-200 data-[exiting]:duration-300 data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[entering]:zoom-in-95 data-[exiting]:zoom-out-95 data-[entering]:slide-in-from-left-1/2 data-[entering]:slide-in-from-top-[48%] data-[exiting]:slide-out-to-left-1/2 data-[exiting]:slide-out-to-top-[48%] sm:rounded-lg md:w-full",
        className
      )
    )}
    {...props}
  >
    <AriaDialog
      role={role}
      className={cn(!side && "grid h-full gap-4", "h-full outline-none")}
    >
      {composeRenderProps(children, (children, renderProps) => (
        <>
          {children}
          {closeButton && (
            <AriaButton
              onPress={renderProps.close}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[disabled]:pointer-events-none data-[entering]:bg-accent data-[entering]:text-muted-foreground data-[hovered]:opacity-100 data-[focused]:outline-none data-[focused]:ring-2 data-[focused]:ring-ring data-[focused]:ring-offset-2"
            >
              <X className="size-4" />
              <span className="sr-only">Close</span>
            </AriaButton>
          )}
        </>
      ))}
    </AriaDialog>
  </AriaModal>
)

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)

const DialogTitle = ({ className, ...props }: AriaHeadingProps) => (
  <AriaHeading
    slot="title"
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
)

const DialogDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)

export {
  Dialog,
  DialogOverlay,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
}
export type { DialogContentProps }
