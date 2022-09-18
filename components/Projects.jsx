import React from "react";

import { MdExpandMore } from "react-icons/md";

import ecom from "../public/assets/portfolio/ecom.jpg";
import tic from "../public/assets/portfolio/tic.jpg";
import geo from "../public/assets/portfolio/geo.jpg";
import realestate from "../public/assets/portfolio/realestate.jpg";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Real-Estate-App",
      imageSrc: realestate,
      url: "Real-Estate",
    },
    {
      id: 2,
      title: "Geogusser (Group Project)",
      imageSrc: geo,
      url: "Geogusser ",
    },
    {
      id: 3,
      title: "E-commerce shopping",
      imageSrc: ecom,
      url: "E-commerce shopping",
    },
    {
      id: 4,
      title: "Tic Tac Toe",
      imageSrc: tic,
      url: "Tic Tac Toe",
    },
  ];

  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-4xl tracking-wider uppercase text-blue-500 font-bold pb-16">
          projects
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/project/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 
                  hover:scale-110"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
