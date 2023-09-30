'use client'

import * as React from 'react'
import { CodeBlockWrapper } from '@/modules/components/code-block-wrapper'

import { cn } from '@/lib/utils'

interface ComponentSourceProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
}

export function ComponentSource({ children, className }: ComponentSourceProps) {
  return (
    <CodeBlockWrapper
      expandButtonTitle='View Primitive'
      className={cn('my-6 overflow-hidden rounded-md', className)}
    >
      {children}
    </CodeBlockWrapper>
  )
}
