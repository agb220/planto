"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Button from "./shared/Button";
import ProductSlider from "./ProductSlider";
import Review from "./shared/Review";
import TrendyBlock from "./shared/TrendyBlock";
import { products, reviews } from "../_constants/constants";

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const scrollY = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  const mouseMoveX = useTransform(smoothMouseX, [0, 1], ["2%", "-2%"]);
  const mouseMoveY = useTransform(smoothMouseY, [0, 1], ["2%", "-2%"]);

  const scrollMoveY = useTransform(scrollY, [0, 1], ["0%", "15%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !containerRef.current) return;
    const { width, height, left, top } =
      containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width);
    mouseY.set((e.clientY - top) / height);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden pb-25 cursor-default pt-10"
    >
      <motion.div
        style={{
          x: isMobile ? 0 : mouseMoveX,
          y: isMobile ? scrollMoveY : mouseMoveY,
          scale: 1.1,
        }}
        className="absolute inset-0 z-0 w-full h-full min-h-163"
      >
        <Image
          src="/images/hero/main-bg.png"
          alt="Breath Natural"
          fill
          priority
          className="object-cover object-top origin-top"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-[#111311] via-80%" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex justify-between gap-10 items-center flex-col xl:flex-row">
          <div className="flex flex-col gap-10 xl:gap-5">
            <div className="h-screen md:h-[40vh] xl:h-screen flex flex-col justify-center gap-5 max-w-223">
              <h1 className="text-white/75 text-[clamp(60px,10vw,120px)] font-bold leading-[0.9] tracking-tighter">
                Breath Natureal
              </h1>
              <p className="text-white/75 text-[23px] font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex items-center gap-6 mt-10">
                <Button variant="dark">Explore</Button>
              </div>
            </div>
            <div className="xl:-mt-40">
              <Review {...reviews[0]} />
            </div>
          </div>
          <div className="max-w-125 overflow-hidden">
            <ProductSlider products={products} />
          </div>
        </div>
        <div>
          <TrendyBlock />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
