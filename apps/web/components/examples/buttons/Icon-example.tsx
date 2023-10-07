import { BellIcon } from '@radix-ui/react-icons'

import Button from '@/components/primitives/button'

export function IconButtonExample() {
  return (
    <Button
      variant='icon'
      icon={BellIcon}
      iconPosition='right' // default 'left'
    />
  )
}
