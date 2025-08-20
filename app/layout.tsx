import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Manrope } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Future Teq Solution",
  description:
    "Professional technology services including software development, hardware solutions, web development, mobile apps, graphic design, and digital marketing.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/lo-light.png", sizes: "16x16", type: "image/png" },   // Favicon small tab
      { url: "/lo-light.png", sizes: "32x32", type: "image/png" },   // Retina/bookmarks
      { url: "/lo-light.png", sizes: "48x48", type: "image/png" },   // Windows tile
      { url: "/lo-light.png", sizes: "192x192", type: "image/png" }, // Android
      { url: "/lo-light.png", sizes: "512x512", type: "image/png" }, // PWA install
    ],
    shortcut: "/lo-light.png",
    apple: "/lo-light.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${manrope.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  )
}
