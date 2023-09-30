import { HTMLAttributes, useEffect, useState } from 'react'
import { CopyIcon } from '@radix-ui/react-icons'

import Button from '@/components/buttons/button'

interface CopyButtonProps extends HTMLAttributes<HTMLButtonElement> {
  value: string
  src?: string
}

export function CopyButton({ value, ...props }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  const copyContent = (value: string) => {
    navigator.clipboard.writeText(value)
    setHasCopied(true)
  }

  return (
    <Button variant='ghost' onClick={() => copyContent(value)} {...props}>
      <CopyIcon />
      <span className='ml-2'>{hasCopied ? 'Copied' : 'Copy'}</span>
    </Button>
  )
}
