import { useState, Fragment } from 'react'
import './App.css'
import logoImage from './assets/logo.svg'
import logoWhiteImage from './assets/logo_white.svg'
import rocketIcon from './assets/rocket.svg'
import translatorIcon from './assets/translator.svg'
import diagramIcon from './assets/diagram.svg'
import dashboardImage from './assets/dashboard.png'
import titleDecoration from './assets/title_decoration.png'
import titleDecoration2 from './assets/title_decoration_2.png'
import "@fontsource/plus-jakarta-sans"; // Defaults to weight 400
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import { Dialog, Transition } from '@headlessui/react'
import cookie from 'cookiejs'
import CallToAction from "./components/CallToAction"
import Feature from './components/Feature'
import Feature2 from './components/Feature2'
import Feature3 from './components/Feature3'
import Feature4 from './components/Feature4'
import Feature5 from './components/Feature5'
import Feature6 from './components/Feature6'
import Feedback from './components/Feedback'
import HowWorks from './components/HowWorks'
import Stats from './components/Stats'
import Price2 from './components/Price2'
import Footer from './components/Footer'

const CONSENT_COOKIE_NAME = 'consent'

function App() {
  const [isRequestFormOpen, setIsRequestFormOpen] = useState(false)
  const [isSuccessSent, setIsSuccessSent] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  console.log(cookie(CONSENT_COOKIE_NAME))

  const [isCookieConsentOpened, setIsCookieConsentOpened] = useState(!cookie(CONSENT_COOKIE_NAME))

  const agreeCookies = () => {
    cookie.set(CONSENT_COOKIE_NAME, '1')
    setIsCookieConsentOpened(false)
  }

  const openModal = () => {
    setIsSuccessSent(false)
    setIsRequestFormOpen(true)
  }

  const closeModal = () => {
    setIsRequestFormOpen(false)
  }

  const createDemoRequest = ({ name, email, phone }) => {
    const apiURL = 'https://artel.one/api/v2/order/profiles'

    console.log({ name, email, phone })

    fetch(apiURL,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          profile_name: name,
          profile_email: email,
          profile_phone: phone,
          company_name: '',
          company_role: '',
        })
      })
      .then(function(res){
        console.log(res)

        setIsSuccessSent(true)
      })
      .catch(function(res){
        console.log(res)
      })
  }

  return (
    <>
      <Transition appear show={isRequestFormOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {/*<Dialog.Title*/}
                  {/*  as="h3"*/}
                  {/*  className="text-lg font-medium leading-6 text-gray-900"*/}
                  {/*>*/}
                  {/*  Payment successful*/}
                  {/*</Dialog.Title>*/}
                  <div className="mt-2">
                    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        {
                          isSuccessSent ?
                            <>
                              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Thank you for your inquiry!</h2>
                              </div>
                              <div className="mt-4 text-center">
                                We will contact you in 24 hours
                              </div>

                              <div>
                                <button
                                  type="button"
                                  className="flex w-full justify-center rounded-md mt-6 bg-violet px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                  onClick={closeModal}
                                >
                                  Close
                                </button>
                              </div>
                            </>
                          : (
                            <>
                              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Request a demo</h2>
                              </div>

                              <form
                                className="space-y-6"
                                action="#" method="POST"
                                onSubmit={(e) => {
                                  e.preventDefault()

                                  console.log(e.target.elements)

                                  if (!e.target || !e.target.elements) return false

                                  createDemoRequest({
                                    name: e.target.elements.name.value,
                                    email: e.target.elements.email.value,
                                    phone: e.target.elements.phone.value
                                  })
                                }}
                              >
                                <div>
                                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name *</label>
                                  <div className="mt-2">
                                    <input id="name" name="name" type="text" autoComplete="name" required className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                  </div>
                                </div>

                                <div>
                                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email *</label>
                                  <div className="mt-2">
                                    <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                  </div>
                                </div>

                                <div>
                                  <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Phone *</label>
                                  <div className="mt-2">
                                    <input id="phone" name="phone" type="text" autoComplete="phone" required className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                  </div>
                                </div>

                                <div>
                                  <button type="submit" className="flex w-full justify-center rounded-md bg-violet px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Send
                                  </button>
                                </div>
                              </form>
                            </>
                          )
                        }

                        {/*<p className="mt-10 text-center text-sm text-gray-500">*/}
                        {/*  Not a member?*/}
                        {/*  <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>*/}
                        {/*</p>*/}
                      </div>
                    </div>
                  </div>

                  {/*<div className="mt-4">*/}
                  {/*  <button*/}
                  {/*    type="button"*/}
                  {/*    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"*/}
                  {/*    onClick={closeModal}*/}
                  {/*  >*/}
                  {/*    Got it, thanks!*/}
                  {/*  </button>*/}
                  {/*</div>*/}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {
        mobileMenuOpen &&
        <div className="fixed left-0 right-0 z-8 top-0 bottom-0 bg-gray-950/50" />
      }

      {/*<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>*/}
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
      {/*            <a href="#" title="" onClick={openModal} className="px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-violet border border-transparent rounded-xl hover:opacity-90 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">*/}
      {/*              Request demo*/}
      {/*            </a>*/}
      {/*          /!*</div>*!/*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </Dialog.Panel>*/}
      {/*</Dialog>*/}

      <div className="bg-white">
        <header className="py-4 md:py-6">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0">
                <a href="#" title="" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                  <img className="w-auto h-5" src={logoImage} alt="" />
                </a>
              </div>

              {/*<div className="flex lg:hidden">*/}
              {/*  <button type="button" className="text-gray-900" onClick={() => setMobileMenuOpen(true)}>*/}
              {/*    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
              {/*      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path>*/}
              {/*    </svg>*/}
              {/*  </button>*/}
              {/*</div>*/}

              <div className="hidden lg:flex lg:ml-10 xl:ml-16 lg:items-center lg:justify-center lg:space-x-8 xl:space-x-16">
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
                <a href="#" title="" onClick={openModal} className="px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-violet border border-transparent rounded-xl hover:opacity-90 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                  Request demo
                </a>
              </div>
            </div>
          </div>
        </header>

        <section className="overflow-hidden pb-12 xl:pb-24"> {/*pb-12  sm:pb-16*/}
          <div className="pt-12 container mx-auto sm:px-6 lg:px-8 relative">
            <div className="absolute 2xl:top-[-56px] 2xl:left-[733px] xl:left-[600px] xl:top-[20px] lg:left-[400px] lg:top-[90px]">
              <img className="min-w-[1087px] h-[753px] hidden lg:block" src={dashboardImage} alt="" />
            </div>

            <div className="px-4 mx-auto max-w-7xl"> {/*px-4  sm:px-6 lg:px-8*/}
              <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
                <div>
                  <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj relative">
                      <img src={titleDecoration} alt="" className="absolute w-[372px] h-[110px] z-0 hidden sm:block sm:top-[-20px] lg:left-[-63px] lg:top-[-10px]" />
                      <img src={titleDecoration2} alt="" className="absolute w-[331px] h-[120px] z-0 hidden sm:block sm:left-[273px] sm:w-[240px] lg:left-[-20px] lg:w-[310px] xl:left-[263px] bottom-[-30px]" />
                      <span className="z-0 relative font-pj">Maximise your marketing channels efficiency with AI</span>
                    </h1>
                    <p className="mt-2 text-lg text-gray-600 sm:mt-8">
                      We will significantly improve key metrics employing predictive AI analytics and ML algorithms to optimise your marketing activities
                    </p>
                  </div>

                  <div className="flex gap-4 sm:gap-7 mt-10 flex-col sm:flex-row">
                    <a href="#" title="" onClick={openModal} className="px-10 py-3 text-lg leading-6 font-bold text-white transition-all duration-200 bg-violet border border-transparent rounded-xl hover:opacity-90 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 sm:w-1/2 lg:w-auto text-center" role="button">
                      Get Started
                    </a>
                    <a href="#" title="" onClick={openModal} className="px-10 py-3 text-lg leading-6 font-bold text-black transition-all duration-200 box-border border-[3px] border-violet rounded-xl hover:bg-violet hover:text-white font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 sm:w-1/2 lg:w-auto text-center" role="button">
                      Talk to sales
                    </a>
                  </div>

                  <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                    <div className="flex items-center">
                      <p>
                        <span className="text-2xl font-bold text-gray-900 sm:text-4xl font-inter">&#10005;</span>
                        <span className="text-3xl font-bold text-gray-900 sm:text-5xl font-pj">2</span>
                      </p>
                      <p className="ml-3 text-sm text-gray-900"><span className="font-bold">Сbuyer</span> with ML-scoring <br />segments</p>
                    </div>

                    <div className="flex items-center">
                      <p>
                        <span className="text-2xl font-bold text-gray-900 sm:text-4xl font-inter">&#10005;</span>
                        <span className="text-3xl font-bold text-gray-900 sm:text-5xl font-pj">4</span>
                      </p>
                      <p className="ml-3 text-sm text-gray-900"><span className="font-bold">ROMI</span> with ML-scoring <br />segments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-12 pb-12 sm:pb-8 lg:pt-8 bg-gray-950">
          <div className="flex flex-col lg:flex-row justify-between px-4 py-11 container mx-auto sm:px-8 lg:px-10 gap-14 lg:gap-4 lg:max-w-7xl max-w-lg">
            <div className="flex flex-col">
              <img className="w-14 pl-3" src={rocketIcon} alt="" />
              <p className="text-xl font-bold text-white sm:text-base font-pj mt-8">Boosted profits</p>
              <p className="text-lg text-gray-300 mt-5">
                Cutting edge advantage <br className="hidden lg:block" />
                of tailored ML resulting in boosted <br className="hidden lg:block" />
                ROMI and reduced CAC
              </p>
            </div>
            <div className="flex flex-col">
              <img className="w-14 pl-3" src={translatorIcon} alt="" />
              <p className="text-xl font-bold text-white sm:text-base font-pj mt-8">ML experiments</p>
              <p className="text-lg text-gray-300 mt-5">
                Flexible system of iterative ML tests <br className="hidden lg:block" />
                on HADI cycles for marketing activities
              </p>
            </div>
            <div className="flex flex-col">
              <img className="w-14 pl-3" src={diagramIcon} alt="" />
              <p className="text-xl font-bold text-white sm:text-base font-pj mt-8">Predictive analytics</p>
              <p className="text-lg text-gray-300 mt-5">
                End-to-end analytics with predictable <br className="hidden lg:block" />
                conversions: Сlead, Cbuyer, ARPU, LTV...
              </p>
            </div>
          </div>
        </section>

        {
          isCookieConsentOpened &&
          <div className="max-w-screen-lg mx-auto fixed bg-white inset-x-5 p-5 bottom-10 rounded-lg drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center md:text-left items-center justify-center md:justify-between">
            <div className="w-full">
              By clicking “Allow Cookies” you agree to our website′s cookie use as described in our{' '}
              <a href="#" className="text-violet whitespace-nowrap hover:underline">Cookies Policy</a>.
            </div>
            <div className="flex gap-4 items-center flex-shrink-0">
              <button className="text-violet focus:outline-none hover:underline" onClick={() => setIsCookieConsentOpened(false)}>Decline</button>
              <button className="bg-violet px-5 py-2 text-white rounded-md hover:opacity-95 focus:outline-none" onClick={agreeCookies}>Allow Cookies</button>
            </div>
          </div>
        }
      </div>

      <div className="text-violet">f6</div>
      <Feature6 />
      <div className="text-violet">f1</div>
      <Feature />
      <div className="text-violet">ГАЛКИ</div>
      <div className="text-violet">stats</div>
      <Stats />
      <div className="text-violet">f4</div>
      <Feature4 />
      <div className="text-violet">stats</div>
      <Stats />
      <div className="text-violet">howworks</div>
      <HowWorks />
      <div className="text-violet">f3</div>
      <Feature3 />
      <div className="text-violet">feedback</div>
      <Feedback />
      <div className="text-violet">price2</div>
      <Price2 />
      <div className="text-violet">f5</div>
      <Feature5 />
      <Footer />


      <CallToAction />
      <div className="text-violet">f2</div>
      <Feature2 />


      {/*<footer className="bg-gray-950">*/}
      {/*  <div className="py-6 lg:py-8 container sm:px-6 lg:px-8 px-4 mx-auto max-w-7xl">*/}
      {/*    <hr className="mb-6 border-gray-700 sm:mx-auto lg:mb-8" />*/}
      {/*    <div className="md:flex md:justify-between">*/}
      {/*      <div className="mb-6 md:mb-0">*/}
      {/*      </div>*/}
      {/*      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">*/}
      {/*        <div>*/}
      {/*        /!*  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>*!/*/}
      {/*        /!*  <ul className="text-gray-500 dark:text-gray-400 font-medium">*!/*/}
      {/*        /!*    <li className="mb-4">*!/*/}
      {/*        /!*      <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>*!/*/}
      {/*        /!*    </li>*!/*/}
      {/*        /!*    <li>*!/*/}
      {/*        /!*      <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>*!/*/}
      {/*        /!*    </li>*!/*/}
      {/*        /!*  </ul>*!/*/}
      {/*        </div>*/}
      {/*        <div>*/}
      {/*        /!*  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>*!/*/}
      {/*        /!*  <ul className="text-gray-500 dark:text-gray-400 font-medium">*!/*/}
      {/*        /!*    <li className="mb-4">*!/*/}
      {/*        /!*      <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>*!/*/}
      {/*        /!*    </li>*!/*/}
      {/*        /!*    <li>*!/*/}
      {/*        /!*      <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>*!/*/}
      {/*        /!*    </li>*!/*/}
      {/*        /!*  </ul>*!/*/}
      {/*        </div>*/}
      {/*        <div>*/}
      {/*          <h2 className="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>*/}
      {/*          <ul className="text-gray-500 dark:text-gray-400 font-medium">*/}
      {/*            <li className="mb-4">*/}
      {/*              <a href="#" className="hover:underline">Terms and conditions</a>*/}
      {/*            </li>*/}
      {/*            <li className="mb-4">*/}
      {/*              <a href="#" className="hover:underline">Privacy Policy</a>*/}
      {/*            </li>*/}
      {/*            <li className="mb-4">*/}
      {/*              <a href="#" className="hover:underline">Cookies Policy</a>*/}
      {/*            </li>*/}
      {/*          </ul>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />*/}
      {/*    <div className="sm:flex sm:items-center sm:justify-between">*/}
      {/*      <a href="#" title="" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 mb-2 sm:mb-0">*/}
      {/*        <img className="w-auto h-4" src={logoWhiteImage} alt="" />*/}
      {/*      </a>*/}
      {/*      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">*/}
      {/*        © 2023 Reboost.ai. All rights reserved.*/}
      {/*      </span>*/}
      {/*      /!*<div className="flex mt-4 sm:justify-center sm:mt-0">*!/*/}
      {/*      /!*  <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">*!/*/}
      {/*      /!*    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">*!/*/}
      {/*      /!*      <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>*!/*/}
      {/*      /!*    </svg>*!/*/}
      {/*      /!*    <span className="sr-only">Facebook page</span>*!/*/}
      {/*      /!*  </a>*!/*/}
      {/*      /!*  <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">*!/*/}
      {/*      /!*    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">*!/*/}
      {/*      /!*      <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>*!/*/}
      {/*      /!*    </svg>*!/*/}
      {/*      /!*    <span className="sr-only">Discord community</span>*!/*/}
      {/*      /!*  </a>*!/*/}
      {/*      /!*  <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">*!/*/}
      {/*      /!*    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">*!/*/}
      {/*      /!*      <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>*!/*/}
      {/*      /!*    </svg>*!/*/}
      {/*      /!*    <span className="sr-only">Twitter page</span>*!/*/}
      {/*      /!*  </a>*!/*/}
      {/*      /!*  <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">*!/*/}
      {/*      /!*    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">*!/*/}
      {/*      /!*      <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>*!/*/}
      {/*      /!*    </svg>*!/*/}
      {/*      /!*    <span className="sr-only">GitHub account</span>*!/*/}
      {/*      /!*  </a>*!/*/}
      {/*      /!*  <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">*!/*/}
      {/*      /!*    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">*!/*/}
      {/*      /!*      <path fillRule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>*!/*/}
      {/*      /!*    </svg>*!/*/}
      {/*      /!*    <span className="sr-only">Dribbble account</span>*!/*/}
      {/*      /!*  </a>*!/*/}
      {/*      /!*</div>*!/*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</footer>*/}
    </>
  )
}

export default App
