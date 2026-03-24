"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/dist/client/link";
import MenuSelect from "../shared/MenuSelect";
import BurgerMenu from "./BurgerMenu";
import SearchInput from "../shared/SearchInput";
import MobileMenu from "./MobileMenu";
import { CartSvg, SearchSvg } from "../_icon";
import { menulist } from "@/app/_constants/constants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 py-10 xl:py-16 z-100 backdrop-blur-lg">
      <div className="container">
        <div className="flex gap-5 justify-between items-center">
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

          <nav className="hidden xl:block">
            <ul className="flex gap-15 items-center">
              {menulist.map((menuItem, index) => (
                <div key={index} className="relative group">
                  {menuItem.subitem ? (
                    <MenuSelect item={menuItem} />
                  ) : (
                    <li>
                      <Link
                        href={menuItem.href}
                        className="relative pb-1 text-[28px] font-medium text-gray-400 hover:text-white transition-colors duration-500
                         after:content-[''] after:absolute after:left-0 after:bottom-0 
                         after:h-0.5 after:w-full after:bg-[#769f87] 
                         after:scale-x-0 after:origin-center 
                         hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-out 
                         "
                      >
                        {menuItem.item}
                      </Link>
                    </li>
                  )}
                </div>
              ))}
            </ul>
          </nav>
          <div className="flex items-center md:gap-15">
            <SearchInput className="hidden md:block" />
            <Link href={"/"} className="hidden md:block ">
              <CartSvg className="hover:stroke-white" />
            </Link>
            <BurgerMenu
              isOpen={isMenuOpen}
              toggle={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-999 overflow-y-auto bg-black flex flex-col transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] min-h-[99svh] ${
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="h-24 md:h-32 shrink-0" />
        <div className="px-6 flex flex-col items-center justify-center h-full mb-2">
          <MobileMenu items={menulist} closeMenu={() => setIsMenuOpen(false)} />
        </div>
        <div className="w-full px-10 pb-20 shrink-0 flex flex-col items-center bg-black">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              className="w-full bg-white/10 border border-white/20 rounded-full py-4 px-6 text-white placeholder:text-gray-500 focus:outline-none"
              placeholder="Find your plant..."
            />
            <SearchSvg className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          <div className="mt-6 text-gray-500 text-[10px] tracking-[0.2em] uppercase">
            Sustainable · Minimalist · Nature
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
