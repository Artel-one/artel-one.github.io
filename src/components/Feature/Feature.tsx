const Feature = () => {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg font-medium text-gray-600 font-pj">Build any pages with 3 simple steps</p>
          <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">Meet Rareblocks, the most rare & beautiful UI Kit</h2>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center md:mt-20 md:max-w-full sm:max-w-sm sm:mx-auto gap-y-10 md:grid-cols-3 md:gap-x-6 lg:gap-x-16 md:text-left">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 font-pj">Track your customers <br className="hidden xl:block" />directly from website</h3>
            <p className="mt-4 text-base leading-7 text-gray-900 font-pj">Create landing pages with Rareblocks that converts more.</p>

            <img className="object-cover w-full mx-auto mt-10 rounded-xl md:mx-0" src="https://cdn.rareblocks.xyz/collection/clarity/images/features-v2/3/feature.png" alt="" />
            <p className="text-base leading-7 text-gray-700 mt-7 font-pj">Consectetur adipis cing elit. Mattis a, tincidunt pulvinar sodales. Quis tellus vel eget in nulla odio. Tellus pharetra sit convallis vel, fermentum dignissim cras in.</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 font-pj">Understand sales <br className="hidden xl:block" />performance better</h3>
            <p className="mt-4 text-base leading-7 text-gray-900 font-pj">Create landing pages with Rareblocks that converts more.</p>

            <img className="object-cover w-full mx-auto mt-10 rounded-xl md:mx-0" src="https://cdn.rareblocks.xyz/collection/clarity/images/features-v2/3/feature2.png" alt="" />
            <p className="text-base leading-7 text-gray-700 mt-7 font-pj">Lorem ipsum dolor sit amet, consectetur adipis cing elit. Mattis a, tincidunt pulvinar sodales. Quis tellus vel eget in nulla odio.</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 font-pj">Get feedbacks live & <br className="hidden xl:block" />make improvements</h3>
            <p className="mt-4 text-base leading-7 text-gray-900 font-pj">Create landing pages with Rareblocks that converts more.</p>

            <img className="object-cover w-full mx-auto mt-10 md:mx-0 rounded-xl" src="https://cdn.rareblocks.xyz/collection/clarity/images/features-v2/3/feature3.png" alt="" />
            <p className="text-base leading-7 text-gray-700 mt-7 font-pj">Mattis a, tincidunt pulvinar sodales. Quis tellus vel eget in nulla odio. Tellus pharetra sit convallis vel, fermentum dignissim cras in.</p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Feature
