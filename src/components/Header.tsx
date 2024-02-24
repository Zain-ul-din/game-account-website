'use client';

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react"
import { useWindowSize } from "usehooks-ts";

interface HeaderProps {
  bannerRef: React.MutableRefObject<HTMLImageElement | null>
}

export default function Header({
  bannerRef
}: HeaderProps) {

  const headerRef = useRef<HTMLImageElement>(null)
  const [marginTop, setMarginTop] = useState<number>(0)
  const { width, height } = useWindowSize()

  useEffect(()=> {
    const handleScroll = ()=> {
      if(!headerRef.current) return;
      const headerHeight = headerRef.current.clientHeight;
      const scrollPos = window.scrollY;
      const diff = headerHeight - scrollPos;
      setMarginTop(diff <= 0 ? 0 : diff);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll)
  },[])

    
  return <>
  <div className="fixed top-0 left-0 w-full -z-[999]"
    style={{
      marginTop: `${marginTop}px`
    }}
  >
    <img 
      ref={bannerRef}
      src='/images/hit-box-banner.webp'
      alt="banner"
      height={'50vh'}
      width={'100%'}
      style={{
        maxHeight: '480px',
        objectFit: 'cover',
        backgroundSize: 'contain',
      }}
    />
  </div>
      
  <header 
    className={`w-full bg-white`}
    ref={headerRef}
  >
    <div className="flex flex-wrap justify-center gap-5 md:justify-start md:flex-nowrap md:gap-0  py-6 px-6 max-w-screen-xl mx-auto items-center">
      <h1 className="font-bold text-xl">HitBox Games</h1>
      
      {/* Links */}
      <div className="flex md:ml-8 gap-4">
        <a className="cursor-pointer font-semibold active:text-black hover:underline decoration-yellow-500 text-sm underline decoration-wavy underline-offset-4">Games</a>
        <a className="cursor-pointer font-semibold active:text-black hover:underline decoration-yellow-500 text-sm decoration-wavy underline-offset-4">Contact</a>
        <a className="cursor-pointer font-semibold active:text-black hover:underline decoration-yellow-500 text-sm decoration-wavy underline-offset-4">About Us</a>
      </div>

      {/* social cards */}
      <div className="flex md:ml-auto gap-4">
        <img src="/images/facebook.png" alt="facebook_logo"  width={30} height={30}/>
        <img src="/images/twitter.png" alt="facebook_logo"  width={30} height={30}/>
        <img src="/images/instagram.png" alt="facebook_logo" width={30} height={30} />
        <img src="/images/youtube.png" alt="facebook_logo" width={30} height={30} />
      </div>
    </div>
  </header>
  </>
}
