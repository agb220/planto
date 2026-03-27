import Image from "next/image";
import Button from "./Button";
import { BigCardtSvg } from "../_icon";
import { cn } from "@/cn";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  subTitle: string;
  category: string;
  description: string;
  price: string;
  className?: string;
}

const ProductCard = (props: ProductCardProps) => {
  const isReverse = props.className?.includes("flex-row-reverse");

  return (
    <li className="relative w-full md:h-112 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[60px] md:rounded-[150px] overflow-visible">
      <div
        className={cn(
          "flex flex-col md:flex-row items-center h-full w-full pb-12 md:pb-0 px-4 md:px-8 xl:px-12",
          props.className
        )}
      >
        <div className="w-full md:basis-1/2 md:h-full relative flex items-center justify-center">
          <Image
            src={props.imageSrc}
            alt={props.title}
            height={800}
            width={800}
            className={cn(
              "md:absolute object-contain h-[80%] md:h-[120%] xl:h-[165%] md:w-auto md:max-w-none transition-all duration-500",
              isReverse
                ? "md:-right-40 xl:-right-20"
                : "md:-left-40 xl:-left-20"
            )}
          />
        </div>
        <div
          className={cn(
            "basis-1/2 flex flex-col gap-4 z-10",
            isReverse ? "md:pl-10 xl:pl-40" : "pr-5"
          )}
        >
          <h3 className="text-white text-[26px] xl:text-[38px] font-semibold leading-tight">
            {props.subTitle}
          </h3>
          <p className="text-white/80 text-[18px] font-medium leading-relaxed">
            {props.description}
          </p>
          <div className="text-[#6DB952] text-[24px] xl:text-[36px] font-bold">
            Rs. {props.price}/-
          </div>
          <div className="flex gap-4 mt-2">
            <Button variant="light" className="px-10 py-3 text-xl rounded-2xl">
              Explore
            </Button>
            <Button
              variant="icon"
              className="group border border-white/20 rounded-2xl flex items-center justify-center h-12 md:h-16"
            >
              <BigCardtSvg className="text-white w-8 h-8" />
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
