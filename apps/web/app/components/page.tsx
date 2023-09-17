'use client'

import { useState } from 'react'
import { useTheme } from 'next-themes'

import Button from '@/components/buttons/button'

// import Dialog from '@/components/dialog'

export default function Components() {
  const [variant, setVariant] = useState('default')
  const { theme, setTheme } = useTheme()
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      <div className='height-100 bg-white-2 flex min-h-screen flex-col items-center justify-center'>
        <div className='mb-3 flex items-center justify-center gap-2'>
          <Button>Primary</Button>
          <Button variant='outline'>Outline</Button>
          <Button variant='ghost'>Ghost</Button>
          <Button variant='destructive'>Destructive</Button>
          <Button colorScheme='blue'>Blue</Button>
        </div>
        <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          Button
        </Button>

        {/* <Dialog
          title='This is a Dialog'
          description="Make changes to your profile here. Click save when you're done."
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
        >
          <div className='flex flex-col'>
            <p className='text-center text-sm lg:text-base'>Dialog</p>
            <p className='text-center text-sm lg:text-base'>Dialog</p>
            <p className='text-center text-sm lg:text-base'>Dialog</p>
            <p className='text-center text-sm lg:text-base'>Dialog</p>
          </div>
        </Dialog> */}
      </div>
    </>
  )
}
