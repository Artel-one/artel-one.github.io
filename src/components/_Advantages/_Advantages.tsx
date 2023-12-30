import * as React from "react";
import Badge from "../Badge";
import DATA from "./data";

const _Advantages = () => {
  return (
    <section
      className="mt-20 px-16 py-12 max-md:mt-10 max-md:max-w-full max-md:px-5"
      id="advantages"
    >
      <div className="container mx-auto mb-32 mt-7 flex w-full flex-col items-stretch max-md:mb-10 max-md:max-w-full">
        <Badge>Advantages</Badge>
        <div className="mx-auto mt-4 text-center font-pj text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
          Why does Reboost.ai outshine similar{" "}
          <br className="hidden md:block" />
          market solutions?
        </div>
        <h2 className="mt-10 max-w-screen-md self-center text-center text-xl leading-9 text-gray-purpure max-md:max-w-full">
          We maximise performance indicators where others{" "}
          <br className="hidden md:block" />
          fail to achieve the same level of efficiency
        </h2>
        <div className="mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-wrap justify-between gap-10 max-md:flex-col max-md:items-stretch max-md:gap-0 lg:gap-4 2xl:gap-16">
            {DATA.map(([image, title, text], index) => (
              <div className="flex w-[30%] grow flex-col items-start rounded-xl bg-white py-10 pl-8 pr-14 shadow-md max-md:ml-0 max-md:mt-6 max-md:w-full max-md:px-5">
                <img
                  loading="lazy"
                  src={image}
                  className="-ml-[6px] size-12 max-w-full overflow-hidden object-contain object-center"
                />
                <div className="mt-5 self-stretch text-2xl font-bold leading-9 text-gray-900">
                  {title}
                </div>
                <div className="mt-8 self-stretch text-base leading-7 text-gray-600">
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default _Advantages;
