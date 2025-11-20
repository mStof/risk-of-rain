import React, { useEffect, useState } from "react";
import Input from "../Input";
import Button from "../Button";
import {
  useAuthState,
  useSignOut,
  useUpdateEmail,
  useUpdatePassword,
  useUpdateProfile
} from "react-firebase-hooks/auth";
import { auth } from "@/services/database/FirebaseConfig";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  userSchemaUpdate,
  userSchemaUpdateType
} from "@/utils/schemas/userFormUpdate";
import { Add, CaseIcon } from "../icons";
import { useRealTimeFirebase } from "@/services/database/useRealTimeFirebase";
import { cpfMask, phoneMask } from "@/utils/masks/cepMask";

const PerfilForm = () => {
  const [signOut] = useSignOut(auth);
  const [loading, setLoading] = useState(false);
  const [user, ,] = useAuthState(auth);
  const [updateEmail, updatingE, errorE] = useUpdateEmail(auth);
  const [updatePassword, updatingPW, errorPW] = useUpdatePassword(auth);
  const [updateProfile, updatingP, errorP] = useUpdateProfile(auth);

  const { selectUser, updateUser } = useRealTimeFirebase();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm<userSchemaUpdateType>({
    resolver: zodResolver(userSchemaUpdate),
    criteriaMode: "all",
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      cpf: "",
      tel: ""
    }
  });

  const [cpf, tel] = watch(["cpf", "tel"]);
  useEffect(() => {
    setValue("cpf", cpfMask(cpf));
    setValue("tel", phoneMask(tel));
  }, [cpf, tel, setValue]);

  useEffect(() => {
    const getUserAuth = () => {
      if (!user?.displayName || !user.email ) return;
      setValue("name", user.displayName);
      setValue("cpf", "");
      setValue("password", "");
      setValue("email", user.email);
      setValue("tel", user.phoneNumber ? user.phoneNumber : "");

    };
    const getUser = async () => {
      if (!user?.email) return;
      const res = await selectUser(user?.email);
      console.log(user);
      if (!res || !res?.length) return getUserAuth();
      
      setValue("name", res[0].name);
      setValue("cpf", res[0].cpf);
      setValue("password", res[0].password);
      setValue("email", res[0].email);
      setValue("tel", res[0].tel);
    };
    getUser();
  }, [user]);

  const handleLogOut = async () => {
    const success = await signOut();

    if (success) {
      sessionStorage.removeItem("logged");
      router.push("/user/login");
    }
  };

  const handleSubmitForm = async (data: userSchemaUpdateType) => {
    setLoading(true);
    try {
      await updateEmail(data.email);
      await updatePassword(data.password);
      await updateProfile({ displayName: data.name });
      await updateUser(data);
      location.reload();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <article className="flex-1 h-full bg-red500 flex flex-col gap-8">
      <div className="flex gap-2 items-center">
        <span className="bg-secondary-01 w-4 h-0.5 block"></span>
        <p className="text-base font-chakra-petch leading-4 text-secondary-10 -tracking-tighter font-medium">
          Informações do perfil
        </p>
        <span className="bg-secondary-01 flex-1 h-0.5 block"></span>
      </div>
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="flex flex-col gap-4 h-full"
      >
        <Input
          {...register("email")}
          id="email"
          title="Email"
          readOnly
          className="opacity-50"
          placeholder="email.g@gmail.com"
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
        <div className="flex gap-4">
          <Input
            {...register("password")}
            className="w-full"
            id="password"
            title="Senha"
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
            placeholder="*******"
          />
          <Input
            {...register("name")}
            className="w-full"
            id="name"
            title="Usuário"
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
            placeholder="Mstof"
          />
        </div>
        <div className="flex gap-4">
          <Input
            {...register("tel")}
            className="w-full"
            id="phone"
            type="tel"
            maxLength={15}
            state={errors.tel ? "error" : "base"}
            icon={
              errors.tel && (
                <CaseIcon
                  Icon={<Add fill="#dc3957" />}
                  colors="error"
                  desc={errors.tel.message}
                />
              )
            }
            title="Telefone"
            placeholder="(00) 12345-6789"
          />
          <Input
            {...register("cpf")}
            className="w-full"
            id="cpf"
            title="CPF"
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
            placeholder="123.456.789-00"
          />
        </div>
        <div className="flex gap-4 mt-auto">
          <Button
            states={loading ? "disabled" : "base"}
            title="Atualizar"
            styles="secondary"
            className="text-xl w-full leading-5"
          />
          <Button
            onClick={handleLogOut}
            type="button"
            title="Sair da conta"
            className="border-semantic-dark1-0 text-xl w-full leading-5"
          />
        </div>
      </form>
    </article>
  );
};

export default PerfilForm;
