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
import AddShow from "../public/assets/couchPotatoImg/add-show.png";
import AdminHome from "../public/assets/couchPotatoImg/admin-home.png";
import AdminLogin from "../public/assets/couchPotatoImg/admin-login.png";
import EditDelete from "../public/assets/couchPotatoImg/edit-delete-show.png";
import Home from "../public/assets/couchPotatoImg/homepage.png";
import NetflixAwards from "../public/assets/couchPotatoImg/netflix-awards.png";
import PrimeAwards from "../public/assets/couchPotatoImg/prime-awards.png";
import Reviews from "../public/assets/couchPotatoImg/reviews.png";
import ShowDetails from "../public/assets/couchPotatoImg/show-details.png";
import ShowSearch from "../public/assets/couchPotatoImg/show-search.png";
import UserLogin from "../public/assets/couchPotatoImg/user-login.png";
import Watchlist from "../public/assets/couchPotatoImg/watchlist.png";

const images = [
  AddShow,
  AdminHome,
  AdminLogin,
  EditDelete,
  Home,
  NetflixAwards,
  PrimeAwards,
  Reviews,
  ShowDetails,
  ShowSearch,
  UserLogin,
  Watchlist,
];

const couchpotato = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[20vh] lg:h-[30vh] relative">
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 lg:h-fit sm:pl-14 sm:pr-20 pr-5">
          <h2 className="py-2 pl-5">Couch Potato</h2>
          <h3 className="pl-5">PHP / HTML / JavaScript / CSS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 lg:h-full sm:pl-20 sm:pr-20 pr-5 pl-5 pb-20 pt-10 ">
        <div className="col-span-4">
          {/* <p>Project</p> */}
          <h2 className="py-2">Overview</h2>
          <p>
            Couch Potato is a project which I have worked on in my own time. It
            is created on the same idea of IMDb or Rotten Tomatoes.
          </p>
          <ul className="list-disc pl-10 py-5">
            <li className="pb-1 cursor-auto">
              A website where a user can log in and view TV Shows ratings, where
              to stream, user reviews - (similar to IMDb)
            </li>
            <li className="pb-1 cursor-auto">
              Users of this website will be able to search for tv show, read
              star ratings, view awards, view overall imdb/rotten tomatoes
              score, which streaming services they can stream the show on.
            </li>
            <li className="pb-1 cursor-auto">
              Logged in users will have the ability to write star ratings &
              add/delete shows to their watchlist.
            </li>
            <li className="pb-1 cursor-auto">
              Admin side will have the ability to add, edit and delete different
              shows from the database.
            </li>
          </ul>
          <div className="py-5">
            <button className="px-8 py-2 mt-4">
              <a
                href="https://github.com/conordocs/couchpotato"
                target="_blank"
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

export default couchpotato;
