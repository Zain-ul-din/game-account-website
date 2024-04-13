/* eslint-disable @next/next/no-img-element */
import { accountLinks } from '@/lib/constant'
import React, { HTMLProps } from 'react'
interface HeroProps extends HTMLProps<HTMLDivElement> {}

export default function Hero({ ...rest }: HeroProps) {
  return (
    <>
      <div className="w-full flex-1 bg-white" {...rest}>
        <div className="flex w-full h-full px-4 py-20 max-w-screen-xl mx-auto justify-center items-center">
          <div className="flex flex-col gap-4 items-center">
            <img
              src="/images/hit-box-logo.webp"
              alt="logo"
              style={{
                borderRadius: '50%',
              }}
              className="w-2/5 h-2/5 md:w-2/6 md:h-2/6"
            />
            <h1
              className="md:text-8xl text-6xl font-extrabold opacity-90 text-center"
              style={{
                background:
                  'linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              HITBOX GAMES
            </h1>
            <p className="text-center text-xl">
              Unending Fun and Thrill! We are offering all in one place.
            </p>
            <div className="flex flex-col self-start mt-9 gap-4">
              <h1 className="font-bold">Download For Free</h1>
              <div className="flex gap-3">
                <a href={accountLinks.google} target="_blank">
                  <img
                    src="/images/play-store.png"
                    style={{
                      maxHeight: 50,
                      minHeight: 50,
                      maxWidth: 150,
                    }}
                    alt="play-store"
                    className="hover:opacity-85"
                  />
                </a>
                <a href={accountLinks.apple} target="_blank">
                  <img
                    src="/images/app-store.png"
                    style={{
                      maxHeight: 50,
                      minHeight: 50,
                      maxWidth: 150,
                    }}
                    className="hover:opacity-85"
                    alt="app-store"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
