import { DesktopNav } from './desktop-nav'
import { MobileNav } from './mobile-nav'

const ROUTES = [
  {
    text: 'Components',
    url: '#',
  },
  {
    text: 'Docs',
    url: '#',
  },
  {
    text: 'About me',
    url: '#',
  },
]

export const SiteHeader = () => {
  return (
    <header className='supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur'>
      <div className='container mx-auto flex h-14 justify-center'>
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  )
}
