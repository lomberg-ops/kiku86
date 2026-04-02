import type { Metadata } from 'next'
import { Inter, Playfair_Display, Noto_Serif_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const notoSerifJP = Noto_Serif_JP({ subsets: ['latin'], variable: '--font-noto-serif-jp', weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Kiku86 — Sushi & Japanese Dishes in Helsinki',
  description: 'Kiku86 is a Japanese restaurant in Helsinki serving sushi, small plates, and drinks in a relaxed setting. Located at Maneesikatu 4a, 00170 Helsinki.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${notoSerifJP.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
