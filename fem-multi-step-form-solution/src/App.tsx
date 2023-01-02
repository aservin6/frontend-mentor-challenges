import Progress from "./components/UI/Progress";
import { useContext } from "react";
import One from "./components/Steps/One";
import Two from "./components/Steps/Two";
import Three from "./components/Steps/Three";
import PlanContext from "./store/plan-context";
import Four from "./components/Steps/Four";
import Navigation from "./components/UI/Navigation";

function App() {
  const { step } = useContext(PlanContext);

  return (
    <div className="flex flex-col items-center min-h-screen px-4 bg-no-repeat bg-contain font-primary bg-magnolia bg-mobile md:bg-none">
      {step === 1 && <One />}
      {step === 2 && <Two />}
      {step === 3 && <Three />}
      {step === 4 && <Four />}
    </div>
  );
}

export default App;
