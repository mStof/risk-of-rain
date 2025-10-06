import Button from "@/components/Button";
import Input from "@/components/Input";
import React from "react";
import Header from "../Header";

const index = () => {
  return (
    <section className=" w-full h-full flex gap-16">
      <section className="flex-1 flex flex-col gap-6">
        <div>
          <section className="flex flex-col gap-6">
            <h3 className="text-2xl font-medium font-chakra-petch leading-6 -tracking-tighter">
              Endereços de entrega
            </h3>
            <div className="flex flex-col gap-4">
              <Input title="CEP" placeholder="12345-678" />
              <div className="flex w-full gap-4">
                <Input
                  title="Endereço"
                  className="flex-1"
                  placeholder="R. volta e meia vamos la"
                />
                <Input
                  title="Bairro"
                  className="flex-1"
                  placeholder="Vale do limoeiro"
                />
              </div>
              <div className="flex w-full gap-4">
                <Input
                  title="Número"
                  className="flex-1"
                  placeholder="00"
                  type="number"
                />
                <Input
                  title="Complemento"
                  className="flex-1"
                  placeholder="Casa"
                />
              </div>
              <Button
                title="Confirmar"
                className="w-fit text-base"
                sizes="sm"
              />
            </div>
          </section>
        </div>
        <div className="flex flex-col gap-6">
          <span className="w-full h-0.5 bg-secondary-10"></span>
          <div className="flex flex-col gap-3">
            <p className="text-base leading-4 -tracking-tighter font-medium font-chakra-petch">
              Escolha de pagamento
            </p>
            <p className="text-sm leading-4 -tracking-tighter font-light font-chakra-petch underline-offset-2 underline cursor-pointer">
              Escolher
            </p>
          </div>
          <span className="w-full h-0.5 bg-secondary-10"></span>
        </div>
      </section>

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
              <p className="font-chakra-petch font-light text-base leading-4 -tracking-tighter">Total:</p>
              <p className="font-chakra-petch font-light text-base leading-4 -tracking-tighter">R$599,99</p>
            </div>
            <span className="w-full h-0.5 bg-secondary-10"></span>
          </div>
          <Button title="Finalize sua compra" styles="secondary"/>
        </section>
      </section>
    </section>
  );
};

export default index;
