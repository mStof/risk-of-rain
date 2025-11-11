"use client";
import Link, { type LinkProps } from "next/link";
import { useMouse } from "@/context/useMouse";
import { useCallback } from "react";

type MyLinkProps = LinkProps & {
  children?: React.ReactNode | undefined;
  className: string;
};

const MyLink = (props: MyLinkProps) => {
  const {setSelected} = useMouse();
  const { className, children, ...rest } = props;

  const handleEnter = useCallback(() => { setSelected(true); }, [setSelected]);
  const handleLeave = useCallback(() => { setSelected(false); }, [setSelected]);

  return (
    <Link
      className={className}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      {...rest}
    >
      {children}
    </Link>
  );
};

MyLink.displayName = "MyLink";
export default MyLink;
