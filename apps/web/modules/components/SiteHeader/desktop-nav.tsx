'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

import { SITE_CONFIG } from '@/config/site'
import { cn } from '@/lib/utils'
import { Button } from '@/components/buttons/button'

const LINKS = [
  {
    name: 'Docs',
    url: '/docs',
  },
  {
    name: 'About',
    url: '/about',
  },
]

export const DesktopNav = () => {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const isDark = theme === 'dark'

  return (
    <div className='hidden w-full items-center justify-between md:flex'>
      <nav className='flex items-center gap-4'>
        <Link href='/' className='mr-4'>
          <span className='font-bold sm:inline-block'>
            <span className='mr-2 text-lg'>🪗</span>
            {SITE_CONFIG.name}
          </span>
        </Link>
        {LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            className={cn(
              'text-sm',
              'transition-colors hover:text-foreground/80',
              pathname === link.url ? 'text-foreground' : 'text-foreground/60'
            )}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <div>
        <Button
          icon={isDark ? MoonIcon : SunIcon}
          variant='icon'
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
        />
      </div>
    </div>
  )
}
