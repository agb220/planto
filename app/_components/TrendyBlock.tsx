import { cn } from "@/cn";
import ProductCard from "./shared/ProductCard";
import { products } from "@/app/_constants/constants";
import Title from "./shared/Title";

const TrendyBlock = () => {
  return (
    <div className="py-10 md:py-17 flex flex-col">
      <Title title={" Our Trendy plants"}></Title>
      <ul className="space-y-20 md:space-y-34 w-full">
        {products.slice(0, 2).map((product, index) => (
          <ProductCard
            {...product}
            key={index}
            className={cn(index === 1 && "md:flex-row-reverse")}
          />
        ))}
      </ul>
    </div>
  );
};

export default TrendyBlock;
