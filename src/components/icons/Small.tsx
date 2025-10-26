import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"

    fill="none"
    {...props}
  >
    <path fill={props.fill || "#DBB33A"} d="M4 8.667V7.333h8v1.334H4Z" />
  </svg>
);
export default SvgComponent;
