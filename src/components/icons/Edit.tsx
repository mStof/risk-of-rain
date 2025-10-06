import * as React from "react";
import type { SVGProps } from "react";
const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <mask
      id="edit_svg__a"
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
    <g mask="url(#edit_svg__a)">
      <path
        fill={props.fill || "#DBB33A"}
        d="M3.333 12.667h.95L10.8 6.15l-.95-.95-6.517 6.517zM2 14v-2.833l8.8-8.784q.2-.183.442-.283.24-.1.508-.1.267 0 .517.1.249.1.433.3l.917.933q.2.184.291.434a1.44 1.44 0 0 1 0 1.008 1.25 1.25 0 0 1-.291.442L4.833 14zm8.317-8.317L9.85 5.2l.95.95z"
      />
    </g>
  </svg>
);
export default SvgEdit;
