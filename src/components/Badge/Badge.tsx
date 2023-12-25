import * as React from "react";

const Badge = ({ children }) => {
  return (
    <div className="text-primary mx-auto mb-9 w-fit whitespace-nowrap rounded-[100px] bg-[#EEE3FF] px-8 py-1.5 text-xl leading-9">
      {children}
    </div>
  );
};

export default Badge;
