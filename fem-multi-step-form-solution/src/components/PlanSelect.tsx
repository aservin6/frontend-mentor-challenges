import { useContext, useEffect } from "react";
import ArcadeIcon from "../assets/images/icon-arcade.svg";
import AdvancedIcon from "../assets/images/icon-advanced.svg";
import ProIcon from "../assets/images/icon-pro.svg";
import PlanContext from "../store/plan-context";

const PlanSelect = () => {
  const { planDetails, setPlanDetails } = useContext(PlanContext);

  return (
    <>
      <div className="flex flex-col space-y-3 md:grid md:grid-cols-3 md:space-y-0 md:gap-4 md:mt-3">
        <button
          onClick={() =>
            setPlanDetails({
              ...planDetails,
              plan: "arcade",
            })
          }
          className={`flex items-start gap-3.5 px-4 py-3 border rounded-lg border-light-gray hover:border-purplish-blue md:flex-col md:justify-between md:p-3 ${
            planDetails.plan === "arcade" &&
            "border border-purplish-blue bg-alabaster"
          }`}
        >
          <div className="md:mb-7">
            <img src={ArcadeIcon} alt="arcade plan icon" />
          </div>
          <div className="flex flex-col items-start space-y-[0.125rem]">
            <span className="font-medium text-marine-blue">Arcade</span>
            <span className="text-sm font-medium text-cool-gray">
              {planDetails.billing === "monthly" ? "$9/mo" : "$90/yr"}
            </span>
            {planDetails.billing === "yearly" && (
              <span className="text-xs font-medium text-marine-blue">
                2 months free
              </span>
            )}
          </div>
        </button>
        <button
          onClick={() =>
            setPlanDetails({
              ...planDetails,
              plan: "advanced",
            })
          }
          className={`flex items-start gap-3.5 px-4 py-3 border rounded-lg border-light-gray hover:border-purplish-blue md:flex-col md:justify-between md:p-3 ${
            planDetails.plan === "advanced" &&
            "border border-purplish-blue bg-alabaster"
          }`}
        >
          <div className="md:mb-7">
            <img src={AdvancedIcon} alt="advanced plan icon" />
          </div>
          <div className="flex flex-col items-start space-y-[0.125rem]">
            <span className="font-medium text-marine-blue">Advanced</span>
            <span className="text-sm font-medium text-cool-gray">
              {planDetails.billing === "monthly" ? "$12/mo" : "$120/yr"}
            </span>
            {planDetails.billing === "yearly" && (
              <span className="text-xs font-medium text-marine-blue">
                2 months free
              </span>
            )}
          </div>
        </button>
        <button
          onClick={() =>
            setPlanDetails({
              ...planDetails,
              plan: "pro",
            })
          }
          className={`flex items-start gap-3.5 px-4 py-3 border rounded-lg border-light-gray hover:border-purplish-blue md:flex-col md:justify-between md:p-3 ${
            planDetails.plan === "pro" &&
            "border border-purplish-blue bg-alabaster"
          }`}
        >
          <div className="md:mb-7">
            <img src={ProIcon} alt="pro plan icon" />
          </div>
          <div className="flex flex-col items-start space-y-[0.125rem]">
            <span className="font-medium text-marine-blue">Pro</span>
            <span className="text-sm font-medium text-cool-gray">
              {planDetails.billing === "monthly" ? "$15/mo" : "$150/yr"}
            </span>
            {planDetails.billing === "yearly" && (
              <span className="text-xs font-medium text-marine-blue">
                2 months free
              </span>
            )}
          </div>
        </button>
      </div>
      <div className="flex items-center justify-center gap-6 py-2.5 bg-alabaster rounded-md mt-3 md:mt-7 md:py-3.5">
        <span
          className={`text-sm ${
            planDetails.billing === "monthly"
              ? "text-marine-blue font-bold"
              : "text-cool-gray font-medium"
          }`}
        >
          Monthly
        </span>
        <button
          onClick={() => {
            if (planDetails.billing === "monthly") {
              setPlanDetails({
                ...planDetails,
                billing: "yearly",
              });
            } else {
              setPlanDetails({
                ...planDetails,
                billing: "monthly",
              });
            }
          }}
          className="relative px-5 py-2.5 rounded-full bg-marine-blue"
        >
          <div
            className={`absolute p-[0.375rem] -translate-x-1/2 -translate-y-1/2 bg-white rounded-full top-1/2 left-[.625rem] transition-transform ${
              planDetails.billing === "yearly" && "translate-x-[0.875rem]"
            }`}
          ></div>
        </button>
        <span
          className={`text-sm ${
            planDetails.billing === "yearly"
              ? "text-marine-blue font-bold"
              : "text-cool-gray font-medium"
          }`}
        >
          Yearly
        </span>
      </div>
    </>
  );
};

export default PlanSelect;
