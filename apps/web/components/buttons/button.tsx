'use client'

import {
  ButtonHTMLAttributes,
  ComponentType,
  forwardRef,
} from 'react'
import { ReloadIcon } from '@radix-ui/react-icons'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'text-md disable:cursor-not-allowed inline-flex items-center justify-center rounded-lg border-2  font-semibold ring-offset-primary transition-colors  focus-visible:outline-none focus-visible:ring-2  disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'border-transparent bg-primary text-primary-foreground shadow-primary hover:bg-primary-hover active:border-2 active:border-primary active:shadow-primary-active disabled:bg-primary',
        secondary:
          'active:shadow-secondary-active border-transparent bg-secondary text-secondary-foreground shadow-secondary hover:bg-secondary-hover active:border-2 active:border-secondary disabled:bg-secondary',
        ghost: 'hover:border-tra border-transparent hover:bg-primary/70',
        destructive:
          'active:shadow-destructive-active border-transparent bg-destructive text-destructive-foreground shadow-destructive hover:bg-destructive-hover active:border-2 active:border-destructive disabled:bg-destructive',
        icon: 'w-10 px-0 hover:bg-white/20',
        transparent:
          'border-transparent bg-transparent hover:border-transparent hover:bg-transparent active:bg-transparent',
      },
      size: {
        small: 'px-3 py-1',
        medium: 'px-4 py-2',
        large: 'px-8 py-2',
        icon: 'w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: ComponentType<{ className?: string }>
  iconPosition?: 'left' | 'right'
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      size,
      className,
      icon: Icon,
      disabled,
      iconPosition = 'left',
      isLoading = false,
      children,
      ...restProps
    },
    ref
  ) => {
    return (
      <button
        className={cn(
          buttonVariants({
            variant,
            size,
            className,
          })
        )}
        disabled={isLoading || disabled}
        ref={ref}
        {...restProps}
      >
        {Icon && iconPosition === 'left' ? (
          <span className={children ? 'mr-2' : 'mr-0'}>
            {isLoading ? <ReloadIcon className='animate-spin' /> : <Icon />}
          </span>
        ) : null}

        {children}

        {Icon && iconPosition === 'right' ? (
          <span className={children ? 'ml-2' : 'ml-0'}>
            {isLoading ? <ReloadIcon className='animate-spin' /> : <Icon />}
          </span>
        ) : null}
        {isLoading ? <ReloadIcon className='ml-2 animate-spin' /> : null}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
