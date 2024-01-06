import { Link } from "@/registry/new-york/ui/link"

export function LinkVariants() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Link href="/docs/components/link">Link</Link>
      <Link variant="destructive" href="/docs/components/link">
        Destructive
      </Link>
      <Link variant="ghost" href="/docs/components/link">
        Ghost
      </Link>
      <Link variant="link" href="/docs/components/link">
        Link
      </Link>
      <Link variant="outline" href="/docs/components/link">
        Outline
      </Link>
      <Link variant="secondary" href="/docs/components/link">
        Secondary
      </Link>
    </div>
  )
}
export default LinkVariants
