"use client";
import Icons from "@/components/cadastro/Icons";
import Form from "@/components/login/Form";
import Link from "@/components/Link";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    const hasUser = sessionStorage.getItem("logged");
    if (hasUser) redirect("/user/perfil");
  }, []);

  return (
    <main className="bg-(image:--bg-pattern) bg-dark-10 text-secondary-10 flex justify-center items-center h-svh w-full">
      <div className="bg-dark-10 p-10 border-2 border-secondary-01 min-w-[480px] flex flex-col">
        <h1 className="text-h6 font-major-mono-display leading-8 text-center">
          Realize o login
        </h1>
        <Form />
        <div className="flex flex-col gap-4 mt-4">
          <div className="w-full flex items-center gap-4">
            <span className="bg-secondary-01 flex-1 h-0.5 "></span>
            <p className="text-sm leading-3 font-light -tracking-tighter w-fit font-chakra-petch ">
              Ou entre com
            </p>
            <span className="bg-secondary-01 flex-1 h-0.5 "></span>
          </div>
          <Icons />
        </div>
        <Link
          href="/user/cadastro"
          className="underline font-light text-sm mx-auto font-chakra-petch leading-3 -tracking-tighter text-center underline-offset-4 mt-8"
        >
          Não tem uma conta?
          <span className="text-secondary-01 underline underline-offset-4">
            {" "}
            Cadastre-se
          </span>
        </Link>
      </div>
    </main>
  );
};

export default Login;
