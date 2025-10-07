import React from "react";
import Button from "../../Button";
import { useNavigation } from "@/context/buy-card/useNavigation";
import { usePrice } from "@/context/buy-card/usePrice";
import Plan from "./Plan";
import { usePlan } from "@/context/buy-card/usePlan";

const InfoSec = () => {
  const { price } = usePrice();
  const { plan } = usePlan();
  const { setNavigation } = useNavigation();

  return (
    <section className="w-full h-full flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-h2 font-major-mono-display text-center leading-16">
            Riskkk
          </h1>
          <div className="w-full h-0.5 bg-secondary-10"></div>
        </div>
        {plan && <Plan />}
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="w-full h-0.5 bg-secondary-10"></div>
        <div className="flex gap-4">
          <Button
            onClick={() => setNavigation("payment")}
            title={`R$${price.toFixed(2).replace(".", ",")}`}
            styles="secondary"
            className="text-2xl w-full leading-5"
          />
          <Button
            onClick={() => setNavigation("plans")}
            title="Assinaturas"
            className="text-2xl w-full leading-5"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSec;
