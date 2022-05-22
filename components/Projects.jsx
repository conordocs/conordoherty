import React from "react";
import ProjectItem from "../components/ProjectItem";
import NailedItImg from "../public/assets/naileditImg/products-1.png";
import CouchPotatoImg from "../public/assets/couchPotatoImg/homepage.png";
import RealtorImg from "../public/assets/RealtorImg/1.png";
import NetflixImg from "../public/assets/netflixImg/home.PNG";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full lg:h-full p-2 sm:pl-20 sm:pr-20 pr-5 pl-5 sm:pb-20"
    >
      <div className="max-w-[1240px] m-auto items-center">
        <p className="pb-2 uppercase border-b-4 border-[#12D670] text-xl tracking-widest inline-block">
          Projects
        </p>
        <h2 className="py-4">What I specialise in...</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="NailedIT"
            backgroundImg={NailedItImg}
            projectUrl="/nailedit"
            projectType="PHP"
          />
          <ProjectItem
            title="Couch Potato"
            backgroundImg={CouchPotatoImg}
            projectUrl="/couchpotato"
            projectType="PHP"
          />
          <ProjectItem
            title="Realtor"
            backgroundImg={RealtorImg}
            projectUrl="/realtor"
            projectType="React JS"
          />
          <ProjectItem
            title="Netflix"
            backgroundImg={NetflixImg}
            projectUrl="/netflix"
            projectType="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
