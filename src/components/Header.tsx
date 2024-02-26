'use client'

import { routes } from '@/lib/routes'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react'
import { useWindowSize } from 'usehooks-ts'

export default function Header() {
  const bannerRef = useRef<HTMLImageElement>(null)
  const { width, height } = useWindowSize()
  const [marginTop, setMarginTop] = useState<number>(0)

  useEffect(() => {
    if (!bannerRef.current) return
    setMarginTop(bannerRef.current.clientHeight)
  }, [width, height, bannerRef])

  const path = usePathname()

  return (
    <>
      <div className="fixed top-0 left-0 w-full -z-[999]">
        <img
          ref={bannerRef}
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
          marginTop: `${marginTop}px`,
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
              return (
                <Link
                  href={val}
                  key={i}
                  className={cn(
                    'cursor-pointer font-semibold active:text-black hover:underline decoration-yellow-500 text-sm decoration-wavy underline-offset-4',
                    val == path ? 'underline' : '',
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
