import * as React from "react";
import type { SVGProps } from "react";
const SvgDashboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <mask
      id="dashboard_svg__a"
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
    <g mask="url(#dashboard_svg__a)">
      <path
        fill="#DBB33A"
        d="M10 13.333V8.667h4.667v4.666zm-2.667-6V2.667h7.334v4.666zm-6 6V8.667h7.334v4.666zm0-6V2.667H6v4.666zM8.667 6h4.666V4H8.667zm-6 6h4.666v-2H2.667zm8.666 0h2v-2h-2zM2.667 6h2V4h-2z"
      />
    </g>
  </svg>
);
export default SvgDashboard;
