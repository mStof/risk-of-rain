import * as React from "react";
import type { SVGProps } from "react";
const SvgCloudDone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <mask
      id="cloud_done_svg__a"
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
    <g mask="url(#cloud_done_svg__a)">
      <path
        fill="#DBB33A"
        d="m6.9 11.333 3.767-3.766L9.7 6.6 6.883 9.417l-1.4-1.4-.95.95zm-2.567 2q-1.516 0-2.591-1.05T.667 9.717q0-1.301.783-2.317A3.47 3.47 0 0 1 3.5 6.1a4.53 4.53 0 0 1 1.667-2.483A4.56 4.56 0 0 1 8 2.667q1.95 0 3.308 1.358 1.359 1.358 1.359 3.308a2.9 2.9 0 0 1 1.908.992q.758.858.758 2.008 0 1.25-.875 2.125a2.9 2.9 0 0 1-2.125.875zm0-1.333h8a1.6 1.6 0 0 0 1.184-.483A1.6 1.6 0 0 0 14 10.333a1.6 1.6 0 0 0-.483-1.183 1.6 1.6 0 0 0-1.184-.483h-1V7.333q0-1.383-.975-2.358A3.21 3.21 0 0 0 8 4q-1.383 0-2.358.975a3.21 3.21 0 0 0-.975 2.358h-.334q-.966 0-1.65.684A2.25 2.25 0 0 0 2 9.667q0 .966.683 1.65a2.25 2.25 0 0 0 1.65.683"
      />
    </g>
  </svg>
);
export default SvgCloudDone;
