import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl shadow-gray-700 z-[100] pr-10 pl-10"
          : "fixed w-full h-20 z-[100] pr-10 pl-10"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            className="hover:cursor-pointer"
            src="/../public/assets/logo.png"
            alt="logo"
            height="50"
            width="88"
          />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-white/20" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#0a1e2f] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  className="hover:cursor-pointer"
                  src="/../public/assets/logo.png"
                  alt="logo"
                  height="40"
                  width="70"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-110 ease-in duration-250 hover:text-[#12D670]"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-400 my-4">
              <p className="w-[85%] md:w-[90%] py-4">Check out my portfolio</p>
            </div>
          </div>

          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/#about">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/#skills">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/#projects">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/#contact">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#12D670]">
                Check out my links
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-110 ease-in duration-250 hover:text-[#12D670]">
                  <FaLinkedin />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-110 ease-in duration-250 hover:text-[#12D670]">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-110 ease-in duration-250 hover:text-[#12D670]">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer hover:scale-110 ease-in duration-250 hover:text-[#12D670]">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-200 bg-gray-400/60 p-4">
            {/* eslint-disable-next-line */}
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/conor-doherty-101/"
              target="_blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-200 bg-gray-400/60 p-4">
            {/* eslint-disable-next-line */}
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/conordocs?tab=repositories"
              target="_blank"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-200 bg-gray-400/60 p-4">
            {/* eslint-disable-next-line */}
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:conordoherty97@hotmail.com"
              target="_blank"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-200 bg-gray-400/60 p-4">
            {/* eslint-disable-next-line */}
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/../public/assets/Conor Doherty - CV.pdf"
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
