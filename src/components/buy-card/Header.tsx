import { useNavigation } from "@/context/buy-card/useNavigation";
import React from "react";

const Header = ({ sectionPayment = false }: { sectionPayment?: boolean }) => {
  const {setNavigation} = useNavigation();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <p data-activate={sectionPayment} className="text-h6 leading-none text-secondary-10 font-major-mono-display data-[activate=true]:cursor-pointer" onClick={() => setNavigation("buy")}>
          comprar
        </p>
        <p data-activate={sectionPayment} className="data-[activate=true]:opacity-100 text-h6 leading-none text-secondary-10 font-major-mono-display opacity-25">
          {">"}
        </p>
        <p data-activate={sectionPayment} className="data-[activate=true]:opacity-100 text-h6 leading-none text-secondary-10 font-major-mono-display opacity-25">
          pagamento
        </p>
      </div>
      <div className="h-0.5 w-full bg-secondary-10"></div>
    </div>
  );
};

export default Header;
