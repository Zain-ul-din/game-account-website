import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import LocalFont from 'next/font/local'
import { Oxygen } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const backTo1982 = LocalFont({
  src: [
    {
      path: '../../public/fonts/BACKTO1982.ttf',
      weight: '400',
    },
  ],
  variable: '--font-back_to_1982',
})

const oxygenRegular = Oxygen({
  weight: ['400', '300', '700'],
  subsets: ['latin-ext'],
  variable: '--oxygen-font',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `w-full h-full antialiased bg-white`,
          oxygenRegular.className,
          oxygenRegular.variable,
          backTo1982.variable,
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
