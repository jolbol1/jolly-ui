import { Link } from "@/registry/default/ui/link"

export function LinkVariants() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link href="/docs/components/link">Unstyled</Link>
        <Link href="/docs/components/link" variant="default">
          Default
        </Link>
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
      Disabled
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link isDisabled href="/docs/components/link">
          Unstyled
        </Link>
        <Link isDisabled href="/docs/components/link" variant="default">
          Default
        </Link>
        <Link isDisabled variant="destructive" href="/docs/components/link">
          Destructive
        </Link>
        <Link isDisabled variant="ghost" href="/docs/components/link">
          Ghost
        </Link>
        <Link isDisabled variant="link" href="/docs/components/link">
          Link
        </Link>
        <Link isDisabled variant="outline" href="/docs/components/link">
          Outline
        </Link>
        <Link isDisabled variant="secondary" href="/docs/components/link">
          Secondary
        </Link>
      </div>
    </div>
  )
}
export default LinkVariants
