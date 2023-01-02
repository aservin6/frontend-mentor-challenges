import { useState, createContext, useEffect } from "react";

type ProviderProps = {
  children: React.ReactNode;
};

interface PlanDetails {
  plan: string;
  billing: string;
  addOns: {id: number, name: string, price: number}[];
}

const PlanContext = createContext({
  step: 1,
  setStep: (value: number) => {},
  formIsValid: false,
  setFormIsValid: (value: boolean) => {},
  planDetails: {
    plan: "",
    billing: "",
    addOns: [{id: 0, name: "", price: 0}],
  },
  setPlanDetails: (details: PlanDetails) => {},
});

export const PlanContextProvider = ({ children }: ProviderProps) => {
  const [step, setStep] = useState(1);
  const [formIsValid, setFormIsValid] = useState(false);
  const [planDetails, setPlanDetails] = useState<PlanDetails>({
    plan: "arcade",
    billing: "monthly",
    addOns: [],
  });

  useEffect(() => {
    setPlanDetails({ ...planDetails, addOns: [] });
  }, [planDetails.billing]);

  return (
    <PlanContext.Provider
      value={{
        step: step,
        setStep: setStep,
        formIsValid: formIsValid,
        setFormIsValid: setFormIsValid,
        planDetails: planDetails,
        setPlanDetails: setPlanDetails,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export default PlanContext;
