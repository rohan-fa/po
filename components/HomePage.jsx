import React from "react";

import { MdExpandMore } from "react-icons/md";

import Link from "next/link";

const HomePage = () => {
  return (
    <div id="home" className="h-screen w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center">
        
        <h1 className="uppercase font-bold text-gray-700 text-2xl">
          Rohan Farzana
        </h1>
        <br />
        <p className="text-gray-600 text-xl max-w-sm mx-auto">
          Hi, I am a web developer from Sydney. I enjoy building from small apps to rich interactive web apps. Welcome to my corner of the internet. I'm glad you're here.
        </p>
        <Link href="/#me">
          <div className="group flex items-center justify-center my-6 bg-blue-500 text-white px-5 py-2 font-bold uppercase rounded-md tracking-wider cursor-pointer">
            Get in Touch!
            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
