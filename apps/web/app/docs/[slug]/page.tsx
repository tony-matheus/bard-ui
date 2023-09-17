'use client'

import { COMPONENTS } from '@/modules/Docs/constants'
import { ChevronRightIcon } from '@radix-ui/react-icons'

import { cn } from '@/lib/utils'

interface DocPageProps {
  params: {
    slug: string
  }
}
function getComponentFromParams(slug: string) {
  const component = COMPONENTS.find((component) => component.slug === slug)

  if (!component) {
    return null
  }

  return component
}

export default function Components({ params }: DocPageProps) {
  const component = getComponentFromParams(params.slug)

  if (!component) {
    return <>Not Found</>
  }

  return (
    <div className='height-100 bg-white-2 min-h-screen'>
      <div className='mb-3gap-3'>
        <div className='mb-4 flex items-center space-x-1 text-sm text-green700'>
          <div className='truncate'>Docs</div>
          <ChevronRightIcon className='h-4 w-4' />
          <div className='font-semibold text-green500'>{component.title}</div>
        </div>
        <div className='space-y-2 '>
          <h1 className={cn('scroll-m-20 text-4xl font-bold tracking-tight')}>
            {component.title}
          </h1>
          {component.description && (
            <p className='text-muted-foreground text-lg'>
              {component.description}
            </p>
          )}
        </div>
        <div className='mt-2 flex h-96 items-center justify-center rounded-lg border-2 border-green-300 p-4'>
          <div>{component.component()}</div>
        </div>
      </div>
    </div>
  )
}
