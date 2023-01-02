import Card from "../UI/Card";
import Heading from "../Heading";
import Subheading from "../Subheading";
import PlanSelect from "../PlanSelect";
import Progress from "../UI/Progress";
import Navigation from "../UI/Navigation";
import PlanContext from "../../store/plan-context";
import { useContext } from "react";

const Two = () => {
  const { step } = useContext(PlanContext);
  return (
    <Card>
      <Progress step={step} />
      <div className="w-full flex flex-col h-full row-span-2 md:pt-10 md:pr-10 md:w-11/12">
        <Heading content={"Select your plan"} />
        <Subheading
          content={"You have the option of monthly or yearly billing."}
        />
        <PlanSelect />
        <Navigation />
      </div>
    </Card>
  );
};

export default Two;
