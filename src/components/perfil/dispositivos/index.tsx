import React from "react";
import Cards from "./Cards";

const Index = () => {
  return (
    <article className="flex-1 flex flex-col gap-8 max-h-full">
      <div className="flex gap-2 items-center">
        <span className="bg-secondary-01 w-4 h-0.5 block"></span>
        <p className="text-base font-chakra-petch leading-4 text-secondary-10 -tracking-tighter font-medium">
          Dispositivos na conta
        </p>
        <span className="bg-secondary-01 flex-1 h-0.5 block"></span>
      </div>
      <div className="flex flex-col gap-4 -800 h-[calc(65vh_-_3.5rem)] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-dark-10 [&::-webkit-scrollbar-thumb]:border-dark-10 [&::-webkit-scrollbar-thumb]:border-x-3 [&::-webkit-scrollbar-thumb]:bg-secondary-01">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </article>
  );
};

export default Index;
