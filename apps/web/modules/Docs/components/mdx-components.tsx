import { ComponentExample } from '@/modules/components/component-example'
import { ComponentPreview } from '@/modules/components/component-preview'
import { ComponentSource } from '@/modules/components/component-source'
import { CopyButton } from '@/modules/components/copy-button'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { NpmCommands } from '@/types/unist'
import { cn } from '@/lib/utils'
import { examples } from '@/components/examples'

interface MdxProps {
  code: string
}

const customComponents = {
  ComponentExample,
  ComponentPreview,
  ComponentSource,
  ...examples,
  pre: ({
    className,
    __rawString__,
    __npmCommand__,
    __withMeta__,
    __src__,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & {
    __rawString__?: string
    __withMeta__?: boolean
    __src__?: string
  } & NpmCommands) => {
    return (
      <>
        <pre
          className={cn(
            'mt-6 mb-4 overflow-x-auto rounded-lg border border-slate-900 py-4 px-2 dark:border-slate-700',
            className
          )}
          {...props}
        />
        {__rawString__ && !__npmCommand__ && (
          <CopyButton
            value={__rawString__}
            src={__src__}
            className={cn(
              'absolute top-4 right-4 border-none text-slate-300 opacity-50 hover:bg-transparent hover:opacity-100',
              __withMeta__ && 'top-20'
            )}
          />
        )}
      </>
    )
  },
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        'relative rounded bg-slate-100 py-[0.2rem] px-[0.3rem] font-mono text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400',
        className
      )}
      {...props}
    />
  ),
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        'mt-2 scroll-m-20 text-4xl font-bold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        'mt-12 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight first:mt-0 dark:border-b-slate-700',
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        'mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn(
        'font-medium text-slate-900 underline underline-offset-4 dark:text-slate-50',
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={cn('mt-2', className)} {...props} />
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr
      className='my-4 border-slate-200 dark:border-slate-700 md:my-8'
      {...props}
    />
  ),
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className='mdx'>
      <Component components={customComponents} />
    </div>
  )
}
