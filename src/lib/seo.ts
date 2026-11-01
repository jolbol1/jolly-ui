import { siteConfig } from "@/config/site"
import { absoluteUrl } from "@/lib/utils"

/** Page-level `<meta>` tags (replaces Next's `generateMetadata`). */
export function seo({
  title,
  description = siteConfig.description,
  path,
  type = "website",
}: {
  title?: string
  description?: string
  path?: string
  type?: "website" | "article"
}) {
  const fullTitle = title ? `${title} - ${siteConfig.name}` : siteConfig.name

  return [
    { title: fullTitle },
    { name: "description", content: description },
    { property: "og:type", content: type },
    { property: "og:locale", content: "en_US" },
    { property: "og:site_name", content: siteConfig.name },
    { property: "og:title", content: title ?? siteConfig.name },
    { property: "og:description", content: description },
    ...(path ? [{ property: "og:url", content: absoluteUrl(path) }] : []),
    { property: "og:image", content: siteConfig.ogImage },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: siteConfig.name },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title ?? siteConfig.name },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: siteConfig.ogImage },
    { name: "twitter:creator", content: "@jollyshopland" },
  ]
}
