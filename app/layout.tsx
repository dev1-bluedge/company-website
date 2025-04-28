import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, Lexend } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Professional Company Showcase",
  description: "Showcase your company with a professional website",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable} scroll-smooth`}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  )
}
