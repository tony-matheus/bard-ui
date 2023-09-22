'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

type SidebarNavItem = {
  title: string
  url: string
}

export interface DocsSidebarNavProps {
  items: SidebarNavItem[]
}

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
  const pathname = usePathname()

  return items.length ? (
    <div className='w-full'>
      <div className={'pb-4 text-sm'}>
        <h4 className='mb-1 rounded-md px-2 py-1  font-semibold'>Components</h4>
        {items.map((item, index) => (
          <DocsSidebarNavItem key={index} item={item} pathname={pathname} />
        ))}
      </div>
    </div>
  ) : null
}

interface DocsSidebarNavItemProps {
  item: SidebarNavItem
  pathname: string | null
}

export function DocsSidebarNavItem({
  item,
  pathname,
}: DocsSidebarNavItemProps) {
  const isSelected = item.url === pathname

  return (
    <Link
      href={item.url}
      className={cn(
        'group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline',
        isSelected
          ? 'text-foreground cursor-not-allowed'
          : 'text-muted-foreground opacity-60'
      )}
    >
      {item.title}
    </Link>
  )
}
