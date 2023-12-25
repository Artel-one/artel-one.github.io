const Badge = () => {
  return (
    <div className="text-prime mx-auto mb-9 max-w-[340px] items-stretch justify-center whitespace-nowrap rounded-[100px] bg-violet-100 px-8 py-1.5 text-xl leading-9">
      Marketing with full AI power
    </div>
  );
};

import * as React from "react";

const Feature6 = () => {
  return (
    <>
      <section className="bg-white py-12 sm:py-16 lg:py-20 xl:py-24">
        <Badge />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-pj text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Make Your ML Data —{" "}
              <span className="text-prime">Driven Decision</span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base font-normal leading-7 text-gray-purpure lg:mt-6 lg:text-xl lg:leading-8">
              Reboost.ai work in real-time, calculating key metrics for each
              user, enriching with data from ML models
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-5xl sm:mt-16">
            <nav className="flex flex-col items-center justify-between space-y-5 sm:flex-row sm:space-x-10 sm:space-y-0 md:space-x-16">
              <div className="min-w-[210px] pb-2">
                <a
                  href="#"
                  title=""
                  className="border-prime text-prime border-b text-base font-semibold uppercase leading-5 transition-all duration-200"
                >
                  Predictive analytics
                </a>
                <p className="mt-3 text-xs text-gray-700">
                  Accurate predictions across <br className="hidden lg:block" />
                  the entire funnel
                </p>
              </div>

              <div className="min-w-[210px] pb-2">
                <a
                  href="#"
                  title=""
                  className="border-b border-transparent text-base font-semibold uppercase leading-5 text-gray-400 transition-all duration-200 hover:text-gray-900"
                >
                  Smart Audience
                </a>
                <p className="mt-3 text-xs text-gray-400">
                  Building audiences based on user value on the fly
                </p>
              </div>

              <div className="min-w-[210px] pb-2">
                <a
                  href="#"
                  title=""
                  className="border-b border-transparent pb-2 text-base font-semibold uppercase leading-5 text-gray-400 transition-all duration-200 hover:text-gray-900"
                >
                  ML-attribution
                </a>
                <p className="mt-3 text-xs text-gray-400">
                  All users and channels are <br className="hidden lg:block" />
                  at your fingertips
                </p>
              </div>

              <div className="min-w-[210px] pb-2">
                <a
                  href="#"
                  title=""
                  className="border-b border-transparent pb-2 text-base font-semibold uppercase leading-5 text-gray-400 transition-all duration-200 hover:text-gray-900"
                >
                  PersonaliSation
                </a>
                <p className="mt-3 text-xs text-gray-400">
                  High-precision personalisation based on customer behaviour
                </p>
              </div>
            </nav>

            <div className="mt-6 sm:mt-8">
              <img
                className="w-full rounded-2xl shadow-2xl"
                src="https://landingfoliocom.imgix.net/store/collection/saasui/images/features/4/dashboard-mockup.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature6;
