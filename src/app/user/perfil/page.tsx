"use client";
import Header from "@/components/perfil/Header";
import PerfilForm from "@/components/perfil/PerfilForm";
import Container from "@/components/perfil/dispositivos";
import { auth } from "@/services/database/FirebaseConfig";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const Page = () => {
  const [user] = useAuthState(auth);
  useEffect(() => {
    const hasUser = sessionStorage.getItem("logged");
    if (hasUser === "false") return redirect("/user/login");
    if (!user) return redirect("/user/login");
    }, [user]);

  return (
    <main className="text-secondary-10 bg-neutral-bg bg-(image:--bg-pattern) overflow-hidden relative h-screen flex">
      <article className="w-[calc(100vw_-_4rem)] h-[calc(100vh_-_4rem)] m-auto border-secondary-01 border-4 flex flex-col gap-12">
        <Header />
        <article className="px-8 flex flex-5 pb-8 gap-16">
          <PerfilForm />
          <Container />
        </article>
      </article>
    </main>
  );
};

export default Page;
