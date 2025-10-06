import * as React from "react";
import type { SVGProps } from "react";
const SvgEditSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <mask
      id="edit_square_svg__a"
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
    <g mask="url(#edit_square_svg__a)">
      <path
        fill="#DBB33A"
        d="M3.333 14q-.55 0-.941-.392A1.28 1.28 0 0 1 2 12.667V3.333q0-.55.392-.941Q2.783 2 3.333 2h5.95L7.95 3.333H3.333v9.334h9.334V8.033L14 6.7v5.967q0 .55-.392.941a1.28 1.28 0 0 1-.941.392zM6 10V7.167l6.117-6.117q.2-.2.45-.3a1.34 1.34 0 0 1 1.008 0q.241.1.442.3l.933.95q.183.2.283.442.1.241.1.491t-.091.492a1.25 1.25 0 0 1-.292.442L8.833 10zm1.333-1.333h.934L12.133 4.8l-.466-.467-.484-.466-3.85 3.85z"
      />
    </g>
  </svg>
);
export default SvgEditSquare;
