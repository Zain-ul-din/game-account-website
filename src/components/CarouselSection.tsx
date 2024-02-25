'use client'

/* eslint-disable @next/next/no-img-element */
import { HTMLProps } from 'react'
const CARDS_SIZE = 5

export default function CarouselSection() {
  const [threshold, setThreshold] = useState<number>(0.5)
  const [ref, isInView] = useInView({
    triggerOnce: true,
    threshold: threshold,
  })

  const isSmScreen = useMediaQuery('(max-width: 600px)')
  useEffect(() => setThreshold(isSmScreen ? 0.4 : 0.5), [isSmScreen])
  const [activeCard, setActiveCard] = useState(0)

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
            cardsSize={CARDS_SIZE}
            idx={0}
            shallAnimate={(idx) => {
              setActiveCard((activeCard + 1) % CARDS_SIZE)
              return idx == activeCard
            }}
          />

          <ImageCard
            className="col-span-6 sm:col-span-3"
            images={actionGames}
            style={{
              transform: isInView ? 'none' : 'translateX(-200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
            }}
            cardsSize={CARDS_SIZE}
            idx={1}
            shallAnimate={(idx) => {
              setActiveCard((activeCard + 1) % CARDS_SIZE)
              return idx == activeCard
            }}
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
            cardsSize={CARDS_SIZE}
            idx={2}
            shallAnimate={(idx) => {
              setActiveCard((activeCard + 1) % CARDS_SIZE)
              return idx == activeCard
            }}
          />

          <ImageCard
            className="col-span-3 sm:col-span-2 row-span-1"
            images={hyperCasualGames}
            style={{
              transform: isInView ? 'none' : 'translateX(-200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
            }}
            cardsSize={CARDS_SIZE}
            idx={3}
            shallAnimate={(idx) => {
              setActiveCard((activeCard + 1) % CARDS_SIZE)
              return idx == activeCard
            }}
          />

          <ImageCard
            className="hidden md:flex col-span-2 row-span-1"
            images={hyperCasualGames}
            style={{
              transform: isInView ? 'none' : 'translateX(-200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s',
            }}
            cardsSize={CARDS_SIZE}
            idx={4}
            shallAnimate={(idx) => {
              setActiveCard((activeCard + 1) % CARDS_SIZE)
              return idx == activeCard
            }}
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
import { actionGames, hyperCasualGames } from '@/lib/constant'

interface ImageCardProps extends HTMLProps<HTMLDivElement> {
  images: Array<GameMetaData>
  cardsSize: number
  shallAnimate: (idx: number) => boolean
  idx: number
}

const ImageCard: React.FC<ImageCardProps> = ({
  images,
  cardsSize,
  shallAnimate,
  idx,
  ...rest
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    let intervalId: NodeJS.Timeout

    intervalId = setInterval(() => {
      if (shallAnimate(idx)) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      }
    }, 3000)

    return () => {
      clearInterval(intervalId)
      clearTimeout(timeoutId)
    }
  }, [images.length, shallAnimate, idx])

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
          initial={{ opacity: 0, x: '-100%' }}
          animate={{ opacity: 1, x: '0%' }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </AnimatePresence>
  )
}
