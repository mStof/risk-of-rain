import { sendGTMEvent } from "@next/third-parties/google";

export const useGTM = () => {
  const purchaseEvent = (value:any, plan:any, items:any) => {
    sendGTMEvent({
      event: "purchase",
      ecommerce: {
        currency: "BRL",
        value: value,
        transaction_id: "ID-XXX",
        plan: plan || "None",
        items: items.map((e) => {
            item_id: e.id,
            item_name : e.nome,
            price: e.price,
            quantity: 1
        })
      },
    });
  };

  return {
    purchaseEvent
  }
};
