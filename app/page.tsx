import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import TopSellingSection from "./_components/TopSellingSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <TopSellingSection />
    </main>
  );
}
