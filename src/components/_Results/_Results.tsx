import * as React from "react";
import delimiter from "./images/delimiter.svg";
import DATA from "./data";

const _Results = () => {
  return (
    <section className="px-4 max-md:max-w-full max-md:px-5 sm:px-6 lg:px-8">
      <div className="bg-secondary container mx-auto flex max-w-[1413px] flex-col items-stretch rounded-[30px] py-14">
        <h2 className="text-center text-4xl font-bold leading-10 text-white xl:text-5xl">
          The results you can achieve
        </h2>
        <img
          loading="lazy"
          src={delimiter}
          className="mt-10 aspect-[13] w-[151px] max-w-full self-center overflow-hidden object-contain object-center"
        />
        <div className="mt-11 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
            {DATA.map(([title, text], index) => (
              <div
                className="flex w-1/4 flex-col max-md:ml-0 max-md:w-full"
                key={index}
              >
                <div className="flex grow flex-col items-stretch max-md:mt-2">
                  <div className="text-center text-5xl font-semibold tracking-tighter text-white max-md:text-4xl md:text-3xl lg:text-6xl">
                    {title}
                  </div>
                  <div className="mt-7 whitespace-nowrap text-center text-base font-medium text-white">
                    {text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default _Results;
