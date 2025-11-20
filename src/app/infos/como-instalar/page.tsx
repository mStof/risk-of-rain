"use client";
import Link from "@/components/Link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import home from "@/../public/img/infos/como_usar/home.png";

const Index = () => {
  const [progress, setProgress] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);
  const sectionInfos = useRef<HTMLElement>(null);

  const handleProgress = () => {
    const scrollProgress = document.documentElement.scrollTop;
    const heightSize =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const currentProgress = (scrollProgress / heightSize) * 100;
    console.log(scrollProgress);

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
              Detalhes da intalação.
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
              Sistema e componentes.
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
              Preparação e compatibilidade.
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
              intalação.
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
              Sensor de chuva.
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
              Configuração inicial.
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
              Testagem de automação.
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

      <div className="fixed w-3/12 h-10/12 bg-red-700 inset-0 translate-x-3/4 self-center">
        <Image src={home} alt="home" className="h-full w-auto object-cover" />
      </div>

      <section
        ref={sectionInfos}
        className="flex flex-col items-center w-full h-fit snap-y snap-mandatory "
      >
        <div
          id="knowApp"
          className="snap-center section flex justify-center gap-16 flex-col ml-64 w-[37.75rem] h-screen"
        >
          <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-14 lowercase text-nowrap">
            detalhes da <br/> intalação
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
            sistema e <br/> componentes
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
            preparação e <br/> compatibiliadeda janela
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
            instalação do <br/> produto
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
          id="status"
          className="snap-center section flex justify-center gap-16 flex-col ml-64 w-[37.75rem] wmin h-screen"
        >
          <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-14 lowercase text-nowrap">
            conexão do <br/> sensor de chuva
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
            configurações <br/> inicial do App
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
          id="histEvent"
          className="snap-center section flex justify-center gap-16 flex-col ml-64 w-[37.75rem] wmin h-screen"
        >
          <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-14 lowercase text-nowrap">
            testagem de <br/> automação
          </h1>
          <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
            A fase final envolve a validação da usabilidade e a testagem do
            sistema. É crucial garantir que o sistema interprete corretamente o
            sinal de chuva e ative o motor para fechar a janela
            automaticamente.O aplicativo oferece feedback visual imediato
            através de animações e um módulo histórico que registra todas as
            operações realizadas, permitindo ao usuário monitorar e confirmar a
            eficácia da automação
          </p>
        </div>
      </section>
    </main>
  );
};

export default Index;
