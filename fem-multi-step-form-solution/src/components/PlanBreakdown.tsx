import PlanContext from "../store/plan-context";
import { useContext, useEffect, useState } from "react";
import AddOnSelect from "./AddOnSelect";

const PlanBreakdown = () => {
  const { setStep, planDetails } = useContext(PlanContext);

  const handleChangePlan = () => {
    setStep(2);
  };

  const getSubscription = (plan: string, billing: string) => {
    let pricing = 0;
    switch (plan) {
      case "arcade":
        billing === "monthly" ? (pricing = 9) : (pricing = 90);
        break;
      case "advanced":
        billing === "monthly" ? (pricing = 12) : (pricing = 120);
        break;
      case "pro":
        billing === "monthly" ? (pricing = 15) : (pricing = 150);
        break;
    }
    return pricing;
  };

  const subscription = getSubscription(planDetails.plan, planDetails.billing);
  const sumOfAddOns = planDetails.addOns.reduce(
    (sum, addOn) => sum + addOn.price,
    0
  );
  const total = subscription + sumOfAddOns;

  return (
    <>
      <div className="bg-alabaster p-3 rounded-lg md:px-5 md:py-4">
        <div>
          <span className="capitalize text-marine-blue font-bold tracking-tighter">
            {planDetails.plan} ({planDetails.billing})
          </span>
          <div className="flex justify-between items-center border-b pb-2 border-light-gray md:pb-6">
            <button
              className="text-cool-gray underline decoration-2 hover:text-purplish-blue"
              onClick={handleChangePlan}
            >
              Change
            </button>
            <span className="text-marine-blue font-bold tracking-tighter">
              ${subscription}/{planDetails.billing === "monthly" ? "mo" : "yr"}
            </span>
          </div>
        </div>
        <ul className="flex flex-col gap-2 pt-2.5">
          {planDetails.addOns.map((addOn) => {
            return (
              <li className="flex justify-between items-center" key={addOn.id}>
                <span className="text-cool-gray">{addOn.name}</span>
                <span className="text-marine-blue`">
                  +${addOn.price}/
                  {planDetails.billing === "monthly" ? "mo" : "yr"}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex justify-between items-center px-3 pt-6 pb-3">
        <span className="text-cool-gray">
          Total (per {planDetails.billing === "monthly" ? "month" : "year"})
        </span>
        <span className="font-bold text-purplish-blue">
          +${total}/{planDetails.billing === "monthly" ? "mo" : "yr"}
        </span>
      </div>
    </>
  );
};

export default PlanBreakdown;
