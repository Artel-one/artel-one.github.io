const CallToAction = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center lg:w-1/2 lg:pr-8 lg:text-left xl:w-2/5">
          <p className="font-pj text-lg font-medium text-gray-600">
            2,157 people are using
          </p>
          <h2 className="mt-6 font-pj text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
            Rareblocks helps you grow fast
          </h2>

          <ul className="mt-8 space-y-5 lg:mt-16">
            <li className="flex items-center justify-center text-gray-900 lg:justify-start">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="ml-3 font-pj text-lg font-bold">
                {" "}
                150+ Handcoded UI Blocks{" "}
              </span>
            </li>

            <li className="flex items-center justify-center text-gray-900 lg:justify-start">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="ml-3 font-pj text-lg font-bold">
                {" "}
                Fully Responsive on Any Device{" "}
              </span>
            </li>

            <li className="flex items-center justify-center text-gray-900 lg:justify-start">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="ml-3 font-pj text-lg font-bold">
                {" "}
                Just Copy & Paste{" "}
              </span>
            </li>
          </ul>

          <div className="mt-8 flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-5 lg:mt-16 lg:justify-start">
            <a
              href="#"
              title=""
              className="
                        relative
                        inline-flex
                        w-48
                        items-center
                        justify-center
                        rounded-xl
                        border-2
                        border-transparent
                        bg-gray-900
                        px-8
                        py-3
                        font-pj
                        text-base
                        font-bold text-white
                        transition-all
                        duration-200 hover:bg-opacity-90 focus:outline-none focus:ring-2
                        focus:ring-gray-900
                        focus:ring-offset-2
                        sm:w-auto
                    "
              role="button"
            >
              Get Rareblocks
            </a>

            <a
              href="#"
              title=""
              className="
                        sm:w-autojustify-center
                        mt-5
                        inline-flex
                        w-48
                        items-center
                        justify-center
                        rounded-xl
                        border-2
                        border-gray-400
                        px-8
                        py-3
                        font-pj
                        text-base font-bold
                        text-gray-900 transition-all
                        duration-200
                        hover:border-gray-900
                        hover:bg-gray-900 hover:text-white focus:border-gray-900 focus:bg-gray-900
                        focus:text-white
                        focus:outline-none
                        focus:ring-2
                        focus:ring-gray-900
                        focus:ring-offset-2
                        sm:mt-0
                    "
              role="button"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 translate-x-12 lg:absolute lg:bottom-0 lg:right-0 lg:translate-x-96 lg:translate-y-8 xl:translate-x-56 2xl:translate-x-44 2xl:translate-y-24">
        <div className="relative">
          <div className="absolute -inset-2">
            {/*<div className="w-full h-full mx-auto opacity-30 blur-lg filter" style="background: linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)"></div>*/}
          </div>

          <div className="relative">
            <div className="aspect-w-16 aspect-h-12 lg:aspect-none">
              <img
                className="h-full w-full object-cover object-left-top lg:max-w-4xl 2xl:max-w-5xl"
                src="https://cdn.rareblocks.xyz/collection/clarity/images/cta/8/illustration-old.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
