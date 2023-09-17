import { DesktopNav } from './desktop-nav'
import { MobileNav } from './mobile-nav'

export const SiteHeader = () => {
  return (
    <header className='supports-backdrop-blur:bg-green300/30 sticky top-0 z-50 w-full border-b border-green500/60 bg-background/90 backdrop-blur'>
      <div className='container mx-auto flex h-14 justify-center'>
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  )
}
