"use client"
import { useRef } from "react";
/* eslint-disable @next/next/no-img-element */

import GameCards from "./GameCards";

export default function GameSection() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  return <div className="w-full py-16 px-4">
    
    <div className="max-w-screen-xl mx-auto flex flex-col gap-12" ref={containerRef}>
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">
          Games
        </h1>
        <p className="text-neutral-700">Our dream is to create games that as many people as possible play for years and that are remembered forever.</p>
      </div>

      <GameCards 
        containerRef={containerRef}
      />
    </div>
  </div>
}

