import * as React from "react";
import type { SVGProps } from "react";
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <mask
      id="home_svg__a"
      width={16}
      height={16}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha"
      }}
    >
      <path fill="#D9D9D9" d="M0 0h16v16H0z" />
    </mask>
    <g mask="url(#home_svg__a)">
      <path
        fill="#DBB33A"
        d="M4 12.667h2v-4h4v4h2v-6l-4-3-4 3zM2.667 14V6L8 2l5.333 4v8H8.667v-4H7.333v4z"
      />
    </g>
  </svg>
);
export default SvgHome;
