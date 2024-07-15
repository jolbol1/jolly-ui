import { JollyMeter } from "@/registry/new-york/ui/meter"

export default function MeterReusable() {
  return <JollyMeter className="w-3/5" label="Storage space" value={80} />
}
