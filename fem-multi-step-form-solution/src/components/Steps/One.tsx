import Card from "../UI/Card";
import Heading from "../Heading";
import Subheading from "../Subheading";
import Form from "../Form";
import Progress from "../UI/Progress";
import Navigation from "../UI/Navigation";
import PlanContext from "../../store/plan-context";
import { useContext, useState } from "react";

const One = () => {
  const { step } = useContext(PlanContext);

  const [nameWasTouched, setNameWasTouched] = useState(false);
  const [emailWasTouched, setEmailWasTouched] = useState(false);
  const [phoneWasTouched, setPhoneWasTouched] = useState(false);

  const toggleError = () => {
    setNameWasTouched(true);
    setEmailWasTouched(true);
    setPhoneWasTouched(true);
  };

  return (
    <Card>
      <Progress step={step} />
      <div className="w-full flex flex-col h-full row-span-2 md:pt-10 md:pr-10 md:w-11/12">
        <Heading content={"Personal info"} />
        <Subheading
          content={"Please provide your name, email address, and phone number."}
        />
        <Form
          nameWasTouched={nameWasTouched}
          setNameWasTouched={setNameWasTouched}
          emailWasTouched={emailWasTouched}
          setEmailWasTouched={setEmailWasTouched}
          phoneWasTouched={phoneWasTouched}
          setPhoneWasTouched={setPhoneWasTouched}
        />
      
      <Navigation toggleError={toggleError} />
      </div>
    </Card>
  );
};

export default One;
