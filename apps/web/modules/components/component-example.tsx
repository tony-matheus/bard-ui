'use client'

import * as React from 'react'
import { CodeIcon, Component1Icon } from '@radix-ui/react-icons'

import { cn } from '@/lib/utils'
import Button from '@/components/primitives/button'

import { CopyButton } from './copy-button'

interface ComponentExampleProps extends React.HTMLAttributes<HTMLDivElement> {
  extractClassname?: boolean
  extractedClassNames?: string
}

export function ComponentExample({
  children,
  className,
  ...props
}: ComponentExampleProps) {
  const [showCode, setShowCode] = React.useState(false)

  const [Example, Code, ...Children] = React.Children.toArray(
    children
  ) as React.ReactElement[]

  const codeString = React.useMemo(() => {
    if (
      typeof Code?.props['data-rehype-pretty-code-fragment'] !== 'undefined'
    ) {
      const CodeSnippet = Code.props.children as React.ReactElement

      return (
        CodeSnippet?.props?.value || CodeSnippet?.props?.__rawString__ || null
      )
    }
  }, [Code])

  return (
    <div
      className={cn('group relative my-4 flex flex-col space-y-2', className)}
      {...props}
    >
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Button
            value='preview'
            variant={showCode ? 'outline' : 'primary'}
            onClick={() => setShowCode(false)}
            icon={Component1Icon}
          >
            Preview
          </Button>
          <Button
            value='code'
            variant={showCode ? 'primary' : 'outline'}
            onClick={() => setShowCode(true)}
            icon={CodeIcon}
          >
            Code
          </Button>
        </div>
        {codeString && <CopyButton value={codeString} />}
      </div>
      {showCode ? (
        <div className='flex flex-col space-y-4'>
          <div className='w-full rounded-md [&_button]:hidden [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto'>
            {Code}
          </div>
          {Children && (
            <div className='rounded-md [&_button]:hidden [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto'>
              {Children}
            </div>
          )}
        </div>
      ) : (
        <div className='mt-2 rounded-md border border-slate-200 p-6 dark:border-slate-700'>
          <div className='flex min-h-[350px] items-center justify-center p-10 '>
            {Example}
          </div>
        </div>
      )}
    </div>
  )
}
