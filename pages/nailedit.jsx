import React from "react";
import Image from "next/image";
import NailedItImg from "../public/assets/naileditImg/products-1.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

const nailedit = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={NailedItImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">NailedIT</h2>
          <h3>PHP / HTML / CSS / JavaScript</h3>
        </div>
      </div>
      <div className="w-full lg:h-full p-2 sm:pl-20 sm:pr-20 pr-5 pl-5 pb-10">
        <div className="col-span-4">
          <h2 className="py-2">Overview</h2>
          <p>
            NailedIT is my final year project which was focused on the title of
            “How might we use software to promote Remote-Shopping”. This was an
            individual project as part of my dissertation focussing on assisting
            tradespeople to continue working during the COVID-19 lockdowns.
          </p>
          <ul>
            <li>
              This website tracks stock levels of products withiin 3 different
              shops.
            </li>
            <li>
              Users will be able to view products, view which shop each product
              is available, book appointments with trade professionals, order
              products from whichever shop suits them & upload contact details
              if they are looking for work in the form of a 'virtual business
              card'
            </li>
            <li>
              Logged in users will receive 10% discount on products. They will
              also be able to view their orders and bookings.
            </li>
          </ul>
          <br />
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4">Code</button>
        </div>
        <br />
        <div className="col-span-4 md:col-span-1 shadow-sm shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Google API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Zillow API
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="flex justify-center py-12">
          <Link href="/#projects">
            <div className="rounded-full bg-gray-700/80 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineArrowLeft className="text-[#12D670]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default nailedit;
