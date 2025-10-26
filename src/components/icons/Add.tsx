import * as React from "react";
import type { SVGProps } from "react";
const SvgAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <mask
      id="add_svg__a"
      width="1em"
      height="1em"
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha"
      }}
    >
      <path fill="#D9D9D9" d="M0 0h16v16H0z" />
    </mask>
    <g mask="url(#add_svg__a)">
      <path
        fill={props.fill || "#DBB33A"}
        d="M7.333 14V8.667H2V7.333h5.333V2h1.334v5.333H14v1.334H8.667V14z"
      />
    </g>
  </svg>
);
export default SvgAdd;
