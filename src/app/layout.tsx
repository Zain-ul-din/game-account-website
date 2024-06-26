import type { Metadata } from 'next'
import { cn } from '@/lib/utils'
import LocalFont from 'next/font/local'
import { Oxygen } from 'next/font/google'
import './globals.css'
import NextTopLoader from 'nextjs-toploader'
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
  title: 'Hitbox Games',
  description: 'Unending Fun and Thrill! We are offering all in one place.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </head>
      <body
        className={cn(
          `w-full h-full antialiased bg-white`,
          oxygenRegular.className,
          oxygenRegular.variable,
          backTo1982.variable,
        )}
      >
        <NextTopLoader
          speed={100}
          height={3}
          crawlSpeed={100}
          crawl={true}
          shadow="0 0 50px #2299DD,0 0 50px #2299DD"
        />
        {/* <h1 className="text-xl font-bold text-red-700">No Longer Maintained 🛠</h1> */}
        <Header />
           {children}
        <Footer /> 
      </body>
    </html>
  )
}

