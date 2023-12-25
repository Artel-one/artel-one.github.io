const Feature3 = () => {
  return (
    <section className="overflow-hidden bg-gray-50 pt-10 sm:pt-16 lg:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Celebration helps you build beautiful website
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>

        <div className="mx-auto mt-8 flex max-w-lg flex-col items-start justify-center space-y-8 px-10 sm:mt-16 sm:flex-row sm:items-center sm:space-x-6 sm:space-y-0 sm:px-0 lg:max-w-xl lg:space-x-12">
          <div className="flex items-center lg:flex-1">
            <svg
              className="h-14 w-14 flex-shrink-0 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            <p className="ml-4 text-lg font-semibold leading-snug text-black">
              Create powerful websites fast
            </p>
          </div>

          <div className="flex items-center lg:flex-1">
            <svg
              className="h-14 w-14 flex-shrink-0 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <p className="ml-4 text-lg font-semibold leading-snug text-black">
              Easy to customize, ready to launch
            </p>
          </div>
        </div>

        <div className="mt-10 sm:mt-16">
          <img
            className="mx-auto -mb-16 w-full max-w-3xl rounded-lg shadow-xl"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/features/5/dashboard-screenshot.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Feature3;
