import * as React from "react";
import dashboard from "./images/dashboard.png";

const _Demo = ({ onRequestDemo }: { onRequestDemo: () => void }) => {
  return (
    <section className="bg-secondary mt-10 px-4 max-md:max-w-full max-md:px-5 sm:px-6 lg:px-8">
      <div className="container relative mx-auto flex max-w-7xl px-16 py-10 max-md:mt-10 max-md:max-w-full max-md:px-5">
        <div className="mx-auto mt-16 max-w-[789px] max-md:my-10">
          <div className="text-center text-3xl font-bold text-white max-md:max-w-full lg:text-5xl">
            Drop us a line or two, we're open to any questions and cooperation!
          </div>
          <div className="mx-auto mt-9 max-w-[521px] self-center text-center text-base text-gray-100 max-md:max-w-full">
            We are happy to answer all questions and demonstrate our product and
            its capabilities
          </div>
          <a
            href="#"
            title=""
            onClick={onRequestDemo}
            className="hover:text-secondary mx-auto mt-11 box-border block w-[180px] rounded-xl border border-white p-4 text-center font-pj text-lg font-bold text-white transition-all duration-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            role="button"
          >
            Request demo
          </a>
        </div>
      </div>

      <img
        src={dashboard}
        className="mx-auto mt-[-40px] w-full max-w-[1000px]"
      />
    </section>
  );
};

export default _Demo;
