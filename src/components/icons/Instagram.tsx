import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke="#dbb33a"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.333}
        d="M11.666 4.333h.007m-7.007-3h6.667a3.333 3.333 0 0 1 3.333 3.333v6.667a3.333 3.333 0 0 1-3.333 3.333H4.666a3.333 3.333 0 0 1-3.333-3.333V4.666a3.333 3.333 0 0 1 3.333-3.333Zm6 6.247a2.667 2.667 0 1 1-5.275.782 2.667 2.667 0 0 1 5.275-.782Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
