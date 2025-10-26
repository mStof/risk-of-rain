import * as React from "react";
import type { SVGProps } from "react";
const SvgAlert = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    viewBox="0 0 16 16"

    height={16}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill || "#DBB33A"}
      d="M6.234 3.063V0h3.532v3.063l-.415 8.32H6.649zM6 15.017v-1.371l1.117-.983h1.766l1.117.983v1.371L8.883 16H7.117z"
    />
  </svg>
);
export default SvgAlert;
