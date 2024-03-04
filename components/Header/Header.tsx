import React, { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  const [navbar, setNavbar] = useState(false);
  
  return (
    // <div className="container mx-auto flex flex-col flex-wrap items-center px-5 py-8 md:flex-row">
    //   <Link href="/" className="text-xl font-bold uppercase md:text-2xl">
    //     Next14 Boilerplate
    //   </Link>

    //   <nav className="body-font mt-2 flex flex-wrap items-center justify-center text-base font-medium md:ml-auto md:mt-0">
    //     {/* <Link href="/" className="mr-5 text-sm font-semibold uppercase leading-tight">
    //       home
    //     </Link> */}

    //     <Link href="/" className="mr-5 text-sm font-semibold uppercase leading-tight">
    //       Products
    //     </Link>
    //   </nav>
    // </div>
  // );
  
    <div>
    
      <nav className="w-full bg-white-800 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
             <Image src="/icons/svg/logo.svg" width="150" height="150" alt="" />
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white bg-indigo-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white bg-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-black">
                  <Link href="/">
                    Home
                  </Link>
                </li>
                <li className="text-black">
                  <Link href="/blogs">
                  About
                  </Link>
                </li>
                <li className="text-black">
                  <Link href="/about">
                    Products
                  </Link>
                </li>
                <li className="text-black">
                  <Link href="/contact">
                  Resources
                  </Link>
                </li>
                <li className="text-black">
                  <Link href="/contact">
                  Demo
                  </Link>
                </li>
                  <li className="text-black">
                  <div
            className="w-[137px]
h-[50px]
rounded
bg-gradient-to-r from-sky-300 to-indigo-600

flex justify-center
text-white
"
          >
            <button>Take the Tour</button>
          </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* <div className="flex justify-center items-center mt-8">
        <h1 className="text-2xl font-bold text-purple-500">
          Create Responsive Navbar Menu in Next js with Tailwind CSS
        </h1>
      </div> */}
    </div>
  );
};

export default Header;
