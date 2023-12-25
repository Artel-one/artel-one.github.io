import * as React from "react";
import Badge from "../Badge";
import dashboard from "./images/dashboard.png";
import tick from "./images/tick.svg";
import delimiter from "./images/delimiter.svg";

const _Dashboard = () => {
  return (
    <section className="border-primary mt-10 border-t border-opacity-30 pt-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Badge>Dashboard</Badge>

        <div className="mx-auto text-center">
          <h2 className="mx-auto mt-12 max-w-[862px] text-center font-pj text-3xl font-bold text-gray-900 max-md:mt-10 max-md:max-w-full sm:text-4xl">
            Control and monitoring always at your fingertips in an accessible
            dashboard
          </h2>
          <div className="mx-auto mt-11 max-w-[750px] text-center text-xl text-gray-purpure max-md:mt-10 max-md:max-w-full">
            To easily monitor your results, we have created a simple dashboard
            where you can follow the results of your experiments and manage your
            data
          </div>
        </div>
        <div className="mx-auto mt-6 w-[800px] max-w-full self-center md:mt-14">
          <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex w-[47%] flex-col items-stretch max-md:ml-0 max-md:w-full">
              <div className="mt-0 flex grow flex-col items-stretch max-md:mt-1">
                <div className="flex items-stretch gap-3 px-5">
                  <img
                    loading="lazy"
                    src={tick}
                    className="aspect-square w-[21px] max-w-full shrink-0 overflow-hidden object-contain object-center"
                  />
                  <div className="self-start text-lg font-bold leading-6 text-zinc-900">
                    Profit analytics and key metrics
                  </div>
                </div>
                <div className="mt-6 flex items-stretch gap-3 px-5">
                  <img
                    loading="lazy"
                    src={tick}
                    className="aspect-square w-[21px] max-w-full shrink-0 overflow-hidden object-contain object-center"
                  />
                  <div className="self-start text-lg font-bold leading-6 text-zinc-900">
                    Cross-cutting sales analytics{" "}
                  </div>
                </div>
                <div className="mt-6 flex items-stretch gap-3 px-5">
                  <img
                    loading="lazy"
                    src={tick}
                    className="aspect-square w-[21px] max-w-full shrink-0 overflow-hidden object-contain object-center"
                  />
                  <div className="grow self-start  text-lg font-bold leading-6 text-zinc-900">
                    Tracking the results of experiments
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-5 flex w-[53%] flex-col items-stretch max-md:ml-0 max-md:w-full">
              <div className="flex grow flex-col items-stretch max-md:mt-5">
                <div className="flex items-stretch gap-3 px-5">
                  <img
                    loading="lazy"
                    src={tick}
                    className="aspect-square w-[21px] max-w-full shrink-0 overflow-hidden object-contain object-center"
                  />
                  <div className="self-start text-lg font-bold leading-6 text-zinc-900">
                    Building profitable audiences
                  </div>
                </div>
                <div className="mt-6 flex items-stretch gap-3 px-5">
                  <img
                    loading="lazy"
                    src={tick}
                    className="aspect-square w-[21px] max-w-full shrink-0 overflow-hidden object-contain object-center"
                  />
                  <div className="grow self-start  text-lg font-bold leading-6 text-zinc-900">
                    Management and status of integrations
                  </div>
                </div>
                <div className="mt-6 flex items-stretch gap-3 px-5">
                  <img
                    loading="lazy"
                    src={tick}
                    className="aspect-square w-[21px] max-w-full shrink-0 overflow-hidden object-contain object-center"
                  />
                  <div className="self-start text-lg font-bold leading-6 text-zinc-900">
                    Dashboard access for employees
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-16 flex max-w-full flex-col items-start justify-center gap-3.5 self-center px-5 max-md:mt-10 max-md:flex-wrap max-md:justify-center sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="text-3xl font-medium text-gray-900 md:text-5xl">
              Unlimited
            </div>
            <div className="text-sm text-gray-900">
              Events
              <br className="hidden sm:block" />
              Tracker
            </div>
          </div>
          <img
            loading="lazy"
            src={delimiter}
            className="mx-12 hidden aspect-[0.39] w-[15px] max-w-full shrink-0 self-stretch overflow-hidden object-contain object-center sm:mx-4 sm:block"
          />
          <div className="flex items-center gap-2">
            <div className="text-3xl font-medium text-gray-900 md:text-5xl">
              Unlimited
            </div>
            <div className="text-sm text-gray-900">
              Account <br className="hidden sm:block" />
              for employees
            </div>
          </div>
        </div>

        <img
          className="mb-[-50px] mt-3 w-full md:mt-[-40px] lg:mt-[-70px]"
          src={dashboard}
          alt=""
        />
      </div>
    </section>
  );
};

export default _Dashboard;
