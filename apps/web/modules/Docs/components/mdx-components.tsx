import { ComponentPreview } from '@/modules/components/component-preview'
import { useMDXComponent } from 'next-contentlayer/hooks'

interface MdxProps {
  code: string
}

const customComponents = {
  ComponentPreview,
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className='mdx'>
      <Component components={customComponents} />
    </div>
  )
}
