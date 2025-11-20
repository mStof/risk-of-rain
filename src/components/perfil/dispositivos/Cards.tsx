import Image from "next/image";
import React from "react";
import test from "@/../public/img/perfil.jpg";

const Cards = () => {
  return (
    <div className="h-20 w-full bg-dark-09 border-2 p-2 border-secondary-01 flex gap-2 items-center">
      <div className="h-full aspect-square">
        <Image src={test} alt="" className="size-full object-cover" />
      </div>
      <div className="flex flex-col gap-1 h-full items-start pt-1">
        <p className="text-base font-chakra-petch leading-4 text-secondary-10 -tracking-tighter font-light">
          Minha casa
        </p>
        <p className="text-xs font-chakra-petch leading-4 text-dark-03 -tracking-tighter font-light">
          Wifi: CarlosTobo_5G
        </p>
      </div>
    </div>
  );
};

export default Cards;
