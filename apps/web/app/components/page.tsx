'use client'

import { useState } from 'react'
import { useTheme } from 'next-themes'

import Button from '@/components/button'
import Dialog from '@/components/dialog'

export default function Components() {
  const { setTheme } = useTheme()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  return (
    <>
      <div className='height-100 bg-white-2 flex min-h-screen items-center justify-center'>
        <Button>Button</Button>

        <Dialog
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
        </Dialog>
      </div>
    </>
  )
}
