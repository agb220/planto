import * as React from "react";
import { SVGProps } from "react";

const CartIconSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={27}
    viewBox="0 0 27 27"
    {...props}
  >
    <path
      d="M7.8 10.2h11.4a1.2 1.2 0 0 1 1.2 1.2v6.6a2.4 2.4 0 0 1-2.4 2.4H9a2.4 2.4 0 0 1-2.4-2.4v-6.6a1.2 1.2 0 0 1 1.2-1.2Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.2 10.2V8.4a3.3 3.3 0 0 1 6.6 0v1.8"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CartIconSvg;
