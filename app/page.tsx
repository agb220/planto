import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import TopSellingSection from "./_components/TopSellingSection";
import ReviewSection from "./_components/ReviewSection";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <TopSellingSection />
      <ReviewSection />
    </main>
  );
}
