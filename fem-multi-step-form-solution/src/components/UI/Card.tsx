import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div className="absolute w-11/12 max-w-xl p-6 bg-white h-fit shadow-lg top-[6.5rem] rounded-xl md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:grid md:grid-cols-[40%_1fr] md:max-w-5xl md:gap-x-0 md:h-[32rem] md:p-4 lg:h-[40rem]">
      {children}
    </div>
  );
};

export default Card;
