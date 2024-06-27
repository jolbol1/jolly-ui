import { ListBox, ListBoxItem } from "@/registry/default/ui/list-box"

export default function ListBoxLinksReplace() {
  return (
    <ListBox
      className={"max-h-[200px]"}
      aria-label="Links"
      selectionMode="multiple"
      selectionBehavior="replace"
    >
      <ListBoxItem href="https://adobe.com/" target="_blank">
        Adobe
      </ListBoxItem>
      <ListBoxItem href="https://apple.com/" target="_blank">
        Apple
      </ListBoxItem>
      <ListBoxItem href="https://google.com/" target="_blank">
        Google
      </ListBoxItem>
      <ListBoxItem href="https://microsoft.com/" target="_blank">
        Microsoft
      </ListBoxItem>
    </ListBox>
  )
}
