'use client';

import { HTMLProps } from "react"

/* eslint-disable @next/next/no-img-element */
export default function CarouselSection() {
  
  const [threshold, setThreshold] = useState<number>(0.5)
  const [ref, isInView] = useInView({
    triggerOnce: true,
    threshold: threshold,
  });

  const isSmScreen = useMediaQuery("(max-width: 600px)")
  useEffect(()=> setThreshold(isSmScreen ? 0.3 : 0.5),[isSmScreen])
  
  return <div className="flex w-full bg-white py-3 px-3" ref={ref}>
    <div className="max-w-screen-md mx-auto w-full">
      <div className="grid grid-cols-4 gap-2"
        style={{
          gridTemplateColumns: 'repeat(6,1fr)',
          gridTemplateRows: 'repeat(2, auto)'
        }}
      >
        <ImageCard 
          className="col-span-6 sm:col-span-3"
          url="https://play-lh.googleusercontent.com/kkKTig34to5J8q3QuD9EkeqFJXmIPnhaYek54EMbNl2cRrg_TkKpVNuu9WuKcy6pmZGa=w1024-h720-rw"
          alt="grand_vegas"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        />

        <ImageCard 
          className="col-span-6 sm:col-span-3"
          url="https://play-lh.googleusercontent.com/kkKTig34to5J8q3QuD9EkeqFJXmIPnhaYek54EMbNl2cRrg_TkKpVNuu9WuKcy6pmZGa=w1024-h720-rw"
          alt="grand_vegas"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
          }}
        />
        
        <ImageCard 
          className="col-span-3 sm:col-span-2 row-span-1"
          url="https://play-lh.googleusercontent.com/jq1hk9DF_q9iiBdahvO2tCjesrwMfTQTyTx4mnTZ9NYBzyoC9vpitcGaQECx91k-9Q=w1024-h720-rw"
          alt="slow_mo_run"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
          }}
        />
        
        <ImageCard 
          className="col-span-3 sm:col-span-2 row-span-1"
          url="https://play-lh.googleusercontent.com/jq1hk9DF_q9iiBdahvO2tCjesrwMfTQTyTx4mnTZ9NYBzyoC9vpitcGaQECx91k-9Q=w1024-h720-rw"
          alt="slow_mo_run"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
          }}
        />

        <ImageCard 
          className="hidden md:flex col-span-2 row-span-1"
          url="https://play-lh.googleusercontent.com/jq1hk9DF_q9iiBdahvO2tCjesrwMfTQTyTx4mnTZ9NYBzyoC9vpitcGaQECx91k-9Q=w1024-h720-rw"
          alt="slow_mo_run"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
          }}
        />
        
      </div>
    </div>
  </div>
}

import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "usehooks-ts";

interface ImageCardProps extends HTMLProps<HTMLDivElement> {
  url: string;
  alt: string;
}


const ImageCard: React.FC<ImageCardProps> = ({ url, alt, ...rest }) => {
  

  return (
    <AnimatePresence>
      <div
        {...rest}
      >
        <motion.img
          src={url}
          alt={alt}
          style={{
            width: '100%',
            objectFit: 'contain',
          }}
          className="rounded-md shadow-md"
          initial={{ opacity: 0, transform: 'translateX(-1000px)' }}
          animate={{ opacity: 1, transform: 'translateX(0px)' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        />
      </div>
    </AnimatePresence>
  );
};
