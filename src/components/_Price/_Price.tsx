import * as React from "react";
import fire from "./images/fire.png";
import delimiter from "./images/delimiter.svg";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import icon5 from "./images/icon5.png";
import icon6 from "./images/icon6.png";
import tick from "./images/tick.svg";

const DATA = [
  [
    [icon1, "Cloud Events Tracker", "Unlimited for all events"],
    [icon3, "Data API Access", "Get whatever date you need"],
    [icon5, "Personal Account Manager", "We're always here to help."],
  ],
  [
    [icon2, "Unlimited Accounts", "No charge for extra accounts"],
    [icon4, "Custom Events", "Add any events you want"],
    [
      icon6,
      "All integrations",
      "Easily share your data on your BI-system and other",
    ],
  ],
];

const _Price = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center justify-center self-center rounded-[30px] px-4 pb-12 max-md:mt-10 max-md:max-w-full max-md:px-5 sm:px-6 md:pt-10 lg:px-8">
      <div className="flex w-full max-w-[1184px] flex-col items-center self-center rounded-2xl bg-zinc-900 px-16 pb-7 pt-12 max-md:mt-10 max-md:max-w-full max-md:px-5">
        <div className="flex w-full max-w-[876px] flex-col items-center">
          <div className="text-center text-5xl font-bold text-white">Price</div>
          <div className="mt-7 self-stretch max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
                {[
                  ["Unlimited members", "Admin accounts", "Unlimited Events"],
                  ["Custom events", "API access", "Bulk importer"],
                ].map((block) => (
                  <div className="flex flex-col gap-3">
                    {block.map((text) => (
                      <div className="flex gap-2">
                        <img src={tick} className="size-[20px]" />
                        <div className="text-white">{text}</div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="ml-10 flex w-[53%] flex-col items-stretch max-md:ml-0 max-md:w-full">
                <div className="flex items-stretch justify-between gap-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src={delimiter}
                    className="aspect-[0.09] w-[15px] max-w-full shrink-0 overflow-hidden object-contain object-center max-md:hidden"
                  />
                  <div className="mt-4 flex grow basis-[0%] flex-col items-stretch self-start">
                    <div className="flex flex-col items-stretch pl-6 pr-14 max-md:px-5">
                      <div className="text-lg font-medium leading-8 text-zinc-400">
                        from
                      </div>
                      <div className="mt-5 flex items-stretch gap-4">
                        <div className="whitespace-nowrap font-pj text-5xl font-bold text-white">
                          $3000{" "}
                        </div>
                        <div className="mt-5 grow self-start whitespace-nowrap text-lg font-medium leading-8 text-zinc-400">
                          /month
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-stretch gap-4">
                      <div className="whitespace-nowrap text-3xl font-bold text-white">
                        + success fee
                      </div>{" "}
                      <div className="mt-1.5 grow self-start whitespace-nowrap text-lg font-medium leading-8 text-zinc-400">
                        / KPI-driven
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28 flex px-5 max-md:mt-10 max-md:max-w-full">
        <div className="text-center text-3xl font-bold max-md:max-w-full md:text-5xl">
          <span>
            <img
              src={fire}
              className="mr-5 mt-[-5px] inline-block size-[37px]"
            />
            Fair price
          </span>
          <span className="text-primary"> tied </span>
          to concrete
          <span className="text-primary"> results</span>
        </div>
      </div>
      <div className="mt-16 flex max-w-full flex-col gap-0 self-center max-md:mt-10 sm:w-[623px] md:flex-row md:gap-16">
        {DATA.map((block, blockIndex) => (
          <div className="flex flex-col items-stretch gap-9 max-md:mt-10 md:basis-1/2">
            {block.map(([icon, title, text], index) => (
              <div className="flex items-center gap-4">
                <img loading="lazy" src={icon} className="size-[42px]" />
                <div>
                  <div className="whitespace-nowrap text-lg font-bold text-gray-900">
                    {title}
                  </div>
                  <div className="mt-1 text-sm leading-6 text-gray-600">
                    {text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-14 text-center text-base font-medium text-gray-600 max-md:mt-10">
        All our features are available
      </div>
    </section>
  );
};

export default _Price;
