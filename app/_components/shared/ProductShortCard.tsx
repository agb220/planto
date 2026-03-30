import Image from "next/image";
import { cn } from "@/cn";
import Button from "./Button";
import { CartBtnSvg } from "../_icon";

interface ProductShortCardProps {
  imageSrc: string;
  title: string;
  category: string;
  description: string;
  price: string;
  className?: string;
  isShowBtn?: boolean;
  isShowPrice?: boolean;
  isShowCategory?: boolean;
  isShowDescription?: boolean;
  classNameImg?: string;
  classNameContent?: string;
}

const ProductShortCard = (props: ProductShortCardProps) => {
  return (
    <li className="list-none w-full max-w-112.5 select-none">
      <div className={cn("relative group pt-50 md:pt-68", props.className)}>
        <div
          className={cn(
            "absolute top-0 left-1/2 -translate-x-1/2 w-full h-90 md:h-120 z-30 pointer-events-none",
            props.classNameImg
          )}
        >
          <Image
            src={props.imageSrc}
            alt={props.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105 relative z-10"
            priority
          />
        </div>
        <div className="relative z-10 drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)] -mt-16 md:-mt-20">
          <div
            className={cn(
              "relative w-full px-8 md:px-12 pb-12 pt-24 md:pt-32 flex flex-col justify-around",
              "min-h-112.5 md:min-h-120",
              props.classNameContent
            )}
          >
            {/* SVG Background */}
            <div className="absolute inset-0 z-[-1]">
              <svg
                viewBox="0 0 512 644"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M60,0 C180,0 210,35 256,35 C302,35 332,0 452,0 Q512,0 512,60 V584 Q512,644 452,644 H60 Q0,644 0,584 V60 Q0,0 60,0 Z"
                  fill="#ffffff"
                  fillOpacity="0.05"
                />
                <path
                  d="M60,1 C180,1 210,36 256,36 C302,36 332,1 452,1 Q511,1 511,60 V584 Q511,643 452,643 H60 Q1,643 1,584 V60 Q1,1 60,1 Z"
                  stroke="white"
                  strokeOpacity="0.2"
                  strokeWidth="2"
                />
              </svg>
              <div className="absolute inset-0 backdrop-blur-3xl z-[-2] rounded-[40px] md:rounded-[77px]" />
            </div>
            <div className="w-full flex flex-col gap-2 md:gap-4 justify-end">
              {props.isShowCategory && (
                <p className="text-xl md:text-2xl text-white/50 font-medium">
                  {props.category}
                </p>
              )}

              <h3 className="text-3xl md:text-5xl font-bold text-white/75 tracking-tight wrap-break-word">
                {props.title}
              </h3>

              {props.isShowDescription && (
                <p className="text-lg md:text-xl text-white/50 font-medium line-clamp-3">
                  {props.description}
                </p>
              )}
              {props.isShowBtn && (
                <div className="mt-6">
                  <Button
                    variant="dark"
                    className="px-10 py-4 text-xl rounded-2xl"
                  >
                    Buy Now
                  </Button>
                </div>
              )}
              {props.isShowPrice && (
                <div className="flex gap-2 justify-between items-center mt-4 xl:mt-6">
                  <span className="text-white/75 text-[32px] md:text-[42px] whitespace-nowrap">
                    Rs. {props.price}/-
                  </span>
                  <Button variant="icon">
                    <CartBtnSvg />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductShortCard;
