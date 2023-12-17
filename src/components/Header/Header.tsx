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
import { XMarkIcon } from '@heroicons/react/24/outline'
import cookie from 'cookiejs'

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

  return (
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
                <a href="#" title="" onClick={openModal} className="px-5 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-prime border border-transparent rounded-xl hover:opacity-90 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                  Request demo
                </a>
              </div>
            </div>
          </div>
        </header>
    </div>
  )
}

export default App
