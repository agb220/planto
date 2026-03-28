"use client";
import useEmblaCarousel from "embla-carousel-react";
import ProductShortCard from "./shared/ProductShortCard";
import { cn } from "@/cn";
import { DotButton, useDotButton } from "./shared/embla-carousel/EmblaDot";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./shared/embla-carousel/ArrowButton";

interface ProductSliderProps {
  products: {
    imageSrc: string;
    title: string;
    description: string;
    price: string;
    category: string;
  }[];
}

const ProductSlider = (props: ProductSliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: false,
  });
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="flex flex-col gap-10 relative pt-40 w-full max-w-[100vw]overflow-x-hidden">
      <div className="w-full" ref={emblaRef}>
        <ul className="flex m-0 p-0">
          {props.products.map((product, index) => (
            <div key={index} className="flex-[0_0_80%] md:flex-[0_0_100%] px-4">
              <ProductShortCard isShowBtn isShowCategory {...product} />
            </div>
          ))}
        </ul>
      </div>
      {!nextBtnDisabled && (
        <div className="absolute z-50 bottom-[27%] right-[14%] md:right-[6%] pointer-events-auto">
          <NextButton onClick={onNextButtonClick} />
        </div>
      )}

      {!prevBtnDisabled && (
        <div className="absolute z-50 bottom-[28%] md:bottom-[27.5%] left-[14%] md:left-[4%] pointer-events-auto">
          <PrevButton onClick={onPrevButtonClick} />
        </div>
      )}
      <div className="flex items-center gap-3 absolute left-24 md:left-10 bottom-10 z-30">
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
  );
};

export default ProductSlider;
