/* eslint-disable @next/next/no-img-element */
"use client";

import { MutableRefObject, useEffect, useMemo, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import { Button } from "./ui/button";
import { Gamepad2 } from "lucide-react";

interface GameCardsProps {
  containerRef: MutableRefObject<HTMLDivElement | null> 
}

export default function GameCards({
  containerRef
}: GameCardsProps) {

  const { height, width } = useWindowSize()
  const [ gridCol, setGridCol] = useState<number>(5)
  const [cardHeight, setCardHeight] = useState<number>(Infinity)
  const [showMore, setShowMore] = useState<boolean>(false);

  useEffect(()=> {
    if(containerRef.current == null) return;
    let containerWidth = containerRef.current.clientWidth;
    if(containerWidth <= 550) setGridCol(3)
    else if(containerWidth <= 950) setGridCol(4)
    else setGridCol(5)

    if(showMore) {
      setCardHeight(Infinity)
      return;
    }

    const topTwoItems = containerRef.current.querySelectorAll('a');
    setCardHeight(Array.from(topTwoItems)[0].clientHeight);1
  }, [containerRef, width, height, showMore])

  const containerMaxHeight = useMemo(()=> (cardHeight * 3) + (16 * 3), [cardHeight])


  return <div 
    className={`grid gap-4 relative`}
    style={{
      gridTemplateColumns: `repeat(${gridCol}, minmax(0, 1fr))`,
      maxHeight: `${containerMaxHeight}px`,
      overflow: 'hidden'
    }}
  >
    {/* overlay */}
    {!showMore && <div className="absolute flex justify-center items-end bottom-0 w-full" style={{
      height: `${cardHeight+1}px`,
      background: 'linear-gradient(to bottom, rgba(255,255,255,0.01), white 90%)',
      pointerEvents: 'none'
    }}>
      <Button className="mb-5" style={{
        pointerEvents: 'auto'
      }} onClick={()=> setShowMore(true)}>
        <Gamepad2 className="mr-2" />
        Load More Games
      </Button>
    </div>}

    {/* cards */}
    {new Array(15).fill('').map((_, i)=> {
      return <a 
        className="flex flex-col cursor-pointer border border-black shadow-gray-300 hover:shadow-gray-400" key={i}
        style={{
          boxShadow: '3px 3px 0px var(--tw-shadow-color)'
        }}
        href="https://www.google.com"
      >
        <img src="/images/games/slowmo.webp" alt="foo" width={'100%'}  />
        <div className="py-2 px-2">
          <h1 className="truncate font-semibold md:text-sm text-xs">
          Indian Bike Gangster Simulator
          </h1>
          <p className="truncate text-[10px] md:text-xs text-neutral-700">Slow Mo Hero is an interesting drag running game where you can run and fight with people in various action styles. This slow mo game allows you to move your character in slow motion</p>
        </div>
      </a>
    })}
  </div>
}

