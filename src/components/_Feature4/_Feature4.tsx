import * as React from "react";
import tick from "./images/tick.svg";
import DATA from "./data";

const _Feature4 = () => {
  return (
    <section className="px-4 py-6 sm:px-6 sm:py-16 lg:px-8 lg:py-10">
      <div className="container mx-auto max-w-lg px-5 lg:max-w-7xl">
        <h2 className="mx-auto mt-4 max-w-xl text-center font-pj text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
          Even more opportunities for&nbsp;your business
        </h2>

        <div className="mx-auto columns-1 gap-0 py-10 lg:columns-2 lg:py-20">
          {DATA.map(([title, text], index) => (
            <div className="flex gap-8 pl-0 lg:pl-16">
              <img
                loading="lazy"
                src={tick}
                className="aspect-square w-[60px] max-w-full shrink-0 overflow-hidden object-contain object-center"
              />
              <div className="my-5 flex flex-col gap-2">
                <div className="text-xl font-semibold">{title}</div>
                <div className="text-xl">{text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default _Feature4;
