import React from "react";

type HeadingProps = {
  content: string;
};

const Heading = ({ content }: HeadingProps) => {
  return <h2 className="text-2xl font-bold text-marine-blue md:text-3xl">{content}</h2>;
};

export default Heading;
