import { CaseIcon, Edit } from "@/components/icons";
import { useNavigation } from "@/context/buy-card/useNavigation";
import { usePlan } from "@/context/buy-card/usePlan";
import { usePrice } from "@/context/buy-card/usePrice";
import React from "react";

const Plan = () => {
  const { infos, plan, windows, setPlan } = usePlan();
  const { items, price, setPrice } = usePrice();
  const { setNavigation } = useNavigation();

  // console.log(infos);
  const handlePlan = () => {
    setPrice(-price, -items);
    setPlan({ infos: [], plan: "", price, windows: 0 });
    setNavigation("plans");
  };

  return (
    <>
      <div className="flex flex-col gap-1">
        <div className="flex bg-emrald-500 justify-between">
          <p className="font-chakra-petch text-2xl font-light -tracking-tighter leading-6 ">
            Plano escolhido
          </p>
          <div className="flex gap-4 items-center">
            <p className="font-chakra-petch text-2xl font-light -tracking-tighter leading-6">
              {plan}
            </p>
            <CaseIcon desc="Mude o plano" sizes="sm" Icon={<Edit fill="#fbf7eb" onClick={handlePlan} />} />
          </div>
        </div>
        <span className="w-full h-px bg-secondary-10"></span>
      </div>
      <ul className="list-disc list-inside">
        {infos.map((info, index) => {
          if (index + 1 === infos.length) {
            return (
              <li
                key={index}
                className="font-chakra-petch font-base leading-loose -tracking-tighter font-light"
              >
                {info} ({windows}/{items})
              </li>
            );
          } else {
            return (
              <li
                key={index}
                className="font-chakra-petch font-base leading-loose -tracking-tighter font-light"
              >
                {info}
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};

export default Plan;
