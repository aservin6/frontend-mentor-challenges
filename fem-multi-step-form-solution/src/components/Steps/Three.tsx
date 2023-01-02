import Card from "../UI/Card";
import Heading from "../Heading";
import Subheading from "../Subheading";
import AddOnSelect from "../AddOnSelect";
import Progress from "../UI/Progress";
import Navigation from "../UI/Navigation";
import PlanContext from "../../store/plan-context";
import { useContext } from "react";

const Three = () => {
  const { step } = useContext(PlanContext);
  return (
    <Card>
      <Progress step={step} />
      <div className="w-full flex flex-col h-full row-span-2 md:pt-10 md:pr-10 md:w-11/12">
        <Heading content={"Pick add-ons"} />
        <Subheading content={"Add-ons help enhance your gaming experience."} />
        <AddOnSelect />
        <Navigation />
      </div>
    </Card>
  );
};

export default Three;
