"use client"

import * as React from "react"
import { Cross2Icon } from "@radix-ui/react-icons"
import {
  Button,
  Dialog,
  DialogProps,
  DialogTrigger,
  Heading,
  HeadingProps,
  Modal,
  ModalOverlay,
  ModalOverlayProps,
} from "react-aria-components"

import { cn, cnv } from "@/lib/utils"

const _DialogTrigger = DialogTrigger

const _DialogOverlay = ({
  className,
  isDismissable = true,
  ...props
}: ModalOverlayProps) => (
  <ModalOverlay
    isDismissable={isDismissable}
    className={(values) =>
      cnv(
        values,
        "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[entering]:animate-in data-[exiting]:animate-out data-[exiting]:fade-out-0 data-[entering]:fade-in-0",
        className
      )
    }
    {...props}
  />
)

export interface DialogContentProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Modal>, "children"> {
  children?: DialogProps["children"]
  role?: DialogProps["role"]
  closeButton?: boolean
}

const DialogContent = ({
  className,
  children,
  role,
  closeButton = true,
  ...props
}: DialogContentProps) => (
  <Modal
    className={(values) =>
      cnv(
        values,
        "fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border bg-background p-6 shadow-lg duration-200 data-[entering]:animate-in data-[exiting]:animate-out data-[exiting]:fade-out-0 data-[entering]:fade-in-0 data-[exiting]:zoom-out-95 data-[entering]:zoom-in-95 data-[exiting]:slide-out-to-left-1/2 data-[exiting]:slide-out-to-top-[48%] data-[entering]:slide-in-from-left-1/2 data-[entering]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
        className
      )
    }
    {...props}
  >
    <Dialog role={role} className="grid h-full gap-4 outline-none">
      {(values) => (
        <>
          {typeof children === "function" ? children(values) : children}
          {closeButton && (
            <Button
              onPress={values.close}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[entering]:bg-accent data-[entering]:text-muted-foreground"
            >
              <Cross2Icon className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          )}
        </>
      )}
    </Dialog>
  </Modal>
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

const DialogTitle = ({ className, ...props }: HeadingProps) => (
  <Heading
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
)

export {
  _DialogOverlay as DialogOverlay,
  _DialogTrigger as DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
}
