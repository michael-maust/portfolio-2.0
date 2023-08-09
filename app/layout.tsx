import '@/styles/global.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PropsWithChildren, ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Michael Maust - Portfolio',
}

type MainProps = PropsWithChildren<{
  meta: ReactNode;
}>

export default function RootLayout({
  children,
  meta
}: MainProps) {
  return (
    <html lang="en">
      <head>
        <title>Next Layout Example</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
