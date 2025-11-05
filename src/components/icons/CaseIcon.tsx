"use client";
import { tv, type VariantProps } from "tailwind-variants";
import { HTMLAttributes, ReactNode } from "react";
import { useMouse } from "@/context/useMouse";

const iconStyle = tv({
  slots: {
    base: "size-8 rotate-45 relative flex bg-emeald-500 translate-y-0.5",
    line1: "bg-secondary-10 h-[1.5px] w-full inset-0 absolute z-50",
    line2: "bg-secondary-10 h-full w-[1.5px] absolute z-50 -translate-x-full",
    line3:
      "bg-secondary-10 h-7/12 w-[1.5px] left-full -ranslate-x-full absolute z-50",
    line4:
      "bg-secondary-10 h-[1.5px] w-7/12 top-full -translate-y-full absolute z-50"
  },
  variants: {
    colors: {
      base: {
        line1: "bg-secondary-01",
        line2: "bg-secondary-01",
        line3: "bg-secondary-01",
        line4: "bg-secondary-01"
      },
      error: {
        line1: "bg-semantic-dark1-0",
        line2: "bg-semantic-dark1-0",
        line3: "bg-semantic-dark1-0",
        line4: "bg-semantic-dark1-0"
      },
      selected: {
        line1: "bg-primary-01",
        line2: "bg-primary-01",
        line3: "bg-primary-01",
        line4: "bg-primary-01"
      }
    },
    sizes: {
      sm: { base: "size-4" },
      md: { base: "size-6" },
      md2: { base: "size-8" },
      lg: { base: "size-10" }
    }
  },
  defaultVariants: {
    // colors: "base",
    sizes: "md"
  }
});
type IconStyleProps = VariantProps<typeof iconStyle> &
  HTMLAttributes<HTMLDivElement> & {
    Icon: ReactNode;
    desc?: string;
  };

const SvgComponent = ({
  colors,
  sizes,
  Icon,
  desc,
  ...props
}: IconStyleProps) => {
  const { base, line1, line2, line3, line4 } = iconStyle({ colors, sizes });
  const { setSelected } = useMouse();

  return (
    <div
      {...props}
      onMouseEnter={() => setSelected(true)}
      onMouseLeave={() => setSelected(false)}
      className={base()}
      title={desc}
    >
      <span className={line1()}></span>
      <span className={line2()}></span>
      <span className={line3()}></span>
      <span className={line4()}></span>
      <div className="-rotate-45 flex items-center justify-center size-full">
        {Icon}
      </div>
    </div>
  );
};
export default SvgComponent;
