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
      { url: "/log1.png", sizes: "16x16", type: "image/png" },   // favicon tab
      { url: "/log1.png", sizes: "32x32", type: "image/png" },   // for retina tab / bookmarks
      { url: "/log1.png", sizes: "48x48", type: "image/png" },   // Windows tile / alt usage
      { url: "/log1.png", sizes: "192x192", type: "image/png" }, // Android
      { url: "/log1.png", sizes: "512x512", type: "image/png" }, // PWA install
    ],
    shortcut: "/log1.png",
    apple: "/log1.png", // iOS home screen
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${manrope.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
