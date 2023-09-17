import { MoonIcon } from '@radix-ui/react-icons'

import { Button } from '@/components/buttons/button'
import { Input } from '@/components/inputs/input'

export const COMPONENTS = [
  {
    title: 'Button',
    slug: 'button',
    description:
      'A basic button component for you to copy, paste and make your own components',
    component: () => (
      <Button
        icon={MoonIcon}
        onClick={() => alert('button clicked')}
        className='w-full'
      >
        Click me
      </Button>
    ),
  },
  {
    title: 'Input',
    slug: 'input',
    description:
      'A basic Input component for you to copy, paste and make your own components',
    component: () => <Input type='text' placeholder='Your text here' />,
  },
]
