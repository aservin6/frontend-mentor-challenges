import Card from "../UI/Card";
import PlanSelect from "../PlanSelect";

const Two = () => {
  return (
    <Card
      headingContent="Select your plan"
      subHeadingContent="You have the option of monthly or yearly billing."
    >
      <PlanSelect />
    </Card>
  );
};

export default Two;
