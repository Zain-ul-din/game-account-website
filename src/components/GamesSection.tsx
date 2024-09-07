'use client'
import { useRef } from 'react'
/* eslint-disable @next/next/no-img-element */

import GameCards from './GameCards'
import ShowcaseLayout from '@/layout/ShowcaseLayout'

interface GameSectionProps {
  showAll?: boolean
}

export default function GameSection({ showAll }: GameSectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  return (
    <ShowcaseLayout
      className="py-16"
      props={{
        ref: containerRef,
        className: 'gap-12',
      }}
    >
      <div className="flex flex-col gap-1 justify-center mx-auto max-w-screen-md">
        <h1 className="text-3xl font-bold">Games</h1>
        <p className="text-neutral-700 max-w-screen-md ">{`Our vision is to develop games that attract a wide audience, encouraging long-term engagement and leaving a lasting impact in players' memories.`}</p>
      </div>

      <GameCards containerRef={containerRef} showAll={showAll} />
    </ShowcaseLayout>
  )
}
