'use client'

/* eslint-disable @next/next/no-img-element */
import { HTMLProps } from 'react'
const CARDS_SIZE = 5

export default function CarouselSection() {
  const [threshold, setThreshold] = useState<number>(0.5)
  const [ref, isInView] = useInView({ triggerOnce: true, threshold: threshold })

  const isSmScreen = useMediaQuery('(max-width: 600px)')
  useEffect(() => setThreshold(isSmScreen ? 0.4 : 0.5), [isSmScreen])
  const [activeCard, setActiveCard] = useState(-1)

  useEffect(() => {
    let intervalId: NodeJS.Timeout

    intervalId = setInterval(() => {
      setActiveCard((prevIndex) => (prevIndex + 1) % CARDS_SIZE)
    }, 4000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="flex w-full bg-white py-3 px-3">
      <div className="max-w-screen-md mx-auto w-full">
        <div
          className="grid grid-cols-4 gap-2"
          style={{
            gridTemplateColumns: 'repeat(6,1fr)',
            gridTemplateRows: 'repeat(2, auto)',
          }}
          ref={ref}
        >
          <ImageCard
            className="col-span-6 sm:col-span-3"
            images={actionGames}
            style={{
              transform: isInView ? 'none' : 'translateX(-200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
            }}
            idx={0}
            activeIdx={activeCard}
          />

          <ImageCard
            className="col-span-6 sm:col-span-3"
            images={adventurerGames}
            style={{
              transform: isInView ? 'none' : 'translateX(-200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
            }}
            idx={1}
            activeIdx={activeCard}
          />

          {/* vertical cards */}

          <ImageCard
            className="col-span-3 sm:col-span-2 row-span-1"
            images={hyperCasualGames}
            style={{
              transform: isInView ? 'none' : 'translateX(-200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
            }}
            idx={2}
            activeIdx={activeCard}
          />

          <ImageCard
            className="col-span-3 sm:col-span-2 row-span-1"
            images={hackathonGames}
            style={{
              transform: isInView ? 'none' : 'translateX(-200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
            }}
            idx={3}
            activeIdx={activeCard}
          />

          <ImageCard
            className="hidden md:flex col-span-2 row-span-1"
            images={otherPortraitGames}
            style={{
              transform: isInView ? 'none' : 'translateX(-200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
            }}
            idx={4}
            activeIdx={activeCard}
          />
        </div>
      </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useMediaQuery } from 'usehooks-ts'
import { GameMetaData } from '@/types/GameMetaData'
import {
  actionGames,
  adventurerGames,
  hackathonGames,
  hyperCasualGames,
  otherPortraitGames,
} from '@/lib/constant'

interface ImageCardProps extends HTMLProps<HTMLDivElement> {
  images: Array<GameMetaData>
  activeIdx: number
  idx: number
}

const ImageCard: React.FC<ImageCardProps> = ({
  images,
  activeIdx,
  idx,
  ...rest
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    if (activeIdx !== idx) return
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [activeIdx, idx, images.length])

  useEffect(() => {
    const prefetchImages = async () => {
      for (const image of images) {
        const img = new Image()
        img.src = image.url
        await img.decode()
      }
    }

    prefetchImages()
  }, [images])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentIndex}
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          ...rest.style,
        }}
        className={rest.className}
      >
        <motion.img
          key={currentIndex}
          src={images[currentIndex].url}
          alt={images[currentIndex].alt}
          style={{
            width: '100%',
            objectFit: 'contain',
          }}
          className="rounded-md shadow-md"
          initial={{ opacity: 0.1, x: '-100%' }}
          animate={{ opacity: 1, x: '0%' }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          loading="lazy"
        />
      </motion.div>
    </AnimatePresence>
  )
}
