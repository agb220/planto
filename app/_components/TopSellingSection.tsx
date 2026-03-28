import { products } from "../_constants/constants";
import ProductShortCard from "./shared/ProductShortCard";
import Title from "./shared/Title";

const TopSellingSection = () => {
  return (
    <section className="container py-10 md:py-20 xl:py-42.5 mx-auto">
      <div className="flex flex-col items-center">
        <Title title={"Our Top Selling"}></Title>
        <ul className="grid-cols-1 grid md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-8 md:gap-y-14 justify-items-center">
          {products.slice(0, 6).map((product, index) => (
            <ProductShortCard
              {...product}
              key={index}
              isShowDescription
              isShowPrice
              className=""
              classNameImg="h-110 md:h-110"
              classNameContent="justify-end"
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TopSellingSection;
