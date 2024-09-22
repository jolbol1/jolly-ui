import { getAllBlockIds } from "@/lib/blocks"
import { BlockDisplay } from "@/components/block-display"

export default async function BlocksPage() {
  const blocks = (await getAllBlockIds()).filter(
    (name) =>
      !name.startsWith("chart-") &&
      !name.startsWith("sidebar-01") &&
      !name.startsWith("login-01")
  )

  return (
    <div className="gap-3 md:flex md:flex-row-reverse md:items-start">
      <div className="grid flex-1 gap-24 lg:gap-48">
        {blocks.map((name, index) => (
          <BlockDisplay key={`${name}-${index}`} name={name} />
        ))}
      </div>
    </div>
  )
}
