'use client';

import Footer from "@/components/Footer";
import GameSection from "@/components/GamesSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "usehooks-ts";

export default function Home() {
  const bannerRef = useRef<HTMLImageElement>(null)
  const { width, height} = useWindowSize()
  const [heroMarginTop, setHeroMarginTop] = useState<number>(0)

  useEffect(()=> {
    if(!bannerRef.current) return;
    setHeroMarginTop(bannerRef.current.clientHeight);
  },[width, height, bannerRef])

  return (
    <>
      <div className="w-full h-full flex flex-col">
        <Header bannerRef={bannerRef}/>
        <Hero 
          style={{
            marginTop: `${heroMarginTop}px`
          }}
        />
      </div>
      <GameSection />
      <Footer />
    </>
  );
}


