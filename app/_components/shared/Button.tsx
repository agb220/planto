"use client";
import { cn } from "@/cn";
import React from "react";
import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { forwardRef } from "react";

interface ButtonOptions {
  variant?: "light" | "dark" | "icon";
  disabled?: boolean;
  active?: boolean;
  icon?: React.ReactElement<any>;
  showIcon?: boolean;
  iconVariant?: "fill" | "stroke";
}

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonOptions & {
    icon?: React.ReactElement<any>;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    type = "button",
    className,
    variant = "light",
    children,
    disabled = false,
    onClick,
    icon,
    iconVariant = "stroke",

    ...rest
  } = props;

  const buttonStyles = {
    light:
      "text-[28px] text-white rounded-[12px] border-2 border-white hover:text-[#769f87] hover:border-[#769f87] h-16 py-3.5 px-14",
    dark: "text-[28px] text-white/75 rounded-[12px] border-2 border-white/75 hover:text-white hover:border-white h-16 py-3.5 px-14",
    icon: "p-1 rounded-lg border border-white/75 hover:border-white text-white/75 hover:text-white focus:shadow-[0px_0px_0px_2px_#223f47]",
  };

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      className={cn(
        "focus:ring-none flex items-center justify-center group gap-2 whitespace-nowrap focus:outline-none disabled:active:shadow-none  relative transition-colors duration-500",
        buttonStyles[variant],
        className
      )}
      {...rest}
      disabled={disabled}
    >
      {children}
      {icon && React.cloneElement(icon)}
    </button>
  );
});

Button.displayName = "Button";
export default Button;
