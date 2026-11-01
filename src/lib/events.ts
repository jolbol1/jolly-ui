// Copy events used to be sent to Vercel Analytics. The site is now a static
// Cloudflare deployment without custom events, so these are just labels.
export type Event = {
  name:
    | "copy_npm_command"
    | "copy_usage_import_code"
    | "copy_usage_code"
    | "copy_primitive_code"
    | "copy_theme_code"
  properties?: Record<string, string | number | boolean | null>
}
