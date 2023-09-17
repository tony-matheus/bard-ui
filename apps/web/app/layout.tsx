import '@/styles/globals.css'

import { Metadata } from 'next'

import { SITE_CONFIG } from '@/config/site'
import { fontSans } from '@/lib/fonts'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import { SiteHeader } from '@/components/page/site-header/site-header'

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
      <body className={fontSans.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <div className='flex min-h-screen flex-col'>
            <SiteHeader />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
