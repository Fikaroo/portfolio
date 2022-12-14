import { useState } from "react";
import logo from "../assets/logo.svg";
import logo_white from "../assets/logo_white.svg";
import hero from "../assets/hero_img.svg";
import herodark from "../assets/hero-dark.svg";
import cv from "../files/FuadBayramov-Resume.pdf";
const Nav = () => {
  const [isDark, setDark] = useState(false);
  const darkMode = () => {
    setDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <nav className="flex items-center justify-between">
        <div className="flex justify-center items-center">
          {isDark ? (
            <img className="w-36" src={logo_white} alt="" draggable="false" />
          ) : (
            <img className="w-36" src={logo} alt="" draggable="false" />
          )}
        </div>
        {/* <div className="hidden text-lg font-medium sm:flex justify-center md:pr-16 w-full">
        <ul className="flex space-x-8 md:space-x-24">
          <li className="hover:text-indigo-500"><Link to="/projects">Projects</Link></li>
          <li className="hover:text-indigo-500"><Link to="/aboutme">About Me</Link></li>
          <li className="hover:text-indigo-500"><Link to="/contact">Contact</Link></li>
        </ul>
      </div> */}

        <div className="flex items-center">
          <label
            className="swap swap-rotate h-10 w-10 bg-base-200 rounded-lg hover:bg-base-300"
            onChange={darkMode}
          >
            <input type="checkbox" />
            <svg
              className="swap-on fill-current w-5 h-"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg
              className="swap-off fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </nav>
      <div className="flex items-center ">
        <div className="w-full md:w-1/3 text-left">
          <h1 className="text-3xl md:text-3xl xl:text-4xl text-center sm:text-left dark:text-white">
            Hi, l'am Fuad
          </h1>
          <p className="font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400">
            A Full-Stack Developer &amp; Design Enthusiast
          </p>
          <div className="flex justify-center sm:block">
            <a
              href={cv}
              download
              className="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-arrow-down-circle ml-0 sm:ml-1 mr-2 sm:mr-3 w-5 sm:w-6 duration-100"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="8 12 12 16 16 12"></polyline>
                <line x1="12" y1="8" x2="12" y2="16"></line>
              </svg>
              <span className="text-sm sm:text-lg font-general-medium duration-100">
                Download CV
              </span>
            </a>
          </div>
        </div>
        <div className="w-full md:w-2/3 text-right float-right">
          {isDark ? (
            <img className="w-auto" src={herodark} alt="" />
          ) : (<img className="w-auto" src={hero} alt="" />
            
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
