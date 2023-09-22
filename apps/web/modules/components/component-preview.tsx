import { Suspense, useMemo, useState } from 'react'
import { COMPONENTS } from '@/components'

import Button from '@/components/buttons/button'

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
}

const VIEWS = {
  component: 'component',
  code: 'code',
}

export const ComponentPreview = ({ name, children }: ComponentPreviewProps) => {
  const Code = children as React.ReactElement

  const [view, setView] = useState(VIEWS.component)

  const Preview = useMemo(() => {
    const Component = COMPONENTS[name]?.component

    if (!Component) {
      return (
        <p className='text-muted-foreground text-sm'>Component not found</p>
      )
    }

    return <Component />
  }, [name])

  const codeString = useMemo(() => {
    if (
      typeof Code?.props['data-rehype-pretty-code-fragment'] !== 'undefined'
    ) {
      console.log(Code.props)
      const CodeSnippet = Code.props.children as React.ReactElement

      return (
        CodeSnippet?.props?.value || CodeSnippet?.props?.__rawString__ || null
      )
    }
  }, [Code])

  console.log(codeString)

  return (
    <div>
      <div className='flex justify-end'>
        <Button
          onClick={() =>
            setView(view === VIEWS.component ? VIEWS.code : VIEWS.component)
          }
        >
          {view === VIEWS.component ? 'Code' : 'Coomponent'}
        </Button>
      </div>
      {view === VIEWS.component ? (
        <div className='mt-2 flex h-96 items-center justify-center rounded-lg border-2 border-green-300 p-4'>
          <Suspense fallback='Suspense Fallback'>{Preview}</Suspense>
        </div>
      ) : (
        <div className='flex flex-col space-y-4'>
          <div className='w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto'>
            {Code}
          </div>
        </div>
      )}
    </div>
  )
}
