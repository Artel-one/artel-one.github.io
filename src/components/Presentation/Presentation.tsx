import * as React from "react";
import dashboardImage from "./images/dashboard.png";
import titleDecoration from "./images/title_decoration.png";
import titleDecoration2 from "./images/title_decoration_2.png";
import logoImage from "./images/logo.svg";
import { useState } from "react";

const Presentation = ({ onRequestDemo }: { onRequestDemo: () => void }) => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  return (
    <div>
      {isMobileMenuOpened && (
        <div className="z-8 fixed bottom-0 left-0 right-0 top-0 bg-gray-950/50" />
      )}

      {/*<Dialog as="div" className="lg:hidden" open={isMobileMenuOpened} onClose={() => setIsMobileMenuOpened(false)}>*/}
      {/*  <div className="fixed inset-0 z-10" />*/}
      {/*  <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">*/}
      {/*    <div className="flex items-center justify-between">*/}
      {/*      <a href="#" className="-m-1.5 p-1.5">*/}
      {/*        <img*/}
      {/*          className="h-4 w-auto"*/}
      {/*          src={logoImage}*/}
      {/*          alt=""*/}
      {/*        />*/}
      {/*      </a>*/}
      {/*      <button*/}
      {/*        type="button"*/}
      {/*        className="-m-2.5 rounded-md p-2.5 text-gray-700"*/}
      {/*        onClick={() => setMobileMenuOpen(false)}*/}
      {/*      >*/}
      {/*        <span className="sr-only">Close menu</span>*/}
      {/*        <XMarkIcon className="h-6 w-6" aria-hidden="true" />*/}
      {/*      </button>*/}
      {/*    </div>*/}
      {/*    <div className="mt-6 flow-root">*/}
      {/*      <div className="-my-6 divide-y divide-gray-500/10">*/}
      {/*        <div className="space-y-2 py-6">*/}
      {/*          <a*/}
      {/*            href="#"*/}
      {/*            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"*/}
      {/*          >*/}
      {/*            Solutions*/}
      {/*          </a>*/}
      {/*          <a*/}
      {/*            href="#"*/}
      {/*            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"*/}
      {/*          >*/}
      {/*            Features*/}
      {/*          </a>*/}
      {/*          <a*/}
      {/*            href="#"*/}
      {/*            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"*/}
      {/*          >*/}
      {/*            Advantages*/}
      {/*          </a>*/}
      {/*          <a*/}
      {/*            href="#"*/}
      {/*            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"*/}
      {/*          >*/}
      {/*            Cases*/}
      {/*          </a>*/}
      {/*          <a*/}
      {/*            href="#"*/}
      {/*            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"*/}
      {/*          >*/}
      {/*            Price*/}
      {/*          </a>*/}
      {/*          <a*/}
      {/*            href="#"*/}
      {/*            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"*/}
      {/*          >*/}
      {/*            Contact*/}
      {/*          </a>*/}
      {/*        </div>*/}
      {/*        <div className="py-6">*/}
      {/*          /!*<div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-8 xl:space-x-10">*!/*/}
      {/*            <a href="#" title="" onClick={openModal} className="px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-primary border border-transparent rounded-xl hover:opacity-90 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">*/}
      {/*              Request demo*/}
      {/*            </a>*/}
      {/*          /!*</div>*!/*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </Dialog.Panel>*/}
      {/*</Dialog>*/}

      <header className="container mx-auto px-4 py-4 sm:px-6 md:py-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a
              href="#"
              title=""
              className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              <img className="h-5 w-auto" src={logoImage} alt="" />
            </a>
          </div>

          {/*<div className="flex lg:hidden">*/}
          {/*  <button type="button" className="text-gray-900" onClick={() => setMobileMenuOpen(true)}>*/}
          {/*    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
          {/*      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>*/}
          {/*    </svg>*/}
          {/*  </button>*/}
          {/*</div>*/}

          <div className="hidden lg:ml-10 lg:flex lg:items-center lg:justify-center lg:space-x-8 xl:ml-16 xl:space-x-16">
            {/*<a href="#" title="" className="text-base font-semibold text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">*/}
            {/*  Solutions*/}
            {/*</a>*/}

            {/*<a href="#" title="" className="text-base font-semibold text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">*/}
            {/*  Features*/}
            {/*</a>*/}

            {/*<a href="#" title="" className="text-sm font-semibold text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">*/}
            {/*  Advantages*/}
            {/*</a>*/}

            {/*<a href="#" title="" className="text-base font-semibold text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">*/}
            {/*  Cases*/}
            {/*</a>*/}

            {/*<a href="#" title="" className="text-base font-semibold text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">*/}
            {/*  Price*/}
            {/*</a>*/}

            {/*<a href="#" title="" className="text-base font-semibold text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">*/}
            {/*  Contact*/}
            {/*</a>*/}
          </div>

          <div className="lg:ml-auto lg:items-center lg:space-x-8 xl:space-x-10">
            <a
              href="#"
              title=""
              onClick={onRequestDemo}
              className="bg-primary rounded-xl border border-transparent px-5 py-2 font-pj text-base font-bold leading-7 text-white transition-all duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              role="button"
            >
              Request demo
            </a>
          </div>
        </div>
      </header>

      <section className="overflow-hidden pb-12 xl:pb-24">
        <div className="container relative mx-auto pt-12 sm:px-6 lg:px-8">
          <div className="absolute lg:left-[400px] lg:top-[90px] xl:left-[600px] xl:top-[20px] 2xl:left-[733px] 2xl:top-[-56px]">
            <img
              className="hidden h-[753px] min-w-[1087px] lg:block"
              src={dashboardImage}
              alt=""
            />
          </div>

          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto grid max-w-lg grid-cols-1 gap-y-12 lg:max-w-full lg:grid-cols-2 lg:items-center lg:gap-x-16">
              <div>
                <div className="text-center lg:text-left">
                  <h1 className="relative font-pj text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight">
                    <img
                      src={titleDecoration}
                      alt=""
                      className="absolute z-0 hidden h-[110px] w-[372px] sm:top-[-20px] sm:block lg:left-[-63px] lg:top-[-10px]"
                    />
                    <img
                      src={titleDecoration2}
                      alt=""
                      className="absolute bottom-[-30px] z-0 hidden h-[120px] w-[331px] sm:left-[273px] sm:block sm:w-[240px] lg:left-[-20px] lg:w-[310px] xl:left-[263px]"
                    />
                    <span className="relative z-0 font-pj">
                      Maximise your marketing channels efficiency with AI
                    </span>
                  </h1>
                  <p className="mt-2 text-lg text-gray-600 sm:mt-8">
                    We will significantly improve key metrics employing
                    predictive AI analytics and ML algorithms to optimise your
                    marketing activities
                  </p>
                </div>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-7">
                  <a
                    href="#"
                    title=""
                    onClick={onRequestDemo}
                    className="bg-primary rounded-xl border border-transparent px-10 py-3 text-center font-pj text-lg font-bold leading-6 text-white transition-all duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 sm:w-1/2 lg:w-auto"
                    role="button"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    title=""
                    onClick={onRequestDemo}
                    className="border-primary hover:bg-primary box-border rounded-xl border-[3px] px-10 py-3 text-center font-pj text-lg font-bold leading-6 text-black transition-all duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 sm:w-1/2 lg:w-auto"
                    role="button"
                  >
                    Talk to sales
                  </a>
                </div>

                <div className="mt-10 flex items-center justify-center space-x-6 sm:space-x-8 lg:justify-start">
                  <div className="flex items-center">
                    <p>
                      <span className="font-inter text-2xl font-bold text-gray-900 sm:text-4xl">
                        &#10005;
                      </span>
                      <span className="font-pj text-3xl font-bold text-gray-900 sm:text-5xl">
                        2
                      </span>
                    </p>
                    <p className="ml-3 text-sm text-gray-900">
                      <span className="font-bold">Сbuyer</span> with ML-scoring{" "}
                      <br />
                      segments
                    </p>
                  </div>

                  <div className="flex items-center">
                    <p>
                      <span className="font-inter text-2xl font-bold text-gray-900 sm:text-4xl">
                        &#10005;
                      </span>
                      <span className="font-pj text-3xl font-bold text-gray-900 sm:text-5xl">
                        4
                      </span>
                    </p>
                    <p className="ml-3 text-sm text-gray-900">
                      <span className="font-bold">ROMI</span> with ML-scoring{" "}
                      <br />
                      segments
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Presentation;
