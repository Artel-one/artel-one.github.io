import Badge from "../Badge";
import dashboard from "./images/dashboard.png";
import dashboard2 from "./images/dashboard2.png";
import dashboard3 from "./images/dashboard3.png";
import dashboard4 from "./images/dashboard4.png";
import { useState } from "react";
import DATA from "./data";

const _Feature2 = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);

  return (
    <section className="pt-12 sm:pt-16 lg:pt-20 xl:pt-24" id="solutions">
      <div className="container mx-auto max-w-7xl px-5">
        <Badge>Marketing with full AI power</Badge>

        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-pj text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Make Your ML Data —{" "}
            <span className="text-primary">Driven Decision</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base font-normal leading-7 text-gray-purpure lg:mt-6 lg:text-xl lg:leading-8">
            Reboost.ai work in real-time, calculating key metrics for each user,
            enriching with&nbsp;data from ML models
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl sm:mt-16">
          <nav className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:gap-10">
            {DATA.map(([title, text], index) => (
              <div className="flex min-w-full flex-col items-center lg:block lg:min-w-0 lg:max-w-[210px]">
                <a
                  href="#"
                  title=""
                  className={`border-b text-base font-semibold uppercase leading-5 transition-all duration-200 hover:border-primary hover:text-primary ${
                    index === selectedTabIndex
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-400"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedTabIndex(index);
                  }}
                >
                  {title}
                </a>
                <p
                  className={`mt-2 text-xs lg:mt-3 ${
                    index === selectedTabIndex
                      ? "text-gray-700"
                      : "text-gray-400"
                  }`}
                >
                  {text}
                </p>
              </div>
            ))}
          </nav>
        </div>

        {[dashboard, dashboard2, dashboard3, dashboard4].map((image, index) => (
          <img
            className={`w-full ${
              selectedTabIndex === index ? "block" : "hidden"
            }`}
            src={image}
            alt=""
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default _Feature2;
