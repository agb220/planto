import { cn } from "@/cn";
import ProductCard from "./ProductCard";
import { products } from "@/app/_constants/constants";

const TrendyBlock = () => {
  return (
    <div className="py-17 flex flex-col">
      <h2
        className="text-white self-center w-fit text-[55px] font-semibold text-center relative px-10 py-4 inline-block mb-32.5
          before:content-[''] before:absolute before:bottom-0 before:left-0 
          before:w-15 before:h-15 
          before:border-l-2 before:border-b-2 before:border-[#6DB952] 
          before:rounded-bl-[30px]
          before:mask-[linear-gradient(to_top_right,black_20%,transparent_80%)]
          after:content-[''] after:absolute after:top-0 after:right-0 
          after:w-15 after:h-15 
          after:border-r-2 after:border-t-2 after:border-[#6DB952] 
          after:rounded-tr-[30px]
          after:mask-[linear-gradient(to_bottom_left,black_20%,transparent_80%)]
        "
      >
        Our Trendy plants
      </h2>
      <ul className="space-y-34 w-full">
        {products.slice(0, 2).map((product, index) => (
          <ProductCard
            {...product}
            key={index}
            className={cn(index === 1 && "flex-row-reverse")}
          />
        ))}
      </ul>
    </div>
  );
};

export default TrendyBlock;
