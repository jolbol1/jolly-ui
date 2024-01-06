import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// eslint-disable-next-line no-unused-vars
type ClassFunction<T> = (values: T) => string
type ClassValues<T> = (ClassValue | ClassFunction<T>)[]

// Helper function to allow functions to be input to be calculated with react-aria-components
export function cnv<T>(values: T, ...inputs: ClassValues<T>) {
  const processedInputs = inputs.map((input) => {
    if (typeof input === "function") {
      return input(values)
    }
    return input
  })

  return cn(processedInputs)
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}
