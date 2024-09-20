import { NextFetchEvent, NextRequest, NextResponse } from "next/server"

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
}

const detectBot = (req: NextRequest) => {
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

const parse = (req: NextRequest) => {
  let domain = req.headers.get("host") as string
  // remove www. from domain and convert to lowercase
  domain = domain.replace("www.", "").toLowerCase()

  let path = req.nextUrl.pathname

  const searchParams = req.nextUrl.searchParams.toString()
  const searchParamsString = searchParams.length > 0 ? `?${searchParams}` : ""
  const fullPath = `${path}${searchParamsString}`

  // Here, we are using decodeURIComponent to handle foreign languages like Hebrew
  const key = decodeURIComponent(path.split("/")[1]) // key is the first part of the path (e.g. dub.sh/stats/github -> stats)
  const fullKey = decodeURIComponent(path.slice(1)) // fullKey is the full path without the first slash (to account for multi-level subpaths, e.g. d.to/github/repo -> github/repo)

  return { domain, path, fullPath, key, fullKey, searchParamsString }
}

export function middleware(request: NextRequest) {
  console.log("RUNNING MIDDLEWARE", request.nextUrl.pathname)

  if (request.nextUrl.pathname != "/default/date-picker") {
    console.log("IGNORE")
    return NextResponse.next()
  }
  const userAgent = request.headers.get("user-agent") || ""
  const isNode = /node-fetch/i.test(userAgent)
  console.log(userAgent)
  const isBot = detectBot(request)

  if (isBot) {
    console.log(isBot)
    return NextResponse.rewrite(
      new URL(
        `https://jolly-ui-git-og-jolbol1-s-team.vercel.app/og/date-picker`
      )
    )
  }

  if (!isNode) {
    return NextResponse.redirect(
      new URL("/docs/components/date-picker", request.url)
    )
  }
  return NextResponse.redirect(
    new URL("/r/styles/default/date-picker.json", request.url)
  )
}
