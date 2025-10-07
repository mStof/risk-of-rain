import React from "react";

type ChoseProps = {
  title: string;
  desc?:string;
  setClose?: () => void;
};

const Chose = ({title, desc,setClose}:ChoseProps) => {
  return (
    <div className="flex flex-col gap-4">
      <span className="w-full h-px bg-secondary-10"></span>
      <div className="flex flex-col gap-3">
        <p className="text-base leading-4 -tracking-tighter font-medium font-chakra-petch">
          {title}
        </p>
        <div className="flex justify-between">
          {desc && <p className="text-sm leading-4 -tracking-tighter font-light font-chakra-petch">{desc}</p> }
          
        <p onClick={setClose} className="text-sm leading-4 -tracking-tighter font-light font-chakra-petch underline-offset-2 underline cursor-pointer">
          {desc ? "Alterar": "Escolher"}
        </p>
        </div>
      </div>
      <span className="w-full h-px bg-secondary-10"></span>
    </div>
  );
};

export default Chose;
