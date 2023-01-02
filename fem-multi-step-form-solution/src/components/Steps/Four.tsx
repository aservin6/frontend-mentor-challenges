import Heading from "../Heading";
import PlanBreakdown from "../PlanBreakdown";
import Subheading from "../Subheading";
import Card from "../UI/Card";
import Progress from "../UI/Progress";
import Navigation from "../UI/Navigation";
import PlanContext from "../../store/plan-context";
import { useContext } from "react";

const Four = () => {
  const { step } = useContext(PlanContext);

  return (
    <Card>
      <Progress step={step} />
      <div className="w-full flex flex-col h-full row-span-2 md:pt-10 md:pr-10 md:w-11/12">
        <Heading content={"Finishing up"} />
        <Subheading
          content={"Double-check everything looks OK before confirming."}
        />
        <PlanBreakdown />
        <Navigation />
      </div>
    </Card>
  );
};

export default Four;
