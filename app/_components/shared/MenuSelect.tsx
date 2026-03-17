"use client";
import { useState } from "react";
import Link from "next/dist/client/link";
import { ChevronDown } from "../_icon";
import { menulist } from "@/app/_constants/constants";

const MenuSelect = ({ item }: { item: (typeof menulist)[0] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 text-lg text-gray-400 hover:text-white transition-colors duration-500 text-[28px] font-medium">
        <span>{item.item}</span>
        <ChevronDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <ul className="absolute z-10 left-0 pt-2 min-w-35 bg-[#0d0d0d] border border-white/10 rounded-sm py-2 text-[28px] font-medium ">
          {item.subitem?.map((sub, subIndex) => (
            <li key={subIndex}>
              <Link
                href={sub.href}
                className="block px-4 py-2 text-sm text-gray-500 hover:bg-[#769f87] hover:text-white transition-colors duration-500"
              >
                {sub.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuSelect;
