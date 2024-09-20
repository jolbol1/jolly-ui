import { redirect } from "next/navigation"
import { NextRequest, NextResponse } from "next/server"

export const detectBot = (req: NextRequest) => {
  const url = req.nextUrl
  if (url.searchParams.get("bot")) return true
  const ua = req.headers.get("User-Agent")
  if (ua) {
    /* Note:
     * - bot is for most bots & crawlers
     * - ChatGPT is for ChatGPT
     * - facebookexternalhit is for Facebook crawler
     * - WhatsApp is for WhatsApp crawler
     * - MetaInspector is for https://metatags.io/
     * - Go-http-client/1.1 is a bot: https://user-agents.net/string/go-http-client-1-1
     * - iframely is for https://iframely.com/docs/about (used by Notion, Linear)
     */
    return /bot|chatgpt|facebookexternalhit|WhatsApp|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|MetaInspector|Go-http-client|iframely/i.test(
      ua
    )
  }
  return false
}

export async function GET(request: NextRequest): Promise<Response> {
  const userAgent = request.headers.get("user-agent") || ""
  const isBrowser = /Mozilla|Chrome|Safari|Firefox/i.test(userAgent)

  const isBot = detectBot(request)

  if (isBot) {
    return NextResponse.rewrite(new URL(`/og/date-picker`))
  }

  if (isBrowser) {
    return NextResponse.redirect("/docs/components/date-picker")
  }
  return NextResponse.redirect("/r/styles/default/date-picker.json")
}
