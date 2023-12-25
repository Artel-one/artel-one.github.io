import { useState } from "react";
import "./App.css";
import "@fontsource/plus-jakarta-sans"; // Defaults to weight 400
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import cookie from "cookiejs";
import CallToAction from "./components/CallToAction";
import Feature from "./components/Feature";
import Feature2 from "./components/Feature2";
import Feature3 from "./components/Feature3";
import Feature4 from "./components/Feature4";
import Feature5 from "./components/Feature5";
import Feature6 from "./components/Feature6";
import Feedback from "./components/Feedback";
import HowWorks from "./components/HowWorks";
import Stats from "./components/Stats";
import Price2 from "./components/Price2";
import * as React from "react";
import Footer from "./components/Footer";
import Presentation from "./components/Presentation";
import RequestModal from "./components/RequestModal";
import CookieConsent from "./components/CookieConsent";
import _Feature1 from "./components/_Feature1";
import _Feature2 from "./components/_Feature2";
import _Feature3 from "./components/_Feature3";
import _Feature4 from "./components/_Feature4";
import _Results from "./components/_Results";
import _Advantages from "./components/_Advantages";
import _Cases from "./components/_Cases";
import _HowItWorks from "./components/_HowItWorks";
import _Dashboard from "./components/_Dashboard";
import _Feedback from "./components/_Feedback";
import _Price from "./components/_Price";
import _Demo from "./components/_Demo";
import _Footer from "./components/_Footer";

const CONSENT_COOKIE_NAME = "consent";

function App() {
  const [isRequestFormOpen, setIsRequestFormOpen] = useState(false);

  const [isCookieConsentOpened, setIsCookieConsentOpened] = useState(
    !cookie(CONSENT_COOKIE_NAME),
  );

  const agreeCookies = () => {
    cookie.set(CONSENT_COOKIE_NAME, "1", { expires: 400 });
    setIsCookieConsentOpened(false);
  };

  const openRequestModal = () => {
    // TODO: перенести
    // setIsSuccessSent(false);
    setIsRequestFormOpen(true);
  };

  const closeRequestModal = () => {
    setIsRequestFormOpen(false);
  };

  return (
    <div className="bg-white2 font-inter">
      {isCookieConsentOpened && (
        <CookieConsent
          onAgree={agreeCookies}
          onDisagree={() => setIsCookieConsentOpened(false)}
        />
      )}
      <RequestModal isVisible={isRequestFormOpen} onClose={closeRequestModal} />
      <Presentation onRequestDemo={openRequestModal} />
      <_Feature1 />
      <_Feature2 />
      <_Feature3 />
      <_Feature4 />
      <_Results />
      <_Advantages />
      <_Cases />
      <_HowItWorks />
      <_Dashboard />
      <_Feedback />
      <_Price />
      <_Demo onRequestDemo={openRequestModal} />
      <_Footer />

      {/*<div className="bg-black text-prime">f6</div>*/}
      {/*<Feature6 />*/}
      {/*<div className="bg-black text-prime">f1</div>*/}
      {/*<Feature />*/}
      {/*<div className="bg-black text-prime">ГАЛКИ</div>*/}
      {/*<div className="text-prime">stats</div>*/}
      {/*<Stats />*/}
      {/*<div className="text-prime">f4</div>*/}
      {/*<Feature4 />*/}
      {/*<div className="text-prime">stats</div>*/}
      {/*<Stats />*/}
      {/*<div className="text-prime">howworks</div>*/}
      {/*<HowWorks />*/}
      {/*<div className="text-prime">f3</div>*/}
      {/*<Feature3 />*/}
      {/*<div className="text-prime">feedback</div>*/}
      {/*<Feedback />*/}
      {/*<div className="text-prime">price2</div>*/}
      {/*<Price2 />*/}
      {/*<div className="text-prime">f5</div>*/}
      {/*<Feature5 />*/}
      {/*<Footer />*/}

      {/*<CallToAction />*/}
      {/*<div className="text-prime">f2</div>*/}
      {/*<Feature2 />*/}

      {/*<div className="flex flex-col bg-neutral-50">*/}
      {/*  <div className="flex w-full flex-col items-stretch self-stretch bg-white pt-4 max-md:max-w-full">*/}
      {/*    <div className="flex w-full flex-col items-stretch px-9 max-md:max-w-full max-md:px-5">*/}
      {/*      <div className="flex w-full items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap">*/}
      {/*        <div className="my-auto flex items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">*/}
      {/*          <img*/}
      {/*            loading="lazy"*/}
      {/*            src="https://cdn.builder.io/api/v1/image/assets/TEMP/06b26a09032976ab8332f84bb13a3f02c3623e0282a0c271e2bedf52b017e057?"*/}
      {/*            className="aspect-[9] w-[171px] max-w-full shrink-0 self-stretch overflow-hidden object-contain object-center"*/}
      {/*          />*/}
      {/*          <div className="my-auto self-center text-sm font-semibold leading-6 text-zinc-900">*/}
      {/*            Solutions*/}
      {/*          </div>*/}
      {/*          <div className="my-auto self-center text-sm font-semibold leading-6 text-zinc-900">*/}
      {/*            Features*/}
      {/*          </div>*/}
      {/*          <div className="mt-1.5 self-start text-sm font-semibold leading-6 text-zinc-900">*/}
      {/*            Advantages*/}
      {/*          </div>*/}
      {/*          <div className="mt-2 self-start text-sm font-semibold leading-6 text-zinc-900">*/}
      {/*            Сases*/}
      {/*          </div>*/}
      {/*          <div className="my-auto self-center text-sm font-semibold leading-6 text-zinc-900">*/}
      {/*            Price*/}
      {/*          </div>*/}
      {/*          <div className="my-auto self-center whitespace-nowrap text-sm font-semibold leading-6 text-zinc-900">*/}
      {/*            Contact*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*        <div className="items-stretch justify-center self-stretch whitespace-nowrap rounded-xl bg-violet-700 px-7 py-3 text-right text-base font-bold leading-6 text-white max-md:px-5">*/}
      {/*          Request demo*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*      <img*/}
      {/*        loading="lazy"*/}
      {/*        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca92145752fd285ab83198d479ea1ad828f0f35ae5ee3619e145d4cb71377d30?"*/}
      {/*        className="ml-12 mt-28 aspect-[1.47] w-[741px] max-w-full self-start overflow-hidden object-contain object-center max-md:mt-10"*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*    <div className="z-[1] mb-0 mt-20 flex w-full flex-col items-center justify-center bg-zinc-900 px-16 py-10 shadow-lg max-md:mb-2.5 max-md:mt-10 max-md:max-w-full max-md:px-5">*/}
      {/*      <div className="w-full max-w-[1250px] max-md:max-w-full">*/}
      {/*        <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">*/}
      {/*          <div className="flex w-[35%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*            <div className="flex grow flex-col items-start justify-center max-md:mt-10">*/}
      {/*              <div className="flex h-[76px] w-[76px] flex-col items-center justify-center rounded-[365.135px] bg-[linear-gradient(0deg,#18181B_0%,#18181B_100%),#6922EC] px-3.5">*/}
      {/*                <img*/}
      {/*                  loading="lazy"*/}
      {/*                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b5ac400aed9c279f0a17bc676d294b7edca14342388c9d116b2ed54e1a36ef2?"*/}
      {/*                  className="aspect-square w-full items-center justify-center overflow-hidden object-contain object-center"*/}
      {/*                />*/}
      {/*              </div>*/}
      {/*              <div className="mt-5 self-stretch text-xl font-bold text-white">*/}
      {/*                Boosted profits*/}
      {/*              </div>*/}
      {/*              <div className="mt-5 self-stretch text-lg font-medium text-zinc-300">*/}
      {/*                Cutting edge advantage  of tailored ML resulting in*/}
      {/*                boosted ROMI, ARPU and reduced CAC, Churn*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <div className="ml-5 flex w-[35%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*            <div className="flex flex-col items-start justify-center max-md:mt-10">*/}
      {/*              <div className="flex h-[76px] w-[76px] flex-col items-center justify-center rounded-[365.135px] bg-[linear-gradient(0deg,#18181B_0%,#18181B_100%),#6922EC] px-3">*/}
      {/*                <img*/}
      {/*                  loading="lazy"*/}
      {/*                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4983914b1cabc45d11a40a5559a882b20daedb1bed0bee8eb849dd8e940d3f9?"*/}
      {/*                  className="aspect-square w-full overflow-hidden object-contain object-center"*/}
      {/*                />*/}
      {/*              </div>*/}
      {/*              <div className="mt-5 self-stretch text-xl font-bold text-white">*/}
      {/*                ML-attribution*/}
      {/*              </div>*/}
      {/*              <div className="mt-5 self-stretch text-lg font-medium text-zinc-300">*/}
      {/*                Find out which marketing channel is most likely to lead to*/}
      {/*                customer conversions*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <div className="ml-5 flex w-[30%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*            <div className="flex grow flex-col items-start justify-center max-md:mt-10">*/}
      {/*              <div className="flex h-[76px] w-[76px] flex-col items-center justify-center rounded-[365.135px] bg-neutral-900 px-3">*/}
      {/*                <img*/}
      {/*                  loading="lazy"*/}
      {/*                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/56b27ad63eb8fd56ed7443a41dcb6cd36fc0e7eda70b4eae76df8ce7bd6c04b8?"*/}
      {/*                  className="aspect-square w-full overflow-hidden object-contain object-center"*/}
      {/*                />*/}
      {/*              </div>*/}
      {/*              <div className="mt-5 self-stretch text-xl font-bold text-white">*/}
      {/*                Predictive analytics*/}
      {/*              </div>*/}
      {/*              <div className="mt-5 self-stretch text-lg font-medium text-zinc-300">*/}
      {/*                Enrich your customer data with accurate predictions of*/}
      {/*                their future actions and value: Lead, Cbuyer, ARPU, LTV...*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="mt-24 flex w-full flex-col items-center justify-center self-stretch bg-zinc-900 px-16 py-12 max-md:mt-10 max-md:max-w-full max-md:px-5">*/}
      {/*    <div className="w-full max-w-[1250px] max-md:max-w-full">*/}
      {/*      <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">*/}
      {/*        <div className="flex w-[35%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*          <div className="flex grow flex-col items-start justify-center max-md:mt-10">*/}
      {/*            <div className="flex h-[76px] w-[76px] flex-col items-center justify-center rounded-[365.135px] bg-[linear-gradient(0deg,#18181B_0%,#18181B_100%),#6922EC] px-3.5">*/}
      {/*              <img*/}
      {/*                loading="lazy"*/}
      {/*                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b5ac400aed9c279f0a17bc676d294b7edca14342388c9d116b2ed54e1a36ef2?"*/}
      {/*                className="aspect-square w-full items-center justify-center overflow-hidden object-contain object-center"*/}
      {/*              />*/}
      {/*            </div>*/}
      {/*            <div className="mt-5 self-stretch text-xl font-bold text-white">*/}
      {/*              Data personalisation*/}
      {/*            </div>*/}
      {/*            <div className="mt-5 self-stretch text-lg font-medium text-zinc-300">*/}
      {/*              Offer personalised pricing and suggestions  to your*/}
      {/*              customers based on their interests  and behaviours*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*        <div className="ml-5 flex w-[35%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*          <div className="flex flex-col items-start justify-center max-md:mt-10">*/}
      {/*            <div className="flex h-[76px] w-[76px] flex-col items-center justify-center rounded-[365.135px] bg-[linear-gradient(0deg,#18181B_0%,#18181B_100%),#6922EC] px-3">*/}
      {/*              <img*/}
      {/*                loading="lazy"*/}
      {/*                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4983914b1cabc45d11a40a5559a882b20daedb1bed0bee8eb849dd8e940d3f9?"*/}
      {/*                className="aspect-square w-full overflow-hidden object-contain object-center"*/}
      {/*              />*/}
      {/*            </div>*/}
      {/*            <div className="mt-5 self-stretch text-xl font-bold text-white">*/}
      {/*              ML-experiments*/}
      {/*            </div>*/}
      {/*            <div className="mt-5 self-stretch text-lg font-medium text-zinc-300">*/}
      {/*              Flexible system of iterative A/B tests  on HADI cycles for*/}
      {/*              marketing activities*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*        <div className="ml-5 flex w-[30%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*          <div className="flex flex-col items-start justify-center max-md:mt-10">*/}
      {/*            <div className="flex h-[76px] w-[76px] flex-col items-center justify-center rounded-[365.135px] bg-neutral-900 px-3">*/}
      {/*              <img*/}
      {/*                loading="lazy"*/}
      {/*                src="https://cdn.builder.io/api/v1/image/assets/TEMP/56b27ad63eb8fd56ed7443a41dcb6cd36fc0e7eda70b4eae76df8ce7bd6c04b8?"*/}
      {/*                className="aspect-square w-full overflow-hidden object-contain object-center"*/}
      {/*              />*/}
      {/*            </div>*/}
      {/*            <div className="mt-5 self-stretch text-xl font-bold text-white">*/}
      {/*              End-to-end analytics*/}
      {/*            </div>*/}
      {/*            <div className="mt-5 self-stretch text-lg font-medium text-zinc-300">*/}
      {/*              Comprehensive customer data from all sites and channels in*/}
      {/*              one place*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="mt-36 items-stretch justify-center self-center whitespace-nowrap rounded-[100px] bg-violet-100 px-8 py-1.5 text-xl leading-9 text-violet-700 max-md:mt-10 max-md:px-5">*/}
      {/*    Marketing with full AI power*/}
      {/*  </div>*/}
      {/*  <div className="mt-11 max-w-[750px] self-center text-center text-5xl font-bold leading-10 text-violet-700 max-md:mt-10 max-md:max-w-full">*/}
      {/*    <span className="text-zinc-900">Make Your ML Data —</span>*/}
      {/*    <span className="text-violet-700"> Driven Decision</span>*/}
      {/*  </div>*/}
      {/*  <div className="mt-12 max-w-screen-md self-center text-center text-xl leading-9 text-gray-500 max-md:mt-10 max-md:max-w-full">*/}
      {/*    Reboost.ai work in real-time, calculating key metrics for each user,*/}
      {/*    enriching with data from ML models*/}
      {/*  </div>*/}
      {/*  <div className="mt-20 flex w-[1001px] max-w-full items-start justify-between gap-5 self-center px-5 max-md:mt-10 max-md:flex-wrap max-md:justify-center">*/}
      {/*    <div className="flex grow basis-[0%] flex-col items-stretch">*/}
      {/*      <div className="whitespace-nowrap text-center text-base font-semibold uppercase leading-5 tracking-wider text-violet-700">*/}
      {/*        Predictive analytics*/}
      {/*      </div>*/}
      {/*      <div className="mt-1.5 h-px shrink-0 bg-violet-700" />*/}
      {/*      <div className="mt-3.5 text-xs leading-5 text-zinc-700">*/}
      {/*        Accurate predictions across  the entire funnel*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="flex grow basis-[0%] flex-col items-stretch self-stretch">*/}
      {/*      <div className="text-center text-base font-semibold uppercase leading-5 tracking-wider text-zinc-400">*/}
      {/*        Smart Audience*/}
      {/*      </div>*/}
      {/*      <div className="mt-5 text-xs leading-5 text-zinc-400">*/}
      {/*        Building audiences based on user value on the fly*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="flex grow basis-[0%] flex-col items-stretch self-stretch">*/}
      {/*      <div className="whitespace-nowrap text-center text-base font-semibold uppercase leading-5 tracking-wider text-zinc-400">*/}
      {/*        ML-attribution*/}
      {/*      </div>*/}
      {/*      <div className="mt-5 text-xs leading-5 text-zinc-400">*/}
      {/*        All users and channels are  at your fingertips*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="flex grow basis-[0%] flex-col items-stretch">*/}
      {/*      <div className="whitespace-nowrap text-center text-base font-semibold uppercase leading-5 tracking-wider text-zinc-400">*/}
      {/*        PersonaliSation*/}
      {/*      </div>*/}
      {/*      <div className="mt-5 text-xs leading-5 text-zinc-400">*/}
      {/*        High-precision personalisation based on customer behaviour*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <img*/}
      {/*    loading="lazy"*/}
      {/*    srcSet="..."*/}
      {/*    className="mt-10 aspect-[1.6] w-[1088px] max-w-full self-center overflow-hidden object-contain object-center"*/}
      {/*  />*/}
      {/*  <div className="mt-32 max-w-[465px] self-center text-center text-lg font-medium leading-8 text-gray-500 max-md:mt-10">*/}
      {/*    Three quick results for you*/}
      {/*  </div>*/}
      {/*  <div className="mt-7 max-w-[612px] self-center text-center text-5xl font-bold leading-10 text-zinc-900 max-md:max-w-full">*/}
      {/*    So how can you get quick results using reboost.ai*/}
      {/*  </div>*/}
      {/*  <div className="mt-20 w-full max-w-[1296px] self-center px-5 max-md:mt-10 max-md:max-w-full">*/}
      {/*    <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">*/}
      {/*      <div className="flex w-[33%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*        <div className="flex grow flex-col items-stretch max-md:mt-10">*/}
      {/*          <div className="text-2xl font-bold leading-9 text-zinc-900">*/}
      {/*            <span className="text-violet-700">Smart targeting</span>*/}
      {/*            <span className="text-zinc-900">*/}
      {/*              {" "}*/}
      {/*              based  on profitable audiences*/}
      {/*            </span>*/}
      {/*          </div>*/}
      {/*          <div className="mt-6 text-base leading-7 text-zinc-900">*/}
      {/*            You will be able to spend your advertising budget solely on*/}
      {/*            those customers who are highly likely to make a purchase*/}
      {/*          </div>*/}
      {/*          <div className="mt-4 flex flex-col items-stretch rounded-xl bg-zinc-900 px-14 pt-10 max-md:px-5">*/}
      {/*            <div className="flex w-full flex-col items-stretch rounded-lg border-[0.915px] border-solid border-[color:var(--gray-200,#E4E4E7)] bg-white pb-1.5 pl-5 pr-20 pt-5 max-md:pr-5">*/}
      {/*              <div className="text-xs font-bold uppercase leading-4 tracking-wider text-zinc-700 max-md:mr-1">*/}
      {/*                Customers*/}
      {/*              </div>*/}
      {/*              <div className="mt-6 flex items-stretch justify-between gap-3.5 max-md:mr-1">*/}
      {/*                <img*/}
      {/*                  loading="lazy"*/}
      {/*                  srcSet="..."*/}
      {/*                  className="aspect-[0.97] w-8 max-w-full shrink-0 overflow-hidden rounded-[50%] object-contain object-center"*/}
      {/*                />*/}
      {/*                <div className="my-auto text-base font-bold leading-6 text-zinc-900">*/}
      {/*                  Jenny Wilson*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*              <div className="mt-5 flex items-stretch justify-between gap-3.5 max-md:mr-1">*/}
      {/*                <img*/}
      {/*                  loading="lazy"*/}
      {/*                  srcSet="..."*/}
      {/*                  className="aspect-[0.97] w-8 max-w-full shrink-0 overflow-hidden rounded-[50%] object-contain object-center"*/}
      {/*                />*/}
      {/*                <div className="my-auto text-base font-bold leading-6 text-zinc-900">*/}
      {/*                  Cody Fisher*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*              <div className="mt-5 flex items-stretch justify-between gap-3.5 max-md:mr-1">*/}
      {/*                <img*/}
      {/*                  loading="lazy"*/}
      {/*                  srcSet="..."*/}
      {/*                  className="aspect-square w-8 max-w-full shrink-0 overflow-hidden rounded-[50%] object-contain object-center"*/}
      {/*                />*/}
      {/*                <div className="my-auto text-base font-bold leading-6 text-zinc-900">*/}
      {/*                  Robert Fox*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*              <div className="mt-5 flex items-stretch justify-between gap-3.5 max-md:mr-1">*/}
      {/*                <img*/}
      {/*                  loading="lazy"*/}
      {/*                  srcSet="..."*/}
      {/*                  className="aspect-[0.97] w-8 max-w-full shrink-0 overflow-hidden rounded-[50%] object-contain object-center"*/}
      {/*                />*/}
      {/*                <div className="my-auto grow self-center whitespace-nowrap text-base font-bold leading-6 text-zinc-900">*/}
      {/*                  Savannah Nguyen*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <div className="mt-9 text-base leading-7 text-zinc-700">*/}
      {/*            Reboost.ai curates high-value audiences for you and integrates*/}
      {/*            them into Meta, Google, etc. ad dashboards. You can utilise*/}
      {/*            these for retargeting or look-alike strategies, effectively*/}
      {/*            reducing ad costs by targeting only profitable users*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*      <div className="ml-5 flex w-[33%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*        <div className="flex grow flex-col items-stretch max-md:mt-10">*/}
      {/*          <div className="text-2xl font-bold leading-9 text-zinc-900">*/}
      {/*            <span className="text-violet-700">Optimising strategy </span>*/}
      {/*            <span className="text-zinc-900">through enriched data</span>*/}
      {/*          </div>*/}
      {/*          <div className="mt-6 text-base leading-7 text-zinc-900">*/}
      {/*            Reduce your expenses by focusing only on those clients who can*/}
      {/*            genuinely bring you revenue*/}
      {/*          </div>*/}
      {/*          <div className="mt-4 flex flex-col items-stretch justify-center rounded-xl bg-zinc-900 px-14 py-9 max-md:px-5">*/}
      {/*            <div className="flex w-full flex-col items-stretch rounded-lg bg-white px-5 py-5 shadow-sm">*/}
      {/*              <div className="flex items-stretch justify-between gap-5">*/}
      {/*                <div className="text-xs font-bold leading-5 text-zinc-900">*/}
      {/*                  Sale Report*/}
      {/*                </div>*/}
      {/*                <div className="text-right text-xs font-bold leading-5 text-zinc-300">*/}
      {/*                  Mar 21-Apr 20*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*              <img*/}
      {/*                loading="lazy"*/}
      {/*                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0997263a14fa2f908cd8c2faa4b74139861c8a5c838c26810239287785205c11?"*/}
      {/*                className="mt-8 aspect-[1.8] w-full overflow-hidden object-contain object-center"*/}
      {/*              />*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*          <div className="mt-9 text-base leading-7 text-zinc-700">*/}
      {/*            Adjust your campaign strategies on Meta and Google advertising*/}
      {/*            dashboards to target customers who generate income for you.*/}
      {/*            Also, concentrate your sales department's efforts on*/}
      {/*            profitable customers*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>{" "}*/}
      {/*      <div className="ml-5 flex w-[33%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*        <div className="flex flex-col items-stretch max-md:mt-10">*/}
      {/*          <div className="text-2xl font-bold leading-9 text-zinc-900">*/}
      {/*            <span className="text-violet-700">Personalised offer </span>*/}
      {/*            <span className="text-zinc-900"> with a precise hit</span>*/}
      {/*          </div>{" "}*/}
      {/*          <div className="mt-6 text-base leading-7 text-zinc-900">*/}
      {/*            Offer your customers precisely what they crave based on their*/}
      {/*            behavior and interests*/}
      {/*          </div>{" "}*/}
      {/*          <div className="mt-12 flex flex-col items-stretch rounded-xl bg-zinc-900 pl-12 pt-10 max-md:mt-10 max-md:pl-5">*/}
      {/*            <div className="z-[1] mb-0 flex flex-col items-stretch rounded-lg border-[0.909px] border-solid border-[color:var(--gray-200,#E4E4E7)] bg-white pb-10 pt-6 shadow-2xl max-md:mb-2.5">*/}
      {/*              <div className="flex flex-col px-5 max-md:pr-5">*/}
      {/*                <div className="flex items-stretch justify-between gap-3 self-stretch">*/}
      {/*                  <img*/}
      {/*                    loading="lazy"*/}
      {/*                    srcSet="..."*/}
      {/*                    className="aspect-[1.03] w-[33px] max-w-full shrink-0 overflow-hidden rounded-[50%] object-contain object-center"*/}
      {/*                  />{" "}*/}
      {/*                  <div className="shrink grow basis-auto self-start text-base font-bold leading-6 text-zinc-900">*/}
      {/*                    Albert Flores*/}
      {/*                  </div>*/}
      {/*                </div>{" "}*/}
      {/*                <div className="max-w-[264px] self-end text-base leading-6 text-zinc-600">*/}
      {/*                  Thanks for the awesome feedback! We are trying to*/}
      {/*                  implement this in our next update. Cheers!*/}
      {/*                </div>{" "}*/}
      {/*                <div className="mt-4 self-center whitespace-nowrap text-xs font-medium leading-5 text-zinc-400">*/}
      {/*                  7 hours ago . Reply*/}
      {/*                </div>{" "}*/}
      {/*                <div className="mt-8 flex items-start gap-3 self-center">*/}
      {/*                  <img*/}
      {/*                    loading="lazy"*/}
      {/*                    srcSet="..."*/}
      {/*                    className="aspect-[1.03] w-[33px] max-w-full shrink-0 overflow-hidden rounded-[50%] object-contain object-center"*/}
      {/*                  />{" "}*/}
      {/*                  <div className="flex grow basis-[0%] flex-col items-stretch">*/}
      {/*                    <div className="text-base font-bold leading-6 text-zinc-900">*/}
      {/*                      Eleanor Pena*/}
      {/*                    </div>{" "}*/}
      {/*                    <div className="mt-5 text-base leading-6 text-zinc-600">*/}
      {/*                      <span className="font-bold text-zinc-900">*/}
      {/*                        @Albert Flores*/}
      {/*                      </span>*/}
      {/*                      <span className=" text-zinc-600">*/}
      {/*                        {" "}*/}
      {/*                        That would be great!*/}
      {/*                      </span>*/}
      {/*                    </div>*/}
      {/*                  </div>*/}
      {/*                </div>*/}
      {/*              </div>{" "}*/}
      {/*              <div className="mt-10 self-start text-base leading-7 text-zinc-700">*/}
      {/*                By discerning who your users are, their interests, and*/}
      {/*                autonomously analysing their behaviour, you can tailor*/}
      {/*                your price offerings and necessary goods and services with*/}
      {/*                pinpoint accuracy, thereby maximising your profit*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>{" "}*/}
      {/*  <div className="mt-32 max-w-[612px] self-center text-center text-5xl font-bold leading-10 text-zinc-900 max-md:mt-10 max-md:max-w-full">*/}
      {/*    Even more opportunities  for your business*/}
      {/*  </div>{" "}*/}
      {/*  <div className="mt-24 flex w-full max-w-[1186px] items-stretch justify-between gap-5 self-center max-md:mt-10 max-md:max-w-full max-md:flex-wrap">*/}
      {/*    <div className="flex items-start justify-between gap-5 px-5">*/}
      {/*      <img*/}
      {/*        loading="lazy"*/}
      {/*        src="https://cdn.builder.io/api/v1/image/assets/TEMP/41a5d98db6694f2f62e0e5e051e415ea340d78b11dd9bec98b9df3707bc5a144?"*/}
      {/*        className="aspect-square w-[60px] max-w-full shrink-0 overflow-hidden object-contain object-center"*/}
      {/*      />{" "}*/}
      {/*      <div className="shrink grow basis-auto text-xl leading-10 text-zinc-800">*/}
      {/*        <span className="font-semibold">Prediction of probabilities</span>*/}
      {/*        <span className="">:  bid, order, purchase, churn, LTV...</span>*/}
      {/*      </div>*/}
      {/*    </div>{" "}*/}
      {/*    <div className="flex items-stretch justify-between gap-5 self-start px-5 max-md:max-w-full max-md:flex-wrap">*/}
      {/*      <img*/}
      {/*        loading="lazy"*/}
      {/*        src="https://cdn.builder.io/api/v1/image/assets/TEMP/41a5d98db6694f2f62e0e5e051e415ea340d78b11dd9bec98b9df3707bc5a144?"*/}
      {/*        className="aspect-square w-[60px] max-w-full shrink-0 overflow-hidden object-contain object-center"*/}
      {/*      />{" "}*/}
      {/*      <div className="my-auto shrink grow basis-auto self-center text-xl leading-10 text-zinc-800">*/}
      {/*        <span className="font-semibold">*/}
      {/*          Personalisation of customers according{" "}*/}
      {/*        </span>*/}
      {/*        <span className=""> to their needs and characteristics</span>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>{" "}*/}
      {/*  <div className="mt-14 flex w-full max-w-[1148px] items-stretch justify-between gap-5 self-center max-md:mt-10 max-md:max-w-full max-md:flex-wrap">*/}
      {/*    <div className="flex items-start justify-between gap-5 px-5">*/}
      {/*      <img*/}
      {/*        loading="lazy"*/}
      {/*        src="https://cdn.builder.io/api/v1/image/assets/TEMP/41a5d98db6694f2f62e0e5e051e415ea340d78b11dd9bec98b9df3707bc5a144?"*/}
      {/*        className="aspect-square w-[60px] max-w-full shrink-0 overflow-hidden object-contain object-center"*/}
      {/*      />{" "}*/}
      {/*      <div className="shrink grow basis-auto text-xl leading-10 text-zinc-800">*/}
      {/*        <span className="font-medium">On-the-fly user profiling</span>*/}
      {/*        <span className="">  and segmentation</span>*/}
      {/*      </div>*/}
      {/*    </div>{" "}*/}
      {/*    <div className="flex items-start justify-between gap-5 self-start px-5 max-md:max-w-full max-md:flex-wrap">*/}
      {/*      <img*/}
      {/*        loading="lazy"*/}
      {/*        src="https://cdn.builder.io/api/v1/image/assets/TEMP/41a5d98db6694f2f62e0e5e051e415ea340d78b11dd9bec98b9df3707bc5a144?"*/}
      {/*        className="aspect-square w-[60px] max-w-full shrink-0 overflow-hidden object-contain object-center"*/}
      {/*      />{" "}*/}
      {/*      <div className="shrink grow basis-auto text-xl leading-10 text-zinc-800">*/}
      {/*        <span className="font-semibold">*/}
      {/*          Prioritisation of potential customers{" "}*/}
      {/*        </span>*/}
      {/*        <span className=""> for the sales department</span>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>{" "}*/}
      {/*  <div className="mt-14 flex w-[1016px] max-w-full items-stretch justify-between gap-5 self-center max-md:mt-10 max-md:flex-wrap">*/}
      {/*    <div className="flex items-start justify-between gap-5 px-5">*/}
      {/*      <img*/}
      {/*        loading="lazy"*/}
      {/*        src="https://cdn.builder.io/api/v1/image/assets/TEMP/41a5d98db6694f2f62e0e5e051e415ea340d78b11dd9bec98b9df3707bc5a144?"*/}
      {/*        className="aspect-square w-[60px] max-w-full shrink-0 overflow-hidden object-contain object-center"*/}
      {/*      />{" "}*/}
      {/*      <div className="shrink grow basis-auto text-xl leading-10 text-zinc-800">*/}
      {/*        <span className="font-semibold">*/}
      {/*          Gathering effective audiences*/}
      {/*        </span>*/}
      {/*        <span className="">  for advertising offices</span>*/}
      {/*      </div>*/}
      {/*    </div>{" "}*/}
      {/*    <div className="flex items-stretch justify-between gap-5 self-start px-5">*/}
      {/*      <img*/}
      {/*        loading="lazy"*/}
      {/*        src="https://cdn.builder.io/api/v1/image/assets/TEMP/41a5d98db6694f2f62e0e5e051e415ea340d78b11dd9bec98b9df3707bc5a144?"*/}
      {/*        className="aspect-square w-[60px] max-w-full shrink-0 overflow-hidden object-contain object-center"*/}
      {/*      />{" "}*/}
      {/*      <div className="my-auto w-[574px] self-center text-xl leading-10 text-zinc-800">*/}
      {/*        <span className="font-semibold">Personalising the price</span>*/}
      {/*        <span className="">  for the customer</span>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>{" "}*/}
      {/*  <div className="mt-14 flex w-full max-w-[1128px] items-start justify-between gap-5 self-center max-md:mt-10 max-md:max-w-full max-md:flex-wrap">*/}
      {/*    <div className="flex items-stretch justify-between gap-5 px-5 max-md:max-w-full max-md:flex-wrap">*/}
      {/*      <img*/}
      {/*        loading="lazy"*/}
      {/*        src="https://cdn.builder.io/api/v1/image/assets/TEMP/41a5d98db6694f2f62e0e5e051e415ea340d78b11dd9bec98b9df3707bc5a144?"*/}
      {/*        className="aspect-square w-[60px] max-w-full shrink-0 overflow-hidden object-contain object-center"*/}
      {/*      />{" "}*/}
      {/*      <div className="my-auto shrink grow basis-auto self-center text-xl leading-10 text-zinc-800">*/}
      {/*        <span className="font-semibold">*/}
      {/*          Forecasting user conversions across*/}
      {/*        </span>*/}
      {/*        <span className=""> the entire sales funnel</span>*/}
      {/*      </div>*/}
      {/*    </div>{" "}*/}
      {/*    <div className="flex items-start justify-between gap-5 self-stretch px-5 max-md:max-w-full max-md:flex-wrap">*/}
      {/*      <img*/}
      {/*        loading="lazy"*/}
      {/*        src="https://cdn.builder.io/api/v1/image/assets/TEMP/41a5d98db6694f2f62e0e5e051e415ea340d78b11dd9bec98b9df3707bc5a144?"*/}
      {/*        className="aspect-square w-[60px] max-w-full shrink-0 overflow-hidden object-contain object-center"*/}
      {/*      />{" "}*/}
      {/*      <div className="shrink grow basis-auto text-xl leading-10 text-zinc-800">*/}
      {/*        <span className="font-semibold">*/}
      {/*          A/B testing system with AI control*/}
      {/*        </span>*/}
      {/*        <span className="">  and results analysis</span>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>{" "}*/}
      {/*  <div className="mt-14 flex w-full max-w-[1134px] items-start justify-between gap-5 self-center max-md:mt-10 max-md:max-w-full max-md:flex-wrap">*/}
      {/*    <div className="flex items-stretch justify-between gap-5 px-5 max-md:max-w-full max-md:flex-wrap">*/}
      {/*      <img*/}
      {/*        loading="lazy"*/}
      {/*        src="https://cdn.builder.io/api/v1/image/assets/TEMP/41a5d98db6694f2f62e0e5e051e415ea340d78b11dd9bec98b9df3707bc5a144?"*/}
      {/*        className="aspect-square w-[60px] max-w-full shrink-0 overflow-hidden object-contain object-center"*/}
      {/*      />{" "}*/}
      {/*      <div className="my-auto shrink grow basis-auto self-center text-xl leading-10 text-zinc-800">*/}
      {/*        <span className="font-semibold">*/}
      {/*          Optimisation of advertising campaigns{" "}*/}
      {/*        </span>*/}
      {/*        <span className=""> with revenue maximisation</span>*/}
      {/*      </div>*/}
      {/*    </div>{" "}*/}
      {/*    <div className="flex items-start justify-between gap-5 self-stretch px-5 max-md:max-w-full max-md:flex-wrap">*/}
      {/*      <img*/}
      {/*        loading="lazy"*/}
      {/*        src="https://cdn.builder.io/api/v1/image/assets/TEMP/41a5d98db6694f2f62e0e5e051e415ea340d78b11dd9bec98b9df3707bc5a144?"*/}
      {/*        className="aspect-square w-[60px] max-w-full shrink-0 overflow-hidden object-contain object-center"*/}
      {/*      />{" "}*/}
      {/*      <div className="shrink grow basis-auto text-xl leading-10 text-zinc-800">*/}
      {/*        <span className="font-semibold">*/}
      {/*          End-to-End analytics with revenue*/}
      {/*        </span>*/}
      {/*        <span className="">  and CAC and ROMI predictions</span>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>{" "}*/}
      {/*  <div className="mt-36 flex w-full max-w-[1413px] flex-col items-center justify-center self-center rounded-[30px] bg-[linear-gradient(0deg,#18181B_0%,#18181B_100%),#6922EC] px-16 py-12 max-md:mt-10 max-md:max-w-full max-md:px-5">*/}
      {/*    <div className="mb-5 mt-5 flex w-[1040px] max-w-full flex-col items-stretch">*/}
      {/*      <div className="max-w-[550px] self-center text-center text-5xl font-bold leading-10 text-white max-md:max-w-full">*/}
      {/*        The results you can achieve*/}
      {/*      </div>{" "}*/}
      {/*      <img*/}
      {/*        loading="lazy"*/}
      {/*        src="https://cdn.builder.io/api/v1/image/assets/TEMP/95e7c49952fc923a74725e3605e61ebddf7f88b37d8418a5b929ce29e1d659f5?"*/}
      {/*        className="mt-10 aspect-[12.58] w-[151px] max-w-full self-center overflow-hidden object-contain object-center"*/}
      {/*      />{" "}*/}
      {/*      <div className="mt-11 max-md:mt-10 max-md:max-w-full">*/}
      {/*        <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">*/}
      {/*          <div className="flex w-[84%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*            <div className="grow max-md:mt-10 max-md:max-w-full">*/}
      {/*              <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">*/}
      {/*                <div className="flex w-[36%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*                  <div className="flex grow flex-col items-stretch max-md:mt-10">*/}
      {/*                    <div className="text-center text-5xl font-semibold leading-[62px] tracking-tighter text-white max-md:text-4xl max-md:leading-[53px]">*/}
      {/*                      -80%*/}
      {/*                      <br />*/}
      {/*                      CAC{" "}*/}
      {/*                    </div>{" "}*/}
      {/*                    <div className="mt-7 whitespace-nowrap text-center text-base font-medium leading-6 text-white">*/}
      {/*                      Reducing up to*/}
      {/*                    </div>*/}
      {/*                  </div>*/}
      {/*                </div>{" "}*/}
      {/*                <div className="ml-5 flex w-[33%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*                  <div className="flex grow flex-col items-stretch max-md:mt-10">*/}
      {/*                    <div className="text-center text-5xl font-semibold leading-[62px] tracking-tighter text-white max-md:text-4xl max-md:leading-[53px]">*/}
      {/*                      +400%  ROMI{" "}*/}
      {/*                    </div>{" "}*/}
      {/*                    <div className="mt-7 whitespace-nowrap text-center text-base font-medium leading-6 text-white">*/}
      {/*                      increased up to 5 times*/}
      {/*                    </div>*/}
      {/*                  </div>*/}
      {/*                </div>{" "}*/}
      {/*                <div className="ml-5 flex w-[31%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*                  <div className="flex grow flex-col items-stretch max-md:mt-10">*/}
      {/*                    <div className="text-center text-5xl font-semibold leading-[62px] tracking-tighter text-white max-md:text-4xl max-md:leading-[53px]">*/}
      {/*                      +200% <br />*/}
      {/*                      LTV{" "}*/}
      {/*                    </div>{" "}*/}
      {/*                    <div className="mt-7 whitespace-nowrap text-center text-base font-medium leading-6 text-white">*/}
      {/*                      increase up to 2 times*/}
      {/*                    </div>*/}
      {/*                  </div>*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>{" "}*/}
      {/*          <div className="ml-5 flex w-[16%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*            <div className="flex grow flex-col items-stretch max-md:mt-10">*/}
      {/*              <div className="text-center text-5xl font-semibold leading-[62px] tracking-tighter text-white max-md:text-4xl max-md:leading-[53px]">*/}
      {/*                -70% <br />*/}
      {/*                Churn{" "}*/}
      {/*              </div>{" "}*/}
      {/*              <div className="mt-7 whitespace-nowrap text-center text-base font-medium leading-6 text-white">*/}
      {/*                Reduction up to{" "}*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>{" "}*/}
      {/*  <div className="mt-20 flex w-full flex-col items-center justify-center self-stretch bg-neutral-50 px-16 py-12 max-md:mt-10 max-md:max-w-full max-md:px-5">*/}
      {/*    <div className="mb-32 mt-7 flex w-full max-w-[1342px] flex-col items-stretch max-md:mb-10 max-md:max-w-full">*/}
      {/*      <div className="items-stretch justify-center self-center whitespace-nowrap rounded-[100px] bg-violet-100 px-8 py-1.5 text-xl leading-9 text-violet-700 max-md:px-5">*/}
      {/*        Advantages*/}
      {/*      </div>{" "}*/}
      {/*      <div className="mt-11 max-w-[775px] self-center text-center text-5xl font-bold leading-10 text-zinc-900 max-md:mt-10 max-md:max-w-full">*/}
      {/*        Why does Reboost.ai outshine similar market solutions?*/}
      {/*      </div>{" "}*/}
      {/*      <div className="mt-10 max-w-screen-md self-center text-center text-xl leading-9 text-gray-500 max-md:max-w-full">*/}
      {/*        We maximise performance indicators where others  fail to achieve*/}
      {/*        the same level of efficiency*/}
      {/*      </div>{" "}*/}
      {/*      <div className="mt-16 max-md:mt-10 max-md:max-w-full">*/}
      {/*        <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">*/}
      {/*          <div className="flex w-[33%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*            <div className="flex w-full grow flex-col items-start rounded-xl bg-white py-10 pl-8 pr-14 shadow-sm max-md:mt-10 max-md:px-5">*/}
      {/*              <img*/}
      {/*                loading="lazy"*/}
      {/*                src="https://cdn.builder.io/api/v1/image/assets/TEMP/49d66e2a0fb9c1bdb6bfc493d09e26a630dfe6a737519546f443a236deeb1996?"*/}
      {/*                className="aspect-[0.98] w-[49px] max-w-full overflow-hidden object-contain object-center"*/}
      {/*              />{" "}*/}
      {/*              <div className="mt-7 self-stretch text-2xl font-bold leading-9 text-zinc-900">*/}
      {/*                Phenomenal (95%) prediction accuracy*/}
      {/*              </div>{" "}*/}
      {/*              <div className="mt-8 self-stretch text-base leading-7 text-zinc-600">*/}
      {/*                Predictions that our models provide show their*/}
      {/*                effectiveness by analyzing a huge number of user*/}
      {/*                behavioral factors and by optimizing models that take into*/}
      {/*                account the specifics of your business.*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>{" "}*/}
      {/*          <div className="ml-5 flex w-[33%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*            <div className="flex w-full grow flex-col items-start rounded-xl bg-white px-8 py-12 shadow-sm max-md:mt-10 max-md:px-5">*/}
      {/*              <img*/}
      {/*                loading="lazy"*/}
      {/*                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ce984c5274342d05f40add8ebf2900a9478f141828693481e55a19330965802?"*/}
      {/*                className="aspect-square w-[49px] max-w-full overflow-hidden object-contain object-center"*/}
      {/*              />{" "}*/}
      {/*              <div className="mt-5 self-stretch text-2xl font-bold leading-9 text-zinc-900">*/}
      {/*                Assured KPI results*/}
      {/*              </div>{" "}*/}
      {/*              <div className="mb-12 mt-11 self-stretch text-base leading-7 text-zinc-600 max-md:my-10">*/}
      {/*                We pledge to reach agreed KPIs, with the final fee for our*/}
      {/*                service dependent on how effectively we achieve desired*/}
      {/*                outcomes.*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>{" "}*/}
      {/*          <div className="ml-5 flex w-[33%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*            <div className="flex w-full grow flex-col items-start rounded-xl bg-white py-11 pl-8 pr-9 shadow-sm max-md:mt-10 max-md:px-5">*/}
      {/*              <img*/}
      {/*                loading="lazy"*/}
      {/*                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8914ffd398a287fedc38298143dc107c9c3580e8e0980db772ad5adf900c9531?"*/}
      {/*                className="aspect-square w-[49px] max-w-full overflow-hidden object-contain object-center"*/}
      {/*              />{" "}*/}
      {/*              <div className="mt-7 self-stretch text-2xl font-bold leading-9 text-zinc-900">*/}
      {/*                Emphasis on your  business goals*/}
      {/*              </div>{" "}*/}
      {/*              <div className="mb-4 mt-8 self-stretch text-base leading-7 text-zinc-600">*/}
      {/*                We adopt an individualised approach for each client. Our*/}
      {/*                experts fine-tune the specifics of your business and*/}
      {/*                adjust models to cater to your interests.*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>{" "}*/}
      {/*      <div className="mt-20 max-md:mt-10 max-md:max-w-full">*/}
      {/*        <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">*/}
      {/*          <div className="flex w-[33%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*            <div className="flex w-full grow flex-col items-start rounded-xl bg-white py-11 pl-8 pr-12 shadow-sm max-md:mt-10 max-md:px-5">*/}
      {/*              <img*/}
      {/*                loading="lazy"*/}
      {/*                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c2c1002681327d9a650030fbfe68f74f74a0aee986077aab9983f38ef1b8ef1?"*/}
      {/*                className="aspect-square w-[49px] max-w-full overflow-hidden object-contain object-center"*/}
      {/*              />{" "}*/}
      {/*              <div className="mt-7 self-stretch text-2xl font-bold leading-9 text-zinc-900">*/}
      {/*                All-inclusive integrations*/}
      {/*              </div>{" "}*/}
      {/*              <div className="mb-6 mt-8 self-stretch text-base leading-7 text-zinc-600">*/}
      {/*                We swiftly integrate our product with your accounting*/}
      {/*                systems, CRM, BI, and other significant analysis and*/}
      {/*                marketing systems for your business.*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>{" "}*/}
      {/*          <div className="ml-5 flex w-[33%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*            <div className="flex w-full grow flex-col items-start rounded-xl bg-white px-8 py-12 shadow-sm max-md:mt-10 max-md:px-5">*/}
      {/*              <img*/}
      {/*                loading="lazy"*/}
      {/*                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ce984c5274342d05f40add8ebf2900a9478f141828693481e55a19330965802?"*/}
      {/*                className="aspect-square w-[49px] max-w-full overflow-hidden object-contain object-center"*/}
      {/*              />{" "}*/}
      {/*              <div className="mt-5 self-stretch text-2xl font-bold leading-9 text-zinc-900">*/}
      {/*                Unrestricted data access*/}
      {/*              </div>{" "}*/}
      {/*              <div className="mb-12 mt-11 self-stretch text-base leading-7 text-zinc-600 max-md:my-10">*/}
      {/*                Our product offers unlimited Data API access to events and*/}
      {/*                raw data harvested by our tracker.*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>{" "}*/}
      {/*          <div className="ml-5 flex w-[33%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*            <div className="flex w-full grow flex-col items-start rounded-xl bg-white px-8 py-10 shadow-sm max-md:mt-10 max-md:px-5">*/}
      {/*              <img*/}
      {/*                loading="lazy"*/}
      {/*                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8914ffd398a287fedc38298143dc107c9c3580e8e0980db772ad5adf900c9531?"*/}
      {/*                className="aspect-square w-[49px] max-w-full overflow-hidden object-contain object-center"*/}
      {/*              />{" "}*/}
      {/*              <div className="mt-7 self-stretch text-2xl font-bold leading-9 text-zinc-900">*/}
      {/*                {" "}*/}
      {/*                Bespoke tasks*/}
      {/*              </div>{" "}*/}
      {/*              <div className="mt-10 self-stretch text-base leading-7 text-zinc-600">*/}
      {/*                Should you require additional model development or*/}
      {/*                specific task execution for your business, we're prepared*/}
      {/*                to provide a dedicated team of ML experts. They'll develop*/}
      {/*                the required functionality within stringent timelines.*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>{" "}*/}
      {/*  <div className="mt-4 flex w-full max-w-[1413px] flex-col items-center justify-center self-center rounded-[30px] bg-[linear-gradient(0deg,#18181B_0%,#18181B_100%),#6922EC] px-16 py-12 max-md:max-w-full max-md:px-5">*/}
      {/*    <div className="mb-12 mt-6 flex w-[1088px] max-w-full flex-col items-stretch max-md:mb-10">*/}
      {/*      <div className="w-[690px] self-center text-center text-5xl font-bold leading-10 text-white">*/}
      {/*        Our cases*/}
      {/*      </div>{" "}*/}
      {/*      <img*/}
      {/*        loading="lazy"*/}
      {/*        src="https://cdn.builder.io/api/v1/image/assets/TEMP/95e7c49952fc923a74725e3605e61ebddf7f88b37d8418a5b929ce29e1d659f5?"*/}
      {/*        className="mt-10 aspect-[12.58] w-[151px] max-w-full self-center overflow-hidden object-contain object-center"*/}
      {/*      />{" "}*/}
      {/*      <div className="mt-10 flex items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">*/}
      {/*        <div className="mt-1 flex grow basis-[0%] flex-col items-stretch">*/}
      {/*          <div className="text-5xl font-bold leading-[60px] text-white max-md:text-4xl max-md:leading-[56px]">*/}
      {/*            up to 28%*/}
      {/*          </div>{" "}*/}
      {/*          <div className="mt-5 text-lg leading-7 text-zinc-300">*/}
      {/*            Increased customer retention from 12.7% to 28% in July*/}
      {/*            2022-July 2023*/}
      {/*          </div>*/}
      {/*        </div>{" "}*/}
      {/*        <div className="my-auto h-[55px] w-px shrink-0 self-center bg-zinc-600" />{" "}*/}
      {/*        <div className="flex grow basis-[0%] flex-col items-stretch">*/}
      {/*          <div className="whitespace-nowrap text-5xl font-bold leading-[60px] text-white max-md:text-4xl max-md:leading-[56px]">*/}
      {/*            up to $206К*/}
      {/*          </div>{" "}*/}
      {/*          <div className="mt-5 text-lg leading-7 text-zinc-300">*/}
      {/*            Almost doubled revenues from $105K to $206K after implementing*/}
      {/*            NLP models*/}
      {/*          </div>*/}
      {/*        </div>{" "}*/}
      {/*        <div className="my-auto h-[55px] w-px shrink-0 self-center bg-zinc-600" />{" "}*/}
      {/*        <div className="my-auto flex grow basis-[0%] flex-col items-stretch self-center">*/}
      {/*          <div className="whitespace-nowrap text-5xl font-bold leading-[60px] text-white max-md:text-4xl max-md:leading-[56px]">*/}
      {/*            up to 5x ROMI*/}
      {/*          </div>{" "}*/}
      {/*          <div className="mt-4 text-lg leading-7 text-zinc-300">*/}
      {/*            ROMI increased over 6 months from 95.75% to an average of 515%*/}
      {/*            in February-July 2022*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>{" "}*/}
      {/*  <div className="mt-44 self-center whitespace-nowrap text-center text-5xl font-bold leading-10 text-zinc-900 max-md:mt-10">*/}
      {/*    How it works*/}
      {/*  </div>{" "}*/}
      {/*  <div className="mt-8 max-w-[609px] self-center text-center text-base leading-7 text-zinc-600 max-md:max-w-full">*/}
      {/*    To start work, it is enough to integrate our script into a website or*/}
      {/*    SDK into  a mobile application. We will do everything else ourselves*/}
      {/*  </div>{" "}*/}
      {/*  <div className="mt-20 w-full max-w-[1295px] self-center px-5 max-md:mt-10 max-md:max-w-full">*/}
      {/*    <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">*/}
      {/*      <div className="flex w-[33%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*        <div className="flex w-full grow flex-col items-start rounded-2xl border border-solid border-[color:var(--gray-200,#E4E4E7)] bg-white py-11 pl-9 pr-7 max-md:mt-10 max-md:px-5">*/}
      {/*          <div className="aspect-square h-[39px] items-center justify-center whitespace-nowrap rounded-xl bg-zinc-900 px-5 text-center text-base font-bold leading-7 text-white">*/}
      {/*            1*/}
      {/*          </div>{" "}*/}
      {/*          <div className="mb-3.5 mt-7 self-stretch text-xl font-medium leading-8 text-zinc-900">*/}
      {/*            Easy integration of the service into your product*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>{" "}*/}
      {/*      <div className="ml-5 flex w-[35%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*        <div className="flex w-full grow flex-col items-start rounded-2xl border border-solid border-[color:var(--gray-200,#E4E4E7)] bg-white py-11 pl-9 pr-4 max-md:mt-10 max-md:pl-5">*/}
      {/*          <div className="aspect-square h-[39px] items-center justify-center whitespace-nowrap rounded-xl bg-zinc-900 px-4 text-center text-base font-bold leading-7 text-white">*/}
      {/*            2*/}
      {/*          </div>{" "}*/}
      {/*          <div className="mb-3.5 mt-7 self-stretch text-xl font-medium leading-8 text-zinc-900">*/}
      {/*            Analyzing user behavior and experimenting for improvement{" "}*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>{" "}*/}
      {/*      <div className="ml-5 flex w-[33%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*        <div className="flex w-full grow flex-col items-start rounded-2xl border border-solid border-[color:var(--gray-200,#E4E4E7)] bg-white py-8 pl-9 pr-20 max-md:mt-10 max-md:px-5">*/}
      {/*          <div className="aspect-square h-[39px] items-center justify-center whitespace-nowrap rounded-xl bg-zinc-900 px-4 text-center text-base font-bold leading-7 text-white">*/}
      {/*            3*/}
      {/*          </div>{" "}*/}
      {/*          <div className="mt-7 w-[313px] text-xl font-medium leading-8 text-zinc-900">*/}
      {/*            Enriching data, building audiences and launching marketing*/}
      {/*            campaigns*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>{" "}*/}
      {/*  <img*/}
      {/*    loading="lazy"*/}
      {/*    srcSet="..."*/}
      {/*    className="mt-20 aspect-[2.07] w-full max-w-[1295px] self-center overflow-hidden object-contain object-center max-md:mt-10 max-md:max-w-full"*/}
      {/*  />{" "}*/}
      {/*  <div className="mt-36 flex w-full max-w-[1240px] items-stretch justify-between gap-5 self-center px-5 max-md:mt-10 max-md:max-w-full max-md:flex-wrap max-md:justify-center">*/}
      {/*    <div className="flex items-start justify-between gap-5 self-start">*/}
      {/*      <div className="aspect-square h-[39px] items-center justify-center whitespace-nowrap rounded-xl bg-zinc-900 px-5 text-center text-base font-bold leading-7 text-white">*/}
      {/*        1*/}
      {/*      </div>{" "}*/}
      {/*      <div className="shrink grow basis-auto text-xl font-medium leading-8 text-zinc-900">*/}
      {/*        You embed our script on your website*/}
      {/*      </div>*/}
      {/*    </div>{" "}*/}
      {/*    <div className="flex items-start justify-between gap-5 self-start">*/}
      {/*      <div className="aspect-square h-[39px] items-center justify-center whitespace-nowrap rounded-xl bg-zinc-900 px-4 text-center text-base font-bold leading-7 text-white">*/}
      {/*        2*/}
      {/*      </div>{" "}*/}
      {/*      <div className="shrink grow basis-auto text-xl font-medium leading-8 text-zinc-900">*/}
      {/*        Our tracker is starting to collect and analyze user events*/}
      {/*      </div>*/}
      {/*    </div>{" "}*/}
      {/*    <div className="flex items-start justify-between gap-5">*/}
      {/*      <div className="aspect-square h-[39px] items-center justify-center whitespace-nowrap rounded-xl bg-zinc-900 px-4 text-center text-base font-bold leading-7 text-white">*/}
      {/*        3*/}
      {/*      </div>{" "}*/}
      {/*      <div className="shrink grow basis-auto text-xl font-medium leading-8 text-zinc-900">*/}
      {/*        Our ML models are starting to make their first predictions and*/}
      {/*        enrich user data{" "}*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>{" "}*/}
      {/*  <div className="mt-20 flex w-full max-w-[1261px] items-stretch justify-between gap-5 self-center px-5 max-md:mt-10 max-md:max-w-full max-md:flex-wrap max-md:justify-center">*/}
      {/*    <div className="flex items-start justify-between gap-5 self-start">*/}
      {/*      <div className="aspect-square h-[39px] items-center justify-center whitespace-nowrap rounded-xl bg-zinc-900 px-4 text-center text-base font-bold leading-7 text-white">*/}
      {/*        4*/}
      {/*      </div>{" "}*/}
      {/*      <div className="shrink grow basis-auto text-xl font-medium leading-8 text-zinc-900">*/}
      {/*        Based on the data received, the service begins to gather audiences*/}
      {/*      </div>*/}
      {/*    </div>{" "}*/}
      {/*    <div className="flex items-start justify-between gap-5 self-start">*/}
      {/*      <div className="aspect-square h-[39px] items-center justify-center whitespace-nowrap rounded-xl bg-zinc-900 px-4 text-center text-base font-bold leading-7 text-white">*/}
      {/*        5*/}
      {/*      </div>{" "}*/}
      {/*      <div className="shrink grow basis-auto text-xl font-medium leading-8 text-zinc-900">*/}
      {/*        Audiences are sent to advertising offices and campaigns and other*/}
      {/*      </div>*/}
      {/*    </div>{" "}*/}
      {/*    <div className="flex items-start justify-between gap-5">*/}
      {/*      <div className="aspect-square h-[39px] items-center justify-center whitespace-nowrap rounded-xl bg-zinc-900 px-4 text-center text-base font-bold leading-7 text-white">*/}
      {/*        6*/}
      {/*      </div>{" "}*/}
      {/*      <div className="shrink grow basis-auto text-xl font-medium leading-8 text-zinc-900">*/}
      {/*        Run HADI cycles with continuous improvements in KPIs until the*/}
      {/*        business reaches the goal*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>{" "}*/}
      {/*  <div className="mt-20 min-h-[1px] w-full self-stretch bg-violet-700 max-md:mt-10 max-md:max-w-full" />{" "}*/}
      {/*  <div className="mt-16 items-stretch justify-center self-center whitespace-nowrap rounded-[100px] bg-violet-100 px-6 py-1.5 text-xl leading-9 text-violet-700 max-md:mt-10 max-md:px-5">*/}
      {/*    {" "}*/}
      {/*    Dashboard*/}
      {/*  </div>{" "}*/}
      {/*  <div className="mt-12 max-w-[876px] self-center text-center text-5xl font-bold leading-10 text-zinc-900 max-md:mt-10 max-md:max-w-full">*/}
      {/*    Control and monitoring always at your fingertips in an accessible*/}
      {/*    dashboard{" "}*/}
      {/*  </div>{" "}*/}
      {/*  <div className="mt-11 max-w-[757px] self-center text-center text-xl leading-9 text-gray-500 max-md:mt-10 max-md:max-w-full">*/}
      {/*    To easily monitor your results, we have created a simple dashboard*/}
      {/*    where you can follow the results of your experiments and manage your*/}
      {/*    data*/}
      {/*  </div>{" "}*/}
      {/*  <div className="mt-14 w-[800px] max-w-full self-center max-md:mt-10">*/}
      {/*    <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">*/}
      {/*      <div className="flex w-[47%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*        <div className="flex grow flex-col items-stretch max-md:mt-10">*/}
      {/*          <div className="flex items-stretch justify-between gap-3 px-5">*/}
      {/*            <img*/}
      {/*              loading="lazy"*/}
      {/*              src="https://cdn.builder.io/api/v1/image/assets/TEMP/00a7753fc8afae701875e3814a45ed108d47aa5f20e48d667706b3e894f81b2f?"*/}
      {/*              className="aspect-square w-[21px] max-w-full shrink-0 overflow-hidden object-contain object-center"*/}
      {/*            />{" "}*/}
      {/*            <div className="self-start text-lg font-bold leading-6 text-zinc-900">*/}
      {/*              Profit analytics and key metrics*/}
      {/*            </div>*/}
      {/*          </div>{" "}*/}
      {/*          <div className="mt-6 flex items-stretch justify-between gap-3 px-5">*/}
      {/*            <img*/}
      {/*              loading="lazy"*/}
      {/*              src="https://cdn.builder.io/api/v1/image/assets/TEMP/00a7753fc8afae701875e3814a45ed108d47aa5f20e48d667706b3e894f81b2f?"*/}
      {/*              className="aspect-square w-[21px] max-w-full shrink-0 overflow-hidden object-contain object-center"*/}
      {/*            />{" "}*/}
      {/*            <div className="self-start text-lg font-bold leading-6 text-zinc-900">*/}
      {/*              Cross-cutting sales analytics{" "}*/}
      {/*            </div>*/}
      {/*          </div>{" "}*/}
      {/*          <div className="mt-6 flex items-stretch justify-between gap-3 px-5">*/}
      {/*            <img*/}
      {/*              loading="lazy"*/}
      {/*              src="https://cdn.builder.io/api/v1/image/assets/TEMP/00a7753fc8afae701875e3814a45ed108d47aa5f20e48d667706b3e894f81b2f?"*/}
      {/*              className="aspect-square w-[21px] max-w-full shrink-0 overflow-hidden object-contain object-center"*/}
      {/*            />{" "}*/}
      {/*            <div className="grow self-start whitespace-nowrap text-lg font-bold leading-6 text-zinc-900">*/}
      {/*              Tracking the results of experiments*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>{" "}*/}
      {/*      <div className="ml-5 flex w-[53%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*        <div className="flex grow flex-col items-stretch max-md:mt-10">*/}
      {/*          <div className="flex items-stretch justify-between gap-3 px-5">*/}
      {/*            <img*/}
      {/*              loading="lazy"*/}
      {/*              src="https://cdn.builder.io/api/v1/image/assets/TEMP/02c40d72863111e6ae86fed221c0114fc8d935625e5c28f9e3db6ff6ed364e54?"*/}
      {/*              className="aspect-square w-[21px] max-w-full shrink-0 overflow-hidden object-contain object-center"*/}
      {/*            />{" "}*/}
      {/*            <div className="self-start text-lg font-bold leading-6 text-zinc-900">*/}
      {/*              Building profitable audiences*/}
      {/*            </div>*/}
      {/*          </div>{" "}*/}
      {/*          <div className="mt-6 flex items-stretch justify-between gap-3 px-5">*/}
      {/*            <img*/}
      {/*              loading="lazy"*/}
      {/*              src="https://cdn.builder.io/api/v1/image/assets/TEMP/02c40d72863111e6ae86fed221c0114fc8d935625e5c28f9e3db6ff6ed364e54?"*/}
      {/*              className="aspect-square w-[21px] max-w-full shrink-0 overflow-hidden object-contain object-center"*/}
      {/*            />{" "}*/}
      {/*            <div className="grow self-start whitespace-nowrap text-lg font-bold leading-6 text-zinc-900">*/}
      {/*              Management and status of integrations*/}
      {/*            </div>*/}
      {/*          </div>{" "}*/}
      {/*          <div className="mt-6 flex items-stretch justify-between gap-3 px-5">*/}
      {/*            <img*/}
      {/*              loading="lazy"*/}
      {/*              src="https://cdn.builder.io/api/v1/image/assets/TEMP/02c40d72863111e6ae86fed221c0114fc8d935625e5c28f9e3db6ff6ed364e54?"*/}
      {/*              className="aspect-square w-[21px] max-w-full shrink-0 overflow-hidden object-contain object-center"*/}
      {/*            />{" "}*/}
      {/*            <div className="self-start text-lg font-bold leading-6 text-zinc-900">*/}
      {/*              Dashboard access for employees*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>{" "}*/}
      {/*  <div className="mt-16 flex w-[682px] max-w-full items-start justify-between gap-3.5 self-center px-5 max-md:mt-10 max-md:flex-wrap max-md:justify-center">*/}
      {/*    <div className="my-auto grow self-center whitespace-nowrap text-right text-5xl font-medium leading-[62px] text-zinc-900">*/}
      {/*      Unlimited*/}
      {/*    </div>{" "}*/}
      {/*    <div className="my-auto self-center text-sm leading-5 text-zinc-900">*/}
      {/*      Events*/}
      {/*      <br />*/}
      {/*      Tracker*/}
      {/*    </div>{" "}*/}
      {/*    <img*/}
      {/*      loading="lazy"*/}
      {/*      src="https://cdn.builder.io/api/v1/image/assets/TEMP/388ac7573f987a4c5a4aa5be6d2d7cbb5ee68b52b5f925456d356cbcb3c8fab2?"*/}
      {/*      className="aspect-[0.39] w-[15px] max-w-full shrink-0 self-stretch overflow-hidden object-contain object-center"*/}
      {/*    />{" "}*/}
      {/*    <div className="my-auto text-right text-5xl font-medium leading-[62px] text-zinc-900">*/}
      {/*      Unlimited*/}
      {/*    </div>{" "}*/}
      {/*    <div className="my-auto self-center text-sm leading-5 text-zinc-900">*/}
      {/*      Account*/}
      {/*      <br />*/}
      {/*      for employees*/}
      {/*    </div>*/}
      {/*  </div>{" "}*/}
      {/*  <div className="relative mt-16 flex min-h-[737px] w-[1003px] max-w-full flex-col items-stretch self-center overflow-hidden pb-12 pl-14 pr-9 pt-4 max-md:mt-10 max-md:px-5">*/}
      {/*    <img*/}
      {/*      loading="lazy"*/}
      {/*      srcSet="..."*/}
      {/*      className="absolute inset-0 h-full w-full object-cover object-center"*/}
      {/*    />{" "}*/}
      {/*    <div className="relative mb-20 rounded-xl bg-stone-100 pl-14 pt-11 max-md:mb-10 max-md:max-w-full max-md:pl-5">*/}
      {/*      <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">*/}
      {/*        <div className="flex w-[36%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*          <div className="relative flex flex-col max-md:mt-10">*/}
      {/*            <div className="flex w-full flex-col items-center justify-center self-stretch rounded-xl bg-zinc-900 px-16 py-3 max-md:px-5">*/}
      {/*              <div className="flex items-center justify-center gap-2.5">*/}
      {/*                <img*/}
      {/*                  loading="lazy"*/}
      {/*                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/811c67e5c6037553890cae5a5ccdfb8eb70506d0ae4c564196195bd9a246243a?"*/}
      {/*                  className="my-auto aspect-[0.28] w-[5px] max-w-full shrink-0 overflow-hidden object-contain object-center"*/}
      {/*                />{" "}*/}
      {/*                <div className="grow self-stretch whitespace-nowrap text-right text-lg font-bold leading-6 text-white">*/}
      {/*                  Add New Task*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*            </div>{" "}*/}
      {/*            <div className="mt-7 flex items-stretch gap-3 self-start">*/}
      {/*              <img*/}
      {/*                loading="lazy"*/}
      {/*                srcSet="..."*/}
      {/*                className="aspect-square w-5 max-w-full shrink-0 overflow-hidden object-contain object-center"*/}
      {/*              />{" "}*/}
      {/*              <div className="mt-1.5 self-start text-base font-medium leading-6 text-zinc-900">*/}
      {/*                Open*/}
      {/*              </div>*/}
      {/*            </div>{" "}*/}
      {/*            <div className="mt-6 flex items-stretch justify-between gap-3 self-stretch">*/}
      {/*              <img*/}
      {/*                loading="lazy"*/}
      {/*                srcSet="..."*/}
      {/*                className="aspect-square w-5 max-w-full shrink-0 overflow-hidden object-contain object-center"*/}
      {/*              />{" "}*/}
      {/*              <div className="my-auto shrink grow basis-auto self-center text-base font-medium leading-6 text-zinc-900">*/}
      {/*                Planned*/}
      {/*              </div>*/}
      {/*            </div>{" "}*/}
      {/*            <div className="mt-6 flex items-start justify-between gap-3 self-stretch">*/}
      {/*              <img*/}
      {/*                loading="lazy"*/}
      {/*                srcSet="..."*/}
      {/*                className="aspect-square w-5 max-w-full shrink-0 overflow-hidden object-contain object-center"*/}
      {/*              />{" "}*/}
      {/*              <div className="mt-1.5 shrink grow basis-auto text-base font-medium leading-6 text-zinc-900">*/}
      {/*                On Progress*/}
      {/*              </div>*/}
      {/*            </div>{" "}*/}
      {/*            <div className="mt-6 flex w-[66px] max-w-full items-stretch gap-3 self-start">*/}
      {/*              <div className="flex h-5 flex-1 shrink-0 flex-col rounded border-[1.5px] border-solid border-[color:var(--gray-300,#D4D4D8)] bg-white" />{" "}*/}
      {/*              <div className="my-auto self-center text-base font-medium leading-6 text-zinc-900">*/}
      {/*                Hold*/}
      {/*              </div>*/}
      {/*            </div>{" "}*/}
      {/*            <div className="mt-6 flex items-stretch justify-between gap-3 self-stretch">*/}
      {/*              <div className="flex h-5 w-[51px] shrink-0 flex-col rounded border-[1.5px] border-solid border-[color:var(--gray-300,#D4D4D8)] bg-white" />{" "}*/}
      {/*              <div className="mt-1.5 text-base font-medium leading-6 text-zinc-900">*/}
      {/*                Completed*/}
      {/*              </div>*/}
      {/*            </div>{" "}*/}
      {/*            <div className="mt-6 flex items-stretch gap-3 self-start">*/}
      {/*              <div className="flex h-5 w-5 shrink-0 flex-col rounded border-[1.5px] border-solid border-[color:var(--gray-300,#D4D4D8)] bg-white" />{" "}*/}
      {/*              <div className="my-auto self-center text-base font-medium leading-6 text-zinc-900">*/}
      {/*                Closed*/}
      {/*              </div>*/}
      {/*            </div>{" "}*/}
      {/*            <div className="mt-28 flex w-full items-stretch justify-between gap-5 self-stretch max-md:mt-10">*/}
      {/*              <div className="flex items-stretch justify-between gap-3">*/}
      {/*                <img*/}
      {/*                  loading="lazy"*/}
      {/*                  srcSet="..."*/}
      {/*                  className="aspect-square w-9 max-w-full shrink-0 overflow-hidden rounded-[50%] object-contain object-center"*/}
      {/*                />{" "}*/}
      {/*                <div className="flex grow basis-[0%] flex-col items-stretch self-start">*/}
      {/*                  <div className="whitespace-nowrap text-base font-semibold leading-6 text-zinc-900">*/}
      {/*                    Martin Gray*/}
      {/*                  </div>{" "}*/}
      {/*                  <div className="mt-1.5 text-base font-medium leading-6 text-zinc-500">*/}
      {/*                    Admin*/}
      {/*                  </div>*/}
      {/*                </div>*/}
      {/*              </div>{" "}*/}
      {/*              <img*/}
      {/*                loading="lazy"*/}
      {/*                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc33da148ef7db496ebedbe063addeb90b79fa28bf7c9b23f8dad21de483ca5a?"*/}
      {/*                className="my-auto aspect-square w-6 max-w-full shrink-0 self-center overflow-hidden object-contain object-center"*/}
      {/*              />*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>{" "}*/}
      {/*        <div className="ml-5 flex w-[64%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*          <div className="relative w-full grow rounded bg-white pb-12 pl-4 pr-7 pt-5 max-md:mt-10 max-md:max-w-full max-md:pr-5">*/}
      {/*            <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">*/}
      {/*              <div className="flex w-[82%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*                <div className="relative flex flex-col items-stretch max-md:mt-10">*/}
      {/*                  <div className="flex items-stretch gap-2.5 self-start">*/}
      {/*                    <img*/}
      {/*                      loading="lazy"*/}
      {/*                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/81ae4f5b5047b5dc5a38cc586d68a46faa83ad2e96e21a9547b65fb1851dbab9?"*/}
      {/*                      className="aspect-square w-4 max-w-full shrink-0 overflow-hidden object-contain object-center"*/}
      {/*                    />{" "}*/}
      {/*                    <div className="grow self-start whitespace-nowrap text-sm leading-5 text-zinc-500">*/}
      {/*                      Type to search*/}
      {/*                    </div>*/}
      {/*                  </div>{" "}*/}
      {/*                  <div className="mt-11 flex items-stretch justify-between gap-3.5 max-md:mt-10">*/}
      {/*                    <div className="flex h-5 w-[25px] shrink-0 flex-col rounded-sm border border-solid border-[color:var(--gray-300,#D4D4D8)] bg-white" />{" "}*/}
      {/*                    <div className="shrink grow basis-auto self-start text-base font-bold leading-7 text-zinc-900">*/}
      {/*                      Deadline for Clustar Project*/}
      {/*                    </div>*/}
      {/*                  </div>{" "}*/}
      {/*                  <div className="ml-9 mt-1.5 self-start whitespace-nowrap text-sm font-medium leading-5 text-zinc-500 max-md:ml-2.5">*/}
      {/*                    Dec 21, 2021 6:00 PM*/}
      {/*                  </div>{" "}*/}
      {/*                  <div className="mt-8 flex items-stretch justify-between gap-3.5">*/}
      {/*                    <div className="flex h-5 w-[29px] shrink-0 flex-col rounded-sm border border-solid border-[color:var(--gray-300,#D4D4D8)] bg-white" />{" "}*/}
      {/*                    <div className="shrink grow basis-auto self-start text-base font-bold leading-7 text-zinc-900">*/}
      {/*                      Fixing bugs on Live chat*/}
      {/*                    </div>*/}
      {/*                  </div>{" "}*/}
      {/*                  <div className="ml-9 mt-1.5 self-start whitespace-nowrap text-sm font-medium leading-5 text-zinc-500 max-md:ml-2.5">*/}
      {/*                    Dec 14, 2021 3:00 PM*/}
      {/*                  </div>{" "}*/}
      {/*                  <div className="mt-8 flex items-stretch justify-between gap-3.5">*/}
      {/*                    <div className="flex h-5 w-5 shrink-0 flex-col rounded-sm border border-solid border-[color:var(--gray-300,#D4D4D8)] bg-white" />{" "}*/}
      {/*                    <div className="flex h-[11px] w-[280px] max-w-full shrink-0 flex-col self-start rounded-lg bg-neutral-100" />*/}
      {/*                  </div>{" "}*/}
      {/*                  <div className="ml-9 flex h-[11px] w-[145px] shrink-0 flex-col self-start rounded-lg bg-neutral-100 max-md:ml-2.5" />{" "}*/}
      {/*                  <div className="mt-8 flex items-stretch justify-between gap-3.5">*/}
      {/*                    <div className="flex h-5 w-5 shrink-0 flex-col rounded-sm border border-solid border-[color:var(--gray-300,#D4D4D8)] bg-white" />{" "}*/}
      {/*                    <div className="flex h-[11px] w-[280px] max-w-full shrink-0 flex-col self-start rounded-lg bg-neutral-100" />*/}
      {/*                  </div>{" "}*/}
      {/*                  <div className="ml-9 flex h-[11px] w-[145px] shrink-0 flex-col self-start rounded-lg bg-neutral-100 max-md:ml-2.5" />{" "}*/}
      {/*                  <div className="mt-8 flex items-stretch justify-between gap-3.5">*/}
      {/*                    <div className="flex h-5 w-5 shrink-0 flex-col rounded-sm border border-solid border-[color:var(--gray-300,#D4D4D8)] bg-white" />{" "}*/}
      {/*                    <div className="flex h-[11px] w-[280px] max-w-full shrink-0 flex-col self-start rounded-lg bg-neutral-100" />*/}
      {/*                  </div>{" "}*/}
      {/*                  <div className="ml-9 flex h-[11px] w-[145px] shrink-0 flex-col self-start rounded-lg bg-neutral-100 max-md:ml-2.5" />{" "}*/}
      {/*                  <div className="mt-8 flex items-stretch justify-between gap-3.5">*/}
      {/*                    <div className="flex h-5 w-5 shrink-0 flex-col rounded-sm border border-solid border-[color:var(--gray-300,#D4D4D8)] bg-white" />{" "}*/}
      {/*                    <div className="flex h-[11px] w-[280px] max-w-full shrink-0 flex-col self-start rounded-lg bg-neutral-100" />*/}
      {/*                  </div>{" "}*/}
      {/*                  <div className="ml-9 flex h-[11px] w-[145px] shrink-0 flex-col self-start rounded-lg bg-neutral-100 max-md:ml-2.5" />*/}
      {/*                </div>*/}
      {/*              </div>{" "}*/}
      {/*              <div className="ml-5 flex w-[18%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*                <div className="relative my-auto flex flex-col items-center max-md:mt-10">*/}
      {/*                  <img*/}
      {/*                    loading="lazy"*/}
      {/*                    srcSet="..."*/}
      {/*                    className="aspect-[2.26] w-[70px] overflow-hidden object-contain object-center"*/}
      {/*                  />{" "}*/}
      {/*                  <div className="mt-10 flex flex-col items-start self-stretch pr-5">*/}
      {/*                    <img*/}
      {/*                      loading="lazy"*/}
      {/*                      srcSet="..."*/}
      {/*                      className="ml-5 aspect-square w-[31px] overflow-hidden object-contain object-center max-md:ml-2.5"*/}
      {/*                    />{" "}*/}
      {/*                    <img*/}
      {/*                      loading="lazy"*/}
      {/*                      srcSet="..."*/}
      {/*                      className="mt-10 aspect-[1.65] w-[51px] self-center overflow-hidden object-contain object-center"*/}
      {/*                    />*/}
      {/*                  </div>{" "}*/}
      {/*                  <img*/}
      {/*                    loading="lazy"*/}
      {/*                    srcSet="..."*/}
      {/*                    className="mt-9 aspect-[2.26] w-[70px] overflow-hidden object-contain object-center"*/}
      {/*                  />{" "}*/}
      {/*                  <div className="mt-9 flex flex-col items-center self-stretch pr-5">*/}
      {/*                    <img*/}
      {/*                      loading="lazy"*/}
      {/*                      srcSet="..."*/}
      {/*                      className="aspect-[1.65] w-[51px] overflow-hidden object-contain object-center"*/}
      {/*                    />{" "}*/}
      {/*                    <img*/}
      {/*                      loading="lazy"*/}
      {/*                      srcSet="..."*/}
      {/*                      className="mt-9 aspect-[1.65] w-[51px] overflow-hidden object-contain object-center"*/}
      {/*                    />*/}
      {/*                  </div>*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>{" "}*/}
      {/*  <div className="flex w-full flex-col items-center justify-center self-stretch px-16 py-12 max-md:max-w-full max-md:px-5">*/}
      {/*    <div className="mb-2 mt-1 w-full max-w-[1230px] max-md:max-w-full">*/}
      {/*      <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">*/}
      {/*        <div className="flex w-[33%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*          <div className="mx-auto flex w-full grow flex-col items-start rounded-[30px] bg-white px-7 py-8 max-md:mt-10 max-md:px-5">*/}
      {/*            <img*/}
      {/*              loading="lazy"*/}
      {/*              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4a796713f4ddf9bbb90ed0692673db9c7481b256906aa1f9077b14621feba16?"*/}
      {/*              className="aspect-[6] w-24 max-w-full overflow-hidden object-contain object-center"*/}
      {/*            />{" "}*/}
      {/*            <div className="mt-10 self-stretch text-lg leading-7 text-zinc-900 max-md:mt-10">*/}
      {/*              “You made it so simple. My new site is so much faster and*/}
      {/*              easier to work with than my old site. I just choose the*/}
      {/*              page, make the change.”*/}
      {/*            </div>{" "}*/}
      {/*            <div className="mt-9 flex items-start justify-between gap-4 self-stretch">*/}
      {/*              <img*/}
      {/*                loading="lazy"*/}
      {/*                srcSet="..."*/}
      {/*                className="aspect-square w-[43px] max-w-full shrink-0 overflow-hidden rounded-[50%] object-contain object-center"*/}
      {/*              />{" "}*/}
      {/*              <div className="flex grow basis-[0%] flex-col items-stretch">*/}
      {/*                <div className="text-base font-bold leading-7 text-zinc-900">*/}
      {/*                  Leslie Alexander*/}
      {/*                </div>{" "}*/}
      {/*                <div className="mt-4 text-sm leading-6 text-zinc-600">*/}
      {/*                  Freelance React Developer*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>{" "}*/}
      {/*        <div className="ml-5 flex w-[33%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*          <div className="mx-auto flex w-full grow flex-col items-start rounded-[30px] bg-white px-7 py-8 shadow-2xl max-md:mt-10 max-md:px-5">*/}
      {/*            <img*/}
      {/*              loading="lazy"*/}
      {/*              src="https://cdn.builder.io/api/v1/image/assets/TEMP/045cc29fd0106c309510f5a20ed6e907e226ee21340daecfc6fa8eec217cd74c?"*/}
      {/*              className="aspect-[6] w-24 max-w-full overflow-hidden object-contain object-center"*/}
      {/*            />{" "}*/}
      {/*            <div className="mt-10 self-stretch text-lg leading-7 text-zinc-900 max-md:mt-10">*/}
      {/*              “Simply the best. Better than all the rest. I’d recommend*/}
      {/*              this product to beginners and advanced users.”*/}
      {/*            </div>{" "}*/}
      {/*            <div className="mt-16 flex items-start justify-between gap-4 self-stretch max-md:mt-10">*/}
      {/*              <img*/}
      {/*                loading="lazy"*/}
      {/*                srcSet="..."*/}
      {/*                className="aspect-square w-[43px] max-w-full shrink-0 overflow-hidden rounded-[50%] object-contain object-center"*/}
      {/*              />{" "}*/}
      {/*              <div className="flex grow basis-[0%] flex-col items-stretch">*/}
      {/*                <div className="text-base font-bold leading-7 text-zinc-900">*/}
      {/*                  Jacob Jones*/}
      {/*                </div>{" "}*/}
      {/*                <div className="mt-4 text-sm leading-6 text-zinc-600">*/}
      {/*                  Digital Marketer*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>{" "}*/}
      {/*        <div className="ml-5 flex w-[33%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*          <div className="mx-auto flex w-full grow flex-col items-start rounded-[30px] bg-white px-7 py-8 shadow-2xl max-md:mt-10 max-md:px-5">*/}
      {/*            <img*/}
      {/*              loading="lazy"*/}
      {/*              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4bb3548b63be661814f495060b0f9f2fab4152e09c362ffab3ee1e91e8f6fc3?"*/}
      {/*              className="aspect-[6] w-24 max-w-full overflow-hidden object-contain object-center"*/}
      {/*            />{" "}*/}
      {/*            <div className="mt-10 self-stretch text-lg leading-7 text-zinc-900 max-md:mt-10">*/}
      {/*              “I cannot believe that I have got a brand new landing page*/}
      {/*              after getting Omega. It was super easy to edit and publish.”*/}
      {/*            </div>{" "}*/}
      {/*            <div className="mt-9 flex items-start justify-between gap-4 self-stretch">*/}
      {/*              <img*/}
      {/*                loading="lazy"*/}
      {/*                srcSet="..."*/}
      {/*                className="aspect-square w-[43px] max-w-full shrink-0 overflow-hidden rounded-[50%] object-contain object-center"*/}
      {/*              />{" "}*/}
      {/*              <div className="flex grow basis-[0%] flex-col items-stretch">*/}
      {/*                <div className="text-base font-bold leading-7 text-zinc-900">*/}
      {/*                  Jenny Wilson*/}
      {/*                </div>{" "}*/}
      {/*                <div className="mt-3 text-sm leading-6 text-zinc-600">*/}
      {/*                  Graphic Designer*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>{" "}*/}
      {/*  <img*/}
      {/*    loading="lazy"*/}
      {/*    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9711fb26a2815f79812ed106ab5ade4299d82a5d5abeced1cd2e183e9039ced9?"*/}
      {/*    className="mt-16 aspect-[2.98] w-[140px] max-w-full items-center justify-center self-center overflow-hidden object-contain object-center max-md:mt-10"*/}
      {/*  />{" "}*/}
      {/*  <div className="mt-11 w-[1216px] max-w-[1144px] self-center text-center text-5xl font-medium leading-[60px] tracking-tighter text-gray-900 max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[56px]">*/}
      {/*    We’ve been using Reboost.ai to kick start every new project and can’t*/}
      {/*    imagine working without it*/}
      {/*  </div>{" "}*/}
      {/*  <img*/}
      {/*    loading="lazy"*/}
      {/*    srcSet="..."*/}
      {/*    className="mt-9 aspect-square w-16 max-w-full items-center justify-center self-center overflow-hidden object-contain object-center"*/}
      {/*  />{" "}*/}
      {/*  <div className="mt-4 self-center whitespace-nowrap text-center text-lg font-medium leading-7 text-gray-900 max-md:max-w-full">*/}
      {/*    Candice Wu*/}
      {/*  </div>{" "}*/}
      {/*  <div className="mt-1 self-center whitespace-nowrap text-center text-base leading-6 text-gray-500 max-md:max-w-full">*/}
      {/*    Product Manager, Sisyphus*/}
      {/*  </div>{" "}*/}
      {/*  <div className="mt-20 flex w-full max-w-[1184px] flex-col items-center self-center rounded-2xl bg-zinc-900 px-16 pb-7 pt-12 max-md:mt-10 max-md:max-w-full max-md:px-5">*/}
      {/*    <div className="flex w-[876px] max-w-full flex-col items-center">*/}
      {/*      <div className="w-[690px] text-center text-5xl font-bold leading-10 text-white">*/}
      {/*        Price*/}
      {/*      </div>{" "}*/}
      {/*      <div className="mt-7 self-stretch max-md:max-w-full">*/}
      {/*        <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">*/}
      {/*          <div className="flex w-[26%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*            <div className="my-auto flex items-stretch gap-2.5 max-md:mt-10">*/}
      {/*              <div className="flex basis-[0%] flex-col items-center">*/}
      {/*                <img*/}
      {/*                  loading="lazy"*/}
      {/*                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/91cbda17544dcf5ba31d8bad6a3ba3fd5556b23ca947b261cf29f7d0eda1f7e6?"*/}
      {/*                  className="aspect-square w-5 overflow-hidden object-contain object-center"*/}
      {/*                />{" "}*/}
      {/*                <img*/}
      {/*                  loading="lazy"*/}
      {/*                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/91cbda17544dcf5ba31d8bad6a3ba3fd5556b23ca947b261cf29f7d0eda1f7e6?"*/}
      {/*                  className="mt-3.5 aspect-square w-5 overflow-hidden object-contain object-center"*/}
      {/*                />{" "}*/}
      {/*                <img*/}
      {/*                  loading="lazy"*/}
      {/*                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/91cbda17544dcf5ba31d8bad6a3ba3fd5556b23ca947b261cf29f7d0eda1f7e6?"*/}
      {/*                  className="mt-3.5 aspect-square w-5 overflow-hidden object-contain object-center"*/}
      {/*                />*/}
      {/*              </div>{" "}*/}
      {/*              <div className="my-auto text-base font-medium leading-9 text-white">*/}
      {/*                Unlimited members*/}
      {/*                <br />*/}
      {/*                Admin accounts*/}
      {/*                <br />*/}
      {/*                Unlimited Events*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>{" "}*/}
      {/*          <div className="ml-5 flex w-[21%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*            <div className="my-auto flex items-stretch gap-2.5 max-md:mt-10">*/}
      {/*              <div className="flex basis-[0%] flex-col items-center">*/}
      {/*                <img*/}
      {/*                  loading="lazy"*/}
      {/*                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/91cbda17544dcf5ba31d8bad6a3ba3fd5556b23ca947b261cf29f7d0eda1f7e6?"*/}
      {/*                  className="aspect-square w-5 overflow-hidden object-contain object-center"*/}
      {/*                />{" "}*/}
      {/*                <img*/}
      {/*                  loading="lazy"*/}
      {/*                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/91cbda17544dcf5ba31d8bad6a3ba3fd5556b23ca947b261cf29f7d0eda1f7e6?"*/}
      {/*                  className="mt-3.5 aspect-square w-5 overflow-hidden object-contain object-center"*/}
      {/*                />{" "}*/}
      {/*                <img*/}
      {/*                  loading="lazy"*/}
      {/*                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/91cbda17544dcf5ba31d8bad6a3ba3fd5556b23ca947b261cf29f7d0eda1f7e6?"*/}
      {/*                  className="mt-3.5 aspect-square w-5 overflow-hidden object-contain object-center"*/}
      {/*                />*/}
      {/*              </div>{" "}*/}
      {/*              <div className="mt-1 text-base font-medium leading-9 text-white">*/}
      {/*                Custom events*/}
      {/*                <br />*/}
      {/*                API access*/}
      {/*                <br />*/}
      {/*                Bulk importer*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>{" "}*/}
      {/*          <div className="ml-5 flex w-[53%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*            <div className="flex grow items-stretch justify-between gap-5 max-md:mt-10">*/}
      {/*              <img*/}
      {/*                loading="lazy"*/}
      {/*                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b52e67bb7b80d50cb7c848dda09b2ea6cca8027ebd8b323aaad629ed342595f8?"*/}
      {/*                className="aspect-[0.09] w-[15px] max-w-full shrink-0 overflow-hidden object-contain object-center max-md:hidden"*/}
      {/*              />{" "}*/}
      {/*              <div className="mt-4 flex grow basis-[0%] flex-col items-stretch self-start">*/}
      {/*                <div className="flex flex-col items-stretch pl-6 pr-14 max-md:px-5">*/}
      {/*                  <div className="text-lg font-medium leading-8 text-zinc-400">*/}
      {/*                    from*/}
      {/*                  </div>{" "}*/}
      {/*                  <div className="mt-5 flex items-stretch justify-between gap-5">*/}
      {/*                    <div className="grow whitespace-nowrap text-5xl font-bold leading-10 text-white">*/}
      {/*                      $3000*/}
      {/*                    </div>{" "}*/}
      {/*                    <div className="mt-5 grow self-start whitespace-nowrap text-lg font-medium leading-8 text-zinc-400">*/}
      {/*                      /month*/}
      {/*                    </div>*/}
      {/*                  </div>*/}
      {/*                </div>{" "}*/}
      {/*                <div className="mt-4 flex items-stretch justify-between gap-5">*/}
      {/*                  <div className="grow whitespace-nowrap text-3xl font-bold leading-10 text-white">*/}
      {/*                    + success fee*/}
      {/*                  </div>{" "}*/}
      {/*                  <div className="mt-1.5 grow self-start whitespace-nowrap text-lg font-medium leading-8 text-zinc-400">*/}
      {/*                    / KPI-driven*/}
      {/*                  </div>*/}
      {/*                </div>*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>{" "}*/}
      {/*  <div className="mt-28 flex items-start justify-between gap-5 self-center px-5 max-md:mt-10 max-md:max-w-full max-md:flex-wrap">*/}
      {/*    <div className="aspect-square items-stretch justify-center whitespace-nowrap rounded-[50%] p-2.5 text-center text-lg font-medium leading-8 text-zinc-900">*/}
      {/*      🔥*/}
      {/*    </div>{" "}*/}
      {/*    <div className="shrink grow basis-auto text-center text-5xl font-bold leading-10 text-violet-700 max-md:max-w-full">*/}
      {/*      <span className="text-zinc-900">Fair price </span>*/}
      {/*      <span className="text-violet-700">tied </span>*/}
      {/*      <span className="text-violet-700">to concrete </span>*/}
      {/*      <span className="text-violet-700">results</span>*/}
      {/*    </div>*/}
      {/*  </div>{" "}*/}
      {/*  <div className="mt-16 w-[617px] max-w-full self-center max-md:mt-10">*/}
      {/*    <div className="flex gap-5 max-md:flex-col max-md:items-stretch max-md:gap-0">*/}
      {/*      <div className="flex w-[52%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*        <div className="flex grow items-stretch justify-between gap-4 max-md:mt-10">*/}
      {/*          <div className="flex basis-[0%] flex-col items-center">*/}
      {/*            <img*/}
      {/*              loading="lazy"*/}
      {/*              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ceba4b1ca63cec81e3c81f5cc4008eecd1f8d0b1366b732fd7a5a12a5468d698?"*/}
      {/*              className="aspect-square w-[42px] overflow-hidden object-contain object-center"*/}
      {/*            />{" "}*/}
      {/*            <img*/}
      {/*              loading="lazy"*/}
      {/*              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e08788e2f2e060140d5b9ca6818ab2f50f4fd7ba6b91eb6483b79d74de2727f7?"*/}
      {/*              className="mt-11 aspect-square w-[42px] overflow-hidden object-contain object-center max-md:mt-10"*/}
      {/*            />*/}
      {/*          </div>{" "}*/}
      {/*          <div className="flex grow basis-[0%] flex-col items-stretch px-5">*/}
      {/*            <div className="whitespace-nowrap text-lg font-bold leading-6 text-zinc-900">*/}
      {/*              Cloud Events Tracker*/}
      {/*            </div>{" "}*/}
      {/*            <div className="mt-4 text-sm leading-6 text-zinc-600">*/}
      {/*              Unlimited for all events*/}
      {/*            </div>{" "}*/}
      {/*            <div className="mt-12 text-lg font-bold leading-6 text-zinc-900 max-md:mt-10">*/}
      {/*              Data API Access*/}
      {/*            </div>{" "}*/}
      {/*            <div className="mt-4 whitespace-nowrap text-sm leading-6 text-zinc-600">*/}
      {/*              Get whatever date you need*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>{" "}*/}
      {/*      <div className="ml-5 flex w-[48%] flex-col items-stretch max-md:ml-0 max-md:w-full">*/}
      {/*        <div className="flex grow flex-col items-stretch max-md:mt-10">*/}
      {/*          <div className="flex items-start justify-between gap-4">*/}
      {/*            <img*/}
      {/*              loading="lazy"*/}
      {/*              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b203de6039bb6dca40d7152aea90b948d7b9fe6f6947b1747dfd1442f1292516?"*/}
      {/*              className="aspect-square w-[42px] max-w-full shrink-0 overflow-hidden object-contain object-center"*/}
      {/*            />{" "}*/}
      {/*            <div className="flex grow basis-[0%] flex-col items-stretch self-stretch px-5">*/}
      {/*              <div className="whitespace-nowrap text-lg font-bold leading-6 text-zinc-900">*/}
      {/*                Unlimited Accounts*/}
      {/*              </div>{" "}*/}
      {/*              <div className="mt-4 whitespace-nowrap text-sm leading-6 text-zinc-600">*/}
      {/*                No charge for extra accounts*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>{" "}*/}
      {/*          <div className="mt-11 flex items-start justify-between gap-4 max-md:mt-10">*/}
      {/*            <img*/}
      {/*              loading="lazy"*/}
      {/*              src="https://cdn.builder.io/api/v1/image/assets/TEMP/54ca23f793fec93860053682ac61b1ccb68f558e974969c78edc99f41a66af7b?"*/}
      {/*              className="aspect-square w-[42px] max-w-full shrink-0 overflow-hidden object-contain object-center"*/}
      {/*            />{" "}*/}
      {/*            <div className="flex grow basis-[0%] flex-col items-stretch self-stretch px-5">*/}
      {/*              <div className="text-lg font-bold leading-6 text-zinc-900">*/}
      {/*                Custom Events*/}
      {/*              </div>{" "}*/}
      {/*              <div className="mt-4 whitespace-nowrap text-sm leading-6 text-zinc-600">*/}
      {/*                Add any events you want*/}
      {/*              </div>*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>{" "}*/}
      {/*  <div className="mt-11 flex w-[619px] max-w-full items-start justify-between gap-5 self-center max-md:mt-10 max-md:flex-wrap">*/}
      {/*    <div className="flex items-start gap-4">*/}
      {/*      <img*/}
      {/*        loading="lazy"*/}
      {/*        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc3ca96bc9857a4e5d445d7c3833e4fb3af8b6a99ff65b90a4cb037f131b61c6?"*/}
      {/*        className="aspect-square w-[42px] max-w-full shrink-0 overflow-hidden object-contain object-center"*/}
      {/*      />{" "}*/}
      {/*      <div className="flex grow basis-[0%] flex-col items-stretch self-stretch px-5">*/}
      {/*        <div className="whitespace-nowrap text-lg font-bold leading-6 text-zinc-900">*/}
      {/*          Personal Account Manager*/}
      {/*        </div>{" "}*/}
      {/*        <div className="mt-3 text-sm leading-6 text-zinc-600">*/}
      {/*          We're always here to help.*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="flex items-start justify-between gap-4 self-stretch">*/}
      {/*      <img*/}
      {/*        loading="lazy"*/}
      {/*        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cebac2aa7dff657e7022c1a51002577d711bb63c5847edc18c4dcff54134e5c3?"*/}
      {/*        className="aspect-square w-[42px] max-w-full shrink-0 overflow-hidden object-contain object-center"*/}
      {/*      />*/}
      {/*      <div className="flex grow basis-[0%] flex-col items-stretch self-stretch px-5">*/}
      {/*        <div className="text-lg font-bold leading-6 text-zinc-900">*/}
      {/*          All integrations*/}
      {/*        </div>*/}
      {/*        <div className="mt-3 text-sm leading-6 text-zinc-600">*/}
      {/*          Easily share your data on your  BI-system and other*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="mt-14 self-center whitespace-nowrap text-center text-base font-medium leading-6 text-zinc-600 max-md:mt-10">*/}
      {/*    All our features are available{" "}*/}
      {/*  </div>*/}
      {/*  <div className="relative mt-32 flex min-h-[995px] w-full flex-col items-center justify-center self-stretch overflow-hidden px-16 py-12 max-md:mt-10 max-md:max-w-full max-md:px-5">*/}
      {/*    <img*/}
      {/*      loading="lazy"*/}
      {/*      srcSet="..."*/}
      {/*      className="absolute inset-0 h-full w-full object-cover object-center"*/}
      {/*    />*/}
      {/*    <div className="relative mb-96 mt-16 flex w-[789px] max-w-full flex-col items-stretch max-md:my-10">*/}
      {/*      <div className="text-center text-5xl font-bold leading-10 text-white max-md:max-w-full">*/}
      {/*        Drop us a line or two, we're open to any questions and*/}
      {/*        cooperation!*/}
      {/*      </div>{" "}*/}
      {/*      <div className="mt-9 max-w-[521px] self-center text-center text-base leading-7 text-zinc-100 max-md:max-w-full">*/}
      {/*        We are happy to answer all questions and demonstrate our product*/}
      {/*        and its capabilities*/}
      {/*      </div>{" "}*/}
      {/*      <div className="relative mt-10 flex aspect-[3.4444444444444446] w-[248px] max-w-full flex-col items-stretch justify-center self-center overflow-hidden px-9 py-2.5 max-md:px-5">*/}
      {/*        <img*/}
      {/*          loading="lazy"*/}
      {/*          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2321b237a3267eeb809ffc09aa78e3504f27b553e8edc38832deaa2eb00e64fa?"*/}
      {/*          className="absolute inset-0 h-full w-full object-cover object-center"*/}
      {/*        />{" "}*/}
      {/*        <div className="relative items-stretch justify-center whitespace-nowrap rounded-xl border border-solid border-[color:var(--base-white,#FFF)] bg-[linear-gradient(0deg,#18181B_0%,#18181B_100%),#6922EC] px-6 py-4 text-right text-lg font-bold leading-6 text-white max-md:px-5">*/}
      {/*          Request Demo*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>{" "}*/}
      {/*  <div className="flex w-full flex-col items-center justify-center self-stretch bg-zinc-900 px-16 py-12 max-md:max-w-full max-md:px-5">*/}
      {/*    <div className="mb-9 mt-16 flex w-full max-w-[1296px] flex-col max-md:mt-10 max-md:max-w-full">*/}
      {/*      <div className="flex w-full items-stretch justify-between gap-5 self-stretch pr-5 max-md:max-w-full max-md:flex-wrap">*/}
      {/*        <div className="shrink grow basis-auto text-5xl font-bold leading-10 text-white max-md:max-w-full">*/}
      {/*          Maximizing profits through AI marketing*/}
      {/*        </div>{" "}*/}
      {/*        <div className="mt-2 flex items-start gap-5 self-start">*/}
      {/*          <img*/}
      {/*            loading="lazy"*/}
      {/*            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1de7494f0f30fcc9fe8e61d813d9da29a1ec28716eb804ae921e7415aee88aa?"*/}
      {/*            className="aspect-square w-6 max-w-full shrink-0 overflow-hidden object-contain object-center"*/}
      {/*          />{" "}*/}
      {/*          <div className="shrink grow basis-auto text-xl leading-9 text-white">*/}
      {/*            8502 Preston Rd. Inglewood, Maine 98380, USA*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>{" "}*/}
      {/*      <div className="mr-24 mt-3.5 flex items-stretch gap-5 self-end max-md:mr-2.5">*/}
      {/*        <img*/}
      {/*          loading="lazy"*/}
      {/*          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1869380eb02bd2a18a16818679d5bf29bb2671fd69ded3363f385dc4f95e7045?"*/}
      {/*          className="aspect-square w-6 max-w-full shrink-0 overflow-hidden object-contain object-center"*/}
      {/*        />{" "}*/}
      {/*        <div className="shrink grow basis-auto self-start text-xl leading-9 text-white">*/}
      {/*          support@rareblocks.xyz*/}
      {/*        </div>*/}
      {/*      </div>{" "}*/}
      {/*      <div className="mt-24 h-px shrink-0 self-stretch bg-zinc-600 max-md:mt-10 max-md:max-w-full" />{" "}*/}
      {/*      <div className="mt-14 flex w-full items-start justify-between gap-5 self-stretch max-md:mt-10 max-md:max-w-full max-md:flex-wrap">*/}
      {/*        <div className="mt-3 flex items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">*/}
      {/*          <div className="self-start text-lg font-medium leading-8 text-white">*/}
      {/*            About*/}
      {/*          </div>{" "}*/}
      {/*          <div className="self-start text-lg font-medium leading-8 text-white">*/}
      {/*            Features*/}
      {/*          </div>{" "}*/}
      {/*          <div className="self-start text-lg font-medium leading-8 text-white">*/}
      {/*            Works*/}
      {/*          </div>{" "}*/}
      {/*          <div className="self-stretch text-lg font-medium leading-8 text-white">*/}
      {/*            Support*/}
      {/*          </div>*/}
      {/*        </div>{" "}*/}
      {/*        <div className="shrink grow basis-auto text-right text-lg leading-7 text-white">*/}
      {/*          © Copyright 2021, All Rights Reserved*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
}

export default App;
