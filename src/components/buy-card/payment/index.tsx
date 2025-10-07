import React, { useState } from "react";
import AddressForm from "./AddressForm";
import Chose from "./Chose";
import { useFormContext } from "@/context/buy-card/useFormContext";
import InfoSec from "./InfoSec";
import PaymentForm from "./PaymentForm";

const Index = () => {
  const [addressFormOpen, setAddressFormOpen] = useState(false);
  const [paymentFormmOpen, setPaymentFormmOpen] = useState(false);
  const { address, payment } = useFormContext();
  const { neighborhood, number, cep, complement } = address;
  const { cardHolder, cardNumber } = payment;

  const addressTitle = address.address
    ? `${neighborhood}, ${address.address}, Nº${number}`
    : "Escolha o lugar";

  const paymentTitle = cardHolder
    ? "Método de pagamento: Cartão"
    : "Escolha o pagamento";

  const handleCloseAddress = () => {
    if (paymentFormmOpen) {
      setPaymentFormmOpen(false);
      setAddressFormOpen(true);
      return;
    }
    setAddressFormOpen(true);
  };
  const handleClosePayment = () => {
    if (addressFormOpen) {
      setAddressFormOpen(false);
      setPaymentFormmOpen(true);
      return;
    }
    setPaymentFormmOpen(true);
  };

  return (
    <section className=" w-full h-full flex gap-16">
      <section className="flex-1 flex flex-col gap-6">
          
          {addressFormOpen ? (
            <AddressForm setClose={() => setAddressFormOpen(false)} />
          ) : (
            <Chose
              title={addressTitle}
              desc={cep && `CEP: ${cep}, ${complement}`}
              setClose={handleCloseAddress}
            />
          )}


        {paymentFormmOpen ? (
          <PaymentForm setClose={() => setPaymentFormmOpen(false)} />
        ) : (
          <Chose
            title={paymentTitle}
            desc={cardHolder && `${cardHolder}, ${cardNumber?.slice(0, 4)} **** **** ${cardNumber?.slice(-4)}`}
            setClose={handleClosePayment}
          />
        )}
      </section>

      <InfoSec />
    </section>
  );
};

export default Index;
