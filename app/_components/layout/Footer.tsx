import { menulist } from "@/app/_constants/constants";
import Link from "next/dist/client/link";
import Image from "next/image";
import InputSub from "../shared/InputSub";

export const socailMedia = ["Link1", "link2", "Link3"];

const Footer = () => {
  return (
    <footer className="bg-[#1B2316] py-22">
      <div className="container">
        <div className="flex flex-col xl:flex-row justify-between gap-10 mb-10 xl:mb-20">
          <div className="flex flex-col md:flex-row gap-10 md:gap-30 xl:gap-50">
            <div className="flex gap-11 flex-col">
              <Link href="/" className="flex gap-3.5 items-center">
                <div className="w-12 h-12 overflow-hidden">
                  <Image
                    src="/images/plant.png"
                    alt={"Planto"}
                    width={180}
                    height={180}
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="text-[28px] font-black">Planto.</span>
              </Link>
              <p className="text-xl xl:text-[28px] font-medium text-white max-w-100 xl:max-w-145">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <div className="text-[28px] font-black text-white">
                Quick Link’s
              </div>
              <ul className="flex flex-col gap-6.5">
                {menulist.map((menuItem, index) => (
                  <li key={index}>
                    <Link
                      href={menuItem.href}
                      className="w-fit relative text-[24px] font-medium text-white hover:text-[#769f87] transition-all py-2 after:content-[''] after:absolute after:left-0 after:bottom-0 
                         after:h-0.5 after:w-full after:bg-[#769f87] 
                         after:scale-x-0 after:origin-center 
                         hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-out"
                    >
                      {menuItem.item}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={"/"}
                    className="relative text-[24px] font-medium text-white hover:text-[#769f87] transition-all py-2 after:content-[''] after:absolute after:left-0 after:bottom-0 
                         after:h-0.5 after:w-full after:bg-[#769f87] 
                         after:scale-x-0 after:origin-center 
                         hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-out"
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="text-[28px] font-black text-white">
              For Every Update.
            </div>
            <div className="self-start">
              <InputSub />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <ul className="flex gap-8 xl:gap-15 ">
            {socailMedia.map((item, index) => (
              <li
                key={index}
                className="text-white text-xl md:text-[28px] font-extrabold transition-colors duration-500 hover:text-[#769f87]"
              >
                <Link href={"/"} target="_blank">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <p className="font-medium text-white text-[24px] text-center xl:text-start xl:mr-75">
            planto © all right reserve
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
