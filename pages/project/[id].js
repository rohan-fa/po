import React from "react";
import realestate from "../../public/assets/portfolio/realestate.jpg";
import ecom from "../../public/assets/portfolio/ecom.jpg";
import geo from "../../public/assets/portfolio/geo.jpg";
import tic from "../../public/assets/portfolio/tic.jpg";

import { FaGithub } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Real-Estate-App",
    imageSrc: realestate,
    url: "Real_Estate",
    Description: "Real estate website visitors can easily filter their searches by type, location, price, and other predefined and custom criteria.",
    // skills: "Next.js,  Chakra-UI,  React.js,  Supabase",
    link1: "https://real-estate-app-eosin.vercel.app/",
    link2: "https://github.com/rohan-fa/real-estate-app",
    
  },
  {
    id: 2,
    title: "GeoGuessr (Group Project)",
    imageSrc: geo,
    url: "GeoGuessr",
    Description: "the game is you are place randomly across anywhere in the world in google street view and you basically guess where you are. Once you make that guess you'll gain points based on how close you are to the correct location.",
    // skills: "React.js, Supabase, Tailwind.css",
    link1: "https://geowhere.netlify.app/",
    link2: "https://github.com/rohan-fa/project2-client",
  },
  {
    id: 3,
    title: "E-commerce shopping",
    imageSrc: ecom,
    url: "E_commerce_shopping",
    Description: "A Web application platform that allows users to choose the products and shop",
    //skills: "Ruby on Rails, HTML, CSS, JavaScript, JQuery, Bootstrap",
    link1: "https://shoplify-with-me.herokuapp.com/",
    link2: "https://github.com/rohan-fa/project1",
  },
  {
    id: 4,
    title: "Tic Tac Toe",
    imageSrc: tic,
    url: "Tic_Tac_Toe",
    Description: "This is human vs human game play. The result is displaying after if the match draw and if the match won by any of the player, the winner is displayed.",
    // skills: "HTML, CSS, JavaScript, JQuery",
    link1: "https://rohan-fa.github.io/project00/",
    link2: "https://github.com/rohan-fa/project00",
  },
];

const getProjectFrom = (url) => projects.filter((p) => p.url === url)[0];

export async function getStaticPaths() {
  const paths = projects.map((p) => ({
    params: { id: p.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = getProjectFrom(params.id);

  return {
    props: { project },
  };
}

const OneProject = ({project: {title, imageSrc, Description, link2, link1 }}) => {
  return (
    <div className="h-fit w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
        <div className="flex">
          <Link href="/#projects">
            <div className="flex items-center justify-center my-8 text-indigo-500 font-bold capitalize cursor-pointer">
              <BiChevronLeft size={25} /> back
            </div>
          </Link>
        </div>
        <h1 className="capitalize text-4xl mt-2 mb-8 text-center md:text-left font-bold text-blue-500 tracking-wider">
          {title}
        </h1>
        <div className="relative w-96 h-56 mx-auto overflow-hidden my-8">
          <Image src={imageSrc} alt="bla" layout="fill" objectFit="cover" />
        </div>
        <p className="py-4 max-w-5xl mx-auto">
          {Description}
        </p>
        {/* <h2 className="text-center mx-auto font-bold">
          {skills}
        </h2> */}
       
        
        <div className="flex items-center justify-center gap-10">
        <Link href={link1}>
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              demo
              <span className="duration-200 ease-in">
                <AiOutlineCaretRight size={18} className="ml-2" />
              </span>
            </div>
            </Link>
            
            <Link href={link2}>
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              github
              <span className="duration-200 ease-in">
                <FaGithub size={18} className="ml-2" />
              </span>
            </div>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default OneProject;
