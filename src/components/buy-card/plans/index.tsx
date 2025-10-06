import React from "react";
import Card from "./Card";
import { useNavigation } from "@/context/buy-card/return";

const Index = () => {
  const { setNavigation } = useNavigation();

  const infos1 = [
    "Proteção a danos feitos pela chuva.",
    "Módulo de controle central",
    "2 Módulo de janelas",
    "1 sensor de chuva",
  ];
  const infos2 = [
    "Tudo do Plano Essencial.",
    "Relatórios de clima e uso do sistema.",
    "20% de desconto em módulos extras.",
    "4 sensor de umidade/temperatura",
  ];
  const infos3 = [
    "Tudo do Plano Conforto.",
    "Prioridade no suporte técnico.",
    "20% de desconto em módulos extras.",
    "7 sensor de chuva",
  ];

  return (
    <div className="bg-red0 h-full flex flex-col relative">
      <p
        onClick={() => setNavigation("buy")}
        className="absolute inset-0 -top-6 leading-4 underline underline-offset-2 cursor-pointer font-chakra-petch -tracking-tighter w-fit h-fit"
      >
        {"<"} Voltar
      </p>
      <div className="flex flex-col gap-4 bg-sky0">
        <h1 className="font-chakra-petch leading-6 text-center text-2xl font-medium -tracking-tighter">
          Escolha o Kit Ideal para Sua Casa
        </h1>
        <p className="font-chakra-petch leading-4 text-center text-base font-light -tracking-tighter">
          Nosso sistema se adapta ao tamanho da sua casa. Comece pequeno e
          expanda quando quiser.
        </p>
      </div>
      <div className="flex my-auto gap-16 justify-center bg-emeald-500">
        <Card title="Kit Essensial" windows={1} price={499} infos={infos1} isGray />
        <Card title="Kit Padrão" windows={4} price={499} infos={infos2} />
        <Card title="Kit Familia" windows={7} price={689} infos={infos3} isGray />
      </div>
    </div>
  );
};

export default Index;
