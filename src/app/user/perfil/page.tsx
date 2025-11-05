"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import PerfilCase from "@/components/PerfilCase";
import test from "@/../public/img/perfil.jpg";
import Image from "next/image";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "@/services/database/FirebaseConfig";
import { useRouter } from "next/navigation";

const Page = () => {
  const [signOut] = useSignOut(auth);
  const router = useRouter();
  return (
    <main className="bg-neutral-bg bg-(image:--bg-pattern) overflow-hidden relative h-screen flex">
      <article className="w-[calc(100vw_-_4rem)] h-[calc(100vh_-_4rem)] m-auto border-secondary-01 border-4 flex flex-col gap-12">
        <header className="bg-dark-09 flex gap-4 p-6 pb-0 px-12 hfit flex-1 items-start">
          <PerfilCase className="size-20 translate-y-5" />
          <div className="h-full bg-red-500"></div>
          <div className="flex flex-col gap-2">
            <p className="text-h6 font-major-mono-display leading-8 lowercase text-secondary-10">
              Hi Mstof
            </p>
            <p className="text-base font-chakra-petch leading-4 text-dark-03 -tracking-tighter font-light">
              CPF:000.000.000-00
            </p>
          </div>
        </header>
        <article className="px-8 flex flex-5 pb-8 gap-16">
          <article className="flex-1 h-full bg-red500 flex flex-col gap-8">
            <div className="flex gap-2 items-center">
              <span className="bg-secondary-01 w-4 h-0.5 block"></span>
              <p className="text-base font-chakra-petch leading-4 text-secondary-10 -tracking-tighter font-medium">
                Informações do perfil
              </p>
              <span className="bg-secondary-01 flex-1 h-0.5 block"></span>
            </div>
            <form className="flex flex-col gap-4 h-full">
              <Input id="email" title="Email" placeholder="email.g@gmail.com" />
              <div className="flex gap-4">
                <Input
                  className="w-full"
                  id="password"
                  title="Senha"
                  placeholder="*******"
                />
                <Input
                  className="w-full"
                  id="name"
                  title="Usuário"
                  placeholder="Mstof"
                />
              </div>
              <div className="flex gap-4">
                <Input
                  className="w-full"
                  id="phone"
                  type="tel"
                  title="Telefone"
                  placeholder="(00) 12345-6789"
                />
                <Input
                  className="w-full"
                  id="name"
                  title="CPF"
                  placeholder="123.456.789-00"
                />
              </div>
              <div className="flex gap-4 mt-auto">
                <Button
                  title="Atualizar"
                  styles="secondary"
                  className="text-xl w-full leading-5"
                />
                <Button
                  onClick={async () => {
                    const success = await signOut();
                    if (success) {
                      router.push("/user/login");
                    }
                  }}
                  title="Sair da conta"
                  className="border-semantic-dark1-0 text-xl w-full leading-5"
                />
              </div>
            </form>
          </article>
          <article className="flex-1 flex flex-col gap-8 max-h-full">
            <div className="flex gap-2 items-center">
              <span className="bg-secondary-01 w-4 h-0.5 block"></span>
              <p className="text-base font-chakra-petch leading-4 text-secondary-10 -tracking-tighter font-medium">
                Dispositivos na conta
              </p>
              <span className="bg-secondary-01 flex-1 h-0.5 block"></span>
            </div>
            <div
              className="flex flex-col gap-4 -800 h-[calc(65vh_-_3.5rem)] overflow-y-auto [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-thumb]:rounded-full
  dark:[&::-webkit-scrollbar-track]:bg-dark-10
  dark:[&::-webkit-scrollbar-thumb]:border-dark-10
  dark:[&::-webkit-scrollbar-thumb]:border-x-3
  dark:[&::-webkit-scrollbar-thumb]:bg-secondary-01"
            >
              <div className="h-20 w-full bg-dark-09 border-2 p-2 border-secondary-01 flex gap-2 items-center">
                <div className="h-full aspect-square">
                  <Image src={test} alt="" className="size-full object-cover" />
                </div>
                <div className="flex flex-col gap-1 h-full items-start pt-1">
                  <p className="text-base font-chakra-petch leading-4 text-secondary-10 -tracking-tighter font-light">
                    Arduino 1.
                  </p>
                  <p className="text-xs font-chakra-petch leading-4 text-dark-03 -tracking-tighter font-light">
                    Wifi: 123Rain
                  </p>
                </div>
              </div>
              <div className="h-20 w-full bg-dark-09 border-2 p-2 border-secondary-01 flex gap-2 items-center">
                <div className="h-full aspect-square">
                  <Image src={test} alt="" className="size-full object-cover" />
                </div>
                <div className="flex flex-col gap-1 h-full items-start pt-1">
                  <p className="text-base font-chakra-petch leading-4 text-secondary-10 -tracking-tighter font-light">
                    Arduino 1.
                  </p>
                  <p className="text-xs font-chakra-petch leading-4 text-dark-03 -tracking-tighter font-light">
                    Wifi: 123Rain
                  </p>
                </div>
              </div>
              <div className="h-20 w-full bg-dark-09 border-2 p-2 border-secondary-01 flex gap-2 items-center">
                <div className="h-full aspect-square">
                  <Image src={test} alt="" className="size-full object-cover" />
                </div>
                <div className="flex flex-col gap-1 h-full items-start pt-1">
                  <p className="text-base font-chakra-petch leading-4 text-secondary-10 -tracking-tighter font-light">
                    Arduino 1.
                  </p>
                  <p className="text-xs font-chakra-petch leading-4 text-dark-03 -tracking-tighter font-light">
                    Wifi: 123Rain
                  </p>
                </div>
              </div>
              <div className="h-20 w-full bg-dark-09 border-2 p-2 border-secondary-01 flex gap-2 items-center">
                <div className="h-full aspect-square">
                  <Image src={test} alt="" className="size-full object-cover" />
                </div>
                <div className="flex flex-col gap-1 h-full items-start pt-1">
                  <p className="text-base font-chakra-petch leading-4 text-secondary-10 -tracking-tighter font-light">
                    Arduino 1.
                  </p>
                  <p className="text-xs font-chakra-petch leading-4 text-dark-03 -tracking-tighter font-light">
                    Wifi: 123Rain
                  </p>
                </div>
              </div>
            </div>
          </article>
        </article>
      </article>
    </main>
  );
};

export default Page;
