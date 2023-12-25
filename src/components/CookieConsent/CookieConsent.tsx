import * as React from "react";

const CookieConsent = ({
  onAgree,
  onDisagree,
}: {
  onAgree: () => void;
  onDisagree: () => void;
}) => {
  return (
    <div className="fixed inset-x-5 bottom-10 mx-auto flex max-w-screen-lg flex-wrap items-center justify-center gap-4 rounded-lg bg-white p-5 text-center drop-shadow-2xl md:flex-nowrap md:justify-between md:text-left">
      <div className="w-full">
        By clicking “Allow Cookies” you agree to our website′s cookie use as
        described in our{" "}
        <a href="#" className="whitespace-nowrap text-prime hover:underline">
          Cookies Policy
        </a>
        .
      </div>
      <div className="flex flex-shrink-0 items-center gap-4">
        <button
          className="text-primary hover:underline focus:outline-none"
          onClick={onDisagree}
        >
          Decline
        </button>
        <button
          className="bg-primary rounded-md px-5 py-2 text-white hover:opacity-95 focus:outline-none"
          onClick={onAgree}
        >
          Allow Cookies
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
