import * as React from "react";
import DATA from "./data";

const _Feature3 = () => {
  return (
    <section className="px-4 py-6 sm:px-6 sm:py-16 lg:px-8 lg:py-10">
      <div className="container mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-pj text-lg font-medium text-gray-purpure">
            Three quick results for you
          </p>
          <h2 className="mt-4 font-pj text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
            So how can you get quick results using reboost.ai
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-y-10 text-center sm:mx-auto sm:max-w-sm md:mt-20 md:max-w-full md:grid-cols-3 md:gap-x-6 md:text-left lg:gap-x-16">
          {DATA.map(([title, text1, image, text2], index) => (
            <div key={index}>
              <h3 className="font-pj text-2xl font-bold text-gray-900">
                {title}
              </h3>
              <p className="mt-4 min-h-[80px] font-pj text-base leading-7 text-gray-900">
                {text1}
              </p>

              <img
                className="mx-auto mt-10 w-full rounded-xl object-cover md:mx-0"
                src={image}
                alt=""
              />
              <p className="mt-7 font-pj text-base leading-7 text-gray-700">
                {text2}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default _Feature3;
