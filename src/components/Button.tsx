import { ButtonHTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

type ButtonProps = VariantProps<typeof buttonStyle> &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string;
  };

const buttonStyle = tv({
  base: "border-2 h-fit py-5 px-10 text-2xl font-paragraph font-medium text-secondary-10 leading-none -tracking-tighter cursor-pointer transition-all duration-100 outline-0 outline-offset-0 active:-outline-offset-6 outline-secondary-01 hover:outline-2 hover:outline-offset-4 hover:outline-secondary-10",
  variants: {
    styles: { primary: "bg-transparent", secondary: "bg-secondary-01" },
    states: { disabled: "border-secondary-01/25", base: "border-secondary-01" },
    gray: { true: "bg-dark-08 text-secondary-10 border-dark-08" },
    sizes: {
      sm: "px-6 py-3 text-xs",
      md: "px-8 py-3 text-base",
      bg: "px-10 py-4 text-base"
    }
  },
  defaultVariants: {
    styles: "primary",
    states: "base",
    sizes: "bg",
    gray: false
  }
});

const Button = ({
  title,
  className,
  states,
  styles,
  sizes,
  gray,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={buttonStyle({
        class: className,
        states,
        styles,
        sizes,
        gray: gray
      })}
    >
      {title}
    </button>
  );
};

export default Button;
