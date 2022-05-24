import React from "react";
import Image from "next/image";
import Link from "next/link";
// Carousel
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
// Icons
import { RiRadioButtonFill } from "react-icons/ri";
import { AiOutlineArrowLeft } from "react-icons/ai";
// Images
import NailedItImg from "../public/assets/naileditImg/products-1.png";
import Appointment from "../public/assets/naileditImg/appointment-1.png";
import FAQ from "../public/assets/naileditImg/faq-1.png";
import Jobs from "../public/assets/naileditImg/jobs-1.png";
import Login from "../public/assets/naileditImg/login-1.png";
import Orders from "../public/assets/naileditImg/orders-1.png";
import Reviews from "../public/assets/naileditImg/reviews-1-1.png";
import Reviews2 from "../public/assets/naileditImg/reviews-2.png";
import Shops from "../public/assets/naileditImg/shops-1.png";
import Tool from "../public/assets/naileditImg/tool-1.png";

const images = [
  Appointment,
  FAQ,
  Jobs,
  Login,
  Orders,
  NailedItImg,
  Reviews,
  Reviews2,
  Shops,
  Tool,
];

const nailedit = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[20vh] lg:h-[30vh] relative">
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 lg:h-fit sm:pl-14 sm:pr-20 pr-5">
          <h2 className="py-2 pl-5">NailedIT</h2>
          <h3 className="pl-5">PHP / HTML / JavaScript / CSS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 lg:h-full sm:pl-20 sm:pr-20 pr-5 pl-5 pb-20 pt-10 ">
        <div className="col-span-4">
          {/* <p>Project</p> */}
          <h2 className="py-2">Overview</h2>
          <p>
            NailedIT is my final year project which was focused on the title of
            “How might we use software to promote Remote-Shopping”. This was an
            individual project as part of my dissertation focussing on assisting
            tradespeople to continue working during the COVID-19 lockdowns.
          </p>
          <ul className="list-disc pl-10 py-5">
            <li className="pb-1 cursor-auto">
              This website tracks stock levels of products withiin 3 different
              shops.
            </li>
            <li className="pb-1 cursor-auto">
              Users will be able to view products, view which shop each product
              is available, book appointments with trade professionals, order
              products from whichever shop suits them and upload contact details
              if they are looking for work in the form of a `virtual business
              card`
            </li>
            <li className="pb-1 cursor-auto">
              Logged in users will receive 10% discount on products. They will
              also be able to view their orders and bookings.
            </li>
          </ul>
          <div className="py-5">
            <button className="px-8 py-2 mt-4">
              <a
                href="https://github.com/conordocs/nailedit"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </button>
          </div>
        </div>
        <div className="h-fit col-span-4 md:col-span-1 shadow-md shadow-gray-700 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p className="text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> PHP
              </p>
              <p className="text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Bootstrap
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1000px] m-auto p-2 pt-8 sm:pl-10 sm:pr-10 pr-5 pl-5">
        <p className="pb-2 uppercase border-b-4 border-[#12D670] text-xl tracking-widest inline-block mb-5">
          Screenshots
        </p>
        <Zoom scale={0.4}>
          {images.map((each, index) => (
            <Image key={index} style={{ width: "100%" }} src={each} alt=" " />
          ))}
        </Zoom>
      </div>
      <div className="flex justify-center py-12">
        <Link href="/#projects">
          <div className="rounded-full bg-gray-700/80 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <AiOutlineArrowLeft className="text-[#12D670]" size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default nailedit;
