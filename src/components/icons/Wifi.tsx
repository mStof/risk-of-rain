import * as React from "react";
import type { SVGProps } from "react";
const SvgWifi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <mask
      id="wifi_svg__a"
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
    <g mask="url(#wifi_svg__a)">
      <path
        fill={props.fill || "#DBB33A"}
        d="M1.817 7.15.4 5.733a10.8 10.8 0 0 1 3.5-2.275A10.9 10.9 0 0 1 8 2.667q2.133 0 4.1.791a10.8 10.8 0 0 1 3.5 2.275L14.183 7.15a8.8 8.8 0 0 0-2.85-1.842A8.9 8.9 0 0 0 8 4.667a8.9 8.9 0 0 0-3.333.641 8.8 8.8 0 0 0-2.85 1.842m2.816 2.817-1.4-1.4a7.1 7.1 0 0 1 2.209-1.409A6.8 6.8 0 0 1 8 6.667q1.334 0 2.558.491a7.1 7.1 0 0 1 2.209 1.409l-1.4 1.4A4.951 4.951 0 0 0 8 8.667a4.95 4.95 0 0 0-3.367 1.3M8 13.333q-.55 0-.942-.391A1.28 1.28 0 0 1 6.667 12q0-.55.391-.942.392-.39.942-.391.55 0 .942.391.39.391.391.942 0 .55-.391.942a1.28 1.28 0 0 1-.942.391"
      />
    </g>
  </svg>
);
export default SvgWifi;
