import { useUser } from "@/context/useUser";
import { sendGAEvent } from "@next/third-parties/google";
import { MouseEvent, MouseEventHandler } from "react";

export const useGA = () => {
  const { user } = useUser();

  const pageViewGA = () => {
    sendGAEvent({
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

  const loginGA = () => {
    sendGAEvent({
      event: "generate_lead",
      value: {
        method: "email"
      }
    }); 
  };

  const selectContentGA = (e:MouseEvent<HTMLElement>) => {
    console.log("aaa:",e);
    const type = e.target as HTMLElement;
    sendGAEvent({
      event: "select_content",
      value: {
        content_type: type.attributes[1].nodeValue
      }
    });
  };

  return {
    pageViewGA,
    loginGA,
    selectContentGA
  };
};
