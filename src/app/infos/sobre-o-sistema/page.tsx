"use client";
import Link from "@/components/Link";
import { useEffect, useRef, useState } from "react";

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
      sectionInfos.current?.querySelectorAll(".section").length -1;
      
      const eachProgress = heightSize / sections;
      const currentSection = Math.floor((Math.ceil(scrollProgress) / eachProgress));
      console.log(sections, currentSection, scrollProgress, eachProgress  );
    const listItems = listRef.current?.querySelectorAll("li > div");

    listItems?.forEach((item) => item.setAttribute("data-progress", "false"));
    for (let i = 0; i < currentSection+1; i++) {
      
      if (listItems) listItems[i].setAttribute("data-progress", "true");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleProgress);
  }, []);

  return (
    <main className="bg-(image:--bg-pattern) h-fit flex manda overflow-hidden">
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
            <p className="text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light text-nowrap">
              Conheça nosso app
            </p>
          </li>
          <li className="isolate flex gap-2 items-center">
            <div
              data-progress={false}
              className="size-2.5 rounded-full bg-secondary-10 data-[progress=true]:bg-secondary-01"
            ></div>
            <p className="text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light text-nowrap">
              Navegação Principal.
            </p>
          </li>
          <li className="isolate flex gap-2 items-center">
            <div
              data-progress={false}
              className="size-2.5 rounded-full bg-secondary-10 data-[progress=true]:bg-secondary-01"
            ></div>
            <p className="text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light text-nowrap">
              Geraciamento do ambiente.
            </p>
          </li>
          <li className="isolate flex gap-2 items-center">
            <div
              data-progress={false}
              className="size-2.5 rounded-full bg-secondary-10 data-[progress=true]:bg-secondary-01"
            ></div>
            <p className="text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light text-nowrap">
              Controle rápido.
            </p>
          </li>
          <li className="isolate flex gap-2 items-center">
            <div
              data-progress={false}
              className="size-2.5 rounded-full bg-secondary-10 data-[progress=true]:bg-secondary-01"
            ></div>
            <p className="text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light text-nowrap">
              Status do dispositivo.
            </p>
          </li>
          <li className="isolate flex gap-2 items-center">
            <div
              data-progress={false}
              className="size-2.5 rounded-full bg-secondary-10 data-[progress=true]:bg-secondary-01"
            ></div>
            <p className="text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light text-nowrap">
              Configuração de perfil.
            </p>
          </li>
          <li className="isolate flex gap-2 items-center">
            <div
              data-progress={false}
              className="size-2.5 rounded-full bg-secondary-10 data-[progress=true]:bg-secondary-01"
            ></div>
            <p className="text-secondary-10 font-chakra-petch -tracking-tighter leading-4 text-base font-light text-nowrap">
              Histórico de eventos.
            </p>
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

      <div className="fixed w-3/12 h-10/12 bg-red-700 inset-0 translate-x-3/4 self-center"></div>

      <section
        ref={sectionInfos}
        className="flex flex-col items-center w-full h-fit snap-y snap-mandatory "
      >
        <div className="snap-center section flex justify-center gap-20 flex-col ml-64 w-min h-screen">
          <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-12 lowercase text-nowrap">
            conheça nosso app
          </h1>
          <div className="flex flex-col gap-6">
            <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
              O controle do sistema é feito através de um aplicativo móvel
              intuitivo, que permite o gerenciamento remoto dos dispositivos, a
              visualização de dados em tempo real e o acesso a um histórico de
              eventos.
            </p>
            <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
              Os principais diferenciais do projeto incluem seu custo-benefício,
              que o torna acessível a um público amplo, e a acessibilidade
              aprimorada para usuários como idosos ou pessoas com mobilidade
              reduzida. Além disso, o design modular e expansível do sistema
              garante que ele possa ser adaptado e aprimorado com novas
              funcionalidades no futuro.
            </p>
          </div>
        </div>

        <div className="snap-center section flex justify-center gap-16 flex-col ml-64 max-w-[37.75rem] w-min h-screen">
          <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-12 lowercase text-nowrap">
            navegação principal
          </h1>
          <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
            A navegação do nosso aplicativo é desenhada para ser simples e
            rápida. A barra de navegação na parte inferior da tela serve como
            seu guia principal, com ícones claros para cada seção: Home,
            Janelas, Adicionar Dispositivo, Histórico e Perfil. Com um toque,
            você muda de tela e tem acesso imediato às diferentes
            funcionalidades, com o ícone ativo sempre indicando onde você está.
            Isso torna a experiência de uso fluida e fácil para qualquer pessoa.
          </p>
        </div>

        <div className="snap-center section flex justify-center gap-16 flex-col ml-64 max-w-[37.75rem] w-min h-screen">
          <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-12 lowercase text-nowrap">
            gerenciamento do <br /> ambiente
          </h1>
          <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
            O gerenciamento do ambiente é centralizado para oferecer controle
            total sobre a sua casa. A interface do aplicativo permite que você
            veja o status geral do seu módulo de automação e execute comandos
            que afetam todas as janelas ao mesmo tempo, como &#34;Fechar
            tudo&#34;. Além disso, você pode monitorar as condições climáticas
            gerais do ambiente, como temperatura e umidade, garantindo uma visão
            completa e descomplicada do seu lar.
          </p>
        </div>

        <div className="snap-center section flex justify-center gap-16 flex-col ml-64 min-w-[37.75rem] w-min h-screen">
          <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-12 lowercase text-nowrap">
            controle rapido
          </h1>
          <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
            Na parte superior da tela principal, você encontra comandos rápidos
            que oferecem controle imediato sobre o seu sistema. Com um único
            toque, é possível verificar a conexão Wi-Fi, fechar todas as janelas
            de uma vez para maior segurança e consultar a temperatura e a
            umidade do ambiente. Essa funcionalidade foi pensada para situações
            de urgência e para fornecer informações essenciais de forma prática
            e instantânea.
          </p>
        </div>

        <div className="snap-center section flex justify-center gap-16 flex-col ml-64 min-w-[37.75rem] w-min h-screen">
          <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-12 lowercase text-nowrap">
            status dos <br /> dispositivos
          </h1>
          <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
            A seção principal do aplicativo exibe de forma clara e objetiva o
            status de cada janela. Cada cartão na lista representa um
            dispositivo, mostrando uma imagem do cômodo e o nome da janela (por
            exemplo, &#34;Janela do quarto&#34;). A chave seletora ao lado do
            nome permite abrir ou fechar a janela com um simples toque, dando a
            você total controle manual.
          </p>
        </div>

        <div className="snap-center section flex justify-center gap-16 flex-col ml-64 max-w-[37.75rem] w-min h-screen">
          <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-12 lowercase text-nowrap">
            gerenciamento de <br />
            perfil
          </h1>
          <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
            Na tela de Perfil, o usuário pode gerenciar todas as informações da
            sua conta. Você pode visualizar e editar seus dados pessoais, como
            nome de usuário, e-mail e senha. Além disso, a seção
            &#34;Dispositivos na conta&#34; lista todos os módulos de automação
            vinculados ao seu perfil, facilitando o acompanhamento de seus
            aparelhos. O botão de Deslogar garante a sua privacidade e segurança
            ao encerrar a sessão.
          </p>
        </div>

        <div className="snap-center section flex justify-center gap-16 flex-col ml-64 max-w-[37.75rem] w-min h-screen">
          <h1 className="font-major-mono-display text-h4 text-secondary-10 leading-12 lowercase text-nowrap">
            historico de eventos
          </h1>
          <p className="font-chakra-petch text-base font-light -tracking-tighter leading-normal text-secondary-10 w-full">
            A seção de Histórico é uma linha do tempo completa de todas as
            atividades do seu sistema de automação. Nela, você pode ver um
            registro detalhado de quando cada janela foi aberta ou fechada, com
            indicação da data e hora exatas. Essa funcionalidade é crucial para
            monitorar a segurança da sua casa, confirmando se as janelas foram
            fechadas automaticamente em caso de chuva ou se alguém as operou
            manualmente.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Index;
