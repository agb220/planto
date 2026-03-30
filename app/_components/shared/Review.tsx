import Image from "next/image";
import { StarSvg } from "../_icon";

interface ReviewProps {
  id: string;
  name: string;
  photo: string;
  raiting: number;
  review: string;
}

const Review = (props: ReviewProps) => {
  return (
    <li className="list-none bg-white/5 backdrop-blur-xl border border-white/10 rounded-[45px] max-w-102 p-4 md:p-11.25 min-w-102 select-none">
      <div className="flex flex-col gap-2">
        <div className="flex gap-7">
          <div>
            <Image
              src={props.photo}
              alt="Client review"
              width={64}
              height={64}
              className="pointer-events-none object-contain"
            />
          </div>
          <div>
            <h4 className="text-[27px] text-white/75">{props.name}</h4>
            <div className="flex gap-1 mt-1">
              {Array.from({ length: 5 }).map((_, index) => {
                const isActive = index < Math.floor(props.raiting);
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
        <p className="line-clamp-3 text-[17px] text-white/75">{props.review}</p>
      </div>
    </li>
  );
};

export default Review;
