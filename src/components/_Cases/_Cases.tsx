import * as React from "react";
import delimiter from "./images/delimiter.svg";

const DATA = [
  [
    <>
      up to <span className="text-5xl">28%</span>
    </>,
    <>Increased customer retention from 12.7% to 28% in July 2022-July 2023</>,
  ],
  [
    <>
      up to <span className="text-5xl">$206К</span>
    </>,
    <>
      Almost doubled revenues from $105K to $206K after implementing NLP models
    </>,
  ],
  [
    <>
      up to <span className="text-5xl">5</span>
      <span className="font-pj">&#10005;</span>
      <span className="text-5xl"> ROMI</span>
    </>,
    <>
      ROMI increased over 6 months from 95.75% to an average of 515% in
      February-July 2022
    </>,
  ],
];

const _Cases = () => {
  return (
    <section className="px-4 pb-20 max-md:max-w-full max-md:px-5 sm:px-6 lg:px-8">
      <div className="bg-secondary container mx-auto flex max-w-[1413px] flex-col items-stretch rounded-[30px] px-6 py-14 xl:px-[100px] 2xl:px-[140px]">
        <h2 className="text-center text-4xl font-bold leading-10 text-white xl:text-5xl">
          Our cases
        </h2>
        <img
          loading="lazy"
          src={delimiter}
          className="mt-10 aspect-[13] w-[151px] max-w-full self-center overflow-hidden object-contain object-center"
        />
        <div className="mt-11 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-lg:flex-col max-lg:items-stretch xl:gap-20">
            {DATA.map(([title, text], index) => (
              <div
                className="flex w-1/3 flex-col max-lg:w-full max-md:ml-0"
                key={index}
              >
                <div className="flex grow flex-col items-stretch max-md:mt-2">
                  <div className="text-center text-3xl font-semibold tracking-tighter text-white sm:text-left">
                    {title}
                  </div>
                  <div className="mt-7 text-center text-base text-gray-300 sm:text-left">
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

export default _Cases;
