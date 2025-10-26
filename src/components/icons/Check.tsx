import * as React from "react";
import type { SVGProps } from "react";
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    viewBox="0 0 16 16"

    height={20}
    fill="none"
    {...props}
  >
    <mask
      id="check_svg__a"
      width={20}
      height={20}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha"
      }}
    >
      <path fill="#D9D9D9" d="M0 0h20v20H0z" />
    </mask>
    <g mask="url(#check_svg__a)">
      <path
        fill={props.fill || "#DBB33A"}
        d="m7.959 15-4.75-4.75 1.187-1.187 3.563 3.562 7.645-7.646 1.188 1.188z"
      />
    </g>
  </svg>
);
export default SvgCheck;
