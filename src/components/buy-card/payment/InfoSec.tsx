import Button from "@/components/Button";
import React from "react";

const InfoSec = () => {
  return (
    <section className="flex-1 flex flex-col">
      <div className="flex flex-col gap-2">
        <h1 className="text-h2 font-major-mono-display text-center leading-16">
          pagamento
        </h1>
        <div className="w-full h-0.5 bg-secondary-10"></div>
      </div>

      <section className="pt-8 flex flex-col gap-6">
        <div className="flex justify-between">
          <p className="font-chakra-petch font-light text-base leading-4 -tracking-tighter ">
            Plano (Kit Anual):
          </p>
          <p className="font-chakra-petch font-light text-base leading-4 -tracking-tighter ">
            R$499,00
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-chakra-petch font-light text-base leading-4 -tracking-tighter ">
            Janelas
          </p>
          <ul className="flex flex-col gap-1 pl-4">
            <li>
              <div className="flex justify-between">
                <p className="font-chakra-petch font-light text-base leading-4 -tracking-tighter ">
                  Bastidora (2x)
                </p>
                <p className="font-chakra-petch font-light text-base leading-4 -tracking-tighter ">
                  R$00,00
                </p>
              </div>
            </li>
            <li>
              <div className="flex justify-between">
                <p className="font-chakra-petch font-light text-base leading-4 -tracking-tighter ">
                  Bastidora (2x)
                </p>
                <p className="font-chakra-petch font-light text-base leading-4 -tracking-tighter ">
                  R$00,00
                </p>
              </div>
            </li>
            <li>
              <div className="flex justify-between">
                <p className="font-chakra-petch font-light text-base leading-4 -tracking-tighter ">
                  Bastidora (2x)
                </p>
                <p className="font-chakra-petch font-light text-base leading-4 -tracking-tighter ">
                  R$00,00
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex justify-between">
          <p className="font-chakra-petch font-light text-base leading-4 -tracking-tighter ">
            Frete
          </p>

          <p className="font-chakra-petch font-light text-base leading-4 -tracking-tighter ">
            R$20,00
          </p>
        </div>
      </section>

      <section className="mt-auto w-full flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <p className="font-chakra-petch font-light text-base leading-4 -tracking-tighter">
              Total:
            </p>
            <p className="font-chakra-petch font-light text-base leading-4 -tracking-tighter">
              R$599,99
            </p>
          </div>
          <span className="w-full h-0.5 bg-secondary-10"></span>
        </div>
        <Button title="Finalize sua compra" styles="secondary" />
      </section>
    </section>
  );
};

export default InfoSec;
