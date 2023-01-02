import { useContext } from "react";
import PlanContext from "../store/plan-context";
import checkmarkIcon from "../assets/images/icon-checkmark.svg";

const AddOnSelect = () => {
  const { planDetails, setPlanDetails } = useContext(PlanContext);

  const toggleAddOn = (id: number, price: number, name: string) => {
    if (planDetails.addOns.some((item) => item.id === id) === true) {
      setPlanDetails({
        ...planDetails,
        addOns: planDetails.addOns.filter((item) => item.id !== id),
      });
    } else {
      setPlanDetails({
        ...planDetails,
        addOns: [...planDetails.addOns, { id: id, name: name, price: price }],
      });
    }
  };

  return (
    <>
      <div className="w-full space-y-3 md:mt-3">
        <button
          onClick={() =>
            toggleAddOn(
              0,
              planDetails.billing === "monthly" ? 1 : 10,
              "Online service"
            )
          }
          className={`flex items-center text-sm border border-light-gray rounded-lg py-3 px-4 w-full hover:border-purplish-blue ${
            planDetails.addOns.some((item) => item.id === 0) &&
            "border-purplish-blue bg-alabaster"
          }`}
        >
          {planDetails.addOns.some((item) => item.id === 0) ? (
            <div className="flex mr-4 items-center justify-center rounded-md bg-purplish-blue aspect-square h-[1.375rem]">
              <img
                src={checkmarkIcon}
                alt="checkmark icon"
                className="rounded-md "
              />
            </div>
          ) : (
            <div className="p-2.5 mr-4 border rounded-md border-light-gray w-fit"></div>
          )}
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-start">
              <span className="font-bold text-marine-blue">Online service</span>
              <span className="text-xs text-cool-gray">
                Access to multiplayer games
              </span>
            </div>
            <span className="text-purplish-blue">
              {planDetails.billing === "monthly" ? "+$1/mo" : "+$10/yr"}
            </span>
          </div>
        </button>

        <button
          onClick={() =>
            toggleAddOn(
              1,
              planDetails.billing === "monthly" ? 2 : 20,
              "Larger storage"
            )
          }
          className={`flex items-center text-sm border border-light-gray rounded-lg py-3 px-4 w-full hover:border-purplish-blue ${
            planDetails.addOns.some((item) => item.id === 1) &&
            "border-purplish-blue bg-alabaster"
          }`}
        >
          {planDetails.addOns.some((item) => item.id === 1) ? (
            <div className="flex mr-4 items-center justify-center rounded-md bg-purplish-blue aspect-square h-[1.375rem]">
              <img
                src={checkmarkIcon}
                alt="checkmark icon"
                className="rounded-md"
              />
            </div>
          ) : (
            <div className="p-2.5 mr-4 border rounded-md border-light-gray w-fit"></div>
          )}
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-start">
              <span className="font-bold text-marine-blue">Larger storage</span>
              <span className="text-xs text-cool-gray">
                Extra 1TB of cloud save
              </span>
            </div>
            <span className="text-purplish-blue">
              {planDetails.billing === "monthly" ? "+$2/mo" : "+$20/yr"}
            </span>
          </div>
        </button>

        <button
          onClick={() =>
            toggleAddOn(
              2,
              planDetails.billing === "monthly" ? 2 : 20,
              "Custom profile"
            )
          }
          className={`flex items-center text-sm border border-light-gray rounded-lg py-3 px-4 w-full hover:border-purplish-blue ${
            planDetails.addOns.some((item) => item.id === 2) &&
            "border-purplish-blue bg-alabaster"
          }`}
        >
          {planDetails.addOns.some((item) => item.id === 2) ? (
            <div className="flex mr-4 items-center justify-center rounded-md bg-purplish-blue aspect-square h-[1.375rem]">
              <img
                src={checkmarkIcon}
                alt="checkmark icon"
                className="rounded-md"
              />
            </div>
          ) : (
            <div className="p-2.5 mr-4 border rounded-md border-light-gray w-fit"></div>
          )}
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col items-start">
              <span className="font-bold text-marine-blue">
                Customizable profile
              </span>
              <span className="text-xs text-cool-gray">
                Custom theme on your profile
              </span>
            </div>
            <span className="text-purplish-blue">
              {planDetails.billing === "monthly" ? "+$2/mo" : "+$20/yr"}
            </span>
          </div>
        </button>
      </div>
    </>
  );
};

export default AddOnSelect;
