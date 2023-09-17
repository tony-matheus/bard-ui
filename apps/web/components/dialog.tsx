// 'use client'

// import {
//   ComponentPropsWithoutRef,
//   ElementRef,
//   forwardRef,
//   HTMLAttributes,
//   ReactNode,
// } from 'react'
// import * as DialogPrimitive from '@radix-ui/react-dialog'
// import { Cross1Icon } from '@radix-ui/react-icons'
// import { clsx } from 'clsx'
// import { cn } from '@/lib/utils'

// export const Root = DialogPrimitive.Root
// export const Trigger = DialogPrimitive.Trigger

// export const Portal = ({
//   className,
//   ...restProps
// }: DialogPrimitive.DialogPortalProps) => (
//   <DialogPrimitive.Portal className={cn(className)} {...restProps} />
// )
// Portal.displayName = 'Dialog Portal'

// export const Overlay = forwardRef<
//   ElementRef<typeof DialogPrimitive.Overlay>,
//   ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
// >(({ className, ...restProps }, ref) => (
//   <DialogPrimitive.Overlay
//     ref={ref}
//     className={cn(
//       clsx(
//         'data-[state=open]:animate-in',
//         'data-[state=closed]:animate-out',
//         'data-[state=closed]:fade-out-0',
//         'data-[state=open]:fade-in-0',
//         'fixed',
//         'bg-background/80',
//         'inset-0',
//         'z-50',
//         'backdrop-blur-sm'
//       ),
//       className
//     )}
//     {...restProps}
//   />
// ))
// Overlay.displayName = 'DialogOverlay'

// export const Content = forwardRef<
//   ElementRef<typeof DialogPrimitive.Content>,
//   ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
// >(({ className, ...restProps }, ref) => (
//   <DialogPrimitive.Content
//     ref={ref}
//     className={cn(
//       [
//         'data-[state=open]:animate-in',
//         'data-[state=closed]:animate-out',
//         'data-[state=closed]:fade-out-0',
//         'data-[state=open]:fade-in-0',
//         'data-[state=closed]:zoom-out-95',
//         'data-[state=open]:zoom-in-95',
//         'data-[state=closed]:slide-out-to-left-1/2',
//         'data-[state=closed]:slide-out-to-top-[48%]',
//         'data-[state=open]:slide-in-from-left-1/2',
//         'data-[state=open]:slide-in-from-top-[48%]',
//         'duration-200',
//       ],
//       'border',
//       'p-6',
//       'bg-sand-1',
//       'fixed',
//       'left-[50%]',
//       'right-[50%]',
//       'top-[50%]',
//       'z-50',
//       'translate-x-[-50%]',
//       'translate-y-[-50%]',
//       ['w-full', 'md:w-full', 'max-w-lg'],
//       ['shadow-lg', 'sm:rounded-lg'],
//       className
//     )}
//     {...restProps}
//   />
// ))
// Content.displayName = 'Dialog Content'

// export const Header = ({
//   className,
//   ...props
// }: HTMLAttributes<HTMLDivElement>) => (
//   <div
//     className={cn(
//       'flex',
//       'flex-col',
//       'space-y-1.5',
//       'text-center',
//       'sm:text-left',
//       className
//     )}
//     {...props}
//   />
// )
// Header.displayName = 'Dialog Header'

// export const Footer = ({
//   className,
//   ...props
// }: HTMLAttributes<HTMLDivElement>) => (
//   <div
//     className={cn(
//       'flex',
//       'flex-col-reverse',
//       'sm:flex-row',
//       'sm:justify-end',
//       'sm:space-x-2',
//       className
//     )}
//     {...props}
//   />
// )
// Footer.displayName = 'Dialog Footer'

// export const Title = forwardRef<
//   ElementRef<typeof DialogPrimitive.Title>,
//   ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
// >(({ className, ...props }, ref) => (
//   <DialogPrimitive.Title
//     ref={ref}
//     className={cn(
//       'text-lg',
//       'font-semibold',
//       'leading-none',
//       'tracking-tight',
//       className
//     )}
//     {...props}
//   />
// ))
// Title.displayName = DialogPrimitive.Title.displayName

// export const Description = forwardRef<
//   ElementRef<typeof DialogPrimitive.Description>,
//   ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
// >(({ className, ...props }, ref) => (
//   <DialogPrimitive.Description
//     ref={ref}
//     className={cn('text-gray-10', 'text-sm', 'my-1', 'w-full', className)}
//     {...props}
//   />
// ))
// Description.displayName = 'Dialog Description'

// export const Close = forwardRef<
//   ElementRef<typeof DialogPrimitive.Close>,
//   ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
// >(({ className, ...props }, ref) => (
//   <DialogPrimitive.Close
//     className={cn(
//       [
//         'data-[state=open]:bg-accent',
//         'data-[state=open]:text-muted-foreground',
//       ],
//       'ring-offset-background',
//       'absolute',
//       'right-4',
//       'top-4',
//       'rounded-sm',
//       'opacity-70',
//       'transition-opacity',
//       'hover:opacity-100',
//       [
//         'focus:outline-none',
//         'focus:ring-2',
//         'focus:ring-offset-2',
//         'focus:ring-ring',
//       ],
//       'disabled:pointer-events-none'
//     )}
//   >
//     <Cross1Icon className='h-4 w-4' />
//     <span className='sr-only'>Close</span>
//   </DialogPrimitive.Close>
// ))
// Close.displayName = 'Dialog Close'

// export interface DialogProps {
//   open: boolean
//   onOpenChange: (open: boolean) => void
//   title?: string | ReactNode
//   description?: string | ReactNode
//   size?: 'small' | 'medium' | 'large'
//   children: ReactNode
// }

// const DIALOG_CONTENT_SIZES = {
//   small: 'sm:max-w-[325px] max-w-[425px]',
//   medium: 'sm:max-w-[425px] max-w-[600px]',
//   large: 'sm:max-w-[325px] max-w-[900px]',
// }

// export default function Dialog({
//   title,
//   description,
//   open,
//   onOpenChange,
//   size = 'medium',
//   children,
// }: DialogProps) {
//   return (
//     <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
//       <Portal>
//         <Overlay />
//         <Content className={DIALOG_CONTENT_SIZES[size]}>
//           {title ||
//             (description && (
//               <Header>
//                 {!!title && <Title>{title}</Title>}
//                 {!!description && <Description>{description}</Description>}
//               </Header>
//             ))}
//           {children}
//           <Close />
//         </Content>
//       </Portal>
//     </DialogPrimitive.Root>
//   )
// }
