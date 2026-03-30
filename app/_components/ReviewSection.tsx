"use client";
import useEmblaCarousel from "embla-carousel-react";
import Title from "./shared/Title";
import { DotButton, useDotButton } from "./shared/embla-carousel/EmblaDot";
import Review from "./shared/Review";
import { cn } from "@/cn";
import { reviews } from "../_constants/constants";

const ReviewSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: false,
  });

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="container py-20 md:py-26 xl:py-42">
      <div className="relative">
        <div className="flex flex-col items-center">
          <Title title={"Customer Review"} />
          <div className="w-full overflow-hidden" ref={emblaRef}>
            <ul className="flex gap-8 m-0 p-0">
              {reviews.map((item, index) => (
                <Review {...item} key={index} />
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-3 absolute left-1/2 -bottom-[10%] z-30">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={cn(
                "transition-all duration-300 ease-in-out bg-white rounded-full",
                index === selectedIndex
                  ? "w-10 h-2.5 opacity-100"
                  : "w-2.5 h-2.5 opacity-30 hover:opacity-50"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
