import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white h-120"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-120">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6 text-gray-300">
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/azylrqeb"
            method="POST"
            className="flex flex-col w-full md:w-1/2 space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-3 bg-gray-900 border-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-3 bg-gray-900 border-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-3 bg-gray-900 border-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            ></textarea>

            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300 hover:shadow-lg transform transition-all ease-in-out">
              Let's Talk
            </button>
          </form>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://wa.me/8335860037" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white duration-300">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
          <a href="https://www.instagram.com/sabujnandan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white duration-300">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.facebook.com/sabujnandan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white duration-300">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
