import '@/styles/globals.css'

import { Metadata } from 'next'

import { fontSans } from '@/lib/fonts'

import { SITE_CONFIG } from '../config/site'

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={fontSans.className}>{children}</body>
    </html>
  )
}
