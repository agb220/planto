interface TitleProps {
  title: string;
}

const Title = (props: TitleProps) => {
  return (
    <h2
      className="text-white text-center self-center w-fit text-[38px] md:text-[40px] xl:text-[55px] font-semibold relative px-10 py-4 inline-block mb-10 md:mb-20 xl:mb-32
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
      {props.title}
    </h2>
  );
};

export default Title;
