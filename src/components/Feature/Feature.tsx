const Feature = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-pj text-lg font-medium text-gray-600">
            Three quick results for you
          </p>
          <h2 className="mt-4 font-pj text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
            So how can you get quick results using reboost.ai
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-y-10 text-center sm:mx-auto sm:max-w-sm md:mt-20 md:max-w-full md:grid-cols-3 md:gap-x-6 md:text-left lg:gap-x-16">
          <div>
            <h3 className="font-pj text-2xl font-bold text-gray-900">
              Smart targeting based <br className="hidden xl:block" />
              on profitable audiences
            </h3>
            <p className="mt-4 font-pj text-base leading-7 text-gray-900">
              You will be able to spend your advertising budget solely on those
              customers who are highly likely to make a purchase
            </p>

            <img
              className="mx-auto mt-10 w-full rounded-xl object-cover md:mx-0"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/features-v2/3/feature.png"
              alt=""
            />
            <p className="mt-7 font-pj text-base leading-7 text-gray-700">
              Reboost.ai curates high-value audiences for you and integrates
              them into Meta, Google, etc. ad dashboards. You can utilise these
              for retargeting or look-alike strategies, effectively reducing ad
              costs by targeting only profitable users
            </p>
          </div>

          <div>
            <h3 className="font-pj text-2xl font-bold text-gray-900">
              Optimising strategy through enriched data
            </h3>
            <p className="mt-4 font-pj text-base leading-7 text-gray-900">
              Reduce your expenses by focusing only on those clients who can
              genuinely bring you revenue
            </p>

            <img
              className="mx-auto mt-10 w-full rounded-xl object-cover md:mx-0"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/features-v2/3/feature2.png"
              alt=""
            />
            <p className="mt-7 font-pj text-base leading-7 text-gray-700">
              Adjust your campaign strategies on Meta and Google advertising
              dashboards to target customers who generate income for you. Also,
              concentrate your sales department's efforts on profitable
              customers
            </p>
          </div>

          <div>
            <h3 className="font-pj text-2xl font-bold text-gray-900">
              Personalised offer <br className="hidden xl:block" />
              with a precise hit
            </h3>
            <p className="mt-4 font-pj text-base leading-7 text-gray-900">
              Offer your customers precisely what they crave based on their
              behavior and interests
            </p>

            <img
              className="mx-auto mt-10 w-full rounded-xl object-cover md:mx-0"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/features-v2/3/feature3.png"
              alt=""
            />
            <p className="mt-7 font-pj text-base leading-7 text-gray-700">
              By discerning who your users are, their interests, and
              autonomously analysing their behaviour, you can tailor your price
              offerings and necessary goods and services with pinpoint accuracy,
              thereby maximising your profit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
