import Form from "@/components/cadastro/Form";
import Icons from "@/components/cadastro/Icons";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <main className="bg-(image:--bg-pattern) bg-dark-10 text-secondary-10 flex justify-center items-center h-svh w-full">
      <section className="bg-dark-10 p-10 border-2 border-secondary-01 min-w-[480px] flex flex-col">
        <h1 className="text-h6 font-major-mono-display leading-8 text-center">
          Realize o cadastro
        </h1>
        <Form />
        <div className="flex flex-col gap-6 mt-4">
          <div className="w-full flex items-center gap-4">
            <span className="bg-secondary-01 flex-1 h-0.5 "></span>
            <p className="text-sm leading-3 font-light -tracking-tighter w-fit font-chakra-petch ">
              Ou cadastrese com
            </p>
            <span className="bg-secondary-01 flex-1 h-0.5 "></span>
          </div>
          <Icons />
        </div>
        <Link
          href="/user/login"
          className="underline font-light text-sm mx-auto font-chakra-petch leading-3 -tracking-tighter text-center underline-offset-4 mt-12"
        >
          Já tem uma conta?
          <span className="text-secondary-01 underline underline-offset-4">
            {" "}
            Logue
          </span>
        </Link>
      </section>
    </main>
  );
};

export default Login;
