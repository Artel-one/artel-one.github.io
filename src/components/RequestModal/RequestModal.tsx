import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const RequestModal = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) => {
  const [isSuccessSent, setIsSuccessSent] = useState(false);

  const createDemoRequest = ({ name, email, phone }) => {
    const apiURL = "https://artel.one/api/v2/order/profiles";

    console.log({ name, email, phone });

    fetch(apiURL, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        profile_name: name,
        profile_email: email,
        profile_phone: phone,
        company_name: "",
        company_role: "",
      }),
    })
      .then(function (res) {
        console.log(res);

        setIsSuccessSent(true);
      })
      .catch(function (res) {
        console.log(res);
      });
  };

  return (
    <Transition appear show={isVisible} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
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
                      {isSuccessSent ? (
                        <>
                          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                              Thank you for your inquiry!
                            </h2>
                          </div>
                          <div className="mt-4 text-center">
                            We will contact you in 24 hours
                          </div>

                          <div>
                            <button
                              type="button"
                              className="bg-primary mt-6 flex w-full justify-center rounded-md px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                              onClick={() => {
                                onClose();
                                setTimeout(() => {
                                  setIsSuccessSent(false);
                                }, 1000);
                              }}
                            >
                              Close
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                              Request a demo
                            </h2>
                          </div>

                          <form
                            className="space-y-6"
                            action="#"
                            method="POST"
                            onSubmit={(e) => {
                              e.preventDefault();

                              if (!e.target || !e.target.elements) return false;

                              createDemoRequest({
                                name: e.target.elements.name.value,
                                email: e.target.elements.email.value,
                                phone: e.target.elements.phone.value,
                              });
                            }}
                          >
                            <div>
                              <label
                                htmlFor="name"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Name *
                              </label>
                              <div className="mt-2">
                                <input
                                  id="name"
                                  name="name"
                                  type="text"
                                  autoComplete="name"
                                  required
                                  className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Email *
                              </label>
                              <div className="mt-2">
                                <input
                                  id="email"
                                  name="email"
                                  type="email"
                                  autoComplete="email"
                                  required
                                  className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="phone"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Phone *
                              </label>
                              <div className="mt-2">
                                <input
                                  id="phone"
                                  name="phone"
                                  type="text"
                                  autoComplete="phone"
                                  required
                                  className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>

                            <div>
                              <button
                                type="submit"
                                className="bg-primary flex w-full justify-center rounded-md px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                              >
                                Send
                              </button>
                            </div>
                          </form>
                        </>
                      )}

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
  );
};

export default RequestModal;
