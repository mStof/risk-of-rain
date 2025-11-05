"use client";
import { tv, type VariantProps } from "tailwind-variants";
import { HTMLAttributes } from "react";
import { useMouse } from "@/context/useMouse";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/services/database/FirebaseConfig";
import test from "@/../public/img/perfil.jpg";

const iconStyle = tv({
  slots: {
    base: "size-8 rotate-45 relative flex bg-emeald-500 ",
    line1: "bg-secondary-01 h-1 w-full inset-0 absolute z-50",
    line2: "bg-secondary-01 h-full w-1 absolute z-50",
    line3:
      "bg-secondary-01 h-full w-1 left-full -translate-x-full absolute z-50",
    line4:
      "bg-secondary-01 h-1 w-full top-full -translate-y-full absolute z-50"
  },
  variants: {
    sizes: {
      sm: { base: "size-4" },
      md: { base: "size-6" },
      md2: { base: "size-8" },
      lg: { base: "size-10" },
      lg2: { base: "size-20" }
    }
  },
  defaultVariants: {
    sizes: "md"
  }
});
type IconStyleProps = VariantProps<typeof iconStyle> &
  HTMLAttributes<HTMLDivElement> & {
    desc?: string;
  };

const PerfilCase = ({ sizes, desc, className, ...props }: IconStyleProps) => {
  const { base, line1, line2, line3, line4 } = iconStyle({ sizes });
  const { setSelected } = useMouse();
  const [user, loading, error] = useAuthState(auth);
console.log(user);

  return (
    <div
      {...props}
      onMouseEnter={() => setSelected(true)}
      onMouseLeave={() => setSelected(false)}
      className={base({className})}
      title={desc}
    >
      <span className={line1()}></span>
      <span className={line2()}></span>
      <span className={line3()}></span>
      <span className={line4()}></span>
      <div className="rotate-0 flex items-center justify-center size-full overflow-hidden bg-emerald-500">
        <div className=" size-full scale-135 rotate-45">
          <Image
            src={user?.photoURL ? user.photoURL : test}
            width={500}
            height={500}
            quality={100}
            alt=""
            className="size-full -rotate-90"
          />
        </div>
      </div>
    </div>
  );
};
export default PerfilCase;
