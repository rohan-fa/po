import Link from "next/link";
import React from "react";

import { MdExpandMore } from "react-icons/md";

const AboutMe = () => {
  return (
    <div id="me" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-5xl tracking-wider uppercase text-blue-500 font-bold pb-16">
          About Me
        </h2>

        <div className="shadow-xl shadow-blue-300 my-8 px-8">
        <h1 className="py-4 max-w-2xl mx-auto">
          Hi, my name is Rohan
        </h1>
          <p className="py-4 max-w-2xl mx-auto">
          I am a software engineer curious to understand how things operate, observe, and I want to focus on learning different frameworks, processes, or implementations. I have an engineering background with professional experience in the textile industry as a maintenance engineer. 
          </p>
          <p className="py-4 max-w-2xl mx-auto">
          I bring valuable transferrable skills to turn disorganized environments into smooth-running operations, assess product installation and parts replacements and sometimes lead manufacturing processes. I always worked in a team. Working together helped me research more and have more time to think of other options. In addition, working in a group helped me to improve my analytical thinking. 
          </p>
          <p className="py-4 max-w-2xl mx-auto">
          As I transition my career into Software Engineering, I look to bring these skills across, combined with the full-stack technical skills learned from General Assembly, to be a creative, collaborative, self-motivated Software Engineer.
          </p>
        </div>

        <div className="flex items-center justify-center gap-10">
          <Link href="https://drive.google.com/file/d/16HCMo3DWiK3rSZawTdhmCGx1kUev18sq/view?usp=sharing" download={true}>
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              resume
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
