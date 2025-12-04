import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { CaseIcon } from "./icons";
import qrcode from "@/../public/img/qrcode.svg";

const Footer = () => {
  return (
    <footer className="bg-dark-09 w-full h-fit p-20 flex">
        <div className="flex-1 gap-8 flex flex-col">
          <div className="flex gap-7 items-center w-fit">
            <CaseIcon
              colors="base"
              sizes="lg"
              Icon={
                <p className="font-major-mono-display text-h6 text-secondary-01 mb-1">
                  R
                </p>
              }
            />
            <h2 className="text-h6 font-major-mono-display leading-8">
              Risk of RAin
            </h2>
          </div>
          <p className="font-chakra-petch text-base leading-normal font-light -tracking-tighter w-4/5">
            Obrigado por explorar o Risk Of Rain (ROR) Estamos empenhados em
            trazer segurança, inovação e a tranquilidade da automação
            residencial para sua vida. Conecte-se ao futuro de uma casa mais
            inteligente e protegida contra os imprevistos da chuva.
          </p>
          <Button onClick={() => scrollTo({top:0})} title="Voltar" className="w-fit py-2 mt-auto" sizes="md" />
        </div>
        <div className="flex-1 h-full flex flex-col">
          <div className="flex justify-center gap-20">
            <div className="text-secondary-10 flex flex-col gap-8">
              <h3 className="font-chakra-petch font-medium text-base -tracking-tighter leading-4">
                Mapa do site
              </h3>
              <ul className="font-chakra-petch font-light text-base -tracking-tighter leading-4 flex flex-col gap-4">
                <li className="w-fit flex flex-col-reverse gap-0.5">
                  <span className="bg-secondary-10 h-px w-full block"></span>
                  <Link href="/" scroll>
                    Home
                  </Link>
                </li>
                <li className="w-fit flex flex-col-reverse gap-0.5">
                  <span className="bg-secondary-10 h-px w-full block"></span>
                  <Link href="/infos/como-usar">Usabilidade: Como usar</Link>
                </li>
                <li className="w-fit flex flex-col-reverse gap-0.5">
                  <span className="bg-secondary-10 h-px w-full block"></span>
                  <Link href="/infos/sobre-o-sistema">Sobre o sistema</Link>
                </li>
                <li className="w-fit flex flex-col-reverse gap-0.5">
                  <span className="bg-secondary-10 h-px w-full block"></span>
                  <Link href="/infos/proposito">
                    Propósito: Central do projeto
                  </Link>
                </li>
                <li className="w-fit flex flex-col-reverse gap-0.5">
                  <span className="bg-secondary-10 h-px w-full block"></span>
                  <Link href="/infos/como-instalar">
                    Detalhes da instalação
                  </Link>
                </li>
                <li className="w-fit flex flex-col-reverse gap-0.5">
                  <span className="bg-secondary-10 h-px w-full block"></span>
                  <Link href="/criadores">Sobre nós</Link>
                </li>
              </ul>
            </div>
            <div className="text-secondary-10 flex flex-col items-center w-fit gap-8">
              <h3 className="font-chakra-petch font-medium text-base -tracking-tighter w-fit  leading-4">
                Baixe nosso app
              </h3>
              <Link className="externalw-fit flex flex-col gap-2" href="https://github.com/PH-CSS/riskOfRainMobile" target="_blank" rel="noopener noreferrer">
                <Image
                  src={qrcode}
                  alt="QR code para baixar o app"
                  className="aspect-square w-fit"
                />
                <p className="font-chakra-petch -tracking-tighter leading-3 text-sm w-fit font-light">
                  Ou clique para baixar!
                </p>
              </Link>
            </div>
          </div>
          <p className="font-chakra-petch font-medium text-base -tracking-tighter leading-4 mt-20 ml-20">Direitos autorais de @ Risk of Rain 2025 </p>
        </div>
      </footer>
  );
};

export default Footer;