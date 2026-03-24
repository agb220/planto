import * as React from "react";
import { SVGProps } from "react";

interface StarProps extends SVGProps<SVGSVGElement> {
  color?: string;
}

const StarSvg = ({ color = "#FFF84E", ...props }: StarProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={14}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      d="m7.133 0 1.684 5.182h5.449L9.857 8.385l1.684 5.183-4.408-3.203-4.409 3.203 1.684-5.183L0 5.182h5.449L7.133 0Z"
    />
  </svg>
);
export default StarSvg;
