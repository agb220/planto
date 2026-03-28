import * as React from "react";
import { SVGProps } from "react";

const BigCardtSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M6 8h12a2 2 0 0 1 2 2v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-8a2 2 0 0 1 2-2Z" />
    <path d="M9 10V6a3 3 0 0 1 6 0v4" />
    <path d="M9 13a3 3 0 0 0 6 0" />
  </svg>
);

export default BigCardtSvg;
