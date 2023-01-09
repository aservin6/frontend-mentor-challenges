type ProgressProps = {
  step: number;
};

const Progress = ({ step }: ProgressProps) => {
  return (
    <div className="fixed top-0 flex items-center gap-4 py-8 text-sm font-bold -translate-x-1/2 left-1/2 select-none md:relative md:bg-desktop md:bg-contain md:bg-no-repeat md:flex md:flex-col md:items-start md:p-12 md:row-span-2 md:gap-8">
      <div className="uppercase flex items-center gap-3">
        <div
          className={`flex items-center justify-center w-8 h-8 border rounded-full  ${
            step === 1
              ? "text-marine-blue bg-light-blue border-light-blue"
              : "text-alabaster"
          }`}
        >
          1
        </div>
        <div className="hidden md:flex flex-col">
          <span className="text-light-gray font-normal tracking-wide text-sm">
            Step 1
          </span>
          <span className="text-alabaster tracking-widest">Your Info</span>
        </div>
      </div>
      <div className="uppercase flex items-center gap-3">
        <div
          className={`flex items-center justify-center w-8 h-8 border rounded-full  ${
            step === 2
              ? "text-marine-blue bg-light-blue border-light-blue"
              : "text-alabaster"
          }`}
        >
          2
        </div>
        <div className="hidden md:flex flex-col">
          <span className="text-light-gray font-normal tracking-wide text-sm">
            Step 2
          </span>
          <span className="text-alabaster tracking-widest">Select Plan</span>
        </div>
      </div>
      <div className="uppercase flex items-center gap-3">
        <div
          className={`flex items-center justify-center w-8 h-8 border rounded-full  ${
            step === 3
              ? "text-marine-blue bg-light-blue border-light-blue"
              : "text-alabaster"
          }`}
        >
          3
        </div>
        <div className="hidden md:flex flex-col">
          <span className="text-light-gray font-normal tracking-wide text-sm">
            Step 3
          </span>
          <span className="text-alabaster tracking-widest">Add-Ons</span>
        </div>
      </div>
      <div className="uppercase flex items-center gap-3">
        <div
          className={`flex items-center justify-center w-8 h-8 border rounded-full  ${
            step >= 4
              ? "text-marine-blue bg-light-blue border-light-blue"
              : "text-alabaster"
          }`}
        >
          4
        </div>
        <div className="hidden md:flex flex-col">
          <span className="text-light-gray font-normal tracking-wide text-sm">
            Step 4
          </span>
          <span className="text-alabaster tracking-widest">Summary</span>
        </div>
      </div>
    </div>
  );
};

export default Progress;
