import { Fragment } from "react";
import * as React from "react";
import delimiter from "./images/delimiter.svg";
import shadow from "./images/shadow.png";
import DATA from "./data";

const _Feature1 = () => {
  return (
    <section className="bg-secondary relative">
      <img src={shadow} className="absolute bottom-[-80px] h-[200px] w-full" />
      <div className="bg-secondary relative">
        <div className="container mx-auto max-w-lg py-12 sm:pb-8 lg:max-w-7xl lg:pt-8">
          {DATA.map((block, index) => (
            <Fragment key={index}>
              <div className="flex flex-col gap-14 px-4 py-11 sm:px-8 lg:flex-row lg:gap-4 lg:px-10">
                {block.map(([icon, title, text], blockIndex) => (
                  <div
                    className="flex flex-col items-center lg:w-1/3 lg:items-start"
                    key={blockIndex}
                  >
                    <img className="w-14 lg:pl-3" src={icon} alt="" />
                    <p className="mt-8 text-center font-pj text-xl font-bold text-white sm:text-base lg:text-left">
                      {title}
                    </p>
                    <p className="mt-5 text-center text-lg text-gray-300 lg:text-left">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
              {index === 0 && (
                <img
                  src={delimiter}
                  className="mx-auto"
                  alt="delimiter"
                  key={`_${index}`}
                />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default _Feature1;
