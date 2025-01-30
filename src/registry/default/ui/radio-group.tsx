"use client"

import { Circle } from "lucide-react"
import {
  Radio as AriaRadio,
  RadioGroup as AriaRadioGroup,
  RadioGroupProps as AriaRadioGroupProps,
  RadioProps as AriaRadioProps,
  ValidationResult as AriaValidationResult,
  composeRenderProps,
  Text,
} from "react-aria-components"

import { cn } from "@/lib/utils"

import { FieldError, Label, labelVariants } from "./field"

const RadioGroup = ({ className, ...props }: AriaRadioGroupProps) => {
  return (
    <AriaRadioGroup
      className={composeRenderProps(className, (className, renderProps) =>
        cn(
          "group/radiogroup flex flex-col flex-wrap gap-2",
          renderProps.orientation === "horizontal" && "flex-row items-center",
          className
        )
      )}
      {...props}
    />
  )
}

const Radio = ({ className, children, ...props }: AriaRadioProps) => {
  return (
    <AriaRadio
      className={composeRenderProps(className, (className) =>
        cn(
          "group/radio flex items-center gap-x-2",
          /* Disabled */
          "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70",
          labelVariants,
          className
        )
      )}
      {...props}
    >
      {composeRenderProps(children, (children, renderProps) => (
        <>
          <span
            className={cn(
              "jolly-Radio flex aspect-square size-4 items-center justify-center rounded-full border border-primary text-primary ring-offset-background",
              /* Focus */
              "group-data-[focused]/radio:outline-none",
              /* Focus Visible */
              "group-data-[focus-visible]/radio:ring-2 group-data-[focus-visible]/radio:ring-ring group-data-[focus-visible]/radio:ring-offset-2",
              /* Disabled */
              "group-data-[disabled]/radio:cursor-not-allowed group-data-[disabled]/radio:opacity-50",
              /* Invalid */
              "group-data-[invalid]/radio:border-destructive"
            )}
          >
            {renderProps.isSelected && (
              <Circle className="size-2.5 fill-current text-current" />
            )}
          </span>
          {children}
        </>
      ))}
    </AriaRadio>
  )
}

interface JollyRadioGroupProps extends AriaRadioGroupProps {
  label?: string
  description?: string
  errorMessage?: string | ((validation: AriaValidationResult) => string)
}

function JollyRadioGroup({
  label,
  description,
  className,
  errorMessage,
  children,
  ...props
}: JollyRadioGroupProps) {
  return (
    <RadioGroup
      className={composeRenderProps(className, (className) =>
        cn("group/radiogroup flex-col items-start", className)
      )}
      {...props}
    >
      {composeRenderProps(children, (children) => (
        <>
          <Label>{label}</Label>
          <div className="flex flex-col flex-wrap gap-2 group-data-[orientation=horizontal]/radiogroup:flex-row">
            {children}
          </div>
          {description && (
            <Text slot="description" className="text-sm text-muted-foreground">
              {description}
            </Text>
          )}
          <FieldError>{errorMessage}</FieldError>
        </>
      ))}
    </RadioGroup>
  )
}

export { RadioGroup, Radio, JollyRadioGroup }
export type { JollyRadioGroupProps }
