import Footer from "@/components/Footer";
import GameSection from "@/components/GamesSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full h-full flex flex-col">
        <Header />
        <Hero />
      </div>
      <GameSection />
      <Footer />
    </>
  );
}


