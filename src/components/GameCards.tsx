/* eslint-disable @next/next/no-img-element */
"use client";

import { MutableRefObject, useCallback, useEffect, useMemo, useState } from "react";
import { useWindowSize } from "usehooks-ts";
import { Button } from "./ui/button";
import { Gamepad2 } from "lucide-react";
import { accountGames } from "@/lib/constant";

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

  const handleResponseLayout = useCallback(()=> {
    if(containerRef.current == null) return;
    let containerWidth = containerRef.current.clientWidth;
    if(containerWidth <= 550) setGridCol(2)
    else if(containerWidth <= 950) setGridCol(4)
    else setGridCol(5)

    if(showMore) return;
    const topTwoItems = containerRef.current.querySelectorAll('a');
    setCardHeight(Array.from(topTwoItems)[0].clientHeight);
  }, [containerRef, width, height, showMore])

  useEffect(()=> handleResponseLayout(), [containerRef, width, height, showMore])
  const containerMaxHeight = useMemo(()=> (cardHeight * 3) + (16 * 3), [cardHeight])
  
  return <div 
    className={`grid gap-4 relative bg-white`}
    style={{
      gridTemplateColumns: `repeat(${gridCol}, minmax(0, 1fr))`,
      overflow: 'hidden',
      ...(showMore ? {} : { maxHeight: `${containerMaxHeight}px` })
    }}
  >
    {/* overlay */}
    {!showMore && 
    <>
      <div className="absolute flex justify-center items-end bottom-0 w-full" style={{
        height: `${cardHeight+1}px`,
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.2), white 90%)',
        pointerEvents: 'none',
      }}>
      </div>
      <div className="absolute flex justify-center items-end bottom-0 w-full">
        <Button className="mb-5" style={{
          pointerEvents: 'auto'
        }} onClick={()=> setShowMore(true)}>
          <Gamepad2 className="mr-2" />
          Load More Games
        </Button>
      </div>
    </>
    }
  
    {/* cards */}
    {accountGames.map((game, i)=> {
      return <a 
        className="flex flex-col cursor-pointer border border-black shadow-gray-300 hover:shadow-gray-400" key={i}
        style={{
          boxShadow: '3px 3px 0px var(--tw-shadow-color)'
        }}
        href={game.src}
        target="_blank"
      >
        <img src={`${game.img}`} 
          alt={`${game.title} image`} 
          width={'100%'}  
          onError={(e)=> {
            console.log("fail to load");
            (e.target as HTMLImageElement).src = 'images/games/slowmo.webp'
          }}
          onLoad={()=> handleResponseLayout()}
        />
        <div className="py-2 px-2">
          <h1 className="truncate font-semibold md:text-sm text-xs">
          {game.title}
          </h1>
          <p className="truncate text-[10px] md:text-xs text-neutral-700">Slow Mo Hero is an interesting drag running game where you can run and fight with people in various action styles. This slow mo game allows you to move your character in slow motion</p>
        </div>
      </a>
    })}
  </div>
}
