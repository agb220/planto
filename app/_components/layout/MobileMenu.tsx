"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "../_icon";

const MobileMenu = ({
  items,
  closeMenu,
}: {
  items: any[];
  closeMenu: () => void;
}) => {
  const [openSubIndex, setOpenSubIndex] = useState<number | null>(null);

  const toggleSubmenu = (index: number) => {
    setOpenSubIndex(openSubIndex === index ? null : index);
  };

  return (
    <nav className="flex flex-col gap-4 md:gap-8 text-center w-full px-6">
      {items.map((menuItem, index) => (
        <div key={index} className="w-full flex flex-col items-center">
          {menuItem.subitem ? (
            <div className="flex flex-col items-center w-full">
              <button
                onClick={() => toggleSubmenu(index)}
                className="relative flex items-center justify-center min-h-12.5 group"
              >
                <span className="text-2xl xl:text-3xl font-bold text-white/90 group-hover:text-[#769f87] transition-all duration-500">
                  {menuItem.item}
                </span>
                <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 flex items-center">
                  <ChevronDown
                    className={`transition-all duration-500 ${
                      openSubIndex === index ? "rotate-180" : "text-white/90"
                    } group-hover:text-[#769f87]`}
                  />
                </div>
              </button>
              <div
                className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
                  openSubIndex === index
                    ? "max-h-75 opacity-100 mt-6"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="flex flex-col gap-3 md:gap-6 bg-white/5 py-4 md:py-6 rounded-2xl border border-white/5">
                  {menuItem.subitem.map((sub: any, subIndex: number) => (
                    <li key={subIndex}>
                      <Link
                        href={sub.href}
                        onClick={closeMenu}
                        className="text-2xl text-gray-400 hover:text-white transition-colors block duration-500"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <Link
              href={menuItem.href}
              onClick={closeMenu}
              className="relative text-2xl xl:text-3xl font-bold text-white/90 hover:text-[#769f87] transition-all py-2    after:content-[''] after:absolute after:left-0 after:bottom-0 
                         after:h-0.5 after:w-full after:bg-[#769f87] 
                         after:scale-x-0 after:origin-center 
                         hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-out"
            >
              {menuItem.item}
            </Link>
          )}
        </div>
      ))}
      <div className="w-full flex justify-center">
        <Link
          href="/cart"
          onClick={closeMenu}
          className="relative w-fit text-2xl xl:text-3xl font-bold text-white/90 hover:text-[#769f87] transition-all py-2 
               after:content-[''] after:absolute after:left-0 after:bottom-0 
               after:h-0.5 after:w-full after:bg-[#769f87] 
               after:scale-x-0 after:origin-center 
               hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-out"
        >
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default MobileMenu;
