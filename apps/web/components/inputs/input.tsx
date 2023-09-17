import { ComponentType, forwardRef, InputHTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ComponentType<{ className?: string }>
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon: Icon, ...restProps }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          [
            'border-tra border-2',
            'flex',
            // 'h-10',
            'w-full',
            'rounded-lg',
            'px-4 py-2',
            'shadow-input',
            'bg-transparent',
            'file:border-0 file:bg-transparent file:text-sm file:font-medium',
            'placeholder:text-gray-400',
            'ease delay 500 transition-all',
            'focus-visible:outline-none',
            'focus-visible:ring-offset-green500',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'hover:border-green500 hover:shadow-input-hover',
            'active:border-green500 active:shadow-input-hover',
            'focus-visible:border-green500 focus-visible:shadow-input-hover',
          ],
          className
        )}
        {...restProps}
      />
    )
  }
)

Input.displayName = 'Input'

export { Input }
