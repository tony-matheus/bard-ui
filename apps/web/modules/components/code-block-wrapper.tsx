'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  expandButtonTitle?: string
}

export function CodeBlockWrapper({
  className,
  children,
  ...props
}: CodeBlockProps) {
  return (
    <div className={cn('relative overflow-hidden', className)} {...props}>
      <div
        className={cn(
          '[&_pre]:max-h-[650px [&_pre]:my-0 [&_pre]:pb-[100px]',
          '[&_pre]:overflow-auto]'
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          'absolute flex items-center justify-center bg-gradient-to-b from-slate-900/30 to-slate-900/90 p-2',
          'inset-x-0 bottom-3 h-12'
        )}
      />
    </div>
  )
}
