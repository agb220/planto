"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "./shared/Button";
import ProductSlider from "./ProductSlider";
import Review from "./shared/Review";
import { products, reviews } from "../_constants/constants";

const HeroSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden">
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0  w-full min-h-full h-163"
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
        <div className="flex justify-between gap-10 items-center">
          <div className="flex flex-col gap-10 justify-between">
            <div className="h-screen flex flex-col justify-center gap-5 max-w-223">
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
            <Review {...reviews[0]} />
          </div>
          <div className="max-w-125 overflow-hidden">
            <ProductSlider products={products} />
          </div>
        </div>
        <div className="py-20 flex flex-col items-center">
          <h2 className="text-white text-5xl font-semibold mb-32 text-center">
            Our Trendy plants
          </h2>

          <div className="space-y-40 w-full max-w-5xl">
            <div className="relative w-full h-112 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[80px]" />
            <div className="relative w-full h-112 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[80px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
