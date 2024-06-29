import { ListBox, ListBoxItem } from "@/registry/new-york/ui/list-box"

export default function ListBoxDisabledKeys() {
  let options = [
    { id: 1, name: "Aardvark" },
    { id: 2, name: "Cat" },
    { id: 3, name: "Dog" },
    { id: 4, name: "Kangaroo" },
    { id: 5, name: "Koala" },
    { id: 6, name: "Penguin" },
    { id: 7, name: "Snake" },
    { id: 8, name: "Turtle" },
    { id: 9, name: "Wombat" },
  ]

  return (
    <ListBox
      className={"max-h-[200px]"}
      aria-label="Animals with disabledKeys"
      items={options}
      selectionMode="single"
      disabledKeys={[4, 6]}
    >
      {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
    </ListBox>
  )
}
