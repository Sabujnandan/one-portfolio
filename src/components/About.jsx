import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl ">
        Hello! I'm Sabuj Nandan, a dedicated Full Stack Developer with a passion for building robust and efficient web applications. With a strong foundation in technologies such as MongoDB, Express.js, React, and Node.js (MERN), I specialize in creating seamless and responsive user experiences. I am adept at managing data efficiently and implementing secure and scalable backend solutions.
        </p>
        <br />
        <p className="text-xl">
        In addition to my technical skills, I have experience mentoring students in Data Structures and Algorithms (DSA) in C++, helping them overcome challenges and achieve their goals. My problem-solving skills and innovative thinking have been recognized in competitive settings such as the Smart India Hackathon 2023.
        </p>
        <br />
        <p className="text-xl ">
        I hold a degree in Information Technology from Techno Main Salt Lake with a CGPA of 8.66. Over the years, I have worked on various projects, including a full-featured restaurant website, a real-time weather application, and a to-do list app, showcasing my ability to deliver high-quality solutions.
        </p>
      </div>
    </div>
  );
};

export default About;