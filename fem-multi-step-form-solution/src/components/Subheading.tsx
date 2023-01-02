type SubheadingProps = {
  content: string;
};

const Subheading = ({ content }: SubheadingProps) => {
  return <p className="w-full pt-2 pb-4 text-cool-gray md:w-full md:text-lg">{content}</p>;
};

export default Subheading;
