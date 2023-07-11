"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { ParallaxProvider } from 'react-scroll-parallax'
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <ParallaxProvider>

    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ParallaxProvider>
  )
}
