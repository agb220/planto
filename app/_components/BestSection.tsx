import Image from "next/image";
import Title from "./shared/Title";
import Button from "./shared/Button";

const BestSection = () => {
  return (
    <section className="container mx-auto py-10 md:py-26 xl:py-42 px-4 overflow-hidden">
      <div className="flex flex-col items-center">
        <Title title={"Our Best o2"} />
        <div className="relative w-full mt-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] md:rounded-[120px] flex flex-col xl:flex-row items-center">
          <div
            className="relative xl:absolute left-14 
                -top-20 xl:top-auto xl:-bottom-[5%] 
                w-full xl:w-[55%] 
                h-87.5 md:h-125 xl:h-[140%] 
                z-10 -translate-[4%]"
          >
            <Image
              src={"/images/best_plant.png"}
              alt={"Our Best o2"}
              fill
              className="object-contain object-bottom scale-150 md:scale-125"
              priority
            />
          </div>
          <div className="w-full flex justify-end">
            <div className="w-full xl:w-1/2 px-6 md:px-10 md:pr-30 pb-10 xl:py-36 z-20 xl:max-w-163 text-center md:text-left">
              <h2 className="text-2xl md:text-[38px] font-semibold text-white/75 mb-6 md:mb-12">
                We Have Small And Best O2 Plants Collection’s
              </h2>

              <div className="space-y-6 md:space-y-12 mb-8 md:mb-12 text-white/75 text-lg md:text-[28px]">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="hidden md:block">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>

              <div className="flex items-center justify-center md:justify-start">
                <Button className="h-16">Explore</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSection;
