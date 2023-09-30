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
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className='mdx'>
      <Component components={customComponents} />
    </div>
  )
}
