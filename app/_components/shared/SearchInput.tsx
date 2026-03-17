"use client";
import { useState, useRef } from "react";
import { SearchSvg } from "../_icon";
import { cn } from "@/cn";

interface SearchInputProps {
  className?: string;
}

const SearchInput = (props: SearchInputProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleToggle = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  };

  return (
    <div
      className={cn("relative flex items-center justify-end", props.className)}
    >
      <div
        onClick={handleToggle}
        className={`
          relative flex items-center cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${
            isExpanded
              ? "w-64 px-4 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
              : "w-10 h-10 bg-white/5 border border-white/10 rounded-full justify-center hover:bg-white/12"
          }
        `}
      >
        <div
          className={`
          shrink-0 transition-all duration-500
          ${isExpanded ? "text-white" : "text-gray-400"}
        `}
        >
          <SearchSvg className="w-5 h-5" />
        </div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search plants..."
          className={`
            bg-transparent text-white text-sm outline-none placeholder:text-gray-500
            transition-all duration-300
            ${
              isExpanded
                ? "opacity-100 w-full ml-3 pointer-events-auto"
                : "opacity-0 w-0 pointer-events-none"
            }
          `}
          onBlur={() => setIsExpanded(false)}
        />
      </div>
    </div>
  );
};

export default SearchInput;
