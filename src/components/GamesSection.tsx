'use client'
import { useRef } from 'react'
/* eslint-disable @next/next/no-img-element */

import GameCards from './GameCards'

interface GameSectionProps {
  showAll?: boolean
}

export default function GameSection({ showAll }: GameSectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  return (
    <div className="w-full py-16 pt-12 px-4 bg-white">
      <div
        className="max-w-screen-xl mx-auto flex flex-col gap-12"
        ref={containerRef}
      >
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold">Games</h1>
          <p className="text-neutral-700">{`Our vision is to develop games that attract a wide audience, encouraging long-term engagement and leaving a lasting impact in players' memories.`}</p>
        </div>

        <GameCards containerRef={containerRef} showAll={showAll} />
      </div>
    </div>
  )
}
