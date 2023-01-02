import { useState, useContext, useEffect } from "react";
import PlanContext from "../store/plan-context";

type FormProps = {
  nameWasTouched: boolean;
  setNameWasTouched: (value: boolean) => void;
  emailWasTouched: boolean;
  setEmailWasTouched: (value: boolean) => void;
  phoneWasTouched: boolean;
  setPhoneWasTouched: (value: boolean) => void;
};

const Form = ({
  nameWasTouched,
  emailWasTouched,
  phoneWasTouched,
  setNameWasTouched,
  setEmailWasTouched,
  setPhoneWasTouched,
}: FormProps) => {
  const { setFormIsValid } = useContext(PlanContext);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");

  const nameIsValid = name.trim().length >= 3;
  const nameIsInvalid = !nameIsValid && nameWasTouched;

  const emailIsValid = email.includes("@");
  const emailIsInvalid = !emailIsValid && emailWasTouched;

  const phoneIsValid = phone.trim().length >= 10;
  const phoneIsInvalid = !phoneIsValid && phoneWasTouched;

  const isValid = nameIsValid && emailIsValid && phoneIsValid;

  useEffect(() => {
    if (isValid) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [isValid]);

  return (
    <>
      <form className="space-y-3 md:space-y-5 md:mt-3">
        <div className="relative flex flex-col ">
          {nameIsInvalid && name.trim().length === 0 && (
            <span className="absolute right-0 text-[0.8125rem] font-bold text-strawberry-red">
              This field is required
            </span>
          )}
          {nameIsInvalid && name.trim().length > 0 && (
            <span className="absolute right-0 text-[0.8125rem] font-bold text-strawberry-red">
              Requires at least 3 characters
            </span>
          )}
          <label
            htmlFor="name"
            className="text-sm font-medium tracking-tight text-marine-blue md:mb-1"
          >
            Name
          </label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            onBlur={() => {
              setNameWasTouched(true);
            }}
            type="text"
            name="name"
            className={`py-2 px-3.5 border border-light-gray rounded font-medium text-marine-blue focus:outline-purplish-blue focus:outline focus:outline-1 ${
              nameIsInvalid && "border-strawberry-red focus:outline-0"
            }`}
            placeholder="e.g. Stephen King"
          />
        </div>
        <div className="relative flex flex-col">
          {emailIsInvalid && email.trim().length === 0 && (
            <span className="absolute right-0 text-[0.8125rem] font-bold text-strawberry-red">
              This field is required
            </span>
          )}
          {emailIsInvalid && email.trim().length > 0 && (
            <span className="absolute right-0 text-[0.8125rem] font-bold text-strawberry-red">
              Must include "@"
            </span>
          )}
          <label
            htmlFor="email"
            className="text-sm font-medium tracking-tight text-marine-blue md:mb-1"
          >
            Email Address
          </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onBlur={() => {
              setEmailWasTouched(true);
            }}
            type="email"
            name="email"
            className={`py-2 px-3.5 border border-light-gray rounded font-medium text-marine-blue focus:outline-purplish-blue focus:outline focus:outline-1 ${
              emailIsInvalid && "border-strawberry-red focus:outline-0"
            }`}
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div className="relative flex flex-col">
          {phoneIsInvalid && phone.trim().length === 0 && (
            <span className="absolute right-0 text-[0.8125rem] font-bold text-strawberry-red">
              This field is required
            </span>
          )}
          {phoneIsInvalid && phone.trim().length > 0 && (
            <span className="absolute right-0 text-[0.8125rem] font-bold text-strawberry-red">
              Requires at least 10 numbers
            </span>
          )}
          <label
            htmlFor="phone"
            className="text-sm font-medium tracking-tight text-marine-blue md:mb-1"
          >
            Phone Number
          </label>
          <input
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            onBlur={() => {
              setPhoneWasTouched(true);
            }}
            type="tel"
            name="phone"
            className={`py-2 px-3.5 border border-light-gray rounded font-medium text-marine-blue focus:outline-purplish-blue focus:outline focus:outline-1 ${
              phoneIsInvalid && "border-strawberry-red focus:outline-0"
            }`}
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </form>
    </>
  );
};

export default Form;
