import React from "react";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full lg:h-full p-2 sm:pl-20 sm:pr-20 pr-5 pl-5 pb-20"
    >
      <div className="max-w-[900px] m-auto items-center justify-center">
        <p className="pb-2 uppercase border-b-4 border-[#12D670] text-xl tracking-widest inline-block">
          Contact
        </p>
        <h2 className="py-4 text-xl">
          Fill out the form or email me @{" "}
          <a href="mailto:conordoherty97@hotmail.com">
            conordoherty97@hotmail.com
          </a>
        </h2>
        <div className="items-center justify-center">
          <div className="w-full max-w-[900px] h-auto shadow-sm shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                method="POST"
                action="https://getform.io/f/374caf5f-4c32-4090-9210-b6a848fd416a"
              >
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Name</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 text-gray-500"
                    type="text"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 text-gray-500"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-700 text-gray-500"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300 text-gray-500"
                    rows="10"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full bg-gray-700/80 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#12D670]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
