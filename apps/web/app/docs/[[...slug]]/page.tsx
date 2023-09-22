'use client'

import { notFound } from 'next/navigation'
import { Mdx } from '@/modules/Docs/components/mdx-components'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import { allDocs } from 'contentlayer/generated'

import { cn } from '@/lib/utils'

interface DocPageProps {
  params: {
    slug: string[]
  }
}
const getDocFromParams = ({ params }: DocPageProps) => {
  const slug = params.slug.join('/')

  const doc = allDocs.find((doc) => doc.slugAsParams === slug)

  if (!doc) {
    null
  }

  return doc
}

export default function Docs({ params }: DocPageProps) {
  const doc = getDocFromParams({ params })

  if (!doc) {
    notFound()
  }

  return (
    <div className='height-100 bg-white-2 min-h-screen'>
      <div className='mb-3gap-3'>
        <div className='mb-4 flex items-center space-x-1 text-sm text-green700'>
          <div className='truncate'>Docs</div>
          <ChevronRightIcon className='h-4 w-4' />
          <div className='font-semibold text-green500'>{doc.title}</div>
        </div>
        <div className='space-y-2 '>
          <h1 className={cn('scroll-m-20 text-4xl font-bold tracking-tight')}>
            {doc.title}
          </h1>
          {doc.description && (
            <p className='text-muted-foreground text-lg'>{doc.description}</p>
          )}
        </div>
        <div className='pb-12 pt-8'>
          <Mdx code={doc.body.code} />
        </div>
      </div>
    </div>
  )
}
