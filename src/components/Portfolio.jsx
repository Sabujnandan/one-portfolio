import React from "react";
import food from "../assets/portfolio/food.png";
import weather from "../assets/portfolio/weather.png";
import todo from "../assets/portfolio/Todo.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: food,
      href1:"https://food-del-frontend-ey89.onrender.com/",
      href2:"https://github.com/Sabujnandan/food-del",

    },
    {
      id: 2,
      src: weather,
      href1:"/",
      href2:"https://github.com/Sabujnandan/WeatherApp",
    },
    {
      id: 3,
      src: todo,
      href1:"/",
      href2:"https://github.com/Sabujnandan/TodoApp",
    },

  ];

  return (
    <div
      name="projects"
      className=" h-150 w-full bg-gradient-to-b from-gray-800 to-black  text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-150">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src , href1 , href2 }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center ">
                <a className="flex items-center justify-center" href={href1!="/" && href1 } target="_blank" rel="noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 flex items-center justify-center">
                  Demo
                </button>
                </a>
                <a className="flex items-center justify-center" href={href2} target="_blank" rel="noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 flex items-center justify-center">
                  Code
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;