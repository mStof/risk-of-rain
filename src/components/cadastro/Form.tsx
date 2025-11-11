/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, userSchemaType } from "@/utils/schemas/userForm";
import { Add, CaseIcon } from "../icons";
import { cpfMask } from "@/utils/masks/cepMask";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/services/database/FirebaseConfig";
import { useRealTimeFirebase } from "@/services/database/useRealTimeFirebase";
import { useRouter } from "next/navigation";

const Form = () => {
  const router = useRouter();
  const [createUserWithEmailAndPassword, , loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [authError, setAuthError] = useState("");
  const { insertUser } = useRealTimeFirebase();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<userSchemaType>({
    resolver: zodResolver(userSchema),
    criteriaMode: "all",
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      cpf: ""
    }
  });

  const cpf = watch("cpf");
  useEffect(() => {
    setValue("cpf", cpfMask(cpf));
  }, [cpf, setValue]);

  const handleFormSubmit = async (data: userSchemaType) => {
    setAuthError("");
    try {
      await createUserWithEmailAndPassword(data.email, data.password);
      if (error?.message) throw error.code;
      insertUser({...data, tel:""});
      sessionStorage.setItem("logged", "true");
      router.push("/");

      reset();
    } catch (error: any) {
      const errMsg =
        error === "auth/email-already-in-use" ? "Email já está em uso" : error;
      setAuthError(errMsg);
      console.warn("Erro ao criar usuário:", error);
    }
  };
  return (
    <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="flex flex-col gap-2 mt-10">
        <div className="w-full flex gap-4 flex-col ">
          <div className="flex gap-4 self-stretch">
            <Input
              {...register("email")}
              id="email"
              title="Email"
              className="flex-1"
              placeholder="email.g@gmail.com"
              state={errors.email ? "error" : "base"}
              icon={
                errors.email && (
                  <CaseIcon
                    Icon={<Add fill="#dc3957" />}
                    colors="error"
                    desc={errors.email.message}
                  />
                )
              }
            />
            <Input
              {...register("name")}
              id="name"
              title="Nome"
              className="flex-1"
              placeholder="Carlos Tobo"
              state={errors.name ? "error" : "base"}
              icon={
                errors.name && (
                  <CaseIcon
                    Icon={<Add fill="#dc3957" />}
                    colors="error"
                    desc={errors.name.message}
                  />
                )
              }
            />
          </div>
          <div className="flex gap-4">
            <Input
              {...register("password")}
              id="password"
              title="Senha"
              className="flex-1"
              type="password"
              placeholder="123456789"
              state={errors.password ? "error" : "base"}
              icon={
                errors.password && (
                  <CaseIcon
                    Icon={<Add fill="#dc3957" />}
                    colors="error"
                    desc={errors.password.message}
                  />
                )
              }
            />
            <Input
              {...register("cpf")}
              id="cpf"
              title="CPF"
              placeholder="123.456.789-00"
              maxLength={14}
              state={errors.cpf ? "error" : "base"}
              icon={
                errors.cpf && (
                  <CaseIcon
                    Icon={<Add fill="#dc3957" />}
                    colors="error"
                    desc={errors.cpf.message}
                  />
                )
              }
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-10">
        {authError && (
          <p className="text-semantic-dark1-0 font-chakra-petch font-medium text-sm leading-4 -tracking-tighter underline underline-offset-4">
            {authError}*
          </p>
        )}

        <Button
          styles="secondary"
          className="text-dark-10 w-full"
          title="Cadastre-se"
          states={loading ? "disabled" : "base"}
        />
      </div>
    </form>
  );
};

export default Form;
