import Button from "@/components/Button";
import { Apple, CaseIcon, Google } from "@/components/icons";
import Input from "@/components/Input";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <main className="bg-(image:--bg-pattern) bg-dark-10 text-secondary-10 flex justify-center items-center h-svh w-full">
      <form
        action=""
        className="bg-dark-10 p-10 border-2 border-secondary-01 min-w-[480px] flex flex-col"
      >
        <h1 className="text-h6 font-major-mono-display leading-8 text-center">
          Realize o login
        </h1>
        <div className="flex flex-col gap-2 mt-10">
          <div className="w-full flex flex-col gap-4 ">
            <Input title="Email" placeholder="email.g@gmail.com" />
            <Input title="Senha" placeholder="123456789" />
          </div>
          <a
            href="#"
            className="text-sm font-light font-chakra-petch leading-4 -tracking-tighter"
          >
            Esqueceu sua senha?
          </a>
        </div>
        <Button
          styles="secondary"
          className="text-dark-10 w-full mt-8"
          title="Logar"
        />
        <div className="flex flex-col gap-4 mt-4">
          <div className="w-full flex items-center gap-4">
            <span className="bg-secondary-01 flex-1 h-0.5 "></span>
            <p className="text-sm leading-3 font-light -tracking-tighter w-fit font-chakra-petch ">
              Ou entre com
            </p>
            <span className="bg-secondary-01 flex-1 h-0.5 "></span>
          </div>
          <div className="flex gap-40 justify-center w-full">
            <CaseIcon sizes="lg" Icon={<Google className="text-h6" />} desc="Entrar com o Google" />
            <CaseIcon sizes="lg" Icon={<Apple className="text-h6" />} desc="Entrar com a Apple" />
          </div>
        </div>
        <Link
          href="/user/cadastro"
          className="underline font-light text-sm mx-auto font-chakra-petch leading-3 -tracking-tighter text-center underline-offset-4 mt-8"
        >
          Não tem uma conta?
          <span className="text-secondary-01 underline underline-offset-4"> Cadastre-se</span>
        </Link>
      </form>
    </main>
  );
};

export default Login;
