"use client";
import Link from "@/components/Link";
import { useEffect, useRef, useState } from "react";
import part1 from "@/../public/img/infos/como_instalar/part1.png";
import part2 from "@/../public/img/infos/como_instalar/part2.png";
import part3 from "@/../public/img/infos/como_instalar/part3.png";
import part4 from "@/../public/img/infos/como_instalar/part4.png";
import part5 from "@/../public/img/infos/como_instalar/part5.png";
import part6 from "@/../public/img/infos/como_instalar/part6.png";
import part7 from "@/../public/img/infos/como_instalar/part7.png";
import ImageInfos from "@/components/infos/ImageInfos";

const Index = () => {
  const [progress, setProgress] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);
  const sectionInfos = useRef<HTMLElement>(null);
  const imgs = [part1, part2, part3, part4, part5, part6, part7];

  const handleProgress = () => {
    const scrollProgress = document.documentElement.scrollTop;
    const heightSize =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const currentProgress = (scrollProgress / heightSize) * 100;

    setProgress(currentProgress < 0 ? 0 : currentProgress);

    if (!sectionInfos.current) return;
    const sections =
      sectionInfos.current?.querySelectorAll(".section").length - 1;

    const eachProgress = heightSize / sections;
    const currentSection = Math.floor(Math.ceil(scrollProgress) / eachProgress);
    const listItems = listRef.current?.querySelectorAll("li > div");

    listItems?.forEach((item) => item.setAttribute("data-progress", "false"));
    for (let i = 0; i < currentSection + 1; i++) {
      if (listItems) listItems[i].setAttribute("data-progress", "true");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleProgress);
  }, []);

  return (
    <main className="bg-dark-10 bg-(image:--bg-pattern) h-fit flex manda overflow-hidden">
      <article className="fixed bg-dark-09 border-r-4 border-dashed border-r-secondary-01 w-max-80 w-max h-full pl-8 pr-20 flex">
        <Link
          href="./../../"
          className="flex gap-1 absolute inset-8 w-fit h-fit"
        >
          <p className="font-major-mono-display text-base rotate-90 text-secondary-01 w-fit h-fit">
            V
          </p>
          <p className="font-chakra-petch text-base text-secondary-01 w-fit h-fit -tracking-tighter underline underline-offset-4">
            Voltar
          </p>
        </Link>
        <ul ref={listRef} className="my-auto flex flex-col gap-8 relative">
          <div className="absolute top-1/2 -translate-y-1/2 translate-x-8/4 w-0.5 h-11/12 flex">
            <span className="w-0.5 h-full bg-secondary-10  "></span>
            <span
              style={{ height: `${progress}%` }}
              className="w-0.5 bg-secondary-01 absolute "
            ></span>
          </div>
          <li className="isolate flex gap-2 items-center">
            <div
              data-progress={true}
              className="size-2.5 rounded-full bg-secondary-10 data-[progress=true]:bg-secondary-01"
            ></div>
            <Link
              href={"/infos/como-usar#knowApp"}
              scroll={true}
              className="external text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light text-nowrap"
            >
              Detalhes da Instalação.
            </Link>
          </li>
          <li className="isolate flex gap-2 items-center">
            <div
              data-progress={false}
              className="size-2.5 rounded-full bg-secondary-10 data-[progress=true]:bg-secondary-01"
            ></div>
            <Link
              href={"/infos/como-usar#firtsNav"}
              scroll={true}
              className="external text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light text-nowrap"
            >
              Sistema e Componentes.
            </Link>
          </li>
          <li className="isolate flex gap-2 items-center">
            <div
              data-progress={false}
              className="size-2.5 rounded-full bg-secondary-10 data-[progress=true]:bg-secondary-01"
            ></div>
            <Link
              href={"/infos/como-usar#gerencAmbien"}
              scroll={true}
              className="external text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light text-nowrap"
            >
              Preparação e Compatibilidade.
            </Link>
          </li>
          <li className="isolate flex gap-2 items-center">
            <div
              data-progress={false}
              className="size-2.5 rounded-full bg-secondary-10 data-[progress=true]:bg-secondary-01"
            ></div>
            <Link
              href={"/infos/como-usar#fastControl"}
              scroll={true}
              className="external text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light text-nowrap"
            >
              Instalação.
            </Link>
          </li>
          <li className="isolate flex gap-2 items-center">
            <div
              data-progress={false}
              className="size-2.5 rounded-full bg-secondary-10 data-[progress=true]:bg-secondary-01"
            ></div>
            <Link
              href={"/infos/como-usar#status"}
              scroll={true}
              className="external text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light text-nowrap"
            >
              Sensor de Chuva.
            </Link>
          </li>
          <li className="isolate flex gap-2 items-center">
            <div
              data-progress={false}
              className="size-2.5 rounded-full bg-secondary-10 data-[progress=true]:bg-secondary-01"
            ></div>
            <Link
              href={"/infos/como-usar#gerencPerfil"}
              scroll={true}
              className="external text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light text-nowrap"
            >
              Configuração Inicial.
            </Link>
          </li>
          <li className="isolate flex gap-2 items-center">
            <div
              data-progress={false}
              className="size-2.5 rounded-full bg-secondary-10 data-[progress=true]:bg-secondary-01"
            ></div>
            <Link
              href={"/infos/como-usar#histEvent"}
              scroll={true}
              className="external text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light text-nowrap"
            >
              Testagem de Automação.
            </Link>
          </li>
        </ul>
      </article>
      {/* Just to fill the space */}
      <div className="opacity-0 w-max-80 w-max h-full pl-8 pr-20 flex -z-40">
        <ul className="my-auto flex flex-col gap-8 list-disc ml-4">
          <li className="isolate flex gap-2 items-center">
            Navegação Principal.
          </li>
          <li className="isolate flex gap-2 items-center">
            Geraciamento do ambiente.
          </li>
          <li className="isolate flex gap-2 items-center">Controle rápido.</li>
          <li className="isolate flex gap-2 items-center">
            Status do dispositivo.
          </li>
          <li className="isolate flex gap-2 items-center">
            Configuração de perfil.
          </li>
          <li className="isolate flex gap-2 items-center">
            Histórico de eventos.
          </li>
        </ul>
      </div>

      <ImageInfos progress={progress} imgs={imgs} />

      <section
        ref={sectionInfos}
        className="flex flex-col items-center w-full h-fit snap-y snap-mandatory "
      >
        <div
          id="knowApp"
          className="snap-center section flex justify-center gap-16 flex-col ml-64 w-[37.75rem] h-screen"
        >
          <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-14 lowercase text-nowrap">
            detalhes da <br /> intalação
          </h1>
          <div className="flex flex-col gap-6">
            <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
              A instalação do Risk Of Rain (ROR) foi projetada para ser simples
              e adaptável, minimizando a necessidade de reformas ou intervenções
              complexas.O sistema consiste em componentes modulares — o sensor
              de chuva, o motor e o controlador Arduino — que se integram de
              forma precisa às janelas e portas existentes.
            </p>
            <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
              Utilizamos motores adaptáveis compatíveis com diversos modelos de
              esquadrias e um sistema de encaixe que se ajusta ao mecanismo
              específico de cada estrutura. Todo o processo, desde a fixação
              física até a configuração via aplicativo, é guiado para garantir
              uma resposta rápida e confiável do seu sistema de automação.
            </p>
          </div>
        </div>

        <div
          id="firtsNav"
          className="snap-center section flex justify-center gap-16 flex-col ml-64 w-[37.75rem] h-screen"
        >
          <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-14 lowercase text-nowrap">
            sistema e <br /> componentes
          </h1>
          <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
            O sistema ROR é composto por um conjunto de hardware e software que
            trabalham em conjunto. Os principais componentes físicos são o
            sensor de chuva (Módulo Sensor de Chuva) que detecta as primeiras
            gotas, o controlador (Placa Arduino ou ESP32) que processa o sinal,
            e os motores adaptáveis (Motor com Caixa de Redução) que realizam a
            ação de fechar as janelas. O sistema também utiliza módulos de
            controle de direção (Módulo Driver Ponte H - L298N)e cabos para
            conexão.
          </p>
        </div>

        <div
          id="gerencAmbien"
          className="snap-center section flex justify-center gap-16 flex-col ml-64 w-[37.75rem] wmin h-screen"
        >
          <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-14 lowercase text-nowrap">
            preparação e <br /> compatibilide da <br/> janela
          </h1>
          <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
            O sistema ROR foi projetado com flexibilidade para ser compatível
            com diversos modelos de janelas. Antes da instalação, é fundamental
            verificar a estrutura da esquadria. A quantidade de motores a serem
            instalados pode ser ajustada conforme a necessidade específica do
            cliente e da estrutura de cada janela.
          </p>
        </div>

        <div
          id="fastControl"
          className="snap-center section flex justify-center gap-16 flex-col ml-64 w-[37.75rem] wmin h-screen"
        >
          <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-14 lowercase text-nowrap">
            instalação do <br /> produto
          </h1>
          <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
            A instalação física dos motores adaptáveis é um componente-chave do
            sistema Risk Of Rain (ROR), garantindo a integração eficaz do
            mecanismo de automação com diferentes tipos de janelas existentes. A
            principal característica é a flexibilidade, permitindo que os
            motores se ajustem ao mecanismo específico de cada estrutura, seja
            ela de correr, basculante ou pivotante.
          </p>
        </div>

        <div
          id="status"
          className="snap-center section flex justify-center gap-16 flex-col ml-64 w-[37.75rem] wmin h-screen"
        >
          <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-14 lowercase text-nowrap">
            conexão do <br /> sensor de chuva
          </h1>
          <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
            O sensor de chuva deve ser instalado em um local estratégico, como o
            telhado, onde possa detectar as primeiras gotas com rapidez. O sinal
            captado pelo sensor é enviado ao controlador Arduino/ESP.A
            tecnologia Arduino permite uma integração precisa e programação
            personalizada entre os sensores e os motores, assegurando uma
            resposta rápida e confiável do sistema.
          </p>
        </div>

        <div
          id="gerencPerfil"
          className="snap-center section flex justify-center gap-16 flex-col ml-64 w-[37.75rem] wmin h-screen"
        >
          <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-14 lowercase text-nowrap">
            configurações <br /> inicial do App
          </h1>
          <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
            O sensor de chuva deve ser instalado em um local estratégico, como o
            telhado, onde possa detectar as primeiras gotas com rapidez. O sinal
            captado pelo sensor é enviado ao controlador Arduino/ESP. A
            tecnologia Arduino permite uma integração precisa e programação
            personalizada entre os sensores e os motores, assegurando uma
            resposta rápida e confiável do sistema.
          </p>
        </div>

        <div
          id="histEvent"
          className="snap-center section flex justify-center gap-16 flex-col ml-64 w-[37.75rem] wmin h-screen"
        >
          <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-14 lowercase text-nowrap">
            testagem de <br /> automação
          </h1>
          <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
            A fase final envolve a validação da usabilidade e a testagem do
            sistema. É crucial garantir que o sistema interprete corretamente o
            sinal de chuva e ative o motor para fechar a janela automaticamente.
            O aplicativo oferece feedback visual imediato por meio de animações
            e um módulo histórico que registra todas as operações realizadas,
            permitindo ao usuário monitorar e confirmar a eficácia da automação.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Index;
