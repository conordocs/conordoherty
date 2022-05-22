import React from "react";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-[#12D670]">
            Hi, my name is
          </p>
          <h1 className="py-4 text-gray-400">Conor Doherty</h1>
          <p className="py-4 text-gray-300 max-w-[70%] m-auto">
            I have just recently finished studying BSc Computing & Information
            Technologies at Queen’s University Belfast. I am currently working
            as a User Support Technician at Queen’s University Belfast. I wish
            to pursue a career in Software Development & Graphic Design.
          </p>
          <p className="inline-flex align-middle">
            <Link
              activeClass="active"
              href="/#projects"
              smooth={true}
              duration={500}
            >
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#11d670]">
                View Projects
                <span className="group-hover:scale-150 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
