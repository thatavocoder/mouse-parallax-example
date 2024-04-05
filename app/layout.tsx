import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Aashka Doshi',
  description:
    'Aashka Doshi is a software engineer based in Mumbai, India. She is passionate about building products that make a difference.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F3E7C9]`}>{children}</body>
    </html>
  )
}
