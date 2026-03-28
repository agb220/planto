import * as React from "react";
import { SVGProps } from "react";

const ArrowSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path
      d="M7.5 4.16666L13.3333 10L7.5 15.8333"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ opacity: 0.75 }}
    />
  </svg>
);

export default ArrowSvg;
