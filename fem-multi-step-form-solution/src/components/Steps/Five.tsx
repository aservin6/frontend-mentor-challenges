import Progress from "../UI/Progress";
import thankYouIcon from "../../assets/images/icon-thank-you.svg";
import PlanContext from "../../store/plan-context";
import { useContext } from "react";

const Five = () => {
  const { step } = useContext(PlanContext);
  return (
    <div className="absolute w-11/12 max-w-xl px-3.5 py-16 bg-white h-fit shadow-lg top-[6.5rem] rounded-xl md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:grid md:grid-cols-[40%_1fr] md:max-w-5xl md:gap-x-0 md:h-[32rem] md:p-4 lg:h-[40rem]">
      <Progress step={step} />
      <div className="w-full grid place-items-center h-full row-span-2 md:w-11/12 md:flex md:flex-col md:justify-center md:pt-0">
        <div className="mx-auto mb-6">
          <img src={thankYouIcon} className="w-16" alt="Thank You" />
        </div>
        <h2 className="text-2xl font-bold text-marine-blue md:text-3xl text-center">
          Thank you!
        </h2>
        <p className="w-11/12 pt-2 pb-4 text-cool-gray md:w-full md:text-lg text-center md:mb-5">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default Five;
