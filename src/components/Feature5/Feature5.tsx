const Feature5 = () => {
  return (
    <section className="relative bg-gray-800 pt-12 sm:pt-16 lg:pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <img
          className="h-full w-full -translate-y-80 transform object-cover object-top opacity-20"
          src="https://cdn.rareblocks.xyz/collection/clarity/images/features/6/background-pattern.png"
          alt=""
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center xl:max-w-3xl">
          <h2 className="font-pj text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
            Feedbacks from experts help you grow your skills fast
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-pj text-base leading-7 text-gray-100 sm:mt-8">
            Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
            proin faucibus nibh et sagittis a. Lacinia purus ac amet.
          </p>

          <a
            href="#"
            title=""
            className="
                    mt-8
                    inline-flex
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white
                    bg-transparent
                    px-6
                    py-3
                    font-pj
                    text-lg
                    font-bold text-white
                    transition-all
                    duration-200 hover:bg-white
                    hover:text-gray-900 focus:bg-white
                    focus:text-gray-900
                    focus:outline-none
                    focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 sm:mt-11
                "
            role="button"
          >
            Get started now
          </a>
        </div>
      </div>

      <div className="relative mx-auto mt-4 max-w-6xl">
        <img
          className="mx-auto w-full"
          src="https://cdn.rareblocks.xyz/collection/clarity/images/features/6/code.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Feature5;
