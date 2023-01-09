import { ReactNode } from "react";
import Progress from "./Progress";
import PlanContext from "../../store/plan-context";
import { useContext } from "react";
import Navigation from "./Navigation";
import Heading from "../Heading";
import Subheading from "../Subheading";

type CardProps = {
  children: ReactNode;
  headingContent: string;
  subHeadingContent: string;
  formFunc?: () => void;
};

const Card = ({ children, headingContent, subHeadingContent }: CardProps) => {
  const { step } = useContext(PlanContext);
  return (
    <div className="absolute w-11/12 max-w-xl p-6 bg-white h-fit shadow-lg top-[6.5rem] rounded-xl md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:grid md:grid-cols-[40%_1fr] md:max-w-5xl md:gap-x-0 md:h-[32rem] md:p-4 lg:h-[40rem]">
      <Progress step={step} />
      <div className="w-full flex flex-col h-full row-span-2 md:pt-10 md:pr-10 md:w-11/12">
        <Heading content={headingContent} />
        <Subheading content={subHeadingContent} />
        {children}
        <Navigation />
      </div>
    </div>
  );
};

export default Card;
