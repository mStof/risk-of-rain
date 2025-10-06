import React, { InputHTMLAttributes, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";
// import icon from "@/../public/icons/account_circle.svg";

const inputStyle = tv({
  slots: {
    base: "w-full px-3 py-4 pr-4 border border-secondary-01 h-fit flex items-center justify-between",
    container: "flex flex-col gap-2",
    input:
      "w-full outline-none font-base leading-4 font-chakra-petch bg-red00 -tracking-tighter font-light",
    label:
      "text-sm font-chakra-petch text-secondary-10 -tracking-tighter font-light leading-3 bgred-500"
  },
  variants: {
    state: {
      base: {
        base: "border-secondary-01"
      },
      disabled: {
        container: "opacity-25 cursor-not-allowed",
        input:"cursor-not-allowed",
        base: "cursor-not-allowed",
        label: "cursor-not-allowed"
      },
      error: {
        base: "border-semantic-dark1-0"
      },
      selected: {
        base: "border-primary-01"
      }
    }
  }
});

type InputStyleType = VariantProps<typeof inputStyle>;
type InputProps = InputHTMLAttributes<HTMLInputElement> &
  InputStyleType & {
    icon?: ReactNode;
    title?: string;
  };

const Input = ({ state, icon, title, ...rest }: InputProps) => {
  const { base, input, label, container } = inputStyle({ state });
  return (
    <div className={container({class: rest.className})}>
      {title && (
        <label htmlFor={rest.id} className={label()}>
          {title}
        </label>
      )}

      <div className={base()}>
        <input {...rest} className={input()} disabled={state === "disabled"} />
        {icon && icon}
      </div>
    </div>
  );
};

export default Input;
