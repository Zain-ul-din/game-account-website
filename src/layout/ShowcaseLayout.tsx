import { cn } from '@/lib/utils'
import { ReactNode, HTMLProps } from 'react'

interface ShowcaseLayoutProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode
  props?: HTMLProps<HTMLDivElement>
}

export default function ShowcaseLayout({
  children,
  className,
  props,
  ...rest
}: ShowcaseLayoutProps) {
  return (
    <div
      className={cn(
        'flex flex-col w-full bg-white py-6 px-3 gap-12',
        className,
      )}
      {...rest}
    >
      <div
        {...props}
        className={cn(
          'flex w-full mx-auto flex-col gap-1 max-w-screen-xl',
          props?.className,
        )}
      >
        {children}
      </div>
    </div>
  )
}
