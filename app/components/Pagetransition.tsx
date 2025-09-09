import React from "react";

type Props = {
  className?: string;
};

const Pagetransition = ({ className }: Props) => {
  return (
    <div
      className={`flex flex-col items-center justify-center h-screen w-screen bg-brand-black absolute top-0 left-0 ${className}`}
    ></div>
  );
};

export default Pagetransition;
