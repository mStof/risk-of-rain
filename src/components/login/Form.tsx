"use client";
import { Add, CaseIcon } from "@/components/icons";
import Input from "@/components/Input";
import { auth } from "@/services/database/FirebaseConfig";
import {
  userSchemaLogin,
  userSchemaLoginType
} from "@/utils/schemas/userFormLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";

const Form = () => {
  const [authError, setAuthError] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [signInWithEmailAndPassword] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<userSchemaLoginType>({
    resolver: zodResolver(userSchemaLogin),
    criteriaMode: "all",
    mode: "all",
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const handleFormSubmit = async (data: userSchemaLoginType) => {
    setAuthError("");
    setLoading(true);
    try {
      const res = await signInWithEmailAndPassword(data.email, data.password);
      if (!res) return setAuthError("Credenciais inválidas");
      sessionStorage.setItem("logged", "true");
      router.push("/");

    } catch (err) {
      console.log(err);

    } finally {
      setLoading(false);
    }
  };
  return (
    <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="flex flex-col gap-2 mt-10">
        <div className="w-full flex flex-col gap-4 ">
          <Input
            {...register("email")}
            id="email"
            title="Email"
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
            {...register("password")}
            id="password"
            title="Senha"
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
        </div>
        <a
          href="#"
          className="text-sm font-light font-chakra-petch leading-4 -tracking-tighter"
        >
          Esqueceu sua senha?
        </a>
        {authError && (
          <p className="text-semantic-dark1-0 mt2 font-chakra-petch font-medium text-sm leading-4 -tracking-tighter underline underline-offset-4">
            {authError}*
          </p>
        )}
      </div>
      <Button
        styles="secondary"
        className="text-dark-10 w-full mt-8"
        title="Logar"
        states={loading ? "disabled" : "base"}
      />
    </form>
  );
};

export default Form;
