/* eslint-disable @next/next/no-img-element */
import React, { HTMLProps } from 'react'
interface HeroProps extends HTMLProps<HTMLDivElement> {}

export default function Hero({ ...rest }: HeroProps) {
  return (
    <>
      <div className="w-full flex-1 bg-white" {...rest}>
        <div className="flex w-full h-full px-4 py-20 max-w-screen-xl mx-auto justify-center items-center">
          <div className="flex flex-col gap-4 items-center">
            <h1 className="md:text-8xl text-6xl font-back-to-1982 text-orange-400">
              HitBox
            </h1>
            <h2 className="text-4xl font-bold text-orange-400 mt-5">GAMES</h2>
            <p className="text-center">
              Unending Fun and Thrill! We are offering all in one place.
            </p>
            <div className="flex flex-col self-start mt-9 gap-4">
              <h1 className="font-bold">Download For Free</h1>
              <div className="flex gap-3">
                <img
                  src="/images/play-store.png"
                  width={150}
                  height={50}
                  alt="play-store"
                />
                <img
                  src="/images/app-store.png"
                  width={150}
                  height={50}
                  alt="app-store"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
