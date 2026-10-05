import { CardType } from "@/context/buy-card/usePrice";
import { sendGTMEvent } from "@next/third-parties/google";
import { useUser } from "@/context/useUser";

export const useGTM = () => {
  const { user } = useUser();
  const pageViewGTM = () => {
    sendGTMEvent({
      event: "page_view",
      value: {
        page_location: window.location.href,
        client_id: user.cpf,
        language: navigator.language,
        page_encoding: document.characterSet,
        page_title: document.title,
      }
    });
  };

  const loginGTM = () => {
    sendGTMEvent({
      event: "generate_lead",
      value: {
        method: "email"
      }
    }); 
  };

  const selectContentGTM = (e:React.MouseEvent<HTMLElement>) => {
    console.log("aaa:",e);
    const type = e.target as HTMLElement;
    sendGTMEvent({
      event: "select_content",
      value: {
        content_type: type.attributes[1].nodeValue
      }
    });
  };

  const purchaseEvent = (value: number, plan: string, items: CardType[]) => {
    sendGTMEvent({
      event: "purchase",
      ecommerce: {
        currency: "BRL",
        value: value,
        transaction_id: "ID-XXX",
        plan: plan || "None",
        items: items.map((e) => {
          return {
            item_id: e.id,
            item_name: "Janela "+e.nome,
            price: e.price,
            quantity: 1
          };
        })
      },
    });
  };

  return {
    purchaseEvent,
    pageViewGTM,
    loginGTM,
    selectContentGTM
  };
};
