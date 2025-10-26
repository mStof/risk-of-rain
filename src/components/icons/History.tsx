import * as React from "react";
import type { SVGProps } from "react";
const SvgHistory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <mask
      id="history_svg__a"
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
    <g mask="url(#history_svg__a)">
      <path
        fill={props.fill || "#DBB33A"}
        d="M8.5 14.667q-2.642 0-4.585-1.717-1.944-1.716-2.2-4.283h1.382a5.1 5.1 0 0 0 1.798 3.341q1.542 1.326 3.605 1.325 2.285 0 3.87-1.55T13.954 8t-1.586-3.783q-1.584-1.55-3.869-1.55-1.465 0-2.719.708a5.3 5.3 0 0 0-1.986 1.958h1.978v1.334H1.818q.495-2.334 2.37-3.834t4.312-1.5q1.415 0 2.66.525 1.243.525 2.164 1.425T14.78 5.4q.537 1.217.537 2.6t-.537 2.6a6.7 6.7 0 0 1-1.457 2.117 6.9 6.9 0 0 1-2.165 1.425 6.8 6.8 0 0 1-2.659.525m1.91-3.867L7.817 8.267v-3.6h1.364v3.066l2.182 2.134z"
      />
    </g>
  </svg>
);
export default SvgHistory;
