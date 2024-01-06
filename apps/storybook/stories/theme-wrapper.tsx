export const ThemeHandler = ({
  Main,
  NewYork,
  theme = "default",
}: {
  Main: JSX.Element
  NewYork: JSX.Element
  theme: string
}) => {
  return theme === "new-york" ? NewYork : Main
}
