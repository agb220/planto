import * as React from "react";
import { SVGProps } from "react";
const ChevronDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={6}
    fill="currentColor"
    {...props}
  >
    <path d="M5.196 5.25 0 0h10.392L5.196 5.25Z" />
  </svg>
);
export default ChevronDown;
