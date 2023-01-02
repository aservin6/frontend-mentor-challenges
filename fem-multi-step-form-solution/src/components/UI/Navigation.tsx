import { useContext } from "react";
import PlanContext from "../../store/plan-context";

type NavigationProps = {
  toggleError?: () => void;
};

const Navigation = ({ toggleError }: NavigationProps) => {
  const { step, setStep, formIsValid } = useContext(PlanContext);

  return (
    <div className="fixed flex text-sm justify-between bottom-0 left-0 w-full p-3.5 bg-white md:relative md:items-end md:justify-between md:px-0 md:mt-auto">
      {step > 1 ? (
        <button
          onClick={() => setStep(step - 1)}
          className="font-bold text-cool-gray hover:text-marine-blue md:py-2"
        >
          Go Back
        </button>
      ) : (
        <button></button>
      )}

      <button
        onClick={() => {
          if (formIsValid) {
            setStep(step + 1);
          } else if (toggleError) {
            toggleError();
          }
        }}
        className={`py-2 rounded text-magnolia md:rounded-md hover:bg-opacity-80 ${step === 4 ? "bg-purplish-blue px-6" : "bg-marine-blue px-4"}`}
      >
        {step === 4 ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
};

export default Navigation;
