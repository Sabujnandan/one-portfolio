import React from "react";
import HeroImage from "../assets/heroImage3.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-47 md:h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
          I'm Sabuj Nandan
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          Hi there! I specialize in developing full-stack applications using technologies like MongoDB, Express.js, React, and Node.js (MERN).I'm known for my problem-solving skills and innovative thinking. Let's build something amazing together!

          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-69%"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;