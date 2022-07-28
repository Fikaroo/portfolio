import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="pt-10 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark dark:text-white">
        <div className="flex flex-col justify-center items-center mb-6 sm:mb-20">
          <p className="font-general-semibold text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5">
            Follow me
          </p>
          <ul className="flex gap-4 sm:gap-8">
            <a
              href="https://github.com/fikaroo"
              target="__blank"
              className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500"
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
                className="feather feather-github w-5 sm:w-8 h-5 sm:h-8"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://instagram.com/fuadbayramv"
              target="__blank"
              className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500"
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
                className="feather feather-instagram w-5 sm:w-8 h-5 sm:h-8"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </ul>
        </div>
        <div className="flex  justify-center ">
          <div className=" flex flex-wrap text-center justify-center gap-1 text-lg text-ternary-dark dark:text-ternary-light">
            © 2022.
            <p className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500">
              React.js &amp; Tailwind CSS Portfolio
            </p>
            .Developed by
            <p className="text-secondary-dark dark:text-secondary-light hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500">
              Fuad Bayramov
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
