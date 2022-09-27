import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
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
        <div className="grid grid-cols-2 mx-auto w-0/5 gap-20" >
            <Link href="https://www.linkedin.com/in/rohanfarzana/">
            
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-5 cursor-pointer mt-30">
                <FaLinkedin size={25} />
              </div>
              </Link>
              <Link href="https://github.com/rohan-fa">
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-5 cursor-pointer mt-30">
                <FaGithub size={25} />
              </div>
            </Link>
            </div>
      </div>
    </div>
  );
};

export default HomePage;
