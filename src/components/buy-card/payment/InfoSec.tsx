import Button from "@/components/Button";
import { useFormContext } from "@/context/buy-card/useFormContext";
import { useNavigation } from "@/context/buy-card/useNavigation";
import { usePlan } from "@/context/buy-card/usePlan";
import { usePrice } from "@/context/buy-card/usePrice";
import React, { useState } from "react";

const InfoSec = () => {
  const [bntName, setBtnName] = useState("Finalize sua compra");
  const { setNavigation } = useNavigation();
  const { resetPrice, card } = usePrice();
  const { plan, price, setPlan } = usePlan();
  const windows = card.filter((obj) => obj.id !== 1001);
  const { address, payment } = useFormContext();

  const preco = card.reduce((soma, obj) => {
    return soma + Number(obj.price.toFixed(2));
  }, 0);
  console.log("windows", address, payment);

  const handleConfirm = () => {
    if (address.cep && payment.cardNumber) {
      window.alert(
        "Parabens por colocar seus dados sensíveis em um projeto de TCC, muito obrigado pela atenção e ainda mais pelo cartão <3 \nPor: Risk Of Rain equipe"
      );
      return;
    }
    setBtnName("Preencha os dados");
    setTimeout(() => {
      setBtnName("Finalize sua compra");
    }, 3000);
  };

  const handleExit = () => {
    resetPrice();
    setPlan({ infos: [], plan: "", price: 0, windows: 0 });

    setNavigation("buy");
  };

  return (
    <section className="flex-1 flex flex-col">
      <div className="flex flex-col gap-2">
        <h1 className="text-h2 font-major-mono-display text-center leading-16">
          pagamento
        </h1>
        <div className="w-full h-0.5 bg-secondary-10"></div>
      </div>

      <section className="pt-8 flex flex-col gap-6">
        {plan && (
          <div className="flex justify-between">
            <p className="font-chakra-petch font-light text-base leading-4 -tracking-tighter ">
              Plano ({plan}):
            </p>
            <p className="font-chakra-petch font-light text-base leading-4 -tracking-tighter ">
              R${price.toFixed(2).replace(".", ",")}
            </p>
          </div>
        )}
        <div className="flex flex-col gap-2">
          <p className="font-chakra-petch font-light text-base leading-4 -tracking-tighter ">
            Janelas:
          </p>
          <ul className="flex flex-col gap-2 pl-2">
            {windows.map((window, index) => (
              <li key={index}>
                <div className="flex justify-between">
                  <p className="font-chakra-petch font-light text-base leading-4 -tracking-tighter capitalize ">
                    - {window.nome}
                  </p>
                  <p className="font-chakra-petch font-light text-base leading-4 -tracking-tighter ">
                    R${window?.price.toFixed(2).replace(".", ",")}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-auto w-full flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <p className="font-chakra-petch font-light text-base leading-4 -tracking-tighter">
              Total:
            </p>
            <p className="font-chakra-petch font-light text-base leading-4 -tracking-tighter">
              R${preco.toFixed(2).replace(".", ",")}
            </p>
          </div>
          <span className="w-full h-0.5 bg-secondary-10"></span>
        </div>
        <div className="flex gap-4">
          <Button
            title={bntName}
            styles="secondary"
            className="text-xl w-full leading-5 aria-[error=true]:border-semantic-dark1-0 aria-[error=true]:bg-semantic-dark1-0 "
            onClick={handleConfirm}
            aria-error={bntName == "Finalize sua compra" ? "false" : "true"}
          />
          <Button
            onClick={handleExit}
            title="Voltar"
            className="text-xl w-full leading-5"
          />
        </div>
      </section>
    </section>
  );
};

export default InfoSec;
