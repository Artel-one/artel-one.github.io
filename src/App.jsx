import { useState } from "react";
import "./App.css";
import "@fontsource/plus-jakarta-sans"; // Defaults to weight 400
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import cookie from "cookiejs";
import * as React from "react";
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
    </div>
  );
}

export default App;
