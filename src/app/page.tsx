'use client'

import CarouselSection from '@/components/CarouselSection'
import GameSection from '@/components/GamesSection'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      <CarouselSection />
      <GameSection />
    </>
  )
}
