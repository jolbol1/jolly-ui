// import { JetBrains_Mono as FontMono, Inter as FontSans } from "next/font/google"
import {
  JetBrains_Mono as FontMono,
  Inter,
  Outfit,
  Plus_Jakarta_Sans,
  Raleway,
} from "next/font/google"
// import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

// export const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// })
export const fontSans = GeistSans

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
})

export const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const fontOutfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

export const fontRaleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
})
