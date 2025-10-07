import Button from "@/components/Button";
import { Add, CaseIcon } from "@/components/icons";
import Input from "@/components/Input";
import { useFormContext } from "@/context/buy-card/useFormContext";
import { zipCodeMask } from "@/utils/masks/cepMask";
import { addressSchema, FormData } from "@/utils/schemas/addressForm";
import { AddressData } from "@/utils/types/cepFetch";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";

type AddressFormProps = {
  setClose?: () => void;
};

const AddressForm = ({ setClose }: AddressFormProps) => {
  const { setAddressField } = useFormContext();
  const { handleSubmit, register, watch, setValue, clearErrors, formState } =
    useForm<FormData>({
      criteriaMode: "all",
      mode: "all",
      resolver: zodResolver(addressSchema),
      defaultValues: {
        cep: "",
        address: "",
        neighborhood: "",
        number: "",
        complement: ""
      }
    });

  const { errors } = formState;
  const cep = watch("cep");

  const handleFormSubmit = (data: FormData) => {
    console.log(data);
    setAddressField(data);
    setClose && setClose();
  };

  const handleSetData = useCallback(
    (data: AddressData) => {
      setValue("address", data.logradouro);
      setValue("neighborhood", data.bairro);
      clearErrors(["address", "neighborhood"]);
    },
    [setValue, clearErrors]
  );

  const handleFetchAddress = useCallback(
    async (cep: string) => {
      const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(
        (res) => res.json()
      );
      handleSetData(data);
    },
    [handleSetData]
  );

  useEffect(() => {
    setValue("cep", zipCodeMask(cep));
    if (cep.length !== 9) return;

    handleFetchAddress(cep);
  }, [handleFetchAddress, cep, setValue]);

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <h3 className="text-2xl font-medium font-chakra-petch leading-6 -tracking-tighter">
        Endereços de entrega
      </h3>
      <div className="flex flex-col gap-4">
        <Input
          {...register("cep")}
          id="cep"
          maxLength={9}
          title="CEP"
          placeholder="12345-678"
          state={errors.cep ? "error" : "base"}
          icon={
            errors.cep && (
              <CaseIcon
                Icon={<Add fill="#dc3957" />}
                colors="error"
                desc={errors.cep.message}
              />
            )
          }
        />
        <div className="flex w-full gap-4">
          <Input
            {...register("address")}
            id="address"
            title="Endereço"
            className="flex-1"
            placeholder="R. volta e meia vamos la"
            state={errors.address ? "error" : "base"}
            icon={
              errors.address && (
                <CaseIcon
                  Icon={<Add fill="#dc3957" />}
                  colors="error"
                  desc={errors.address.message}
                />
              )
            }
          />

          <Input
            {...register("neighborhood")}
            id="neighborhood"
            title="Bairro"
            className="flex-1"
            placeholder="Vale do limoeiro"
            state={errors.neighborhood ? "error" : "base"}
            icon={
              errors.neighborhood && (
                <CaseIcon
                  Icon={<Add fill="#dc3957" />}
                  colors="error"
                  desc={errors.neighborhood.message}
                />
              )
            }
          />
        </div>
        <div className="flex w-full gap-4">
          <Input
            {...register("number")}
            id="number"
            title="Número"
            className="flex-1"
            placeholder="00"
            type="number"
            state={errors.number ? "error" : "base"}
            icon={
              errors.number && (
                <CaseIcon
                  Icon={<Add fill="#dc3957" />}
                  colors="error"
                  desc={errors.number.message}
                />
              )
            }
          />
          <Input
            {...register("complement")}
            id="complement"
            title="Complemento"
            className="flex-1"
            placeholder="Casa"
            state={errors.complement ? "error" : "base"}
            icon={
              errors.complement && (
                <CaseIcon
                  Icon={<Add fill="#dc3957" />}
                  colors="error"
                  desc={errors.complement.message}
                />
              )
            }
          />
        </div>
        <Button
          type="submit"
          title="Confirmar"
          className="w-fit text-base"
          sizes="sm"
        />
      </div>
    </form>
  );
};

export default AddressForm;
