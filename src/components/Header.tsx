'use client'
/* eslint-disable @next/next/no-img-element */

import { routes } from '@/lib/routes'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const path = usePathname()

  return (
    <>
      <div className="w-full">
        <img
          src="/images/hit-box-banner.webp"
          alt="banner"
          height={'50vh'}
          width={'100%'}
          style={{
            maxHeight: '500px',
            objectFit: 'cover',
            backgroundSize: 'contain',
          }}
        />
      </div>

      <header
        className={`w-full bg-white`}
        style={{
          borderRadius: '1.5rem 1.5rem 0rem 0rem',
        }}
      >
        <div className="flex flex-wrap justify-center gap-5 md:justify-start md:flex-nowrap md:gap-0  py-6 px-6 max-w-screen-xl mx-auto items-center">
          {/* <h1 className="font-bold text-xl">HitBox Games</h1> */}
          <img
            src="/images/hit-box-logo.webp"
            alt="hitbox_logo"
            width={50}
            height={50}
            style={{
              borderRadius: '50%',
            }}
          />

          {/* Links */}
          <div className="flex md:ml-8 gap-4">
            {Object.entries(routes).map(([key, val], i) => {
              const active = val == path
              return (
                <Link
                  href={val}
                  key={i}
                  className={cn(
                    'cursor-pointer decoration-wavy text-black font-semibold hover:underline text-sm underline-offset-2',
                    active
                      ? 'underline decoration-green-500'
                      : 'opacity-80 hover:scale-105 transition-all hover:decoration-neutral-500',
                  )}
                >
                  {key}
                </Link>
              )
            })}
          </div>

          {/* social cards */}
          <div className="flex md:ml-auto gap-4">
            <img
              src="/images/facebook.png"
              alt="facebook_logo"
              width={20}
              height={20}
            />
            <img
              src="/images/twitter.png"
              alt="facebook_logo"
              width={20}
              height={20}
            />
            <img
              src="/images/instagram.png"
              alt="facebook_logo"
              width={20}
              height={20}
            />
            <img
              src="/images/youtube.png"
              alt="facebook_logo"
              width={20}
              height={20}
            />
          </div>
        </div>
      </header>
    </>
  )
}
