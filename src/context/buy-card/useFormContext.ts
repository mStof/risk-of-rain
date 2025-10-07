import { FormData } from "@/utils/schemas/addressForm";
import { PaymentFormData } from "@/utils/schemas/paymentForm";
import { create } from "zustand";

type useFormContextType = {
  address: FormData;
  payment: PaymentFormData;
  setAddressField: (data: FormData) => void;
  setPaymentField: (data: PaymentFormData) => void;
};

export const useFormContext = create<useFormContextType>((set) => ({
  address: {
    address: "",
    cep: "",
    neighborhood: "",
    number: "",
    complement: ""
  },
  payment: {
    cardNumber: "",
    cardHolder: "",
    cpf: "",
    securityCode: "",
    expirationDate: ""
  },
  setAddressField: (data) => set(() => ({ address: data })),
  setPaymentField: (data) => set(() => ({ payment: data }))
}));
