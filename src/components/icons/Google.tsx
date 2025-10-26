import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"

    {...props}
  >
    <path
      fill={props.fill || "#DBB33A"}
      d="M13.766 6.912H8.12v2.32h3.225c-.139.75-.56 1.385-1.197 1.81-.537.36-1.223.572-2.03.572-1.56 0-2.88-1.055-3.352-2.472a3.634 3.634 0 0 1-.188-1.139c0-.395.069-.78.188-1.139.473-1.416 1.793-2.47 3.354-2.47.88 0 1.67.303 2.29.897l1.72-1.72c-1.04-.97-2.394-1.563-4.01-1.563a5.99 5.99 0 0 0-5.992 5.997A5.99 5.99 0 0 0 8.12 14c1.62 0 2.975-.537 3.966-1.453 1.133-1.044 1.787-2.581 1.787-4.408 0-.425-.037-.833-.107-1.226Z"
    />
  </svg>
);
export default SvgComponent;
