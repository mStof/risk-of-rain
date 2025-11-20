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
        d="M6 12.666c-3.334 1-3.334-1.666-4.667-2m9.333 4v-2.58a2.248 2.248 0 0 0-.626-1.74c2.093-.233 4.293-1.026 4.293-4.666 0-.931-.358-1.826-1-2.5a3.38 3.38 0 0 0-.06-2.514s-.787-.233-2.607.987a8.92 8.92 0 0 0-4.666 0C4.18.433 3.393.666 3.393.666a3.38 3.38 0 0 0-.06 2.514 3.627 3.627 0 0 0-1 2.52c0 3.613 2.2 4.406 4.293 4.666A2.246 2.246 0 0 0 6 12.086v2.58"
      />
    </g>
    {/* <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs> */}
  </svg>
);
export default SvgComponent;
