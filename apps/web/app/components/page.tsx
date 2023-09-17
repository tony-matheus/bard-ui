'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { Input } from '@/components/inputs/input'
import { Button } from '@/components/buttons/button'


export default function Components() {
  const { theme, setTheme } = useTheme()

  const isDark = theme === 'dark'

  return (
    <>
      <div className='height-100 bg-white-2 flex min-h-screen flex-col items-center justify-center'>
        <div className='mb-3 flex flex-col items-center justify-center gap-3'>
          <Input type='text' placeholder='Your text here' />

          <Button
            icon={isDark ? SunIcon : MoonIcon}
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className='w-full'
          >
            Switch Theme
          </Button>
        </div>

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
