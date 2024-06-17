# JollyUI Code Styling Guidelines

## Naming Conventions

### Aliasing Aria Components

To avoid naming collisions between JollyUI components and React Aria Components, use the alias Aria(Component) when importing React Aria Components.

#### Example

##### Good:

```tsx
import { Button as AriaButton } from "@react-aria/button"

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return <AriaButton {...props} />
}
```

##### Bad:

```tsx
import { Button as _Button } from "@react-aria/button"

const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return <_Button {...props} />
}
```

## Styling

### Using Data Attributes for Stateful Styles

Components often support multiple UI states (e.g., pressed, hovered, selected, etc.). React Aria Components expose these states using data attributes, which you can target in CSS selectors. They function similarly to custom CSS pseudo-classes.

In order to ensure high-quality interactions across browsers and devices, React Aria Components include states such as data-hovered and data-pressed. These are similar to CSS pseudo-classes such as :hover and :active, but they work consistently between mouse, touch, and keyboard modalities. You can read more about this in our blog post series and our Interactions overview.

All states supported by each component are listed in the Styling section of their documentation.

#### Example

##### Good:

```tsx
className = "data-[hovered]:bg-red-600"
```

##### Bad:

```tsx
className = "hover:bg-red-600"
```

#### Reasoning for Using Data Attributes

The decision to use data attributes over features such as render props was influenced by several factors:

- Migration and Compatibility: The library is designed with the migration and compatibility of shadcn in mind. Using data attributes makes migration easier for users and is more understandable.
- Reduced Complexity: The renderProps method would require a lot more cva styles for each component, adding unnecessary complexity.
- Minimal Tailwind Configuration: Although React Aria provides a [Tailwind plugin](https://react-spectrum.adobe.com/react-aria/styling.html#plugin) that converts data-[selected]:bg-red-600 to selected:bg-red-600, I chose not to use this to keep styles easily copy-pasteable with minimal Tailwind configuration.
- Debugging: Being able to see the data attribute and its selector in the rendered className helps with debugging. If I used render props, it would only show the computed className.

### Supporting className renderProps functions

To ensure all className props that support renderProps can be styled with either a string or a function, we can use the `composeRenderProps` helper. Use the following pattern:

#### Example

##### Good:

```tsx
const Popover = ({ className, offset = 4, ...props }: PopoverProps) => (
  <AriaPopover
    offset={offset}
    className={composeRenderProps(className, (className) =>
      cn("z-50 w-72", className)
    )}
    {...props}
  />
)
```

##### Bad:

```tsx
const Popover = ({ className, offset = 4, ...props }: PopoverProps) => (
  <AriaPopover
    offset={offset}
    className={(values) => cn("z-50 w-72", className)}
    {...props}
  />
)
```

By using `typeof className === "function" ? className(values) : className`, you can handle both string and function types for the className prop, making the component more flexible and easier to use with renderProps. The only issue in this approach is that users using renderProps should be aware that as I use data attributes for styling, they will have to override these as well.

### Organizing Data Attributes in the cn Function

To maintain readability and organization in your components, ensure data attributes are clearly laid out in their own sections within the cn function, with appropriate comments. This helps in understanding the styling logic and makes the code more maintainable.

#### Example

##### Good:

```tsx
const Popover = ({ className, offset = 4, ...props }: PopoverProps) => (
  <AriaPopover
    offset={offset}
    className={composeRenderProps(className, (className) =>
      cn(
        "z-50 w-72 overflow-y-auto rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
        /* Entering */
        "data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:fade-in-0",
        /* Exiting */
        "data-[exiting]:fade-out-0 data-[exiting]:zoom-out-95",
        /* Placement */
        "data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2",
        className
      )
    )}
    {...props}
  />
)
```

##### Bad:

```tsx
const Popover = ({ className, offset = 4, ...props }: PopoverProps) => (
  <AriaPopover
    offset={offset}
    className={composeRenderProps(className, (className) =>
      cn(
        "z-50 w-72 overflow-y-auto rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[entering]:animate-in data-[exiting]:animate-out data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2",
        className
      )
    )}
    {...props}
  />
)
```

By organizing data attributes in their own sections with comments, the code becomes easier to read and maintain, and the purpose of each styling rule is more apparent.

## Component Composition

### Supporting Children as RenderProp Functions

Where possible, ensure children can be renderProp functions as well, using the `composeRenderProps` helper. This allows greater flexibility and control over component rendering, enabling users to dynamically style or modify components based on their states.

#### Example

##### Good:

```tsx
const Checkbox = ({ className, children, ...props }: CheckboxProps) => (
  <AriaCheckbox {...props}>
    {composeRenderProps(children, (children, renderProps) => (
      <>
        <div>
          {renderProps.isIndeterminate ? (
            <Minus />
          ) : renderProps.isSelected ? (
            <Check />
          ) : null}
        </div>
        {children}
      </>
    ))}
  </Checkbox>
)
```

##### Bad

```tsx
const Checkbox = ({ className, children, ...props }: CheckboxProps) => (
  <AriaCheckbox {...props}>
    {(renderProps) => (
      <>
        <div>
          {renderProps.isIndeterminate ? (
            <Minus />
          ) : renderProps.isSelected ? (
            <Check  />
          ) : null}
        </div>
        {children}
      </>
    )}
  </Checkbox>
)
```

### Do Not Use forwardRef

Forward ref is being deprecated, and in React 19 you can pass ref as a prop. Previously, all components were wrapped in forwardRef like shadcn, but with this upcoming change, forwardRef is no longer necessary. Going forward, you will be able to pass ref directly as a prop. Refer to the [React 19 blog post](https://react.dev/blog/2024/04/25/react-19#ref-as-a-prop) for more details.

If you have an advances use-case for ref, then you can always add it since the code is in your codebase.

#### Example

##### Good:

```tsx
const Button = ({ className, ...props }) => (
  <AriaButton className={className} {...props} />
)
```

##### Bad:

```tsx
const Button = forwardRef(({ className, ...props }, ref) => (
  <AriaButton ref={ref} className={className} {...props} />
))
```

By adopting these practices, JollyUI components will be more flexible, easier to maintain, and ready for future updates in React.

### Handle All Exports at the End of the File

To maintain a clear and organized structure, all export statements should be placed at the end of the file. This avoids inline exports and keeps the codebase consistent.

#### Example

##### Good:

```tsx

const Button = ({ className, ...props }: ButtonProps) => (
  <AriaButton className={className} {...props} />
)

// Export at the end
export { Button }
export type { ButtonProps }
```

##### Bad:

```tsx
export const Button = ({ className, ...props }: ButtonProps) => (
  <AriaButton className={className} {...props} />
)
```

By placing all export statements at the end of the file, the code is easier to read and maintain, and it ensures a consistent style throughout the codebase.
