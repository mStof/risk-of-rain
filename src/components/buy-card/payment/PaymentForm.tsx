 
import Button from "@/components/Button";
import { Add, CaseIcon } from "@/components/icons";
import Input from "@/components/Input";
import { useFormContext } from "@/context/buy-card/useFormContext";
import { cardMask, cpfMask, dateMask } from "@/utils/masks/cepMask";
import { PaymentFormData, paymentSchema } from "@/utils/schemas/paymentForm";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

type PaymentFormProps = {
  setClose?: () => void;
};

const PaymentForm = ({setClose}:PaymentFormProps) => {
  const { handleSubmit, register, formState, watch, setValue } =
    useForm<PaymentFormData>({
      criteriaMode: "all",
      mode: "all",
      resolver: zodResolver(paymentSchema),
      defaultValues: {
        cardNumber: "",
        cardHolder: "",
        cpf: "",
        securityCode: "",
        expirationDate: ""
      }
    });
  const {setPaymentField} = useFormContext();

  const { errors } = formState;
  const [cardNumber, cpf, expirationDate] = watch([
    "cardNumber",
    "cpf",
    "expirationDate"
  ]);

  useEffect(() => {
    setValue("cardNumber", cardMask(cardNumber));
    setValue("cpf", cpfMask(cpf));
    setValue("expirationDate", dateMask(expirationDate));
  }, [cardNumber, cpf, expirationDate, setValue]);

  const handleFormSubmit = (data: PaymentFormData) => {
    setPaymentField(data);
    if (setClose) setClose();
  };


  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      className="flex flex-col justify-between h-full"
    >
      <h3 className="text-2xl font-medium font-chakra-petch leading-6 -tracking-tighter">
        Métodos de pagamento
      </h3>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <p className="text-base font-light font-chakra-petch -tracking-tighter leading-4">
            Selecione a forma de pagamento:
          </p>
          <select className="text-base font-light font-chakra-petch -tracking-tighter leading-4">
            <option
              className="bg-dark-10 hover:bg-dark-09 text-base font-light font-chakra-petch -tracking-tighter leading-4"
              value="card"
            >
              Cartão
            </option>
            <option
              className="bg-dark-10 hover:bg-dark-09 text-base font-light font-chakra-petch -tracking-tighter leading-4"
              value="pix"
            >
              PIX
            </option>
            <option
              className="bg-dark-10 hover:bg-dark-09 text-base font-light font-chakra-petch -tracking-tighter leading-4"
              value="boleto"
            >
              Boleto
            </option>
          </select>
        </div>
        <span className="w-full h-px bg-secondary-10"></span>
      </div>
      <div className="flex flex-col gap-4">
        <Input
          {...register("cardNumber")}
          id="cadrNumber"
          maxLength={19}
          title="Número do cartão"
          placeholder="1234 1243 1234 1234"
          state={errors.cardNumber ? "error" : "base"}
          icon={
            errors.cardNumber && (
              <CaseIcon
                Icon={<Add fill="#dc3957" />}
                colors="error"
                desc={errors.cardNumber.message}
              />
            )
          }
        />
        <div className="flex w-full gap-4">
          <Input
            {...register("cardHolder")}
            id="cardHolder"
            title="Nome do titular"
            className="flex-1"
            placeholder="Paulo da silva R."
            state={errors.cardHolder ? "error" : "base"}
            icon={
              errors.cardHolder && (
                <CaseIcon
                  Icon={<Add fill="#dc3957" />}
                  colors="error"
                  desc={errors.cardHolder.message}
                />
              )
            }
          />

          <Input
            {...register("cpf")}
            id="cpf"
            title="CPF"
            className="flex-1"
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
        <div className="flex w-full gap-4">
          <Input
            {...register("securityCode")}
            id="securityCode"
            title="Código de segurança"
            className="flex-1"
            placeholder="123"
            type="number"
            maxLength={3}
            state={errors.securityCode ? "error" : "base"}
            icon={
              errors.securityCode && (
                <CaseIcon
                  Icon={<Add fill="#dc3957" />}
                  colors="error"
                  desc={errors.securityCode.message}
                />
              )
            }
          />
          <Input
            {...register("expirationDate")}
            id="expirationDate"
            title="Vencimento"
            className="flex-1"
            placeholder="MM/AA"
            maxLength={5}
            state={errors.expirationDate ? "error" : "base"}
            icon={
              errors.expirationDate && (
                <CaseIcon
                  Icon={<Add fill="#dc3957" />}
                  colors="error"
                  desc={errors.expirationDate.message}
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

export default PaymentForm;
