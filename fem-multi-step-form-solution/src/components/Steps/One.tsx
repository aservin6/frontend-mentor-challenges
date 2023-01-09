import Card from "../UI/Card";
import Form from "../Form";
import { useState } from "react";

const One = () => {

  const [nameWasTouched, setNameWasTouched] = useState(false);
  const [emailWasTouched, setEmailWasTouched] = useState(false);
  const [phoneWasTouched, setPhoneWasTouched] = useState(false);

  const toggleError = () => {
    setNameWasTouched(true);
    setEmailWasTouched(true);
    setPhoneWasTouched(true);
  };

  return (
    <Card
      headingContent="Personal info"
      subHeadingContent="Please provide your name, email address, and phone number."
      formFunc={toggleError}
    >
      <Form
        nameWasTouched={nameWasTouched}
        setNameWasTouched={setNameWasTouched}
        emailWasTouched={emailWasTouched}
        setEmailWasTouched={setEmailWasTouched}
        phoneWasTouched={phoneWasTouched}
        setPhoneWasTouched={setPhoneWasTouched}
      />
    </Card>
  );
};

export default One;
