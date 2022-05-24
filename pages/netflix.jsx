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
import Homepage from "../public/assets/netflixImg/1.PNG";
import Carousel from "../public/assets/netflixImg/2.PNG";
import AddFav from "../public/assets/netflixImg/3.PNG";
import Alert from "../public/assets/netflixImg/4.PNG";
import Categories from "../public/assets/netflixImg/5.PNG";
import SignUp from "../public/assets/netflixImg/6.PNG";
import SignIn from "../public/assets/netflixImg/7.PNG";
import Account from "../public/assets/netflixImg/8.PNG";

const images = [
  Homepage,
  Carousel,
  AddFav,
  Alert,
  Categories,
  SignUp,
  SignIn,
  Account,
];

const netflix = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[20vh] lg:h-[30vh] relative">
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 lg:h-fit sm:pl-14 sm:pr-20 pr-5">
          <h2 className="py-2 pl-5">Netflix</h2>
          <h3 className="pl-5">React JS / API / FireBase / Tailwinds</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 lg:h-full sm:pl-20 sm:pr-20 pr-5 pl-5 pb-20 pt-10 ">
        <div className="col-span-4">
          {/* <p>Project</p> */}
          <h2 className="py-2">Overview</h2>
          <p>
            This project is a duplicate of Netflix, which was created with React
            JS, Firebase and Tailwinds CSS.
          </p>
          <ul className="list-disc pl-10 py-5">
            <li className="pb-1 cursor-auto">
              Users can view TV Shows and Movies which are available to stream
              on Netflix.
            </li>
            <li className="pb-1 cursor-auto">
              Users can create an account and sign into their account.
            </li>
            <li className="pb-1 cursor-auto">
              Logged in users will have the ability to add TV Shows and Movies
              to their 'My Shows' category.
            </li>
            <li className="pb-1 cursor-auto">
              Logged in users will also have the ability to remove these TV
              Shows and Movies from their 'My Shows' category.
            </li>
          </ul>
          <div className="py-5">
            <button className="px-8 py-2 mt-4">
              <a
                href="https://github.com/conordocs/react_netflix"
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
                <RiRadioButtonFill className="pr-1" /> React JS
              </p>
              <p className="text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> API
              </p>
              <p className="text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwinds CSS
              </p>
              <p className="text-gray-400 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> FireBase
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

export default netflix;
