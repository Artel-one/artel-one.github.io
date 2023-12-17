const Badge = () => {
  return (
    <div className="text-prime text-xl leading-9 whitespace-nowrap justify-center items-stretch bg-violet-100 px-8 py-1.5 rounded-[100px] max-w-[340px] mx-auto mb-9">
      Marketing with full AI power
    </div>
  )
}

import * as React from "react";

function MyComponent(props) {
  return (
    <div className="bg-neutral-50 flex flex-col">
      <div className="bg-white self-stretch flex w-full flex-col items-stretch pt-4 max-md:max-w-full">
        <div className="flex w-full flex-col items-stretch px-9 max-md:max-w-full max-md:px-5">
          <div className="flex w-full items-center justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <div className="flex items-start justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap max-md:justify-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/06b26a09032976ab8332f84bb13a3f02c3623e0282a0c271e2bedf52b017e057?"
                className="aspect-[9] object-contain object-center w-[171px] overflow-hidden self-stretch shrink-0 max-w-full"
              />
              <div className="text-zinc-900 text-sm font-semibold leading-6 self-center my-auto">
                Solutions
              </div>
              <div className="text-zinc-900 text-sm font-semibold leading-6 self-center my-auto">
                Features
              </div>
              <div className="text-zinc-900 text-sm font-semibold leading-6 mt-1.5 self-start">
                Advantages
              </div>
              <div className="text-zinc-900 text-sm font-semibold leading-6 mt-2 self-start">
                Сases
              </div>
              <div className="text-zinc-900 text-sm font-semibold leading-6 self-center my-auto">
                Price
              </div>
              <div className="text-zinc-900 text-sm font-semibold leading-6 self-center whitespace-nowrap my-auto">
                Contact
              </div>
            </div>
            <div className="text-white text-right text-base font-bold leading-6 whitespace-nowrap justify-center items-stretch bg-violet-700 self-stretch px-7 py-3 rounded-xl max-md:px-5">
              Request demo
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca92145752fd285ab83198d479ea1ad828f0f35ae5ee3619e145d4cb71377d30?"
            className="aspect-[1.47] object-contain object-center w-[741px] overflow-hidden max-w-full ml-12 mt-28 self-start max-md:mt-10"
          />
        </div>
        <div className="justify-center items-center shadow-lg bg-zinc-900 z-[1] flex mb-0 w-full flex-col mt-20 px-16 py-10 max-md:max-w-full max-md:mt-10 max-md:mb-2.5 max-md:px-5">
          <div className="w-full max-w-[1250px] max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[35%] max-md:w-full max-md:ml-0">
                <div className="justify-center flex grow flex-col items-start max-md:mt-10">
                  <div className="justify-center items-center bg-[linear-gradient(0deg,#18181B_0%,#18181B_100%),#6922EC] flex w-[76px] flex-col h-[76px] px-3.5 rounded-[365.135px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b5ac400aed9c279f0a17bc676d294b7edca14342388c9d116b2ed54e1a36ef2?"
                      className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden"
                    />
                  </div>
                  <div className="text-white text-xl font-bold self-stretch mt-5">
                    Boosted profits
                  </div>
                  <div className="text-zinc-300 text-lg font-medium self-stretch mt-5">
                    Cutting edge advantage  of tailored ML resulting in boosted
                    ROMI, ARPU and reduced CAC, Churn
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[35%] ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-center flex flex-col items-start max-md:mt-10">
                  <div className="justify-center items-center bg-[linear-gradient(0deg,#18181B_0%,#18181B_100%),#6922EC] flex w-[76px] flex-col h-[76px] px-3 rounded-[365.135px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4983914b1cabc45d11a40a5559a882b20daedb1bed0bee8eb849dd8e940d3f9?"
                      className="aspect-square object-contain object-center w-full overflow-hidden"
                    />
                  </div>
                  <div className="text-white text-xl font-bold self-stretch mt-5">
                    ML-attribution
                  </div>
                  <div className="text-zinc-300 text-lg font-medium self-stretch mt-5">
                    Find out which marketing channel is most likely to lead to
                    customer conversions
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[30%] ml-5 max-md:w-full max-md:ml-0">
                <div className="justify-center flex grow flex-col items-start max-md:mt-10">
                  <div className="justify-center items-center bg-neutral-900 flex w-[76px] flex-col h-[76px] px-3 rounded-[365.135px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/56b27ad63eb8fd56ed7443a41dcb6cd36fc0e7eda70b4eae76df8ce7bd6c04b8?"
                      className="aspect-square object-contain object-center w-full overflow-hidden"
                    />
                  </div>
                  <div className="text-white text-xl font-bold self-stretch mt-5">
                    Predictive analytics
                  </div>
                  <div className="text-zinc-300 text-lg font-medium self-stretch mt-5">
                    Enrich your customer data with accurate predictions of their
                    future actions and value: Lead, Cbuyer, ARPU, LTV...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center items-center bg-zinc-900 self-stretch flex w-full flex-col mt-24 px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="w-full max-w-[1250px] max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[35%] max-md:w-full max-md:ml-0">
              <div className="justify-center flex grow flex-col items-start max-md:mt-10">
                <div className="justify-center items-center bg-[linear-gradient(0deg,#18181B_0%,#18181B_100%),#6922EC] flex w-[76px] flex-col h-[76px] px-3.5 rounded-[365.135px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b5ac400aed9c279f0a17bc676d294b7edca14342388c9d116b2ed54e1a36ef2?"
                    className="aspect-square object-contain object-center w-full justify-center items-center overflow-hidden"
                  />
                </div>
                <div className="text-white text-xl font-bold self-stretch mt-5">
                  Data personalisation
                </div>
                <div className="text-zinc-300 text-lg font-medium self-stretch mt-5">
                  Offer personalised pricing and suggestions  to your customers
                  based on their interests  and behaviours
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[35%] ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-center flex flex-col items-start max-md:mt-10">
                <div className="justify-center items-center bg-[linear-gradient(0deg,#18181B_0%,#18181B_100%),#6922EC] flex w-[76px] flex-col h-[76px] px-3 rounded-[365.135px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4983914b1cabc45d11a40a5559a882b20daedb1bed0bee8eb849dd8e940d3f9?"
                    className="aspect-square object-contain object-center w-full overflow-hidden"
                  />
                </div>
                <div className="text-white text-xl font-bold self-stretch mt-5">
                  ML-experiments
                </div>
                <div className="text-zinc-300 text-lg font-medium self-stretch mt-5">
                  Flexible system of iterative A/B tests  on HADI cycles for
                  marketing activities
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[30%] ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-center flex flex-col items-start max-md:mt-10">
                <div className="justify-center items-center bg-neutral-900 flex w-[76px] flex-col h-[76px] px-3 rounded-[365.135px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/56b27ad63eb8fd56ed7443a41dcb6cd36fc0e7eda70b4eae76df8ce7bd6c04b8?"
                    className="aspect-square object-contain object-center w-full overflow-hidden"
                  />
                </div>
                <div className="text-white text-xl font-bold self-stretch mt-5">
                  End-to-end analytics
                </div>
                <div className="text-zinc-300 text-lg font-medium self-stretch mt-5">
                  Comprehensive customer data from all sites and channels in one
                  place
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-violet-700 text-xl leading-9 whitespace-nowrap justify-center items-stretch bg-violet-100 self-center mt-36 px-8 py-1.5 rounded-[100px] max-md:mt-10 max-md:px-5">
        Marketing with full AI power
      </div>
      <div className="text-violet-700 text-center text-5xl font-bold leading-10 self-center max-w-[750px] mt-11 max-md:max-w-full max-md:mt-10">
        <span className="text-zinc-900">Make Your ML Data —</span>
        <span className="text-violet-700"> Driven Decision</span>
      </div>
      <div className="text-gray-500 text-center text-xl leading-9 self-center max-w-screen-md mt-12 max-md:max-w-full max-md:mt-10">
        Reboost.ai work in real-time, calculating key metrics for each user,
        enriching with data from ML models
      </div>
      <div className="self-center flex w-[1001px] max-w-full justify-between gap-5 mt-20 px-5 items-start max-md:flex-wrap max-md:justify-center max-md:mt-10">
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="text-violet-700 text-center text-base font-semibold leading-5 tracking-wider uppercase whitespace-nowrap">
            Predictive analytics
          </div>
          <div className="bg-violet-700 shrink-0 h-px mt-1.5" />
          <div className="text-zinc-700 text-xs leading-5 mt-3.5">
            Accurate predictions across  the entire funnel
          </div>
        </div>
        <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
          <div className="text-zinc-400 text-center text-base font-semibold leading-5 tracking-wider uppercase">
            Smart Audience
          </div>
          <div className="text-zinc-400 text-xs leading-5 mt-5">
            Building audiences based on user value on the fly
          </div>
        </div>
        <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
          <div className="text-zinc-400 text-center text-base font-semibold leading-5 tracking-wider uppercase whitespace-nowrap">
            ML-attribution
          </div>
          <div className="text-zinc-400 text-xs leading-5 mt-5">
            All users and channels are  at your fingertips
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-stretch">
          <div className="text-zinc-400 text-center text-base font-semibold leading-5 tracking-wider uppercase whitespace-nowrap">
            PersonaliSation
          </div>
          <div className="text-zinc-400 text-xs leading-5 mt-5">
            High-precision personalisation based on customer behaviour
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        srcSet="..."
        className="aspect-[1.6] object-contain object-center w-[1088px] overflow-hidden self-center max-w-full mt-10"
      />
      <div className="text-gray-500 text-center text-lg font-medium leading-8 self-center max-w-[465px] mt-32 max-md:mt-10">
        Three quick results for you
      </div>
      <div className="text-zinc-900 text-center text-5xl font-bold leading-10 self-center max-w-[612px] mt-7 max-md:max-w-full">
        So how can you get quick results using reboost.ai
      </div>
      <div className="self-center w-full max-w-[1296px] mt-20 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:mt-10">
              <div className="text-zinc-900 text-2xl font-bold leading-9">
                <span className="text-violet-700">Smart targeting</span>
                <span className="text-zinc-900">
                  {" "}
                  based  on profitable audiences
                </span>
              </div>
              <div className="text-zinc-900 text-base leading-7 mt-6">
                You will be able to spend your advertising budget solely on
                those customers who are highly likely to make a purchase
              </div>
              <div className="bg-zinc-900 flex flex-col items-stretch mt-4 pt-10 px-14 rounded-xl max-md:px-5">
                <div className="border-[color:var(--gray-200,#E4E4E7)] bg-white flex w-full flex-col items-stretch pl-5 pr-20 pt-5 pb-1.5 rounded-lg border-[0.915px] border-solid max-md:pr-5">
                  <div className="text-zinc-700 text-xs font-bold leading-4 tracking-wider uppercase max-md:mr-1">
                    Customers
                  </div>
                  <div className="flex items-stretch justify-between gap-3.5 mt-6 max-md:mr-1">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="aspect-[0.97] object-contain object-center w-8 overflow-hidden shrink-0 max-w-full rounded-[50%]"
                    />
                    <div className="text-zinc-900 text-base font-bold leading-6 my-auto">
                      Jenny Wilson
                    </div>
                  </div>
                  <div className="flex items-stretch justify-between gap-3.5 mt-5 max-md:mr-1">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="aspect-[0.97] object-contain object-center w-8 overflow-hidden shrink-0 max-w-full rounded-[50%]"
                    />
                    <div className="text-zinc-900 text-base font-bold leading-6 my-auto">
                      Cody Fisher
                    </div>
                  </div>
                  <div className="flex items-stretch justify-between gap-3.5 mt-5 max-md:mr-1">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full rounded-[50%]"
                    />
                    <div className="text-zinc-900 text-base font-bold leading-6 my-auto">
                      Robert Fox
                    </div>
                  </div>
                  <div className="flex items-stretch justify-between gap-3.5 mt-5 max-md:mr-1">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="aspect-[0.97] object-contain object-center w-8 overflow-hidden shrink-0 max-w-full rounded-[50%]"
                    />
                    <div className="text-zinc-900 text-base font-bold leading-6 self-center grow whitespace-nowrap my-auto">
                      Savannah Nguyen
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-zinc-700 text-base leading-7 mt-9">
                Reboost.ai curates high-value audiences for you and integrates
                them into Meta, Google, etc. ad dashboards. You can utilise
                these for retargeting or look-alike strategies, effectively
                reducing ad costs by targeting only profitable users
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:mt-10">
              <div className="text-zinc-900 text-2xl font-bold leading-9">
                <span className="text-violet-700">Optimising strategy </span>
                <span className="text-zinc-900">through enriched data</span>
              </div>
              <div className="text-zinc-900 text-base leading-7 mt-6">
                Reduce your expenses by focusing only on those clients who can
                genuinely bring you revenue
              </div>
              <div className="bg-zinc-900 flex flex-col justify-center items-stretch mt-4 px-14 py-9 rounded-xl max-md:px-5">
                <div className="shadow-sm bg-white flex w-full flex-col items-stretch px-5 py-5 rounded-lg">
                  <div className="flex items-stretch justify-between gap-5">
                    <div className="text-zinc-900 text-xs font-bold leading-5">
                      Sale Report
                    </div>
                    <div className="text-zinc-300 text-right text-xs font-bold leading-5">
                      Mar 21-Apr 20
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0997263a14fa2f908cd8c2faa4b74139861c8a5c838c26810239287785205c11?"
                    className="aspect-[1.8] object-contain object-center w-full overflow-hidden mt-8"
                  />
                </div>
              </div>
              <div className="text-zinc-700 text-base leading-7 mt-9">
                Adjust your campaign strategies on Meta and Google advertising
                dashboards to target customers who generate income for you.
                Also, concentrate your sales department's efforts on profitable
                customers
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch max-md:mt-10">
              <div className="text-zinc-900 text-2xl font-bold leading-9">
                <span className="text-violet-700">Personalised offer </span>
                <span className="text-zinc-900"> with a precise hit</span>
              </div>{" "}
              <div className="text-zinc-900 text-base leading-7 mt-6">
                Offer your customers precisely what they crave based on their
                behavior and interests
              </div>{" "}
              <div className="bg-zinc-900 flex flex-col items-stretch mt-12 pl-12 pt-10 rounded-xl max-md:mt-10 max-md:pl-5">
                <div className="border-[color:var(--gray-200,#E4E4E7)] shadow-2xl bg-white z-[1] flex mb-0 flex-col items-stretch pt-6 pb-10 rounded-lg border-[0.909px] border-solid max-md:mb-2.5">
                  <div className="flex flex-col px-5 max-md:pr-5">
                    <div className="self-stretch flex items-stretch justify-between gap-3">
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="aspect-[1.03] object-contain object-center w-[33px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
                      />{" "}
                      <div className="text-zinc-900 text-base font-bold leading-6 grow shrink basis-auto self-start">
                        Albert Flores
                      </div>
                    </div>{" "}
                    <div className="text-zinc-600 text-base leading-6 max-w-[264px] self-end">
                      Thanks for the awesome feedback! We are trying to
                      implement this in our next update. Cheers!
                    </div>{" "}
                    <div className="text-zinc-400 text-xs font-medium leading-5 self-center whitespace-nowrap mt-4">
                      7 hours ago . Reply
                    </div>{" "}
                    <div className="self-center flex gap-3 mt-8 items-start">
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="aspect-[1.03] object-contain object-center w-[33px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
                      />{" "}
                      <div className="flex grow basis-[0%] flex-col items-stretch">
                        <div className="text-zinc-900 text-base font-bold leading-6">
                          Eleanor Pena
                        </div>{" "}
                        <div className="text-zinc-600 text-base leading-6 mt-5">
                          <span className="font-bold text-zinc-900">
                            @Albert Flores
                          </span>
                          <span className=" text-zinc-600">
                            {" "}
                            That would be great!
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="text-zinc-700 text-base leading-7 mt-10 self-start">
                    By discerning who your users are, their interests, and
                    autonomously analysing their behaviour, you can tailor your
                    price offerings and necessary goods and services with
                    pinpoint accuracy, thereby maximising your profit
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="text-zinc-900 text-center text-5xl font-bold leading-10 self-center max-w-[612px] mt-32 max-md:max-w-full max-md:mt-10">
        Even more opportunities  for your business
      </div>{" "}
      <div className="self-center flex w-full max-w-[1186px] items-stretch justify-between gap-5 mt-24 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <div className="justify-between flex gap-5 px-5 items-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/41a5d98db6694f2f62e0e5e051e415ea340d78b11dd9bec98b9df3707bc5a144?"
            className="aspect-square object-contain object-center w-[60px] overflow-hidden shrink-0 max-w-full"
          />{" "}
          <div className="text-zinc-800 text-xl leading-10 grow shrink basis-auto">
            <span className="font-semibold">Prediction of probabilities</span>
            <span className="">:  bid, order, purchase, churn, LTV...</span>
          </div>
        </div>{" "}
        <div className="justify-between items-stretch flex gap-5 px-5 self-start max-md:max-w-full max-md:flex-wrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/41a5d98db6694f2f62e0e5e051e415ea340d78b11dd9bec98b9df3707bc5a144?"
            className="aspect-square object-contain object-center w-[60px] overflow-hidden shrink-0 max-w-full"
          />{" "}
          <div className="text-zinc-800 text-xl leading-10 self-center grow shrink basis-auto my-auto">
            <span className="font-semibold">
              Personalisation of customers according{" "}
            </span>
            <span className=""> to their needs and characteristics</span>
          </div>
        </div>
      </div>{" "}
      <div className="self-center flex w-full max-w-[1148px] items-stretch justify-between gap-5 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <div className="justify-between flex gap-5 px-5 items-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/41a5d98db6694f2f62e0e5e051e415ea340d78b11dd9bec98b9df3707bc5a144?"
            className="aspect-square object-contain object-center w-[60px] overflow-hidden shrink-0 max-w-full"
          />{" "}
          <div className="text-zinc-800 text-xl leading-10 grow shrink basis-auto">
            <span className="font-medium">On-the-fly user profiling</span>
            <span className="">  and segmentation</span>
          </div>
        </div>{" "}
        <div className="justify-between flex gap-5 px-5 self-start items-start max-md:max-w-full max-md:flex-wrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/41a5d98db6694f2f62e0e5e051e415ea340d78b11dd9bec98b9df3707bc5a144?"
            className="aspect-square object-contain object-center w-[60px] overflow-hidden shrink-0 max-w-full"
          />{" "}
          <div className="text-zinc-800 text-xl leading-10 grow shrink basis-auto">
            <span className="font-semibold">
              Prioritisation of potential customers{" "}
            </span>
            <span className=""> for the sales department</span>
          </div>
        </div>
      </div>{" "}
      <div className="self-center flex w-[1016px] max-w-full items-stretch justify-between gap-5 mt-14 max-md:flex-wrap max-md:mt-10">
        <div className="justify-between flex gap-5 px-5 items-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/41a5d98db6694f2f62e0e5e051e415ea340d78b11dd9bec98b9df3707bc5a144?"
            className="aspect-square object-contain object-center w-[60px] overflow-hidden shrink-0 max-w-full"
          />{" "}
          <div className="text-zinc-800 text-xl leading-10 grow shrink basis-auto">
            <span className="font-semibold">Gathering effective audiences</span>
            <span className="">  for advertising offices</span>
          </div>
        </div>{" "}
        <div className="justify-between items-stretch flex gap-5 px-5 self-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/41a5d98db6694f2f62e0e5e051e415ea340d78b11dd9bec98b9df3707bc5a144?"
            className="aspect-square object-contain object-center w-[60px] overflow-hidden shrink-0 max-w-full"
          />{" "}
          <div className="text-zinc-800 text-xl leading-10 self-center w-[574px] my-auto">
            <span className="font-semibold">Personalising the price</span>
            <span className="">  for the customer</span>
          </div>
        </div>
      </div>{" "}
      <div className="self-center flex w-full max-w-[1128px] justify-between gap-5 mt-14 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <div className="justify-between items-stretch flex gap-5 px-5 max-md:max-w-full max-md:flex-wrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/41a5d98db6694f2f62e0e5e051e415ea340d78b11dd9bec98b9df3707bc5a144?"
            className="aspect-square object-contain object-center w-[60px] overflow-hidden shrink-0 max-w-full"
          />{" "}
          <div className="text-zinc-800 text-xl leading-10 self-center grow shrink basis-auto my-auto">
            <span className="font-semibold">
              Forecasting user conversions across
            </span>
            <span className=""> the entire sales funnel</span>
          </div>
        </div>{" "}
        <div className="justify-between self-stretch flex gap-5 px-5 items-start max-md:max-w-full max-md:flex-wrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/41a5d98db6694f2f62e0e5e051e415ea340d78b11dd9bec98b9df3707bc5a144?"
            className="aspect-square object-contain object-center w-[60px] overflow-hidden shrink-0 max-w-full"
          />{" "}
          <div className="text-zinc-800 text-xl leading-10 grow shrink basis-auto">
            <span className="font-semibold">
              A/B testing system with AI control
            </span>
            <span className="">  and results analysis</span>
          </div>
        </div>
      </div>{" "}
      <div className="self-center flex w-full max-w-[1134px] justify-between gap-5 mt-14 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <div className="justify-between items-stretch flex gap-5 px-5 max-md:max-w-full max-md:flex-wrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/41a5d98db6694f2f62e0e5e051e415ea340d78b11dd9bec98b9df3707bc5a144?"
            className="aspect-square object-contain object-center w-[60px] overflow-hidden shrink-0 max-w-full"
          />{" "}
          <div className="text-zinc-800 text-xl leading-10 self-center grow shrink basis-auto my-auto">
            <span className="font-semibold">
              Optimisation of advertising campaigns{" "}
            </span>
            <span className=""> with revenue maximisation</span>
          </div>
        </div>{" "}
        <div className="justify-between self-stretch flex gap-5 px-5 items-start max-md:max-w-full max-md:flex-wrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/41a5d98db6694f2f62e0e5e051e415ea340d78b11dd9bec98b9df3707bc5a144?"
            className="aspect-square object-contain object-center w-[60px] overflow-hidden shrink-0 max-w-full"
          />{" "}
          <div className="text-zinc-800 text-xl leading-10 grow shrink basis-auto">
            <span className="font-semibold">
              End-to-End analytics with revenue
            </span>
            <span className="">  and CAC and ROMI predictions</span>
          </div>
        </div>
      </div>{" "}
      <div className="bg-[linear-gradient(0deg,#18181B_0%,#18181B_100%),#6922EC] self-center flex w-full max-w-[1413px] flex-col justify-center items-center mt-36 px-16 py-12 rounded-[30px] max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="flex w-[1040px] max-w-full flex-col items-stretch mt-5 mb-5">
          <div className="text-white text-center text-5xl font-bold leading-10 self-center max-w-[550px] max-md:max-w-full">
            The results you can achieve
          </div>{" "}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/95e7c49952fc923a74725e3605e61ebddf7f88b37d8418a5b929ce29e1d659f5?"
            className="aspect-[12.58] object-contain object-center w-[151px] overflow-hidden self-center max-w-full mt-10"
          />{" "}
          <div className="mt-11 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[84%] max-md:w-full max-md:ml-0">
                <div className="grow max-md:max-w-full max-md:mt-10">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[36%] max-md:w-full max-md:ml-0">
                      <div className="flex grow flex-col items-stretch max-md:mt-10">
                        <div className="text-white text-center text-5xl font-semibold leading-[62px] tracking-tighter max-md:text-4xl max-md:leading-[53px]">
                          -80%
                          <br />
                          CAC{" "}
                        </div>{" "}
                        <div className="text-white text-center text-base font-medium leading-6 whitespace-nowrap mt-7">
                          Reducing up to
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex grow flex-col items-stretch max-md:mt-10">
                        <div className="text-white text-center text-5xl font-semibold leading-[62px] tracking-tighter max-md:text-4xl max-md:leading-[53px]">
                          +400%  ROMI{" "}
                        </div>{" "}
                        <div className="text-white text-center text-base font-medium leading-6 whitespace-nowrap mt-7">
                          increased up to 5 times
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-[31%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex grow flex-col items-stretch max-md:mt-10">
                        <div className="text-white text-center text-5xl font-semibold leading-[62px] tracking-tighter max-md:text-4xl max-md:leading-[53px]">
                          +200% <br />
                          LTV{" "}
                        </div>{" "}
                        <div className="text-white text-center text-base font-medium leading-6 whitespace-nowrap mt-7">
                          increase up to 2 times
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="flex flex-col items-stretch w-[16%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex grow flex-col items-stretch max-md:mt-10">
                  <div className="text-white text-center text-5xl font-semibold leading-[62px] tracking-tighter max-md:text-4xl max-md:leading-[53px]">
                    -70% <br />
                    Churn{" "}
                  </div>{" "}
                  <div className="text-white text-center text-base font-medium leading-6 whitespace-nowrap mt-7">
                    Reduction up to{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="bg-neutral-50 self-stretch flex w-full flex-col justify-center items-center mt-20 px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="flex w-full max-w-[1342px] flex-col items-stretch mt-7 mb-32 max-md:max-w-full max-md:mb-10">
          <div className="text-violet-700 text-xl leading-9 whitespace-nowrap justify-center items-stretch bg-violet-100 self-center px-8 py-1.5 rounded-[100px] max-md:px-5">
            Advantages
          </div>{" "}
          <div className="text-zinc-900 text-center text-5xl font-bold leading-10 self-center max-w-[775px] mt-11 max-md:max-w-full max-md:mt-10">
            Why does Reboost.ai outshine similar market solutions?
          </div>{" "}
          <div className="text-gray-500 text-center text-xl leading-9 self-center max-w-screen-md mt-10 max-md:max-w-full">
            We maximise performance indicators where others  fail to achieve the
            same level of efficiency
          </div>{" "}
          <div className="mt-16 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                <div className="shadow-sm bg-white flex grow flex-col w-full pl-8 pr-14 py-10 rounded-xl items-start max-md:mt-10 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/49d66e2a0fb9c1bdb6bfc493d09e26a630dfe6a737519546f443a236deeb1996?"
                    className="aspect-[0.98] object-contain object-center w-[49px] overflow-hidden max-w-full"
                  />{" "}
                  <div className="text-zinc-900 text-2xl font-bold leading-9 self-stretch mt-7">
                    Phenomenal (95%) prediction accuracy
                  </div>{" "}
                  <div className="text-zinc-600 text-base leading-7 self-stretch mt-8">
                    Predictions that our models provide show their effectiveness
                    by analyzing a huge number of user behavioral factors and by
                    optimizing models that take into account the specifics of
                    your business.
                  </div>
                </div>
              </div>{" "}
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="shadow-sm bg-white flex grow flex-col w-full px-8 py-12 rounded-xl items-start max-md:mt-10 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ce984c5274342d05f40add8ebf2900a9478f141828693481e55a19330965802?"
                    className="aspect-square object-contain object-center w-[49px] overflow-hidden max-w-full"
                  />{" "}
                  <div className="text-zinc-900 text-2xl font-bold leading-9 self-stretch mt-5">
                    Assured KPI results
                  </div>{" "}
                  <div className="text-zinc-600 text-base leading-7 self-stretch mt-11 mb-12 max-md:my-10">
                    We pledge to reach agreed KPIs, with the final fee for our
                    service dependent on how effectively we achieve desired
                    outcomes.
                  </div>
                </div>
              </div>{" "}
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="shadow-sm bg-white flex grow flex-col w-full pl-8 pr-9 py-11 rounded-xl items-start max-md:mt-10 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8914ffd398a287fedc38298143dc107c9c3580e8e0980db772ad5adf900c9531?"
                    className="aspect-square object-contain object-center w-[49px] overflow-hidden max-w-full"
                  />{" "}
                  <div className="text-zinc-900 text-2xl font-bold leading-9 self-stretch mt-7">
                    Emphasis on your  business goals
                  </div>{" "}
                  <div className="text-zinc-600 text-base leading-7 self-stretch mt-8 mb-4">
                    We adopt an individualised approach for each client. Our
                    experts fine-tune the specifics of your business and adjust
                    models to cater to your interests.
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="mt-20 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                <div className="shadow-sm bg-white flex grow flex-col w-full pl-8 pr-12 py-11 rounded-xl items-start max-md:mt-10 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c2c1002681327d9a650030fbfe68f74f74a0aee986077aab9983f38ef1b8ef1?"
                    className="aspect-square object-contain object-center w-[49px] overflow-hidden max-w-full"
                  />{" "}
                  <div className="text-zinc-900 text-2xl font-bold leading-9 self-stretch mt-7">
                    All-inclusive integrations
                  </div>{" "}
                  <div className="text-zinc-600 text-base leading-7 self-stretch mt-8 mb-6">
                    We swiftly integrate our product with your accounting
                    systems, CRM, BI, and other significant analysis and
                    marketing systems for your business.
                  </div>
                </div>
              </div>{" "}
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="shadow-sm bg-white flex grow flex-col w-full px-8 py-12 rounded-xl items-start max-md:mt-10 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ce984c5274342d05f40add8ebf2900a9478f141828693481e55a19330965802?"
                    className="aspect-square object-contain object-center w-[49px] overflow-hidden max-w-full"
                  />{" "}
                  <div className="text-zinc-900 text-2xl font-bold leading-9 self-stretch mt-5">
                    Unrestricted data access
                  </div>{" "}
                  <div className="text-zinc-600 text-base leading-7 self-stretch mt-11 mb-12 max-md:my-10">
                    Our product offers unlimited Data API access to events and
                    raw data harvested by our tracker.
                  </div>
                </div>
              </div>{" "}
              <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="shadow-sm bg-white flex grow flex-col w-full px-8 py-10 rounded-xl items-start max-md:mt-10 max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8914ffd398a287fedc38298143dc107c9c3580e8e0980db772ad5adf900c9531?"
                    className="aspect-square object-contain object-center w-[49px] overflow-hidden max-w-full"
                  />{" "}
                  <div className="text-zinc-900 text-2xl font-bold leading-9 self-stretch mt-7">
                    {" "}
                    Bespoke tasks
                  </div>{" "}
                  <div className="text-zinc-600 text-base leading-7 self-stretch mt-10">
                    Should you require additional model development or specific
                    task execution for your business, we're prepared to provide
                    a dedicated team of ML experts. They'll develop the required
                    functionality within stringent timelines.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="bg-[linear-gradient(0deg,#18181B_0%,#18181B_100%),#6922EC] self-center flex w-full max-w-[1413px] flex-col justify-center items-center mt-4 px-16 py-12 rounded-[30px] max-md:max-w-full max-md:px-5">
        <div className="flex w-[1088px] max-w-full flex-col items-stretch mt-6 mb-12 max-md:mb-10">
          <div className="text-white text-center text-5xl font-bold leading-10 self-center w-[690px]">
            Our cases
          </div>{" "}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/95e7c49952fc923a74725e3605e61ebddf7f88b37d8418a5b929ce29e1d659f5?"
            className="aspect-[12.58] object-contain object-center w-[151px] overflow-hidden self-center max-w-full mt-10"
          />{" "}
          <div className="flex justify-between gap-5 mt-10 items-start max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <div className="flex grow basis-[0%] flex-col items-stretch mt-1">
              <div className="text-white text-5xl font-bold leading-[60px] max-md:text-4xl max-md:leading-[56px]">
                up to 28%
              </div>{" "}
              <div className="text-zinc-300 text-lg leading-7 mt-5">
                Increased customer retention from 12.7% to 28% in July
                2022-July 2023
              </div>
            </div>{" "}
            <div className="bg-zinc-600 self-center w-px shrink-0 h-[55px] my-auto" />{" "}
            <div className="flex grow basis-[0%] flex-col items-stretch">
              <div className="text-white text-5xl font-bold leading-[60px] whitespace-nowrap max-md:text-4xl max-md:leading-[56px]">
                up to $206К
              </div>{" "}
              <div className="text-zinc-300 text-lg leading-7 mt-5">
                Almost doubled revenues from $105K to $206K after implementing
                NLP models
              </div>
            </div>{" "}
            <div className="bg-zinc-600 self-center w-px shrink-0 h-[55px] my-auto" />{" "}
            <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
              <div className="text-white text-5xl font-bold leading-[60px] whitespace-nowrap max-md:text-4xl max-md:leading-[56px]">
                up to 5x ROMI
              </div>{" "}
              <div className="text-zinc-300 text-lg leading-7 mt-4">
                ROMI increased over 6 months from 95.75% to an average of 515%
                in February-July 2022
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="text-zinc-900 text-center text-5xl font-bold leading-10 self-center whitespace-nowrap mt-44 max-md:mt-10">
        How it works
      </div>{" "}
      <div className="text-zinc-600 text-center text-base leading-7 self-center max-w-[609px] mt-8 max-md:max-w-full">
        To start work, it is enough to integrate our script into a website or
        SDK into  a mobile application. We will do everything else ourselves
      </div>{" "}
      <div className="self-center w-full max-w-[1295px] mt-20 px-5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="border border-[color:var(--gray-200,#E4E4E7)] bg-white flex grow flex-col w-full pl-9 pr-7 py-11 rounded-2xl border-solid items-start max-md:mt-10 max-md:px-5">
              <div className="text-white text-center text-base font-bold leading-7 whitespace-nowrap bg-zinc-900 aspect-square justify-center items-center h-[39px] px-5 rounded-xl">
                1
              </div>{" "}
              <div className="text-zinc-900 text-xl font-medium leading-8 self-stretch mt-7 mb-3.5">
                Easy integration of the service into your product
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[35%] ml-5 max-md:w-full max-md:ml-0">
            <div className="border border-[color:var(--gray-200,#E4E4E7)] bg-white flex grow flex-col w-full pl-9 pr-4 py-11 rounded-2xl border-solid items-start max-md:mt-10 max-md:pl-5">
              <div className="text-white text-center text-base font-bold leading-7 whitespace-nowrap bg-zinc-900 aspect-square justify-center items-center h-[39px] px-4 rounded-xl">
                2
              </div>{" "}
              <div className="text-zinc-900 text-xl font-medium leading-8 self-stretch mt-7 mb-3.5">
                Analyzing user behavior and experimenting for improvement{" "}
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="border border-[color:var(--gray-200,#E4E4E7)] bg-white flex grow flex-col w-full pl-9 pr-20 py-8 rounded-2xl border-solid items-start max-md:mt-10 max-md:px-5">
              <div className="text-white text-center text-base font-bold leading-7 whitespace-nowrap bg-zinc-900 aspect-square justify-center items-center h-[39px] px-4 rounded-xl">
                3
              </div>{" "}
              <div className="text-zinc-900 text-xl font-medium leading-8 w-[313px] mt-7">
                Enriching data, building audiences and launching marketing
                campaigns
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <img
        loading="lazy"
        srcSet="..."
        className="aspect-[2.07] object-contain object-center w-full overflow-hidden self-center max-w-[1295px] mt-20 max-md:max-w-full max-md:mt-10"
      />{" "}
      <div className="self-center flex w-full max-w-[1240px] items-stretch justify-between gap-5 mt-36 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
        <div className="flex justify-between gap-5 self-start items-start">
          <div className="text-white text-center text-base font-bold leading-7 whitespace-nowrap bg-zinc-900 aspect-square justify-center items-center h-[39px] px-5 rounded-xl">
            1
          </div>{" "}
          <div className="text-zinc-900 text-xl font-medium leading-8 grow shrink basis-auto">
            You embed our script on your website
          </div>
        </div>{" "}
        <div className="flex justify-between gap-5 self-start items-start">
          <div className="text-white text-center text-base font-bold leading-7 whitespace-nowrap bg-zinc-900 aspect-square justify-center items-center h-[39px] px-4 rounded-xl">
            2
          </div>{" "}
          <div className="text-zinc-900 text-xl font-medium leading-8 grow shrink basis-auto">
            Our tracker is starting to collect and analyze user events
          </div>
        </div>{" "}
        <div className="flex justify-between gap-5 items-start">
          <div className="text-white text-center text-base font-bold leading-7 whitespace-nowrap bg-zinc-900 aspect-square justify-center items-center h-[39px] px-4 rounded-xl">
            3
          </div>{" "}
          <div className="text-zinc-900 text-xl font-medium leading-8 grow shrink basis-auto">
            Our ML models are starting to make their first predictions and
            enrich user data{" "}
          </div>
        </div>
      </div>{" "}
      <div className="self-center flex w-full max-w-[1261px] items-stretch justify-between gap-5 mt-20 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
        <div className="flex justify-between gap-5 self-start items-start">
          <div className="text-white text-center text-base font-bold leading-7 whitespace-nowrap bg-zinc-900 aspect-square justify-center items-center h-[39px] px-4 rounded-xl">
            4
          </div>{" "}
          <div className="text-zinc-900 text-xl font-medium leading-8 grow shrink basis-auto">
            Based on the data received, the service begins to gather audiences
          </div>
        </div>{" "}
        <div className="flex justify-between gap-5 self-start items-start">
          <div className="text-white text-center text-base font-bold leading-7 whitespace-nowrap bg-zinc-900 aspect-square justify-center items-center h-[39px] px-4 rounded-xl">
            5
          </div>{" "}
          <div className="text-zinc-900 text-xl font-medium leading-8 grow shrink basis-auto">
            Audiences are sent to advertising offices and campaigns and other
          </div>
        </div>{" "}
        <div className="flex justify-between gap-5 items-start">
          <div className="text-white text-center text-base font-bold leading-7 whitespace-nowrap bg-zinc-900 aspect-square justify-center items-center h-[39px] px-4 rounded-xl">
            6
          </div>{" "}
          <div className="text-zinc-900 text-xl font-medium leading-8 grow shrink basis-auto">
            Run HADI cycles with continuous improvements in KPIs until the
            business reaches the goal
          </div>
        </div>
      </div>{" "}
      <div className="bg-violet-700 self-stretch min-h-[1px] w-full mt-20 max-md:max-w-full max-md:mt-10" />{" "}
      <div className="text-violet-700 text-xl leading-9 whitespace-nowrap justify-center items-stretch bg-violet-100 self-center mt-16 px-6 py-1.5 rounded-[100px] max-md:mt-10 max-md:px-5">
        {" "}
        Dashboard
      </div>{" "}
      <div className="text-zinc-900 text-center text-5xl font-bold leading-10 self-center max-w-[876px] mt-12 max-md:max-w-full max-md:mt-10">
        Control and monitoring always at your fingertips in an accessible
        dashboard{" "}
      </div>{" "}
      <div className="text-gray-500 text-center text-xl leading-9 self-center max-w-[757px] mt-11 max-md:max-w-full max-md:mt-10">
        To easily monitor your results, we have created a simple dashboard where
        you can follow the results of your experiments and manage your data
      </div>{" "}
      <div className="self-center w-[800px] max-w-full mt-14 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:mt-10">
              <div className="flex items-stretch justify-between gap-3 px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/00a7753fc8afae701875e3814a45ed108d47aa5f20e48d667706b3e894f81b2f?"
                  className="aspect-square object-contain object-center w-[21px] overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-zinc-900 text-lg font-bold leading-6 self-start">
                  Profit analytics and key metrics
                </div>
              </div>{" "}
              <div className="flex items-stretch justify-between gap-3 mt-6 px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/00a7753fc8afae701875e3814a45ed108d47aa5f20e48d667706b3e894f81b2f?"
                  className="aspect-square object-contain object-center w-[21px] overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-zinc-900 text-lg font-bold leading-6 self-start">
                  Cross-cutting sales analytics{" "}
                </div>
              </div>{" "}
              <div className="flex items-stretch justify-between gap-3 mt-6 px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/00a7753fc8afae701875e3814a45ed108d47aa5f20e48d667706b3e894f81b2f?"
                  className="aspect-square object-contain object-center w-[21px] overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-zinc-900 text-lg font-bold leading-6 grow whitespace-nowrap self-start">
                  Tracking the results of experiments
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:mt-10">
              <div className="flex items-stretch justify-between gap-3 px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/02c40d72863111e6ae86fed221c0114fc8d935625e5c28f9e3db6ff6ed364e54?"
                  className="aspect-square object-contain object-center w-[21px] overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-zinc-900 text-lg font-bold leading-6 self-start">
                  Building profitable audiences
                </div>
              </div>{" "}
              <div className="flex items-stretch justify-between gap-3 mt-6 px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/02c40d72863111e6ae86fed221c0114fc8d935625e5c28f9e3db6ff6ed364e54?"
                  className="aspect-square object-contain object-center w-[21px] overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-zinc-900 text-lg font-bold leading-6 grow whitespace-nowrap self-start">
                  Management and status of integrations
                </div>
              </div>{" "}
              <div className="flex items-stretch justify-between gap-3 mt-6 px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/02c40d72863111e6ae86fed221c0114fc8d935625e5c28f9e3db6ff6ed364e54?"
                  className="aspect-square object-contain object-center w-[21px] overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="text-zinc-900 text-lg font-bold leading-6 self-start">
                  Dashboard access for employees
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="self-center flex w-[682px] max-w-full items-start justify-between gap-3.5 mt-16 px-5 max-md:flex-wrap max-md:justify-center max-md:mt-10">
        <div className="text-zinc-900 text-right text-5xl font-medium leading-[62px] self-center grow whitespace-nowrap my-auto">
          Unlimited
        </div>{" "}
        <div className="text-zinc-900 text-sm leading-5 self-center my-auto">
          Events
          <br />
          Tracker
        </div>{" "}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/388ac7573f987a4c5a4aa5be6d2d7cbb5ee68b52b5f925456d356cbcb3c8fab2?"
          className="aspect-[0.39] object-contain object-center w-[15px] overflow-hidden self-stretch shrink-0 max-w-full"
        />{" "}
        <div className="text-zinc-900 text-right text-5xl font-medium leading-[62px] my-auto">
          Unlimited
        </div>{" "}
        <div className="text-zinc-900 text-sm leading-5 self-center my-auto">
          Account
          <br />
          for employees
        </div>
      </div>{" "}
      <div className="flex-col overflow-hidden self-center relative flex min-h-[737px] w-[1003px] max-w-full items-stretch mt-16 pl-14 pr-9 pt-4 pb-12 max-md:mt-10 max-md:px-5">
        <img
          loading="lazy"
          srcSet="..."
          className="absolute h-full w-full object-cover object-center inset-0"
        />{" "}
        <div className="relative bg-stone-100 mb-20 pl-14 pt-11 rounded-xl max-md:max-w-full max-md:mb-10 max-md:pl-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[36%] max-md:w-full max-md:ml-0">
              <div className="relative flex flex-col max-md:mt-10">
                <div className="justify-center items-center bg-zinc-900 self-stretch flex w-full flex-col px-16 py-3 rounded-xl max-md:px-5">
                  <div className="justify-center items-center flex gap-2.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/811c67e5c6037553890cae5a5ccdfb8eb70506d0ae4c564196195bd9a246243a?"
                      className="aspect-[0.28] object-contain object-center w-[5px] overflow-hidden shrink-0 max-w-full my-auto"
                    />{" "}
                    <div className="text-white text-right text-lg font-bold leading-6 self-stretch grow whitespace-nowrap">
                      Add New Task
                    </div>
                  </div>
                </div>{" "}
                <div className="flex items-stretch gap-3 mt-7 self-start">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                  />{" "}
                  <div className="text-zinc-900 text-base font-medium leading-6 mt-1.5 self-start">
                    Open
                  </div>
                </div>{" "}
                <div className="self-stretch flex items-stretch justify-between gap-3 mt-6">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                  />{" "}
                  <div className="text-zinc-900 text-base font-medium leading-6 self-center grow shrink basis-auto my-auto">
                    Planned
                  </div>
                </div>{" "}
                <div className="self-stretch flex justify-between gap-3 mt-6 items-start">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                  />{" "}
                  <div className="text-zinc-900 text-base font-medium leading-6 grow shrink basis-auto mt-1.5">
                    On Progress
                  </div>
                </div>{" "}
                <div className="flex w-[66px] max-w-full items-stretch gap-3 mt-6 self-start">
                  <div className="border-[color:var(--gray-300,#D4D4D8)] bg-white flex shrink-0 h-5 flex-col flex-1 rounded border-[1.5px] border-solid" />{" "}
                  <div className="text-zinc-900 text-base font-medium leading-6 self-center my-auto">
                    Hold
                  </div>
                </div>{" "}
                <div className="self-stretch flex items-stretch justify-between gap-3 mt-6">
                  <div className="border-[color:var(--gray-300,#D4D4D8)] bg-white flex w-[51px] shrink-0 h-5 flex-col rounded border-[1.5px] border-solid" />{" "}
                  <div className="text-zinc-900 text-base font-medium leading-6 mt-1.5">
                    Completed
                  </div>
                </div>{" "}
                <div className="flex items-stretch gap-3 mt-6 self-start">
                  <div className="border-[color:var(--gray-300,#D4D4D8)] bg-white flex w-5 shrink-0 h-5 flex-col rounded border-[1.5px] border-solid" />{" "}
                  <div className="text-zinc-900 text-base font-medium leading-6 self-center my-auto">
                    Closed
                  </div>
                </div>{" "}
                <div className="self-stretch flex w-full items-stretch justify-between gap-5 mt-28 max-md:mt-10">
                  <div className="flex items-stretch justify-between gap-3">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="aspect-square object-contain object-center w-9 overflow-hidden shrink-0 max-w-full rounded-[50%]"
                    />{" "}
                    <div className="flex grow basis-[0%] flex-col items-stretch self-start">
                      <div className="text-zinc-900 text-base font-semibold leading-6 whitespace-nowrap">
                        Martin Gray
                      </div>{" "}
                      <div className="text-zinc-500 text-base font-medium leading-6 mt-1.5">
                        Admin
                      </div>
                    </div>
                  </div>{" "}
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc33da148ef7db496ebedbe063addeb90b79fa28bf7c9b23f8dad21de483ca5a?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
                  />
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-[64%] ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-white relative grow w-full pl-4 pr-7 pt-5 pb-12 rounded max-md:max-w-full max-md:mt-10 max-md:pr-5">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
                    <div className="relative flex flex-col items-stretch max-md:mt-10">
                      <div className="flex items-stretch gap-2.5 self-start">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/81ae4f5b5047b5dc5a38cc586d68a46faa83ad2e96e21a9547b65fb1851dbab9?"
                          className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                        />{" "}
                        <div className="text-zinc-500 text-sm leading-5 grow whitespace-nowrap self-start">
                          Type to search
                        </div>
                      </div>{" "}
                      <div className="flex items-stretch justify-between gap-3.5 mt-11 max-md:mt-10">
                        <div className="border border-[color:var(--gray-300,#D4D4D8)] bg-white flex w-[25px] shrink-0 h-5 flex-col rounded-sm border-solid" />{" "}
                        <div className="text-zinc-900 text-base font-bold leading-7 grow shrink basis-auto self-start">
                          Deadline for Clustar Project
                        </div>
                      </div>{" "}
                      <div className="text-zinc-500 text-sm font-medium leading-5 whitespace-nowrap ml-9 mt-1.5 self-start max-md:ml-2.5">
                        Dec 21, 2021 6:00 PM
                      </div>{" "}
                      <div className="flex items-stretch justify-between gap-3.5 mt-8">
                        <div className="border border-[color:var(--gray-300,#D4D4D8)] bg-white flex w-[29px] shrink-0 h-5 flex-col rounded-sm border-solid" />{" "}
                        <div className="text-zinc-900 text-base font-bold leading-7 grow shrink basis-auto self-start">
                          Fixing bugs on Live chat
                        </div>
                      </div>{" "}
                      <div className="text-zinc-500 text-sm font-medium leading-5 whitespace-nowrap ml-9 mt-1.5 self-start max-md:ml-2.5">
                        Dec 14, 2021 3:00 PM
                      </div>{" "}
                      <div className="flex items-stretch justify-between gap-3.5 mt-8">
                        <div className="border border-[color:var(--gray-300,#D4D4D8)] bg-white flex w-5 shrink-0 h-5 flex-col rounded-sm border-solid" />{" "}
                        <div className="bg-neutral-100 flex w-[280px] shrink-0 max-w-full h-[11px] flex-col rounded-lg self-start" />
                      </div>{" "}
                      <div className="bg-neutral-100 flex w-[145px] shrink-0 h-[11px] flex-col ml-9 rounded-lg self-start max-md:ml-2.5" />{" "}
                      <div className="flex items-stretch justify-between gap-3.5 mt-8">
                        <div className="border border-[color:var(--gray-300,#D4D4D8)] bg-white flex w-5 shrink-0 h-5 flex-col rounded-sm border-solid" />{" "}
                        <div className="bg-neutral-100 flex w-[280px] shrink-0 max-w-full h-[11px] flex-col rounded-lg self-start" />
                      </div>{" "}
                      <div className="bg-neutral-100 flex w-[145px] shrink-0 h-[11px] flex-col ml-9 rounded-lg self-start max-md:ml-2.5" />{" "}
                      <div className="flex items-stretch justify-between gap-3.5 mt-8">
                        <div className="border border-[color:var(--gray-300,#D4D4D8)] bg-white flex w-5 shrink-0 h-5 flex-col rounded-sm border-solid" />{" "}
                        <div className="bg-neutral-100 flex w-[280px] shrink-0 max-w-full h-[11px] flex-col rounded-lg self-start" />
                      </div>{" "}
                      <div className="bg-neutral-100 flex w-[145px] shrink-0 h-[11px] flex-col ml-9 rounded-lg self-start max-md:ml-2.5" />{" "}
                      <div className="flex items-stretch justify-between gap-3.5 mt-8">
                        <div className="border border-[color:var(--gray-300,#D4D4D8)] bg-white flex w-5 shrink-0 h-5 flex-col rounded-sm border-solid" />{" "}
                        <div className="bg-neutral-100 flex w-[280px] shrink-0 max-w-full h-[11px] flex-col rounded-lg self-start" />
                      </div>{" "}
                      <div className="bg-neutral-100 flex w-[145px] shrink-0 h-[11px] flex-col ml-9 rounded-lg self-start max-md:ml-2.5" />
                    </div>
                  </div>{" "}
                  <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="relative flex flex-col items-center my-auto max-md:mt-10">
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="aspect-[2.26] object-contain object-center w-[70px] overflow-hidden"
                      />{" "}
                      <div className="self-stretch flex flex-col mt-10 pr-5 items-start">
                        <img
                          loading="lazy"
                          srcSet="..."
                          className="aspect-square object-contain object-center w-[31px] overflow-hidden ml-5 max-md:ml-2.5"
                        />{" "}
                        <img
                          loading="lazy"
                          srcSet="..."
                          className="aspect-[1.65] object-contain object-center w-[51px] overflow-hidden self-center mt-10"
                        />
                      </div>{" "}
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="aspect-[2.26] object-contain object-center w-[70px] overflow-hidden mt-9"
                      />{" "}
                      <div className="self-stretch flex flex-col items-center mt-9 pr-5">
                        <img
                          loading="lazy"
                          srcSet="..."
                          className="aspect-[1.65] object-contain object-center w-[51px] overflow-hidden"
                        />{" "}
                        <img
                          loading="lazy"
                          srcSet="..."
                          className="aspect-[1.65] object-contain object-center w-[51px] overflow-hidden mt-9"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="self-stretch flex w-full flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="w-full max-w-[1230px] mt-1 mb-2 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="bg-white flex w-full grow flex-col mx-auto px-7 py-8 rounded-[30px] items-start max-md:mt-10 max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4a796713f4ddf9bbb90ed0692673db9c7481b256906aa1f9077b14621feba16?"
                  className="aspect-[6] object-contain object-center w-24 overflow-hidden max-w-full"
                />{" "}
                <div className="text-zinc-900 text-lg leading-7 self-stretch mt-10 max-md:mt-10">
                  “You made it so simple. My new site is so much faster and
                  easier to work with than my old site. I just choose the page,
                  make the change.”
                </div>{" "}
                <div className="self-stretch flex justify-between gap-4 mt-9 items-start">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-square object-contain object-center w-[43px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
                  />{" "}
                  <div className="flex grow basis-[0%] flex-col items-stretch">
                    <div className="text-zinc-900 text-base font-bold leading-7">
                      Leslie Alexander
                    </div>{" "}
                    <div className="text-zinc-600 text-sm leading-6 mt-4">
                      Freelance React Developer
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="shadow-2xl bg-white flex w-full grow flex-col mx-auto px-7 py-8 rounded-[30px] items-start max-md:mt-10 max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/045cc29fd0106c309510f5a20ed6e907e226ee21340daecfc6fa8eec217cd74c?"
                  className="aspect-[6] object-contain object-center w-24 overflow-hidden max-w-full"
                />{" "}
                <div className="text-zinc-900 text-lg leading-7 self-stretch mt-10 max-md:mt-10">
                  “Simply the best. Better than all the rest. I’d recommend this
                  product to beginners and advanced users.”
                </div>{" "}
                <div className="self-stretch flex justify-between gap-4 mt-16 items-start max-md:mt-10">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-square object-contain object-center w-[43px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
                  />{" "}
                  <div className="flex grow basis-[0%] flex-col items-stretch">
                    <div className="text-zinc-900 text-base font-bold leading-7">
                      Jacob Jones
                    </div>{" "}
                    <div className="text-zinc-600 text-sm leading-6 mt-4">
                      Digital Marketer
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="shadow-2xl bg-white flex w-full grow flex-col mx-auto px-7 py-8 rounded-[30px] items-start max-md:mt-10 max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4bb3548b63be661814f495060b0f9f2fab4152e09c362ffab3ee1e91e8f6fc3?"
                  className="aspect-[6] object-contain object-center w-24 overflow-hidden max-w-full"
                />{" "}
                <div className="text-zinc-900 text-lg leading-7 self-stretch mt-10 max-md:mt-10">
                  “I cannot believe that I have got a brand new landing page
                  after getting Omega. It was super easy to edit and publish.”
                </div>{" "}
                <div className="self-stretch flex justify-between gap-4 mt-9 items-start">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-square object-contain object-center w-[43px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
                  />{" "}
                  <div className="flex grow basis-[0%] flex-col items-stretch">
                    <div className="text-zinc-900 text-base font-bold leading-7">
                      Jenny Wilson
                    </div>{" "}
                    <div className="text-zinc-600 text-sm leading-6 mt-3">
                      Graphic Designer
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9711fb26a2815f79812ed106ab5ade4299d82a5d5abeced1cd2e183e9039ced9?"
        className="aspect-[2.98] object-contain object-center w-[140px] justify-center items-center overflow-hidden self-center max-w-full mt-16 max-md:mt-10"
      />{" "}
      <div className="text-gray-900 text-center text-5xl font-medium leading-[60px] tracking-tighter self-center w-[1216px] max-w-[1144px] mt-11 max-md:max-w-full max-md:text-4xl max-md:leading-[56px] max-md:mt-10">
        We’ve been using Reboost.ai to kick start every new project and can’t
        imagine working without it
      </div>{" "}
      <img
        loading="lazy"
        srcSet="..."
        className="aspect-square object-contain object-center w-16 justify-center items-center overflow-hidden self-center max-w-full mt-9"
      />{" "}
      <div className="self-center text-gray-900 text-center text-lg font-medium leading-7 whitespace-nowrap mt-4 max-md:max-w-full">
        Candice Wu
      </div>{" "}
      <div className="self-center text-gray-500 text-center text-base leading-6 whitespace-nowrap mt-1 max-md:max-w-full">
        Product Manager, Sisyphus
      </div>{" "}
      <div className="bg-zinc-900 self-center flex w-full max-w-[1184px] flex-col items-center mt-20 pt-12 pb-7 px-16 rounded-2xl max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="flex w-[876px] max-w-full flex-col items-center">
          <div className="text-white text-center text-5xl font-bold leading-10 w-[690px]">
            Price
          </div>{" "}
          <div className="self-stretch mt-7 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[26%] max-md:w-full max-md:ml-0">
                <div className="flex items-stretch gap-2.5 my-auto max-md:mt-10">
                  <div className="flex basis-[0%] flex-col items-center">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/91cbda17544dcf5ba31d8bad6a3ba3fd5556b23ca947b261cf29f7d0eda1f7e6?"
                      className="aspect-square object-contain object-center w-5 overflow-hidden"
                    />{" "}
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/91cbda17544dcf5ba31d8bad6a3ba3fd5556b23ca947b261cf29f7d0eda1f7e6?"
                      className="aspect-square object-contain object-center w-5 overflow-hidden mt-3.5"
                    />{" "}
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/91cbda17544dcf5ba31d8bad6a3ba3fd5556b23ca947b261cf29f7d0eda1f7e6?"
                      className="aspect-square object-contain object-center w-5 overflow-hidden mt-3.5"
                    />
                  </div>{" "}
                  <div className="text-white text-base font-medium leading-9 my-auto">
                    Unlimited members
                    <br />
                    Admin accounts
                    <br />
                    Unlimited Events
                  </div>
                </div>
              </div>{" "}
              <div className="flex flex-col items-stretch w-[21%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex items-stretch gap-2.5 my-auto max-md:mt-10">
                  <div className="flex basis-[0%] flex-col items-center">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/91cbda17544dcf5ba31d8bad6a3ba3fd5556b23ca947b261cf29f7d0eda1f7e6?"
                      className="aspect-square object-contain object-center w-5 overflow-hidden"
                    />{" "}
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/91cbda17544dcf5ba31d8bad6a3ba3fd5556b23ca947b261cf29f7d0eda1f7e6?"
                      className="aspect-square object-contain object-center w-5 overflow-hidden mt-3.5"
                    />{" "}
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/91cbda17544dcf5ba31d8bad6a3ba3fd5556b23ca947b261cf29f7d0eda1f7e6?"
                      className="aspect-square object-contain object-center w-5 overflow-hidden mt-3.5"
                    />
                  </div>{" "}
                  <div className="text-white text-base font-medium leading-9 mt-1">
                    Custom events
                    <br />
                    API access
                    <br />
                    Bulk importer
                  </div>
                </div>
              </div>{" "}
              <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex grow items-stretch justify-between gap-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b52e67bb7b80d50cb7c848dda09b2ea6cca8027ebd8b323aaad629ed342595f8?"
                    className="aspect-[0.09] object-contain object-center w-[15px] overflow-hidden shrink-0 max-w-full max-md:hidden"
                  />{" "}
                  <div className="flex grow basis-[0%] flex-col items-stretch mt-4 self-start">
                    <div className="flex flex-col items-stretch pl-6 pr-14 max-md:px-5">
                      <div className="text-zinc-400 text-lg font-medium leading-8">
                        from
                      </div>{" "}
                      <div className="flex items-stretch justify-between gap-5 mt-5">
                        <div className="text-white text-5xl font-bold leading-10 grow whitespace-nowrap">
                          $3000
                        </div>{" "}
                        <div className="text-zinc-400 text-lg font-medium leading-8 grow whitespace-nowrap mt-5 self-start">
                          /month
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex items-stretch justify-between gap-5 mt-4">
                      <div className="text-white text-3xl font-bold leading-10 grow whitespace-nowrap">
                        + success fee
                      </div>{" "}
                      <div className="text-zinc-400 text-lg font-medium leading-8 grow whitespace-nowrap mt-1.5 self-start">
                        / KPI-driven
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="self-center flex justify-between gap-5 mt-28 px-5 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <div className="text-zinc-900 text-center text-lg font-medium leading-8 whitespace-nowrap aspect-square justify-center items-stretch p-2.5 rounded-[50%]">
          🔥
        </div>{" "}
        <div className="text-violet-700 text-center text-5xl font-bold leading-10 grow shrink basis-auto max-md:max-w-full">
          <span className="text-zinc-900">Fair price </span>
          <span className="text-violet-700">tied </span>
          <span className="text-violet-700">to concrete </span>
          <span className="text-violet-700">results</span>
        </div>
      </div>{" "}
      <div className="self-center w-[617px] max-w-full mt-16 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[52%] max-md:w-full max-md:ml-0">
            <div className="flex grow items-stretch justify-between gap-4 max-md:mt-10">
              <div className="flex basis-[0%] flex-col items-center">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ceba4b1ca63cec81e3c81f5cc4008eecd1f8d0b1366b732fd7a5a12a5468d698?"
                  className="aspect-square object-contain object-center w-[42px] overflow-hidden"
                />{" "}
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e08788e2f2e060140d5b9ca6818ab2f50f4fd7ba6b91eb6483b79d74de2727f7?"
                  className="aspect-square object-contain object-center w-[42px] overflow-hidden mt-11 max-md:mt-10"
                />
              </div>{" "}
              <div className="flex grow basis-[0%] flex-col items-stretch px-5">
                <div className="text-zinc-900 text-lg font-bold leading-6 whitespace-nowrap">
                  Cloud Events Tracker
                </div>{" "}
                <div className="text-zinc-600 text-sm leading-6 mt-4">
                  Unlimited for all events
                </div>{" "}
                <div className="text-zinc-900 text-lg font-bold leading-6 mt-12 max-md:mt-10">
                  Data API Access
                </div>{" "}
                <div className="text-zinc-600 text-sm leading-6 whitespace-nowrap mt-4">
                  Get whatever date you need
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[48%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:mt-10">
              <div className="flex justify-between gap-4 items-start">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b203de6039bb6dca40d7152aea90b948d7b9fe6f6947b1747dfd1442f1292516?"
                  className="aspect-square object-contain object-center w-[42px] overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5">
                  <div className="text-zinc-900 text-lg font-bold leading-6 whitespace-nowrap">
                    Unlimited Accounts
                  </div>{" "}
                  <div className="text-zinc-600 text-sm leading-6 whitespace-nowrap mt-4">
                    No charge for extra accounts
                  </div>
                </div>
              </div>{" "}
              <div className="flex justify-between gap-4 mt-11 items-start max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/54ca23f793fec93860053682ac61b1ccb68f558e974969c78edc99f41a66af7b?"
                  className="aspect-square object-contain object-center w-[42px] overflow-hidden shrink-0 max-w-full"
                />{" "}
                <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5">
                  <div className="text-zinc-900 text-lg font-bold leading-6">
                    Custom Events
                  </div>{" "}
                  <div className="text-zinc-600 text-sm leading-6 whitespace-nowrap mt-4">
                    Add any events you want
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="self-center flex w-[619px] max-w-full justify-between gap-5 mt-11 items-start max-md:flex-wrap max-md:mt-10">
        <div className="flex gap-4 items-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc3ca96bc9857a4e5d445d7c3833e4fb3af8b6a99ff65b90a4cb037f131b61c6?"
            className="aspect-square object-contain object-center w-[42px] overflow-hidden shrink-0 max-w-full"
          />{" "}
          <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5">
            <div className="text-zinc-900 text-lg font-bold leading-6 whitespace-nowrap">
              Personal Account Manager
            </div>{" "}
            <div className="text-zinc-600 text-sm leading-6 mt-3">
              We're always here to help.
            </div>
          </div>
        </div>
        <div className="self-stretch flex justify-between gap-4 items-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cebac2aa7dff657e7022c1a51002577d711bb63c5847edc18c4dcff54134e5c3?"
            className="aspect-square object-contain object-center w-[42px] overflow-hidden shrink-0 max-w-full"
          />
          <div className="self-stretch flex grow basis-[0%] flex-col items-stretch px-5">
            <div className="text-zinc-900 text-lg font-bold leading-6">
              All integrations
            </div>
            <div className="text-zinc-600 text-sm leading-6 mt-3">
              Easily share your data on your  BI-system and other
            </div>
          </div>
        </div>
      </div>
      <div className="text-zinc-600 text-center text-base font-medium leading-6 self-center whitespace-nowrap mt-14 max-md:mt-10">
        All our features are available{" "}
      </div>
      <div className="flex-col overflow-hidden self-stretch relative flex min-h-[995px] w-full justify-center items-center mt-32 px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <img
          loading="lazy"
          srcSet="..."
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <div className="relative flex w-[789px] max-w-full flex-col items-stretch mt-16 mb-96 max-md:my-10">
          <div className="text-white text-center text-5xl font-bold leading-10 max-md:max-w-full">
            Drop us a line or two, we're open to any questions and cooperation!
          </div>{" "}
          <div className="text-zinc-100 text-center text-base leading-7 self-center max-w-[521px] mt-9 max-md:max-w-full">
            We are happy to answer all questions and demonstrate our product and
            its capabilities
          </div>{" "}
          <div className="flex-col overflow-hidden self-center relative flex aspect-[3.4444444444444446] w-[248px] max-w-full justify-center items-stretch mt-10 px-9 py-2.5 max-md:px-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2321b237a3267eeb809ffc09aa78e3504f27b553e8edc38832deaa2eb00e64fa?"
              className="absolute h-full w-full object-cover object-center inset-0"
            />{" "}
            <div className="relative text-white text-right text-lg font-bold leading-6 whitespace-nowrap justify-center items-stretch border border-[color:var(--base-white,#FFF)] bg-[linear-gradient(0deg,#18181B_0%,#18181B_100%),#6922EC] px-6 py-4 rounded-xl border-solid max-md:px-5">
              Request Demo
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="bg-zinc-900 self-stretch flex w-full flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="flex w-full max-w-[1296px] flex-col mt-16 mb-9 max-md:max-w-full max-md:mt-10">
          <div className="self-stretch flex w-full items-stretch justify-between gap-5 pr-5 max-md:max-w-full max-md:flex-wrap">
            <div className="text-white text-5xl font-bold leading-10 grow shrink basis-auto max-md:max-w-full">
              Maximizing profits through AI marketing
            </div>{" "}
            <div className="flex gap-5 mt-2 self-start items-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1de7494f0f30fcc9fe8e61d813d9da29a1ec28716eb804ae921e7415aee88aa?"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />{" "}
              <div className="text-white text-xl leading-9 grow shrink basis-auto">
                8502 Preston Rd. Inglewood, Maine 98380, USA
              </div>
            </div>
          </div>{" "}
          <div className="flex items-stretch gap-5 mr-24 mt-3.5 self-end max-md:mr-2.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1869380eb02bd2a18a16818679d5bf29bb2671fd69ded3363f385dc4f95e7045?"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />{" "}
            <div className="text-white text-xl leading-9 grow shrink basis-auto self-start">
              support@rareblocks.xyz
            </div>
          </div>{" "}
          <div className="bg-zinc-600 self-stretch shrink-0 h-px mt-24 max-md:max-w-full max-md:mt-10" />{" "}
          <div className="self-stretch flex w-full justify-between gap-5 mt-14 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
            <div className="flex items-start justify-between gap-5 mt-3 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
              <div className="text-white text-lg font-medium leading-8 self-start">
                About
              </div>{" "}
              <div className="text-white text-lg font-medium leading-8 self-start">
                Features
              </div>{" "}
              <div className="text-white text-lg font-medium leading-8 self-start">
                Works
              </div>{" "}
              <div className="text-white text-lg font-medium leading-8 self-stretch">
                Support
              </div>
            </div>{" "}
            <div className="text-white text-right text-lg leading-7 grow shrink basis-auto">
              © Copyright 2021, All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Feature6 = () => {
  return (
    <>
      <MyComponent />

      <section className="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
        <Badge />

        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl font-pj">
              Make Your ML Data — <span className="text-prime">Driven Decision</span>
            </h2>
            <p className="mt-4 text-base font-normal leading-7 text-gray-purpure lg:text-xl lg:mt-6 lg:leading-8 max-w-3xl mx-auto">
              Reboost.ai work in real-time, calculating key metrics for each user, enriching with data from ML models
            </p>
          </div>

          <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
            <nav className="flex flex-col items-center justify-between space-y-5 sm:flex-row sm:space-y-0 sm:space-x-10 md:space-x-16">
              <div className="pb-2 min-w-[210px]">
                <a
                  href="#"
                  title=""
                  className="text-base leading-5 font-semibold text-prime uppercase transition-all duration-200 border-b border-prime"
                >
                  Predictive analytics
                </a>
                <p className="text-xs text-gray-700 mt-3">Accurate predictions across <br className="hidden lg:block" />the entire funnel</p>
              </div>

              <div className="pb-2 min-w-[210px]">
                <a
                  href="#"
                  title=""
                  className="text-base leading-5 font-semibold text-gray-400 uppercase transition-all duration-200 border-b border-transparent hover:text-gray-900"
                >
                  Smart Audience
                </a>
                <p className="text-xs text-gray-400 mt-3">Building audiences based on user value on the fly</p>
              </div>

              <div className="pb-2 min-w-[210px]">
                <a
                  href="#"
                  title=""
                  className="pb-2 text-base leading-5 font-semibold text-gray-400 uppercase transition-all duration-200 border-b border-transparent hover:text-gray-900"
                >
                  ML-attribution
                </a>
                <p className="text-xs text-gray-400 mt-3">All users and channels are <br className="hidden lg:block" />at your fingertips</p>
              </div>

              <div className="pb-2 min-w-[210px]">
                <a
                  href="#"
                  title=""
                  className="pb-2 text-base leading-5 font-semibold text-gray-400 uppercase transition-all duration-200 border-b border-transparent hover:text-gray-900"
                >
                  PersonaliSation
                </a>
                <p className="text-xs text-gray-400 mt-3">High-precision personalisation based on customer behaviour</p>
              </div>
            </nav>

            <div className="mt-6 sm:mt-8">
              <img className="w-full shadow-2xl rounded-2xl"
                   src="https://landingfoliocom.imgix.net/store/collection/saasui/images/features/4/dashboard-mockup.svg"
                   alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Feature6
