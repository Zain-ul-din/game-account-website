'use client';

import CarouselSection from "@/components/CarouselSection";
import Footer from "@/components/Footer";
import GameSection from "@/components/GamesSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "usehooks-ts";

export default function Home() {
  
  return (
    <>
      <Header />
      <Hero />
      <CarouselSection />
      <GameSection />
      <Footer />
    </>
  );
}


