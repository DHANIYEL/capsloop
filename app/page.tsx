import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center text-5xl w-full h-screen">
      <p className="nobel-uno-font font-light">Light text</p>
      <p className="nobel-uno-font font-normal">Regular text</p>
      <p className="nobel-uno-font font-bold leading-tight tracking-tighter">
        Bold text
      </p>
    </div>
  );
};

export default page;
