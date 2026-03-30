import Image from "next/image";
import { StarSvg } from "../_icon";
import { cn } from "@/cn";

interface ReviewProps {
  review: {
    id: string;
    name: string;
    photo: string;
    raiting: number;
    review: string;
  };
  classname?: string;
}

const Review = (props: ReviewProps) => {
  return (
    <li
      className={cn(
        "list-none bg-white/5 backdrop-blur-xl border border-white/10 rounded-[45px] w-full p-4 md:p-11.25 min-w-[320px] select-none",
        props.classname
      )}
    >
      <div className="flex flex-col gap-2">
        <div className="flex gap-7">
          <div>
            <Image
              src={props.review.photo}
              alt="Client review"
              width={64}
              height={64}
              className="pointer-events-none object-contain"
            />
          </div>
          <div>
            <h4 className="text-[27px] text-white/75">{props.review.name}</h4>
            <div className="flex gap-1 mt-1">
              {Array.from({ length: 5 }).map((_, index) => {
                const isActive = index < Math.floor(props.review.raiting);
                return (
                  <StarSvg
                    key={index}
                    color={isActive ? "#FFF84E" : "#4B4B4B"}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <p className="line-clamp-3 text-[17px] text-white/75">
          {props.review.review}
        </p>
      </div>
    </li>
  );
};

export default Review;
