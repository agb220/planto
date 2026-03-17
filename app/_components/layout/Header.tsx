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
    <header className="fixed top-0 left-0 right-0 py-10 xl:py-16 z-100">
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
            <Link href={"/"} className="hidden md:block">
              <CartSvg />
            </Link>
            <BurgerMenu
              isOpen={isMenuOpen}
              toggle={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>

          <div
            className={`fixed inset-0 z-100 bg-[#0d0d0dc2] backdrop-blur-2xl flex flex-col items-center transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-full"
            }`}
          >
            <div className="h-24 md:h-32 shrink-0" />
            <div className="w-full flex-1 overflow-y-auto scrollbar-hide px-4">
              <div className="min-h-full flex items-center justify-center py-10">
                <MobileMenu
                  items={menulist}
                  closeMenu={() => setIsMenuOpen(false)}
                />
              </div>
            </div>
            <div className="w-full px-10 pt-6 pb-24 shrink-0 flex flex-col items-center">
              <div className="relative w-full max-w-100">
                <input
                  type="text"
                  className="w-full bg-white/90 border border-white/90 rounded-full py-3 md:py-4 px-6 text-gray-600 placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#769f87]/50 transition-all"
                  placeholder="Find your plant..."
                />
                <SearchSvg className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              </div>

              <div className="mt-8 text-gray-500 text-xs tracking-widest uppercase">
                Sustainable · Minimalist · Nature
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
